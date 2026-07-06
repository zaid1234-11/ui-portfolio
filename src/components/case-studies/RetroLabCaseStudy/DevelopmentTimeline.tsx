import React from 'react';
import { motion } from 'framer-motion';

export default function DevelopmentTimeline() {
  const weeks = [
    { wk: 'Week 1', title: 'Research & Canvas', desc: 'Benchmarked various approaches to per-pixel manipulation in JS.' },
    { wk: 'Week 2', title: 'Processing Engine', desc: 'Built the core pipeline utilizing Web Workers for intensive algorithms.' },
    { wk: 'Week 3', title: 'UI & Animations', desc: 'Implemented the RetroLab OS interface with Framer Motion.' },
    { wk: 'Week 4', title: 'Optimization', desc: 'Refactored buffer reuse logic to achieve consistent 60fps.' },
    { wk: 'Week 5', title: 'Responsive Polish', desc: 'Ensured mobile and tablet experiences matched desktop fidelity.' },
    { wk: 'Week 6', title: 'Deploy & Test', desc: 'Cross-browser testing and final Vercel deployment.' },
  ];

  return (
    <section className="py-12">
      <h3 className="font-display text-3xl font-bold mb-12">Development Timeline</h3>
      
      <div className="relative">
        <div className="absolute top-4 left-4 right-4 h-0.5 bg-white/10 hidden md:block"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 relative z-10">
          {weeks.map((week, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-start md:items-center relative"
            >
              <div className="w-8 h-8 rounded-full bg-[#162127] border-2 border-[#E34A53] flex items-center justify-center mb-4 z-10 shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#E34A53]"></div>
              </div>
              <div className="text-left md:text-center">
                <span className="font-mono text-xs text-[#E34A53] uppercase mb-1 block">{week.wk}</span>
                <h4 className="font-mono text-[10px] text-[#FAF6EE] uppercase tracking-widest mb-2 leading-tight">{week.title}</h4>
                <p className="text-[10px] text-[#FAF6EE]/50 font-light leading-relaxed">{week.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
