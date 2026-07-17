import React from 'react';
import { ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  variance: number;
  timeframe: string;
}

export function MetricCard({ title, value, variance, timeframe }: MetricCardProps) {
  const isPositive = variance >= 0;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#B8925A]/30 transition-colors flex flex-col justify-between group">
      <div className="flex justify-between items-start mb-4">
        <h4 className="font-mono text-xs text-white/50 uppercase tracking-widest">{title}</h4>
        <TrendingUp className="w-4 h-4 text-white/30 group-hover:text-[#B8925A] transition-colors" />
      </div>
      <div>
        <div className="text-3xl font-display font-bold text-[#FAF6EE] mb-2">{value}</div>
        <div className="flex items-center gap-2">
          <div className={`flex items-center gap-1 text-xs font-mono font-bold px-2 py-1 rounded-full ${isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
            {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {Math.abs(variance)}%
          </div>
          <span className="text-xs text-white/40">{timeframe}</span>
        </div>
      </div>
      {/* Sparkline placeholder */}
      <div className="mt-6 h-12 w-full flex items-end gap-1 opacity-60">
        {[40, 60, 45, 70, 85, 65, 90, 75, 100, 80].map((h, i) => (
          <div key={i} className="flex-1 bg-[#B8925A]/40 rounded-t-sm" style={{ height: `${h}%` }}></div>
        ))}
      </div>
    </div>
  );
}
