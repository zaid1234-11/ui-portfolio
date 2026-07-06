import React from 'react';

export default function Challenges() {
  return (
    <section className="py-12">
      <h3 className="font-display text-3xl font-bold mb-8">Technical Challenges</h3>
      
      <div className="space-y-8">
        {[
          { problem: 'Canvas Performance Drop', solution: 'Implemented RequestAnimationFrame loops decoupled from React state updates.', outcome: 'Achieved locked 60fps on processing.' },
          { problem: 'ImageData Memory Leaks', solution: 'Reused a single offscreen canvas buffer for intermediate processing steps.', outcome: 'Reduced memory footprint by 80%.' }
        ].map((card, i) => (
          <div key={i} className="flex flex-col md:flex-row bg-white border border-black/10 rounded-xl overflow-hidden shadow-lg">
            <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-black/10">
              <span className="font-mono text-[9px] text-[#E34A53] uppercase mb-2 block tracking-widest">Problem</span>
              <p className="text-sm text-[#1c1c1b] leading-relaxed">{card.problem}</p>
            </div>
            <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-black/10 bg-black/5">
              <span className="font-mono text-[9px] text-[#1c1c1b]/50 uppercase mb-2 block tracking-widest">Solution</span>
              <p className="text-sm text-[#1c1c1b]/80 leading-relaxed">{card.solution}</p>
            </div>
            <div className="flex-1 p-6 bg-black/5">
              <span className="font-mono text-[9px] text-green-400 uppercase mb-2 block tracking-widest">Outcome</span>
              <p className="text-sm text-[#1c1c1b] leading-relaxed">{card.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
