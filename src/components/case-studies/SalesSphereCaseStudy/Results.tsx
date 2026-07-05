import React from 'react';
import { Quote } from 'lucide-react';

export default function Results() {
  return (
    <section className="py-12 space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        
        {/* Left: Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#1c1c1b] p-8 rounded-2xl shadow-xl flex flex-col justify-center border border-[#B8925A]/20 aspect-square">
            <span className="font-display text-5xl md:text-6xl font-bold text-[#B8925A] mb-2">95+</span>
            <span className="font-mono text-[10px] text-[#FAF6EE]/70 uppercase tracking-widest">Lighthouse Score</span>
          </div>
          <div className="bg-[#1c1c1b] p-8 rounded-2xl shadow-xl flex flex-col justify-center border border-[#B8925A]/20 aspect-square">
            <span className="font-display text-5xl md:text-6xl font-bold text-[#B8925A] mb-2">60</span>
            <span className="font-mono text-[10px] text-[#FAF6EE]/70 uppercase tracking-widest">FPS Scroll Rate</span>
          </div>
          <div className="bg-[#1c1c1b] p-8 rounded-2xl shadow-xl flex flex-col justify-center border border-[#B8925A]/20 aspect-square">
            <span className="font-display text-4xl md:text-5xl font-bold text-[#B8925A] mb-2">100%</span>
            <span className="font-mono text-[10px] text-[#FAF6EE]/70 uppercase tracking-widest">Responsive</span>
          </div>
          <div className="bg-stone-200 p-8 rounded-2xl shadow-inner flex flex-col justify-center border border-stone-300 aspect-square">
            <span className="font-display text-3xl md:text-4xl font-bold text-[#1c1c1b] mb-2">AA</span>
            <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">WCAG Contrast</span>
          </div>
        </div>

        {/* Right: Learnings */}
        <div className="space-y-6">
          <h3 className="font-mono text-xs tracking-[0.2em] text-[#B8925A] uppercase mb-4">Lessons Learned</h3>
          
          <div className="relative">
            <Quote className="w-12 h-12 text-[#B8925A] opacity-20 absolute -top-4 -left-4" />
            <p className="font-display text-xl leading-relaxed text-[#1c1c1b] relative z-10 pl-6 border-l-2 border-[#B8925A]">
              I initially explored a highly conceptual AI command center. During user-centered refinement, I shifted the product toward a business-first analytics experience inspired by Stripe Analytics and Power BI.
            </p>
          </div>

          <div className="space-y-4 pt-6 pl-6">
            <p className="text-[#4E4842] text-sm leading-relaxed">
              This change improved clarity, reduced cognitive load, and aligned the interface with real enterprise workflows.
            </p>
            <p className="text-[#4E4842] text-sm leading-relaxed">
              The final product emphasizes business questions over technical complexity, resulting in a more usable and professional analytics platform.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
