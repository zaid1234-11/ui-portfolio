import React from 'react';
import { Smartphone, Tablet, Monitor } from 'lucide-react';

export default function ResponsiveExperience() {
  return (
    <section className="py-12 relative">
      <h3 className="font-display text-3xl font-bold mb-8 text-center">Responsive by Default</h3>
      
      <div className="flex flex-col md:flex-row justify-center items-end gap-8 mt-16 max-w-4xl mx-auto">
        {/* Mobile */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-28 h-56 border-[4px] border-black/20 rounded-2xl bg-white relative overflow-hidden group hover:border-[#E34A53]/50 transition-colors">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-transparent rounded-full"></div>
            <div className="absolute inset-x-2 top-6 bottom-2 border border-black/10 rounded overflow-hidden">
              <img src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover filter grayscale sepia-[0.5]" alt="Mobile preview" />
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#1c1c1b]/70">
            <Smartphone className="w-3 h-3" /> Mobile
          </div>
        </div>

        {/* Tablet */}
        <div className="flex flex-col items-center gap-4 hidden sm:flex">
          <div className="w-56 h-72 border-[4px] border-black/20 rounded-2xl bg-white relative overflow-hidden group hover:border-[#E34A53]/50 transition-colors">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-transparent rounded-full"></div>
            <div className="absolute inset-x-2 top-6 bottom-2 border border-black/10 rounded overflow-hidden">
              <img src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover filter grayscale sepia-[0.5]" alt="Tablet preview" />
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#1c1c1b]/70">
            <Tablet className="w-3 h-3" /> Tablet
          </div>
        </div>

        {/* Desktop */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-80 h-56 border-[4px] border-black/20 rounded-xl bg-white relative overflow-hidden group hover:border-[#E34A53]/50 transition-colors">
             <div className="absolute inset-x-2 top-2 bottom-2 border border-black/10 rounded overflow-hidden flex flex-row">
                <div className="w-16 border-r border-black/10 bg-transparent"></div>
                <img src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=800&auto=format&fit=crop" className="flex-1 h-full object-cover filter grayscale sepia-[0.5]" alt="Desktop preview" />
             </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#1c1c1b]/70">
            <Monitor className="w-3 h-3" /> Desktop
          </div>
        </div>
      </div>
    </section>
  );
}
