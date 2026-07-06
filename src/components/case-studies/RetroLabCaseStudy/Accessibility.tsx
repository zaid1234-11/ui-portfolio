import React from 'react';
import { motion } from 'framer-motion';

export default function Accessibility() {
  const items = [
    'Keyboard navigation',
    'Visible focus states',
    'Screen reader labels',
    'High contrast UI',
    'Touch targets ≥44px',
    'Reduced motion support'
  ];

  return (
    <section className="py-12 my-12 bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl">
      {/* Background pattern */}
      <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
        <svg width="300" height="300" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <h3 className="font-display text-3xl font-bold mb-4 relative z-10">Accessibility Included</h3>
      <p className="text-[#FAF6EE]/70 mb-8 max-w-2xl font-light relative z-10">Creative tools shouldn't exclude users. RetroLab is built with inclusive design patterns from day one.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="w-5 h-5 rounded-full bg-[#E34A53]/20 flex items-center justify-center shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#E34A53]"></div>
            </div>
            <span className="font-mono text-sm text-[#FAF6EE]">{item}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
