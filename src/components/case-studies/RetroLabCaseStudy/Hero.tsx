import React from 'react';
import { Play, Code, MousePointerClick } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-24">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#E34A53]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="space-y-4">
            <span className="font-mono text-xs text-[#E34A53] tracking-[0.2em] uppercase">Creative Toolkit</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">RetroLab</h1>
            <p className="text-lg text-[#1c1c1b]/70 font-light leading-relaxed max-w-md">
              A real-time browser-based retro image processing lab for pixel art, dithering, glitch effects, and CRT aesthetics.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://retro-lab-pixel-art.vercel.app" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-[#1c1c1b] hover:bg-[#E34A53] text-[#FAF6EE] hover:text-[#FAF6EE] px-8 py-4 rounded-full transition-all duration-300 font-mono text-xs uppercase tracking-widest font-bold">
              <Play className="w-4 h-4 fill-current" />
              Live Demo
            </a>
            <a href="https://github.com/zaid1234-11/retro-lab-pixel-art" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-black/5 hover:bg-black/10 border border-black/10 px-8 py-4 rounded-full transition-all duration-300 font-mono text-xs uppercase tracking-widest text-[#1c1c1b]">
              <Code className="w-4 h-4 text-[#E34A53]" />
              Source Code
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 relative group perspective-1000"
        >
          {/* Animated interactive mockup container */}
          <div className="relative rounded-xl border border-black/10 bg-white p-2 shadow-2xl overflow-hidden transform transition-transform duration-700 hover:rotate-y-2 hover:rotate-x-2">
            
            {/* RGB split effect on hover (simulated via drop shadow) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[2px_0_0_rgba(255,0,0,0.5),-2px_0_0_rgba(0,255,255,0.5)]"></div>

            <div className="w-full aspect-[16/10] bg-[#1a262c] rounded overflow-hidden relative">
              {/* Realistic App Screenshot */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <img 
                  src="/projects/pixel lab/hero page.png" 
                  alt="RetroLab App Interface"
                  className="w-full h-full object-cover transition-all duration-[3000ms] group-hover:scale-105"
                />
                {/* CRT Scanlines Overlay matching the real app */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] pointer-events-none z-10"></div>
              </div>

              {/* Cursor Interaction Hint */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/10 backdrop-blur-sm border border-black/20 p-3 rounded-full animate-bounce">
                  <MousePointerClick className="w-5 h-5 text-[#1c1c1b]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
