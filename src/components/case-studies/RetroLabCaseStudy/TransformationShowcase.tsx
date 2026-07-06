import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TransformationShowcase() {
  const [step, setStep] = useState(0); // 0: Upload, 1: Processing, 2: Result

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h3 className="font-display text-3xl font-bold">Transformation</h3>
        <div className="flex gap-2">
          {['Original', 'Process', 'Result'].map((label, idx) => (
            <button
              key={idx}
              onClick={() => setStep(idx)}
              className={`font-mono text-[10px] uppercase px-4 py-2 rounded-full border transition-all ${
                step === idx 
                  ? 'bg-[#E34A53] text-[#FAF6EE] border-[#E34A53]' 
                  : 'bg-[#0d1418] text-[#FAF6EE]/50 border-white/10 hover:border-white/30'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] bg-[#0d1418] rounded-xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer" onClick={() => setStep((s) => (s + 1) % 3)}>
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div 
              key="original"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Original" />
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded font-mono text-xs border border-white/20">1. Original Image</div>
            </motion.div>
          )}
          {step === 1 && (
            <motion.div 
              key="processing"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-[#162127] flex flex-col items-center justify-center gap-6"
            >
              <div className="w-64 h-3 bg-black rounded-full overflow-hidden border border-white/10">
                <motion.div className="h-full bg-[#E34A53]" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2, repeat: Infinity }} />
              </div>
              <div className="font-mono text-xs text-[#E34A53] animate-pulse uppercase tracking-widest">Applying_Filters...</div>
            </motion.div>
          )}
          {step === 2 && (
            <motion.div 
              key="result"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover filter contrast-[1.5] sepia-[0.8] hue-rotate-[180deg] grayscale-[0.8]" alt="Result" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] pointer-events-none"></div>
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded font-mono text-xs border border-[#E34A53] text-[#E34A53]">2. Retro Output</div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] bg-black/50 px-3 py-1.5 rounded-full border border-white/10 text-white/50 tracking-widest uppercase pointer-events-none">
          Click to advance flow
        </div>
      </div>
    </section>
  );
}
