import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export default function Problem() {
  return (
    <section className="py-12 space-y-12">
      <div className="text-center">
        <h3 className="font-mono text-xs tracking-[0.2em] text-[#B8925A] uppercase mb-4">The Problem</h3>
        <h2 className="font-display text-3xl font-bold text-[#1c1c1b]">From Clutter to Clarity</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Old Dashboard representation */}
        <div className="bg-stone-100/50 border border-stone-200 p-8 rounded-2xl flex flex-col items-center justify-center space-y-6 aspect-[4/3] grayscale opacity-70">
          <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-stone-300 rounded-xl relative overflow-hidden">
             {/* Abstract wireframe of bad dashboard */}
             <div className="absolute inset-4 grid grid-cols-3 gap-2 opacity-30">
               {[...Array(9)].map((_, i) => (
                 <div key={i} className="bg-stone-300 rounded"></div>
               ))}
             </div>
             <XCircle className="w-12 h-12 text-red-900/50 z-10" />
          </div>
          <div className="space-y-2 text-center w-full">
            <p className="font-mono text-xs text-stone-500 uppercase flex items-center justify-center gap-2">
               <XCircle className="w-3 h-3"/> Too many charts
            </p>
            <p className="font-mono text-xs text-stone-500 uppercase flex items-center justify-center gap-2">
               <XCircle className="w-3 h-3"/> No hierarchy
            </p>
            <p className="font-mono text-xs text-stone-500 uppercase flex items-center justify-center gap-2">
               <XCircle className="w-3 h-3"/> Difficult decisions
            </p>
          </div>
        </div>

        {/* SalesSphere representation */}
        <div className="bg-[#1c1c1b] border border-[#B8925A]/30 p-8 rounded-2xl flex flex-col items-center justify-center space-y-6 aspect-[4/3] shadow-xl">
          <div className="w-full h-full flex items-center justify-center border border-white/5 rounded-xl relative overflow-hidden bg-white/5">
             {/* Abstract wireframe of good dashboard */}
             <div className="absolute inset-4 flex flex-col gap-4 opacity-50">
               <div className="h-1/4 bg-[#B8925A]/20 rounded"></div>
               <div className="flex-1 flex gap-4">
                 <div className="flex-[2] bg-[#B8925A]/20 rounded"></div>
                 <div className="flex-1 bg-[#B8925A]/20 rounded"></div>
               </div>
             </div>
             <CheckCircle2 className="w-12 h-12 text-[#3FA96B] z-10" />
          </div>
          <div className="space-y-2 text-center w-full">
            <p className="font-mono text-xs text-[#FAF6EE] uppercase flex items-center justify-center gap-2">
               <CheckCircle2 className="w-3 h-3 text-[#3FA96B]"/> Clear hierarchy
            </p>
            <p className="font-mono text-xs text-[#FAF6EE] uppercase flex items-center justify-center gap-2">
               <CheckCircle2 className="w-3 h-3 text-[#3FA96B]"/> Interactive exploration
            </p>
            <p className="font-mono text-xs text-[#FAF6EE] uppercase flex items-center justify-center gap-2">
               <CheckCircle2 className="w-3 h-3 text-[#3FA96B]"/> Actionable insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
