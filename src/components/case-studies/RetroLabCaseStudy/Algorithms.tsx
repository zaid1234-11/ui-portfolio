import React from 'react';

export default function Algorithms() {
  return (
    <section className="py-12 relative">
      {/* Terminal divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.1),rgba(0,0,0,0.1)_4px,transparent_4px,transparent_8px)]"></div>
      
      <h3 className="font-display text-3xl font-bold mb-8 pt-8">Algorithms</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { name: 'Floyd-Steinberg', code: 'Error diffusion across adjacent pixels.', active: true },
          { name: 'Bayer Matrix', code: 'Ordered dithering using threshold maps.', active: false },
          { name: 'Halftone', code: 'CMYK dot size variation simulation.', active: false },
          { name: 'Pixel Sorting', code: 'Threshold-based pixel displacement.', active: false }
        ].map((algo, i) => (
          <div key={i} className="bg-white border border-black/10 p-6 rounded-xl flex items-center justify-between group cursor-default hover:border-[#E34A53]/50 transition-colors">
            <div>
              <h4 className="font-mono text-sm text-[#1c1c1b] mb-1">{algo.name}</h4>
              <p className="text-xs text-[#1c1c1b]/50">{algo.code}</p>
            </div>
            {/* Visual indicator of "running" algorithm */}
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <div className={`w-2 h-2 rounded-sm ${algo.active ? 'bg-[#E34A53] animate-pulse' : 'bg-black/10 group-hover:bg-[#E34A53]/40'}`}></div>
                <div className={`w-2 h-2 rounded-sm ${algo.active ? 'bg-black/80' : 'bg-black/10 group-hover:bg-black/40'}`}></div>
                <div className={`w-2 h-2 rounded-sm ${algo.active ? 'bg-[#E34A53]' : 'bg-black/10 group-hover:bg-[#E34A53]/40'}`}></div>
              </div>
              <div className="flex gap-1">
                <div className={`w-2 h-2 rounded-sm ${algo.active ? 'bg-black/80' : 'bg-black/10 group-hover:bg-black/40'}`}></div>
                <div className={`w-2 h-2 rounded-sm ${algo.active ? 'bg-black/40' : 'bg-black/10 group-hover:bg-transparent'}`}></div>
                <div className={`w-2 h-2 rounded-sm ${algo.active ? 'bg-black/80' : 'bg-black/10 group-hover:bg-black/40'}`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Terminal divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.1),rgba(0,0,0,0.1)_4px,transparent_4px,transparent_8px)]"></div>
    </section>
  );
}
