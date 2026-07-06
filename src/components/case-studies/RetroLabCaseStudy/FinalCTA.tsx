import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 text-center relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-8 max-w-2xl mx-auto"
      >
        <span className="font-mono text-xs text-[#E34A53] uppercase tracking-widest">End of Case Study</span>
        <h3 className="font-display text-4xl md:text-5xl font-bold text-[#FAF6EE]">Interested in how it works?</h3>
        <p className="text-[#FAF6EE]/70 font-light text-lg">
          Dive into the source code or explore the live demo to experience RetroLab for yourself.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <a href="https://github.com/zaid1234-11/retrolab" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-[#E34A53] hover:bg-[#FAF6EE] text-[#FAF6EE] hover:text-[#162127] px-8 py-4 rounded-full transition-all duration-300 font-mono text-xs uppercase tracking-widest font-bold w-full sm:w-auto">
            Explore Live Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="https://github.com/zaid1234-11/retrolab" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full transition-all duration-300 font-mono text-xs uppercase tracking-widest w-full sm:w-auto text-[#FAF6EE]">
            <Github className="w-4 h-4 text-[#E34A53]" />
            View Source
          </a>
        </div>
      </motion.div>
    </section>
  );
}
