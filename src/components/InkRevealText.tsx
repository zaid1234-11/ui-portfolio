import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';

interface InkRevealTextProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  id: string;
}

export default function InkRevealText({
  children,
  delay = 0.2,
  duration = 1.8,
  id,
}: InkRevealTextProps) {
  const [isMounted, setIsMounted] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track pen nib coordinates during animation
  const [nibPos, setNibPos] = useState({ x: 0, y: 0 });
  const [showNib, setShowNib] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !pathRef.current) return;

    const path = pathRef.current;
    let animFrameId: number;
    let startTime: number | null = null;
    
    const startMs = delay * 1000;
    const durationMs = duration * 1000;

    const animateNib = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed < startMs) {
        // Not started yet, keep nib at beginning
        try {
          const pt = path.getPointAtLength(0);
          setNibPos({ x: pt.x, y: pt.y });
          setShowNib(true);
        } catch (e) {}
      } else {
        const progress = Math.min((elapsed - startMs) / durationMs, 1);
        try {
          const totalLength = path.getTotalLength();
          // Cubic ease-out-like progress mapping
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentLength = totalLength * easeProgress;
          const pt = path.getPointAtLength(currentLength);
          
          setNibPos({ x: pt.x, y: pt.y });
          
          if (progress >= 1) {
            // Fade out the pen nib slightly after completion
            setTimeout(() => setShowNib(false), 300);
            return;
          }
        } catch (e) {}
      }

      animFrameId = requestAnimationFrame(animateNib);
    };

    animFrameId = requestAnimationFrame(animateNib);
    return () => cancelAnimationFrame(animFrameId);
  }, [isMounted, delay, duration]);

  if (!isMounted) {
    return <div className="opacity-0">{children}</div>;
  }

  const maskId = `ink-reveal-mask-${id}`;
  const filterId = `ink-bleed-filter-${id}`;

  return (
    <div ref={containerRef} className="relative inline-block w-full">
      {/* 1. Hidden SVG defining the Mask & Organic Displacement Filter */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          {/* Authentic ink bleed displacement map using noise */}
          <filter id={filterId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="9"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Mask Definition */}
          <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="150">
            {/* Start fully black (hidden) */}
            <rect width="1000" height="150" fill="black" />
            
            {/* Animated white path that brushes open the mask */}
            <motion.path
              ref={pathRef}
              // Horizontal sweep from left to right covering the full height
              d="M -20,75 C 200,60 400,90 1020,75"
              fill="none"
              stroke="white"
              strokeWidth="150" // Extra thick to fully cover responsive heights
              strokeLinecap="round"
              strokeLinejoin="round"
              filter={`url(#${filterId})`}
              initial={{ strokeDasharray: 1100, strokeDashoffset: 1100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{
                delay,
                duration,
                ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier for a physical brush acceleration
              }}
            />
          </mask>
        </defs>
      </svg>

      {/* 2. Responsive Masked HTML Element */}
      <div
        style={{
          maskImage: `url(#${maskId})`,
          WebkitMaskImage: `url(#${maskId})`,
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
        }}
        className="w-full relative z-10"
      >
        {children}
      </div>

      {/* 3. Glowing Pen Nib / Fountain Pen Ink Lead effect */}
      {showNib && (
        <div
          className="absolute inset-0 pointer-events-none z-20 overflow-hidden"
          style={{ width: '100%', height: '100%' }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1000 150"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <motion.g
              animate={{
                x: nibPos.x,
                y: nibPos.y,
              }}
              transition={{ type: 'tween', ease: 'linear', duration: 0 }}
            >
              {/* Dynamic physical gold fountain-pen tip indicator */}
              <circle r="4" fill="#B8925A" className="shadow-lg animate-pulse" />
              <circle r="1.5" fill="#1c1c1b" />
              
              {/* Splatter of ink aura */}
              <circle
                r="10"
                stroke="#B8925A"
                strokeWidth="0.5"
                fill="none"
                className="animate-ping"
                style={{ animationDuration: '1.5s' }}
              />
            </motion.g>
          </svg>
        </div>
      )}
    </div>
  );
}
