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

        {/* Approach Section */}
        <section className="space-y-16">
          <div className="space-y-4">
            <h2 className="font-display text-3xl font-bold">Design & UX Approach</h2>
            <p className="text-white/60 font-mono text-sm tracking-wide">Performance work only matters if it's invisible to the end user.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#B8925A]/50 transition-colors">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#B8925A]"></div>Motion hierarchy</h3>
              <p className="text-white/70 font-light text-sm leading-relaxed">Rather than stripping animation for speed, the hero's motion layers were re-prioritized. Scroll-linked parallax and SVG distortion effects were reserved for the elements users actually focus on, while secondary effects were rebuilt with lighter-weight CSS backdrop blur.</p>
            </div>
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#B8925A]/50 transition-colors">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#B8925A]"></div>Accessibility</h3>
              <p className="text-white/70 font-light text-sm leading-relaxed">Accessibility was treated as core UX, not an audit item: corrected heading hierarchy, improved color contrast ratios across glassmorphic surfaces, full keyboard navigation support, and reduced-motion support for sensitive users.</p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#B8925A]/50 transition-colors">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#B8925A]"></div>Layout stability</h3>
              <p className="text-white/70 font-light text-sm leading-relaxed">Nothing breaks perceived quality faster than content jumping around while it loads. Hydration mismatches were eliminated by matching prerendered HTML, reserving image space, and stabilizing hero dimensions — bringing CLS down to 0.028.</p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#B8925A]/50 transition-colors">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#B8925A]"></div>Asset delivery</h3>
              <p className="text-white/70 font-light text-sm leading-relaxed">Fonts were self-hosted with preloading and <code>font-display: swap</code>. Marketing imagery was migrated to locally hosted, compressed WebP — removing DNS lookups and layout instability.</p>
            </div>
          </div>
        </section>

        {/* Engineering Approach */}
        <section className="space-y-12 border-t border-white/10 pt-16">
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="w-6 h-6 text-[#B8925A]" />
            <h2 className="font-display text-3xl font-bold">Frontend Engineering Approach</h2>
          </div>
          
          <div className="space-y-10 border-l border-white/10 pl-6 md:pl-10 ml-3">
            <div className="relative">
              <div className="absolute -left-[45px] top-1.5 w-3 h-3 rounded-full bg-[#1c1c1b] border-2 border-[#B8925A]"></div>
              <h3 className="text-lg font-bold text-white mb-2">Component architecture</h3>
              <p className="text-white/70 font-light text-sm leading-relaxed max-w-3xl">Static sections were isolated and memoized with <code>React.memo</code>. The Framer Motion component hierarchy was flattened to reduce reconciliation overhead — resulting in faster rendering with zero visual change.</p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[45px] top-1.5 w-3 h-3 rounded-full bg-[#1c1c1b] border-2 border-[#B8925A]"></div>
              <h3 className="text-lg font-bold text-white mb-2">Animation system integration</h3>
              <p className="text-white/70 font-light text-sm leading-relaxed max-w-3xl">Redundant parallax transforms were removed, and unnecessary Framer Motion startup delay on the hero was eliminated to speed up the Largest Contentful Paint.</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[45px] top-1.5 w-3 h-3 rounded-full bg-[#1c1c1b] border-2 border-[#B8925A]"></div>
              <h3 className="text-lg font-bold text-white mb-2">Bundle strategy</h3>
              <p className="text-white/70 font-light text-sm leading-relaxed max-w-3xl">Rollup chunking was reorganized to separate vendor code, isolate GSAP, and split the motion bundle — improving tree-shaking and cutting JS parse/evaluation cost at boot.</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[45px] top-1.5 w-3 h-3 rounded-full bg-[#1c1c1b] border-2 border-[#B8925A]"></div>
              <h3 className="text-lg font-bold text-white mb-2">Profiling-driven decisions</h3>
              <p className="text-white/70 font-light text-sm leading-relaxed max-w-3xl">An experiment applying <code>will-change</code> and <code>translateZ(0)</code> for GPU layer promotion was tested and measured — and it <em>increased</em> layout recalculation time. It was reverted. Every change was validated with Chrome DevTools, not assumed.</p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold">The Results</h2>
            <p className="text-white/50 font-mono text-sm tracking-widest uppercase">Lighthouse & Core Web Vitals</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: "Performance", before: 34, after: 94 },
              { label: "Accessibility", before: 69, after: 100 },
              { label: "Best Practices", before: 96, after: 100 },
              { label: "SEO", before: 83, after: 100 },
            ].map((stat) => (
              <div key={stat.label} className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col items-center text-center hover:border-[#B8925A]/50 transition-colors shadow-lg">
                <span className="font-mono text-[10px] text-white/60 uppercase tracking-widest mb-4">{stat.label}</span>
                <div className="flex flex-col items-center gap-1">
                  <span className="font-display text-5xl md:text-6xl font-bold text-[#B8925A] leading-none drop-shadow-md">{stat.after}</span>
                  <div className="flex items-center gap-2 mt-2 opacity-50">
                    <span className="text-[10px] font-mono uppercase">Was</span>
                    <span className="font-mono line-through text-sm">{stat.before}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 pt-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-[#B8925A]/30 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Activity className="w-32 h-32" />
              </div>
              <h3 className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-8">Performance Wins</h3>
              <div className="space-y-6 relative z-10">
                {[
                  { label: "First Contentful Paint", before: "3.5s", after: "2.4s" },
                  { label: "Largest Contentful Paint", before: "3.9s", after: "2.6s" }
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="block text-sm font-semibold text-white/90 mb-1">{stat.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl text-[#B8925A] font-bold">{stat.after}</span>
                      <span className="font-mono text-white/30 line-through text-sm">{stat.before}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-[#B8925A]/30 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Cpu className="w-32 h-32" />
              </div>
              <h3 className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-8">Rendering Stability</h3>
              <div className="space-y-6 relative z-10">
                {[
                  { label: "Total Blocking Time", before: "3520ms", after: "10ms" },
                  { label: "Cumulative Layout Shift", before: "0.113", after: "0.028" }
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="block text-sm font-semibold text-white/90 mb-1">{stat.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl text-[#B8925A] font-bold">{stat.after}</span>
                      <span className="font-mono text-white/30 line-through text-sm">{stat.before}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
