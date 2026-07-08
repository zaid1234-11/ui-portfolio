import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';

export default function AnimatedSignature() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Triggers only when scrolled into view
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  const [hasTriggered, setHasTriggered] = useState(false);
  
  useEffect(() => {
    if (isInView && !hasTriggered) {
      setHasTriggered(true);
    }
  }, [isInView, hasTriggered]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full max-w-[280px] h-[110px] select-none pointer-events-none mt-4 md:mt-6 flex items-center justify-start"
    >
      {/* Hidden SVG to define the ink bleed filter */}
      <svg width="0" height="0" className="absolute">
        <defs>
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
      </svg>

      {/* Shadow placeholder / faint dry-imprint sketch line */}
      <div className="absolute inset-0 opacity-[0.06] grayscale contrast-200 brightness-0">
        <img 
          src="/signature.png" 
          alt="Signature Shadow" 
          className="w-full h-full object-contain object-left"
        />
      </div>

      {/* Real-time Ink-Drawn Signature Reveal */}
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={hasTriggered ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
        transition={{
          duration: 6.5,
          ease: [0.25, 1, 0.5, 1], // Same elegant deceleration as before
        }}
        style={{ filter: 'url(#sig-ink-bleed)' }}
      >
        <img 
          src="/signature.png" 
          alt="Signature" 
          className="w-full h-full object-contain object-left opacity-90"
        />
      </motion.div>
    </div>
  );
}
