import React from 'react';

export default function BehindTheDecisions() {
  return (
    <section className="py-12 space-y-12">
      <div className="text-center">
        <h3 className="font-mono text-xs tracking-[0.2em] text-[#B8925A] uppercase mb-4">Behind the Decisions</h3>
        <h2 className="font-display text-3xl font-bold text-[#1c1c1b]">Why These Choices?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        
        <div className="space-y-6">
          <div className="bg-[#1c1c1b] p-6 rounded-2xl border border-[#B8925A]/20">
            <h4 className="font-display text-xl font-bold text-[#FAF6EE] mb-4">Revenue Trend</h4>
            
            <div className="space-y-4">
              <div>
                <span className="font-mono text-[10px] text-[#B8925A] uppercase tracking-widest">Why Line Chart?</span>
                <p className="text-[#FAF6EE]/80 text-sm mt-1 leading-relaxed">Users need to compare changes over time rapidly.</p>
              </div>
              
              <div>
                <span className="font-mono text-[10px] text-[#B8925A] uppercase tracking-widest">Why not Bar Chart?</span>
                <p className="text-[#FAF6EE]/80 text-sm mt-1 leading-relaxed">Trend perception is significantly better with continuous lines than discrete bars for temporal data.</p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-[#B8925A] uppercase tracking-widest">Why Top Placement?</span>
                <p className="text-[#FAF6EE]/80 text-sm mt-1 leading-relaxed">It represents the highest business priority.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
           <div className="bg-stone-100 p-6 rounded-2xl border border-stone-200">
            <h4 className="font-display text-xl font-bold text-[#1c1c1b] mb-4">Data Density</h4>
            
            <div className="space-y-4">
              <div>
                <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">Why Not More Charts?</span>
                <p className="text-stone-700 text-sm mt-1 leading-relaxed">Adding more charts dilutes focus. We prioritized actionable metrics over vanity visualizations.</p>
              </div>
              
              <div>
                <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">Why Pagination vs Infinite Scroll?</span>
                <p className="text-stone-700 text-sm mt-1 leading-relaxed">For the data tables, infinite scroll breaks footer access. Virtualized pagination offers the best performance without losing spatial awareness.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
