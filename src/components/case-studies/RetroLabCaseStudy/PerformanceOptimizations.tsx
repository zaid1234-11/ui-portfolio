import React from 'react';
import { motion } from 'framer-motion';

export default function PerformanceOptimizations() {
  return (
    <section className="py-12">
      <h3 className="font-display text-3xl font-bold mb-8">Performance Optimizations</h3>
      
      <div className="space-y-6">
        {[
          { title: 'Buffer Reuse', desc: 'Instead of creating new ImageData objects for every frame, existing buffers are modified in-place to prevent garbage collection spikes.' },
          { title: 'Memory Management', desc: 'Strict allocation limits ensure the browser tab doesn\'t crash on high-resolution inputs.' },
          { title: 'Rendering Pipeline', desc: 'Separated UI state updates from Canvas rendering cycles to maintain 60fps.' },
          { title: 'Export Speed', desc: 'Nearest-neighbor scaling is calculated directly rather than relying on slow DOM-to-Image libraries.' }
        ].map((opt, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border-l-2 border-[#E34A53] pl-6 py-2"
          >
            <h4 className="font-mono text-sm text-[#E34A53] uppercase mb-2">{opt.title}</h4>
            <p className="text-[#FAF6EE]/70 font-light text-sm max-w-2xl">{opt.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
