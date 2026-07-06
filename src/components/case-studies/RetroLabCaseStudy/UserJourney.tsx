import React from 'react';
import { Upload, Sliders, SplitSquareHorizontal, Download, Share2, Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  { icon: Search, label: 'Discover', desc: 'Find the tool' },
  { icon: Upload, label: 'Upload', desc: 'Local image' },
  { icon: Sliders, label: 'Experiment', desc: 'Apply filters' },
  { icon: SplitSquareHorizontal, label: 'Compare', desc: 'Before/After' },
  { icon: Download, label: 'Export', desc: 'Save PNG/JPG' },
  { icon: Share2, label: 'Share', desc: 'Show artwork' },
];

export default function UserJourney() {
  return (
    <section className="py-12 border-y border-white/5 relative">
      {/* Terminal divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.1),rgba(255,255,255,0.1)_4px,transparent_4px,transparent_8px)]"></div>
      
      <h3 className="font-display text-2xl font-bold mb-12 text-[#FAF6EE]">User Journey</h3>
      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent hidden md:block"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 relative z-10">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#0d1418] border border-white/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-[#E34A53] group-hover:shadow-[0_0_15px_rgba(227,74,83,0.3)] relative">
                <step.icon className="w-6 h-6 text-[#FAF6EE]/70 group-hover:text-[#E34A53] transition-colors" />
                
                {/* Next Arrow (Desktop) */}
                {idx < steps.length - 1 && (
                  <div className="absolute -right-[calc(50%+1rem)] top-1/2 -translate-y-1/2 hidden md:block text-white/20">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
              <span className="font-mono text-xs text-[#FAF6EE] uppercase mb-1">{step.label}</span>
              <span className="text-[10px] text-[#FAF6EE]/50 font-light">{step.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Terminal divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.1),rgba(255,255,255,0.1)_4px,transparent_4px,transparent_8px)]"></div>
    </section>
  );
}
