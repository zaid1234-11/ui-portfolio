import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { label: 'Real-time Previews', desc: 'Instant visual feedback' },
  { label: 'Client-side Processing', desc: 'Zero server latency' },
  { label: 'Offline-first', desc: 'Works without internet' },
  { label: 'No Server Uploads', desc: 'Total privacy' },
  { label: 'Optimized Rendering', desc: '60fps architecture' },
];

export default function Performance() {
  return (
    <section className="py-16 my-12 border-y border-white/10 relative bg-black/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center mb-12 px-6">
        <h3 className="font-display text-3xl font-bold mb-4">Performance by Design</h3>
        <p className="text-[#FAF6EE]/70 font-light">
          Instead of listing arbitrary numbers, here are the architectural guarantees of RetroLab.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto px-6">
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-[#0d1418] border border-[#E34A53]/30 px-6 py-5 rounded-xl flex flex-col items-center text-center shadow-[0_0_15px_rgba(227,74,83,0.1)] hover:shadow-[0_0_25px_rgba(227,74,83,0.2)] transition-shadow duration-300 flex-1 min-w-[200px]"
          >
            <span className="font-mono text-sm text-[#E34A53] mb-2 font-bold leading-tight">{metric.label}</span>
            <span className="text-[10px] text-[#FAF6EE]/60 uppercase tracking-wider">{metric.desc}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
