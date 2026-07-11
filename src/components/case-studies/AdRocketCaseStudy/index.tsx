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
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight tracking-tight cursor-default">
            <VariableProximity
              label="Designing and engineering a premium marketing experience that looks as good as it performs"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 900, 'opsz' 144"
              containerRef={containerRef}
              radius={150}
              falloff="gaussian"
              fromColor="#FAF6EE"
              toColor="#B8925A"
            />
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10 mt-12">
            <div>
              <span className="block font-sans text-[10px] text-white/60 uppercase tracking-widest mb-2 font-bold">Role</span>
              <span className="text-sm font-semibold text-white/90">UI/UX · Frontend · Perf Engineer</span>
            </div>
            <div>
              <span className="block font-sans text-[10px] text-white/60 uppercase tracking-widest mb-2 font-bold">Duration</span>
              <span className="text-sm font-semibold text-white/90">July 2026</span>
            </div>
            <div className="col-span-2">
              <span className="block font-sans text-[10px] text-white/60 uppercase tracking-widest mb-3 font-bold">Core Stack</span>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Vite', 'Tailwind', 'Framer Motion', 'GSAP'].map((tech) => (
                  <span key={tech} className="font-sans text-[11px] font-bold tracking-wider bg-white/10 text-white/90 border border-white/20 px-3 py-1.5 rounded-full shadow-sm uppercase hover:bg-white/15 transition-colors">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <img 
            src="/projects/adrocket/hero.webp" 
            alt="AdRocket Premium Marketing Experience" 
            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
        </div>

        {/* TL;DR Section */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#B8925A]"></div>
          <h2 className="font-mono text-xs text-[#B8925A] tracking-widest uppercase mb-6 flex items-center gap-2">
            <Zap className="w-4 h-4" />
            TL;DR
          </h2>
          <ul className="space-y-4">
            {[
              "Took a visually rich, animation-heavy marketing site from a 34 → 94 Lighthouse Performance score without cutting a single animation, blur effect, or interaction.",
              "Hit a perfect 100/100/100 on Accessibility, Best Practices, and SEO.",
              "Cut Total Blocking Time by 99.7% (3520ms → 10ms) and nearly eliminated layout shift (CLS 0.028).",
              "Proved that premium motion design and elite performance aren't a trade-off — they're a design and engineering discipline."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-white/80 leading-relaxed font-light">
                <CheckCircle className="w-5 h-5 text-[#B8925A] shrink-0 mt-0.5 opacity-80" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* The Challenge */}
        <section className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7 space-y-6">
            <h2 className="font-display text-3xl font-bold">The Challenge</h2>
            <p className="text-white/70 font-light leading-relaxed">
              AdRocket was designed as a premium, high-end marketing site: glassmorphism surfaces, cinematic scroll-linked animation, smooth motion transitions, and layered depth via Framer Motion and GSAP. Visually, it delivered exactly the "elite brand presentation" feel it was built for.
            </p>
            <p className="text-white/70 font-light leading-relaxed">
              But a beautiful interface that users have to wait for isn't actually a good user experience. Under the hood, the site was fighting itself — heavy SVG paint operations, an overloaded rendering pipeline, render-blocking fonts, and JavaScript execution costs that made the interface feel sluggish despite its polish.
            </p>
            <div className="bg-[#B8925A]/10 border-l-2 border-[#B8925A] p-6 rounded-r-lg mt-8">
              <p className="font-display text-lg italic text-white/90">
                "The brief wasn't 'make it faster by simplifying it.' It was: keep every visual and interaction decision intact, and make the experience feel as premium as it looks."
              </p>
            </div>
          </div>
          
          <div className="md:col-span-5 bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-6">Starting Point Metrics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="flex items-center gap-2 text-white/80"><Activity className="w-4 h-4 text-red-400" /> Performance</span>
                <span className="font-mono text-xl font-bold text-red-400">34</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="flex items-center gap-2 text-white/80"><Layout className="w-4 h-4 text-yellow-400" /> Accessibility</span>
                <span className="font-mono text-xl font-bold text-yellow-400">69</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="flex items-center gap-2 text-white/80"><CheckCircle className="w-4 h-4 text-green-400" /> Best Practices</span>
                <span className="font-mono text-xl font-bold text-green-400">96</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-white/80"><Search className="w-4 h-4 text-green-400" /> SEO</span>
                <span className="font-mono text-xl font-bold text-green-400">83</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}