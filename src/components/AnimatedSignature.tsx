import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';

export default function AnimatedSignature() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  
  // Triggers only when scrolled into view
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  const [hasTriggered, setHasTriggered] = useState(false);
  
  // Track dynamic fountain pen nib coordinate
  const [nibPos, setNibPos] = useState({ x: 15, y: 55 });
  const [showNib, setShowNib] = useState(false);

  // Exquisite custom hand-sketched calligraphy signature path for "Alex Vance"
  // Beautifully designed continuous cursive curves with a huge physical underline flourish at the end.
  const signaturePath = 
    "M 18,52 " +
    "C 22,25 35,15 42,42 " + // 'A' upward loop
    "C 45,68 32,82 28,58 " + // 'A' loop descent & crossover
    "C 24,35 52,38 60,52 " + // Crossover bridge to 'l'
    "C 68,68 76,18 78,35 " + // C'l' ascent loop & descend
    "C 80,52 74,70 82,70 " + // 'l' turn-up to 'e'
    "C 88,70 94,48 100,52 " + // 'e' cursive loop
    "C 106,56 100,68 106,68 " + // 'e' exit transition to 'x'
    "C 112,68 118,52 122,58 " + // 'x' loop
    "C 126,64 122,70 128,70 " + // 'x' exit transition to 'V'
    "C 138,40 148,22 148,42 " + // 'V' bold upward strike
    "C 148,65 134,84 130,84 " + // 'V' dip descent
    "C 126,84 138,58 152,54 " + // 'V' cross exit to 'a'
    "C 162,50 156,68 162,66 " + // 'a' loop
    "C 168,64 172,52 176,55 " + // 'n' curve 1
    "C 180,58 178,68 182,66 " + // 'n' curve 2
    "C 186,64 192,52 196,55 " + // 'c' loop
    "C 200,58 196,68 202,66 " + // 'c' exit to 'e'
    "C 208,62 214,48 218,55 " + // 'e' cursive loop
    "C 222,62 215,70 225,65 " + // 'e' flourish lift
    "C 240,48 245,35 250,42 " + // underline entry loop
    "C 255,48 235,92 165,95 " + // grand underline sweeping back left
    "C 95,98 35,92 15,82";      // graceful fade out on the left paper margin

  useEffect(() => {
    if (isInView && !hasTriggered) {
      setHasTriggered(true);
      setShowNib(true);
    }
  }, [isInView, hasTriggered]);

  useEffect(() => {
    if (!hasTriggered || !pathRef.current) return;

    const path = pathRef.current;
    let animFrameId: number;
    let startTime: number | null = null;
    const duration = 2200; // 2.2 seconds elegant writing duration

    const animateNib = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      try {
        const totalLength = path.getTotalLength();
        // Dynamic pen acceleration profile: slow start, swift letters, decelerating final flourish underline
        const easeProgress = progress < 0.7 
          ? progress * 1.15 // Writing the letters with direct pacing
          : 0.805 + (1 - Math.pow(1 - (progress - 0.7) / 0.3, 3)) * 0.195; // Flourish sweep decelerating elegantly

        const currentLength = totalLength * easeProgress;
        const pt = path.getPointAtLength(currentLength);
        
        setNibPos({ x: pt.x, y: pt.y });

        if (progress >= 1) {
          // Slowly hide the pen tip 400ms after drawing completes
          setTimeout(() => setShowNib(false), 400);
          return;
        }
      } catch (e) {
        // Safe fallback if path is momentarily uncalculated
      }

      animFrameId = requestAnimationFrame(animateNib);
    };

    animFrameId = requestAnimationFrame(animateNib);
    return () => cancelAnimationFrame(animFrameId);
  }, [hasTriggered]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-[280px] h-[110px] select-none pointer-events-none mt-4 md:mt-6"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 280 110"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Authentic ink bleed displacement map using noise */}
          <filter id="sig-ink-bleed" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.06"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2.2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>

        {/* Shadow placeholder / faint dry-imprint sketch line */}
        <path
          d={signaturePath}
          fill="none"
          stroke="#4E4842"
          strokeWidth="1"
          opacity="0.04"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Real-time Ink-Drawn Signature Path */}
        <motion.path
          ref={pathRef}
          d={signaturePath}
          fill="none"
          stroke="#1c1c1b"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#sig-ink-bleed)"
          initial={{ strokeDasharray: 950, strokeDashoffset: 950 }}
          animate={hasTriggered ? { strokeDashoffset: 0 } : { strokeDashoffset: 950 }}
          transition={{
            duration: 2.2,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="opacity-90"
        />

        {/* Animated Fountain Pen Gold Tip / Nib */}
        {showNib && (
          <g transform={`translate(${nibPos.x}, ${nibPos.y})`}>
            {/* Ink drop halo */}
            <circle
              r="7.5"
              fill="none"
              stroke="#B8925A"
              strokeWidth="0.5"
              className="animate-ping"
              style={{ animationDuration: '1.2s' }}
            />
            {/* Outer gold casing */}
            <circle r="3" fill="#B8925A" className="shadow-sm" />
            {/* Core graphite point */}
            <circle r="1" fill="#1c1c1b" />
          </g>
        )}
      </svg>
    </div>
  );
}
