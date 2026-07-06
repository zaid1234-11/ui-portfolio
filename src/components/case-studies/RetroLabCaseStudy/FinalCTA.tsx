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
        <h3 className="font-display text-4xl md:text-5xl font-bold text-[#1c1c1b]">Interested in how it works?</h3>
        <p className="text-[#1c1c1b]/70 font-light text-lg">
          Dive into the source code or explore the live demo to experience RetroLab for yourself.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <a href="https://retro-lab-pixel-art.vercel.app" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-[#E34A53] hover:bg-[#1c1c1b] text-[#FAF6EE] hover:text-[#FAF6EE] px-8 py-4 rounded-full transition-all duration-300 font-mono text-xs uppercase tracking-widest font-bold w-full sm:w-auto">
            Explore Live Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="https://github.com/zaid1234-11/retro-lab-pixel-art" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-black/5 hover:bg-black/10 border border-black/10 px-8 py-4 rounded-full transition-all duration-300 font-mono text-xs uppercase tracking-widest w-full sm:w-auto text-[#1c1c1b]">
            <Github className="w-4 h-4 text-[#E34A53]" />
            View Source
          </a>
        </div>
      </motion.div>
    </section>
  );
}
