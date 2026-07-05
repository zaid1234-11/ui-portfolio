import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Strategy() {
  return (
    <section className="py-12 space-y-12">
      <div className="text-center">
        <h3 className="font-mono text-xs tracking-[0.2em] text-[#B8925A] uppercase mb-4">Product Strategy</h3>
        <h2 className="font-display text-3xl font-bold text-[#1c1c1b]">From Question to Feature</h2>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Path 1 */}
        <div className="flex flex-col items-center">
          <div className="bg-stone-100 border border-stone-200 p-6 rounded-xl w-full text-center">
            <span className="font-mono text-xs uppercase text-stone-500">Business Question</span>
            <p className="font-display text-lg font-bold text-[#1c1c1b] mt-2">How much revenue?</p>
          </div>
          <ArrowDown className="w-5 h-5 text-stone-300 my-3" />
          <div className="bg-stone-100 border border-stone-200 p-6 rounded-xl w-full text-center">
            <span className="font-mono text-xs uppercase text-stone-500">Feature</span>
            <p className="font-display text-lg font-bold text-[#1c1c1b] mt-2">Revenue Trend</p>
          </div>
          <ArrowDown className="w-5 h-5 text-[#B8925A] my-3" />
          <div className="bg-[#1c1c1b] border border-[#B8925A]/30 p-6 rounded-xl w-full text-center shadow-lg">
            <span className="font-mono text-xs uppercase text-[#FAF6EE]/60">Screen</span>
            <p className="font-display text-lg font-bold text-[#B8925A] mt-2">Revenue Dashboard</p>
          </div>
        </div>

        {/* Path 2 */}
        <div className="flex flex-col items-center md:mt-12">
          <div className="bg-stone-100 border border-stone-200 p-6 rounded-xl w-full text-center">
            <span className="font-mono text-xs uppercase text-stone-500">Business Question</span>
            <p className="font-display text-lg font-bold text-[#1c1c1b] mt-2">Which products?</p>
          </div>
          <ArrowDown className="w-5 h-5 text-stone-300 my-3" />
          <div className="bg-stone-100 border border-stone-200 p-6 rounded-xl w-full text-center">
            <span className="font-mono text-xs uppercase text-stone-500">Feature</span>
            <p className="font-display text-lg font-bold text-[#1c1c1b] mt-2">Top Performers</p>
          </div>
          <ArrowDown className="w-5 h-5 text-[#B8925A] my-3" />
          <div className="bg-[#1c1c1b] border border-[#B8925A]/30 p-6 rounded-xl w-full text-center shadow-lg">
            <span className="font-mono text-xs uppercase text-[#FAF6EE]/60">Screen</span>
            <p className="font-display text-lg font-bold text-[#B8925A] mt-2">Product Analytics</p>
          </div>
        </div>

        {/* Path 3 */}
        <div className="flex flex-col items-center md:mt-24">
          <div className="bg-stone-100 border border-stone-200 p-6 rounded-xl w-full text-center">
            <span className="font-mono text-xs uppercase text-stone-500">Business Question</span>
            <p className="font-display text-lg font-bold text-[#1c1c1b] mt-2">What do we do?</p>
          </div>
          <ArrowDown className="w-5 h-5 text-stone-300 my-3" />
          <div className="bg-stone-100 border border-stone-200 p-6 rounded-xl w-full text-center">
            <span className="font-mono text-xs uppercase text-stone-500">Feature</span>
            <p className="font-display text-lg font-bold text-[#1c1c1b] mt-2">AI Recommendations</p>
          </div>
          <ArrowDown className="w-5 h-5 text-[#B8925A] my-3" />
          <div className="bg-[#1c1c1b] border border-[#B8925A]/30 p-6 rounded-xl w-full text-center shadow-lg">
            <span className="font-mono text-xs uppercase text-[#FAF6EE]/60">Screen</span>
            <p className="font-display text-lg font-bold text-[#B8925A] mt-2">Business Insights</p>
          </div>
        </div>

      </div>
    </section>
  );
}
