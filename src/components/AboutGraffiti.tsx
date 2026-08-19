import React from 'react';
import { motion } from 'motion/react';

interface AboutGraffitiProps {
  className?: string;
  scrollProgress?: any;
}

export default function AboutGraffiti({ className = '' }: AboutGraffitiProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none select-none z-15 ${className}`}>
      
      {/* 1. Graffiti Crown above the About Me title */}
      <motion.div
        animate={{ y: [0, -4, 0], rotate: [-8, -4, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 left-2 xs:left-8 w-12 h-10 text-[#B8925A]"
      >
        <svg viewBox="0 0 60 45" className="w-full h-full fill-none stroke-current stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          {/* 3-Point Graffiti Basquiat / Street Crown */}
          <path d="M 6 38 L 12 12 L 28 26 L 46 8 L 52 38 Z" />
          <line x1="8" y1="40" x2="50" y2="40" className="stroke-[3]" />
          <circle cx="12" cy="8" r="2.5" className="fill-current stroke-none" />
          <circle cx="28" cy="22" r="2.5" className="fill-current stroke-none" />
          <circle cx="46" cy="4" r="2.5" className="fill-current stroke-none" />
        </svg>
      </motion.div>

      {/* 2. "SPIN ME" Hand-drawn Curving Graffiti Arrow pointing to the Vinyl */}
      <motion.div
        animate={{ x: [0, 3, 0], y: [0, -2, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        className="absolute -top-12 right-2 xs:right-8 sm:right-16 flex flex-col items-end text-[#8C7A65] dark:text-[#C5A880]"
      >
        <div className="flex items-center gap-1.5 font-display text-[9.5px] font-black tracking-wider uppercase rotate-6 bg-[#EFE6D6]/80 dark:bg-[#1E1B18]/80 backdrop-blur-xs px-2 py-0.5 rounded-sm border border-[#B8925A]/30 shadow-xs">
          <span>SPIN ME</span>
          <span className="text-[#B8925A]">↺</span>
        </div>
        {/* Curving Loop Arrow SVG */}
        <svg viewBox="0 0 60 40" className="w-12 h-8 text-[#B8925A] stroke-current stroke-[2] fill-none -mt-1 -mr-1">
          <path d="M 45 4 Q 25 15 30 32" strokeLinecap="round" />
          <path d="M 24 26 L 30 33 L 37 28" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* 3. Hand-drawn Graffiti Sparkles & Star Bursts in the Mid Space */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 text-[#1c1c1b] dark:text-[#FAF6EE]"
      >
        <svg viewBox="0 0 40 40" className="w-full h-full fill-none stroke-current stroke-[2]">
          {/* 4-point Sparkle */}
          <path d="M 20 2 Q 20 20 38 20 Q 20 20 20 38 Q 20 20 2 20 Q 20 20 20 2 Z" className="fill-[#B8925A]/20" />
        </svg>
      </motion.div>

      {/* 4. Mini Street-Art Crosshairs (+) and Dots */}
      <div className="absolute top-2 left-6 text-[#B8925A]/80 font-mono text-[11px] font-bold tracking-widest">
        + +
      </div>
      <div className="absolute -top-6 right-24 text-[#8C7A65]/70 dark:text-[#C5A880]/70 font-mono text-[9px] tracking-widest font-black">
        ✕ ✕
      </div>

      {/* 5. Hand-sketched Street Smiley Doodle */}
      <motion.div
        animate={{ rotate: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 right-6 w-9 h-9 text-[#B8925A]"
      >
        <svg viewBox="0 0 40 40" className="w-full h-full fill-none stroke-current stroke-[2]" strokeLinecap="round">
          {/* Sketched circle */}
          <circle cx="20" cy="20" r="16" strokeDasharray="3 2" className="opacity-80" />
          {/* X Eyes */}
          <line x1="12" y1="14" x2="16" y2="18" />
          <line x1="16" y1="14" x2="12" y2="18" />
          <line x1="24" y1="14" x2="28" y2="18" />
          <line x1="28" y1="14" x2="24" y2="18" />
          {/* Smirk Smile */}
          <path d="M 14 26 Q 20 31 27 25" />
        </svg>
      </motion.div>

      {/* 6. Felt-tip Musical Scribble */}
      <motion.div
        animate={{ y: [0, -3, 0], x: [0, 2, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-4 left-14 text-[#1c1c1b] dark:text-[#FAF6EE] opacity-80"
      >
        <svg viewBox="0 0 30 25" className="w-6 h-5 stroke-current stroke-[2] fill-none" strokeLinecap="round">
          {/* Double musical note */}
          <circle cx="7" cy="18" r="3.5" className="fill-current" />
          <circle cx="21" cy="14" r="3.5" className="fill-current" />
          <line x1="10.5" y1="18" x2="10.5" y2="5" />
          <line x1="24.5" y1="14" x2="24.5" y2="2" />
          <line x1="10.5" y1="5" x2="24.5" y2="2" className="stroke-[3]" />
        </svg>
      </motion.div>

      {/* 7. Sound Wave Drips / Squiggle */}
      <div className="absolute -top-1 left-28 w-16 h-3 text-[#B8925A] opacity-70">
        <svg viewBox="0 0 70 12" className="w-full h-full stroke-current stroke-[1.8] fill-none" strokeLinecap="round">
          <path d="M 2 6 Q 8 1 14 6 T 26 6 T 38 6 T 50 6 T 62 6" />
        </svg>
      </div>

    </div>
  );
}
