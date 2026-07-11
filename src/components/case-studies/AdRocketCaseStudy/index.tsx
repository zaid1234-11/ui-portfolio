import React, { useRef } from 'react';
import { ArrowRight, Activity, Zap, CheckCircle, Search, Layout, Cpu, Github, ExternalLink } from 'lucide-react';
import VariableProximity from '../../VariableProximity';

export default function AdRocketCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="bg-[#1c1c1b] text-[#FAF6EE] min-h-screen font-sans selection:bg-[#B8925A]/30 overflow-hidden relative rounded-3xl p-8 md:p-16 mb-20 shadow-2xl border border-[#B8925A]/15">
      
      {/* Global Aesthetics */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,146,90,0.05)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-24">
        
        {/* Header Section */}
        <header className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 sm:gap-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B8925A]/30 bg-[#B8925A]/10 text-[#B8925A] font-mono text-xs uppercase tracking-widest self-start">
              <span>Case Study</span>
              <span className="w-1 h-1 rounded-full bg-[#B8925A]"></span>
              <span>Performance Engineering</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/zaid1234-11/The-adrocket" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a href="https://the-adrocket-7u3vri1jq-zaidsaifi150105-8124s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#B8925A]/50 bg-[#B8925A]/10 hover:bg-[#B8925A]/20 text-[#B8925A] font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer">
                <ExternalLink className="w-4 h-4" />
                <span>Live Site</span>
              </a>
            </div>
          </div>
      </div>
    </div>
  );
}