import React from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';

interface InsightCardProps {
  recommendation: string;
  evidence: string;
  action: string;
}

export function InsightCard({ recommendation, evidence, action }: InsightCardProps) {
  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#B8925A]/40 transition-colors flex flex-col h-full">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-[#B8925A]" />
        <span className="font-mono text-xs text-[#B8925A] uppercase tracking-widest font-bold">AI Insight</span>
      </div>
      
      <div className="flex-1 space-y-4">
        <h3 className="font-display text-2xl font-bold text-[#FAF6EE] leading-tight">
          {recommendation}
        </h3>
        <p className="text-sm font-sans text-white/60 leading-relaxed border-l-2 border-white/10 pl-4">
          <span className="font-semibold text-white/80">Evidence:</span> {evidence}
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-white/10">
        <button className="flex items-center justify-between w-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4E8EF7] rounded-lg">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FAF6EE] font-bold group-hover:text-[#B8925A] transition-colors">
            {action}
          </span>
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#B8925A]/10 group-hover:border-[#B8925A]/30 transition-colors">
            <ChevronRight className="w-4 h-4 text-white/70 group-hover:text-[#B8925A] transition-colors" />
          </div>
        </button>
      </div>
    </div>
  );
}
