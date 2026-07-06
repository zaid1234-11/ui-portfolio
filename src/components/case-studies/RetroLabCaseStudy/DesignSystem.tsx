import React from 'react';
import { motion } from 'framer-motion';

export default function DesignSystem() {
  return (
    <section className="py-12">
      <h3 className="font-display text-3xl font-bold mb-12">Design System</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Colors */}
        <div className="lg:col-span-5 space-y-6">
          <h4 className="font-mono text-xs uppercase tracking-widest text-white/50">Color Palette</h4>
          <div className="space-y-4">
            {[
              { name: 'Graphite', hex: '#162127', class: 'bg-[#162127]', text: 'text-white' },
              { name: 'Coal', hex: '#0d1418', class: 'bg-[#0d1418]', text: 'text-white' },
              { name: 'Accent Crimson', hex: '#E34A53', class: 'bg-[#E34A53]', text: 'text-white' },
              { name: 'Warm Cream', hex: '#FAF6EE', class: 'bg-[#FAF6EE]', text: 'text-[#0d1418]' },
            ].map((color, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center justify-between p-5 rounded-xl border border-white/10 ${color.class}`}
              >
                <span className={`font-display font-medium ${color.text}`}>{color.name}</span>
                <span className={`font-mono text-[10px] ${color.text} opacity-70`}>{color.hex}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Typography & UI Components */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/50">Typography</h4>
            <div className="bg-[#0d1418] border border-white/10 rounded-xl p-8 space-y-8">
              <div>
                <span className="font-mono text-[9px] text-[#E34A53] uppercase mb-2 block">Space Grotesk / Headings</span>
                <h1 className="font-display text-4xl">RetroLab Canvas</h1>
              </div>
              <div>
                <span className="font-mono text-[9px] text-[#E34A53] uppercase mb-2 block">Inter / Body</span>
                <p className="text-base text-white/70">A seamless blending of modern web technologies with nostalgic visual rendering.</p>
              </div>
              <div>
                <span className="font-mono text-[9px] text-[#E34A53] uppercase mb-2 block">JetBrains Mono / Code & Labels</span>
                <p className="font-mono text-xs">function applyDither(buffer: Uint8ClampedArray)</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/50">UI Components</h4>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#E34A53] hover:bg-white text-white hover:text-black font-mono text-xs px-6 py-3 rounded-full transition-colors uppercase tracking-widest">Primary Action</button>
              <button className="bg-transparent border border-white/20 hover:border-white text-white font-mono text-xs px-6 py-3 rounded-full transition-colors uppercase tracking-widest">Secondary</button>
              <div className="bg-[#162127] border border-white/10 px-4 py-2 rounded-lg flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-mono text-[10px] uppercase text-white/70">Status Ready</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
