import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Calendar, FastForward } from 'lucide-react';

export function FutureSimulatorMockup() {
  const [savings, setSavings] = useState(500);

  // Simple mock calculation: Base is 500/mo, target is 10k. 20 months.
  // If savings increases, months decrease.
  const target = 10000;
  const currentSaved = 3200;
  const remaining = target - currentSaved;
  const monthsRemaining = Math.ceil(remaining / savings);
  
  // Base scenario is fixed at $500/mo
  const baseMonths = Math.ceil(remaining / 500);

  const calculateDate = (months: number) => {
    const d = new Date();
    d.setMonth(d.getMonth() + months);
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="w-full bg-[#0A1118] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative font-sans">
      <div className="flex items-center gap-2 mb-8">
        <FastForward className="w-5 h-5 text-teal-400" />
        <h3 className="text-white font-display text-xl font-bold">Future Simulator</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Current Path */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
          <div className="text-white/50 text-xs font-mono uppercase tracking-widest mb-4">Current Path</div>
          <div className="space-y-1">
             <div className="text-white/40 text-sm">Target Date</div>
             <div className="text-white text-2xl font-bold">{calculateDate(baseMonths)}</div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/5 space-y-1">
             <div className="text-white/40 text-sm">Monthly Savings</div>
             <div className="text-white/80 font-mono font-bold">$500</div>
          </div>
        </div>

        {/* Optimized Path */}
        <div className="bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/30 rounded-2xl p-6 relative shadow-[0_0_30px_rgba(20,184,166,0.1)]">
          <div className="text-teal-400 text-xs font-mono uppercase tracking-widest font-bold mb-4">Optimized Path</div>
          <div className="space-y-1">
             <div className="text-white/40 text-sm">Target Date</div>
             <motion.div 
               key={monthsRemaining}
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-teal-400 text-3xl font-bold"
             >
               {calculateDate(monthsRemaining)}
             </motion.div>
          </div>
          <div className="mt-6 pt-6 border-t border-teal-500/20 space-y-1">
             <div className="text-white/40 text-sm">Monthly Savings</div>
             <div className="text-white font-mono font-bold">${savings}</div>
          </div>
        </div>
      </div>

      {/* Slider Control */}
      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <div className="flex justify-between items-center mb-4">
          <label htmlFor="savings-slider" className="text-white font-medium">Adjust Monthly Contribution</label>
          <div className="text-teal-400 font-bold font-mono">${savings}</div>
        </div>
        <input 
          id="savings-slider"
          type="range" 
          min="100" 
          max="1500" 
          step="50"
          value={savings}
          onChange={(e) => setSavings(Number(e.target.value))}
          className="w-full accent-teal-400 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-white/30 font-mono mt-2">
          <span>$100</span>
          <span>$1,500</span>
        </div>
      </div>
    </div>
  );
}
