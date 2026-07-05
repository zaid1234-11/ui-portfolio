import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative pt-20">
      <div className="space-y-8 max-w-4xl">
        <div>
          <h2 className="font-mono text-sm tracking-[0.25em] text-[#B8925A] uppercase mb-4">Building SalesSphere</h2>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-[#1c1c1b] leading-tight tracking-tight">
            Enterprise Sales Intelligence Platform
          </h1>
        </div>
        
        <div className="space-y-4 text-xl md:text-2xl text-[#4E4842]/80 font-light max-w-3xl leading-relaxed">
          <p>Business leaders don't struggle with a lack of data—they struggle with turning data into decisions. SalesSphere was designed to bridge that gap through a layered analytics architecture, contextual visualizations, and actionable recommendations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="bg-white/50 p-6 rounded-xl border border-[#B8925A]/10">
            <h3 className="font-display text-xl font-bold text-[#1c1c1b] mb-2">Understand</h3>
            <p className="text-sm text-[#4E4842] leading-relaxed">Monitor revenue, profit, customers, regions, and operational performance.</p>
          </div>
          <div className="bg-white/50 p-6 rounded-xl border border-[#B8925A]/10">
            <h3 className="font-display text-xl font-bold text-[#1c1c1b] mb-2">Analyze</h3>
            <p className="text-sm text-[#4E4842] leading-relaxed">Reveal trends, compare periods, and surface explainable business insights.</p>
          </div>
          <div className="bg-white/50 p-6 rounded-xl border border-[#B8925A]/10">
            <h3 className="font-display text-xl font-bold text-[#1c1c1b] mb-2">Decide</h3>
            <p className="text-sm text-[#4E4842] leading-relaxed">Generate prioritized recommendations with confidence scores, supporting evidence, and projected business impact.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[#B8925A]/15 mt-12">
          <div>
            <span className="block font-mono text-[10px] text-[#4E4842]/60 uppercase tracking-widest mb-2">Role</span>
            <span className="font-semibold text-sm">Product Designer<br/>& Frontend Engineer</span>
          </div>
          <div>
            <span className="block font-mono text-[10px] text-[#4E4842]/60 uppercase tracking-widest mb-2">Duration</span>
            <span className="font-semibold text-sm">8 Weeks</span>
          </div>
          <div>
            <span className="block font-mono text-[10px] text-[#4E4842]/60 uppercase tracking-widest mb-2">Stack</span>
            <span className="font-semibold text-sm">React • TypeScript<br/>Recharts • Tailwind</span>
          </div>
        </div>

        {/* Dashboard Mockup - Floating aesthetic */}
        <div className="mt-20 relative rounded-2xl overflow-hidden border border-[#1c1c1b]/10 shadow-2xl bg-white aspect-[16/9] group">
           <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIZfWC7c3WjWNnpxJoZqDCof491RJ1aH-EAoUdHb6C2r3ajvx9MWiKgDAwXsGIHEEIXZl1ZHFRlAO_iulwpQJMCTi0CRDn5Z8tczmQJDpYqkH5xDJkxlUwFPQyBGBUExhSAZdthYb7Tguztuddd2MmQhouDJysmxG0CUrStzJkTdvu1CwLdfi4B8gqh7eIbrya8QBexIhVZfOyhoKomhRkxlLp4A9vMuJpomBQT_pW2ijRIeWDcLiF" 
            alt="SalesSphere Dashboard Mockup" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
          />
        </div>
        
        {/* KPI Row right below the image */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-12">
          <div className="bg-[#1c1c1b] p-6 rounded-xl text-[#FAF6EE]">
            <div className="font-display text-3xl font-bold text-[#B8925A]">12</div>
            <div className="font-mono text-[10px] tracking-widest uppercase mt-2 opacity-70">Milestones</div>
          </div>
          <div className="bg-[#1c1c1b] p-6 rounded-xl text-[#FAF6EE]">
            <div className="font-display text-3xl font-bold text-[#B8925A]">35+</div>
            <div className="font-mono text-[10px] tracking-widest uppercase mt-2 opacity-70">Components</div>
          </div>
          <div className="bg-[#1c1c1b] p-6 rounded-xl text-[#FAF6EE]">
            <div className="font-display text-3xl font-bold text-[#B8925A]">100K+</div>
            <div className="font-mono text-[10px] tracking-widest uppercase mt-2 opacity-70">Dataset Support</div>
          </div>
          <div className="bg-[#1c1c1b] p-6 rounded-xl text-[#FAF6EE]">
            <div className="font-display text-3xl font-bold text-[#B8925A]">95+</div>
            <div className="font-mono text-[10px] tracking-widest uppercase mt-2 opacity-70">Lighthouse</div>
          </div>
          <div className="bg-[#1c1c1b] p-6 rounded-xl text-[#FAF6EE] col-span-2">
            <div className="font-display text-3xl font-bold text-[#B8925A]">Architecture</div>
            <div className="font-mono text-[10px] tracking-widest uppercase mt-2 opacity-70">Repository → Analytics → Decision</div>
          </div>
          <div className="bg-[#1c1c1b] p-6 rounded-xl text-[#FAF6EE]">
            <div className="font-display text-3xl font-bold text-[#B8925A]">WCAG AA</div>
            <div className="font-mono text-[10px] tracking-widest uppercase mt-2 opacity-70">Accessibility</div>
          </div>
          <div className="bg-[#1c1c1b] p-6 rounded-xl text-[#FAF6EE]">
            <div className="font-display text-3xl font-bold text-[#B8925A]">100%</div>
            <div className="font-mono text-[10px] tracking-widest uppercase mt-2 opacity-70">Responsive</div>
          </div>
        </div>

      </div>
    </section>
  );
}
