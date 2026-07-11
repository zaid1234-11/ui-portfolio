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
        
      </div>
    </div>
  );
}