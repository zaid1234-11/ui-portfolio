import React from 'react';
import { Search, PenTool, Layout, Layers } from 'lucide-react';

export default function DesignProcess() {
  const phases = [
    { icon: Search, title: 'Research & Inspiration', desc: 'Analyzing classic Macintosh interfaces, 90s terminal OS aesthetics, and physical CRT monitors to capture the authentic feel.' },
    { icon: PenTool, title: 'Wireframing', desc: 'Mapping out the user journey and control panels to ensure the image canvas remains the primary focus of the UI.' },
    { icon: Layout, title: 'Visual Exploration', desc: 'Iterating on color palettes (Graphite & Crimson) and typography (Space Grotesk & JetBrains Mono) to balance modern usability with retro vibes.' },
    { icon: Layers, title: 'Final Interface', desc: 'Componentizing the design system into reusable React blocks and implementing Framer Motion micro-interactions.' },
  ];

  return (
    <section className="py-12 border-y border-black/5 relative mt-12">
       {/* Terminal divider top */}
       <div className="absolute top-0 left-0 right-0 h-px bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.1),rgba(0,0,0,0.1)_4px,transparent_4px,transparent_8px)]"></div>
       
      <h3 className="font-display text-3xl font-bold mb-12 pt-8">Design Process</h3>
      
      <div className="relative">
        <div className="absolute left-6 top-8 bottom-8 w-px bg-black/10 hidden md:block"></div>
        
        <div className="space-y-12">
          {phases.map((phase, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 relative">
              <div className="md:w-12 md:shrink-0 flex justify-center z-10">
                <div className="w-12 h-12 rounded-full bg-white border border-black/20 flex items-center justify-center">
                  <phase.icon className="w-5 h-5 text-[#E34A53]" />
                </div>
              </div>
              <div className="flex-1 bg-black/5 border border-black/5 p-6 rounded-xl hover:border-black/10 transition-colors shadow-lg">
                <h4 className="font-mono text-sm text-[#1c1c1b] uppercase tracking-widest mb-2">{phase.title}</h4>
                <p className="text-sm text-[#1c1c1b]/60 leading-relaxed font-light">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

       {/* Terminal divider bottom */}
       <div className="absolute bottom-0 left-0 right-0 h-px bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.1),rgba(0,0,0,0.1)_4px,transparent_4px,transparent_8px)]"></div>
    </section>
  );
}
