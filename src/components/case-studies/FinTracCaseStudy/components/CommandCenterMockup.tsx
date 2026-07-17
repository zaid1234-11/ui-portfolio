import React from 'react';
import { Target, Activity, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';

export function CommandCenterMockup() {
  return (
    <div className="w-full max-w-lg mx-auto bg-[#0A1118] rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative font-sans">
      {/* Header */}
      <header className="px-6 pt-8 pb-4">
        <h3 className="text-white font-display text-xl font-bold">Good Morning, Alex</h3>
        <p className="text-white/60 text-sm mt-1">Here is your financial forecast.</p>
      </header>

      <div className="px-6 space-y-6 pb-8">
        {/* Health Score */}
        <div className="flex items-center justify-between bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-lg">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
               <Activity className="w-5 h-5 text-teal-400" />
             </div>
             <div>
                <div className="text-sm text-white/50 font-medium">Financial Health</div>
                <div className="text-white font-bold text-lg">On Track</div>
             </div>
           </div>
           <div className="text-right">
             <div className="text-2xl font-bold text-teal-400">88<span className="text-sm text-teal-400/50">/100</span></div>
           </div>
        </div>

        {/* Hero Recommendation (High Elevation) */}
        <div className="relative bg-gradient-to-b from-[#14b8a6]/20 to-[#14b8a6]/5 border border-[#14b8a6]/30 rounded-2xl p-6 shadow-[0_8px_32px_rgba(20,184,166,0.15)] backdrop-blur-xl transform transition-transform hover:-translate-y-1">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Target className="w-16 h-16 text-[#14b8a6]" />
          </div>
          <div className="relative z-10">
             <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#14b8a6]/20 text-[#14b8a6] text-[10px] uppercase font-bold tracking-widest mb-4">
               High Impact
             </div>
             <h4 className="text-white font-display text-xl font-bold mb-2">Redirect $50/mo to Emergency Fund</h4>
             <p className="text-white/70 text-sm leading-relaxed mb-6">
               You haven't used Netflix or Hulu in 3 months. Canceling them pushes your Emergency Goal completion up by 2 months.
             </p>
             <button className="w-full flex items-center justify-center gap-2 bg-[#14b8a6] text-[#0A1118] font-bold py-3 px-4 rounded-xl hover:bg-teal-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
               Review Subscriptions <ArrowRight className="w-4 h-4" />
             </button>
          </div>
        </div>

        {/* Goals Snapshot */}
        <div className="space-y-4">
           <h5 className="text-white/80 font-bold text-sm px-1">Goal Snapshot</h5>
           <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 space-y-4 shadow-lg">
             <div>
               <div className="flex justify-between text-sm mb-2">
                 <span className="text-white">Emergency Fund</span>
                 <span className="text-white/50">$3,200 / $10,000</span>
               </div>
               <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                 <div className="h-full bg-[#14b8a6] w-[32%] rounded-full"></div>
               </div>
             </div>
             <div>
               <div className="flex justify-between text-sm mb-2">
                 <span className="text-white">Wedding Fund</span>
                 <span className="text-white/50">$8,000 / $15,000</span>
               </div>
               <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                 <div className="h-full bg-coral-400 w-[53%] rounded-full" style={{ backgroundColor: '#f43f5e' }}></div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
