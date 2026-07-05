import React from 'react';
import { motion } from 'motion/react';

export default function Preloader() {
  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '-100%', opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1c1c1b] overflow-hidden"
    >
      {/* Skeleton Header Area */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center opacity-40">
        <div className="w-16 h-6 bg-[#FAF6EE]/10 rounded-sm animate-pulse" />
        <div className="hidden md:flex gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-20 h-4 bg-[#FAF6EE]/10 rounded-sm animate-pulse" />
          ))}
        </div>
        <div className="w-24 h-10 bg-[#FAF6EE]/10 rounded-full animate-pulse" />
      </div>

      {/* Skeleton Hero Content */}
      <div className="flex flex-col items-center justify-center gap-6 mt-12 opacity-50">
        {/* Large Text Block */}
        <div className="w-[60vw] md:w-[40vw] h-[10vw] max-h-[120px] bg-[#FAF6EE]/10 rounded-sm animate-pulse" />
        {/* Smaller Subtitle Blocks */}
        <div className="w-[80vw] md:w-[60vw] h-6 bg-[#FAF6EE]/10 rounded-sm animate-pulse" />
        <div className="w-[70vw] md:w-[50vw] h-6 bg-[#FAF6EE]/10 rounded-sm animate-pulse" />
      </div>

      {/* Loader indicator */}
      <div className="absolute bottom-12 flex flex-col items-center gap-3 opacity-60">
        <div className="font-mono text-[9px] text-[#FAF6EE] tracking-[0.2em] uppercase">
          Compiling Assets...
        </div>
        <div className="w-32 h-[1px] bg-[#FAF6EE]/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#B8925A]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, ease: "circInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
