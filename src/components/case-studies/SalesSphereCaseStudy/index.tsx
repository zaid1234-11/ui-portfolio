import React, { useRef } from 'react';
import { ArrowRight, LayoutDashboard, Zap, CheckCircle, Cpu, Github, ExternalLink, Sparkles, Layers, Search, Layout } from 'lucide-react';
import VariableProximity from '../../VariableProximity';
import { motion, useInView } from 'motion/react';
import { MetricCard } from './components/MetricCard';
import { InsightCard } from './components/InsightCard';
import { AppShellMockup } from './components/AppShellMockup';

// Fade-in-up animation wrapper for sections
const SectionReveal = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function SalesSphereCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);

  const colors = [
    { name: 'Background', hex: '#1c1c1b' },
    { name: 'Surface', hex: 'rgba(255, 255, 255, 0.05)' },
    { name: 'Card', hex: 'rgba(255, 255, 255, 0.1)' },
    { name: 'Primary', hex: '#FAF6EE', darkText: true },
    { name: 'Success', hex: '#3FA96B', darkText: true },
    { name: 'Warning', hex: '#E5B25D', darkText: true },
    { name: 'Danger', hex: '#E06B6B', darkText: true },
    { name: 'Info', hex: '#4E8EF7', darkText: true }
  ];

  const resumeHighlights = [
    "Designed and helped build an end-to-end enterprise sales intelligence platform in Next.js, TypeScript, and Tailwind CSS, shifting the UX from raw data visualization to AI-assisted recommendations.",
    "Built a token-driven design system (Figma → CSS variables) reused across 15+ components, powering bespoke typography, an 8pt spacing scale, and a dark-mode-first visual language.",
    "Implemented core UI components and page-transition motion using Framer Motion, and partnered on Zustand state architecture for predictable global filtering.",
    "Architected a global contextual filtering system that cut repetitive per-chart interactions across the app.",
    "Collaborated directly with engineering on component architecture, performance (list virtualization), and accessibility (ARIA, keyboard nav, focus states) to WCAG AA standards."
  ];

  return (
    <div ref={containerRef} className="bg-[#1c1c1b] text-[#FAF6EE] min-h-screen font-sans selection:bg-[#B8925A]/30 overflow-hidden relative rounded-3xl p-8 md:p-16 mb-20 shadow-2xl border border-[#B8925A]/15">
      
      {/* Global Aesthetics */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,146,90,0.05)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-32">
        
        {/* 1. Hero Section */}
        <header className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 sm:gap-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B8925A]/30 bg-[#B8925A]/10 text-[#B8925A] font-mono text-xs uppercase tracking-widest self-start">
              <span>Case Study</span>
              <span className="w-1 h-1 rounded-full bg-[#B8925A]"></span>
              <span>Enterprise Software</span>
            </div>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight tracking-tight cursor-default">
            <VariableProximity
              label="A calm, decision-first interface for enterprise sales data — designed and shipped end-to-end."
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 900, 'opsz' 144"
              containerRef={containerRef}
              radius={150}
              falloff="gaussian"
              fromColor="#FAF6EE"
              toColor="#B8925A"
            />
          </h1>
          
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl mt-12 bg-[#101317] flex items-center justify-center">
             {/* Placeholder for Hero Image */}
             <div className="text-white/30 font-mono text-sm uppercase tracking-widest flex flex-col items-center gap-4">
               <LayoutDashboard className="w-12 h-12 opacity-50" />
               <span>SalesSphere Hero Image (21:9)</span>
             </div>
          </div>
        </header>

        {/* 2. Project Details table */}
        <SectionReveal>
          <h2 className="font-mono text-xs text-[#B8925A] tracking-widest uppercase mb-6 flex items-center gap-2">
            <Layout className="w-4 h-4" />
            Project Details
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <tbody className="divide-y divide-white/5">
                {[
                  { label: "Role", value: "Product Designer (UI/UX) & Frontend Developer" },
                  { label: "Duration", value: "12 Weeks" },
                  { label: "Platform", value: "Web (SaaS, fully responsive)" },
                  { label: "Team", value: "Product Manager, Frontend Engineer, Data Engineer" },
                  { label: "Responsibilities", value: "UX/UI Design, Design System Engineering, Information Architecture, Component Implementation" },
                  { label: "Design Tools", value: "Figma" },
                  { label: "Tech Stack", value: "Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Recharts, Zustand, Radix UI, Lucide React" },
                ].map((row, i) => (
                  <tr key={i} className="group">
                    <td className="py-4 pr-8 font-mono text-[10px] text-white/50 uppercase tracking-widest font-bold w-48 align-top">
                      {row.label}
                    </td>
                    <td className="py-4 text-sm text-white/80 font-light leading-relaxed">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionReveal>

        {/* 3. Overview */}
        <SectionReveal className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl font-bold">Overview</h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-white/70 font-light leading-relaxed">
            <p>
              SalesSphere is a Business Intelligence platform that turns raw sales operations data into decisions, not just charts. Instead of another generic dashboard, I designed and helped build a workflow-driven application that mirrors how executives actually think through a problem — modeled around a <strong>"Calm Enterprise Intelligence"</strong> philosophy, and implemented as a strict Figma-to-code design token system so the interface stayed pixel-consistent from design file to production.
            </p>
          </div>
        </SectionReveal>

        {/* 4. The Problem */}
        <SectionReveal className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl font-bold">The Problem</h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-white/70 font-light leading-relaxed">
            <p>
              Traditional analytics tools (Tableau, standard Power BI setups, legacy CRM dashboards) hand users a wall of charts and expect them to do the interpretation themselves. Three things kept surfacing in research:
            </p>
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8925A] mt-2 shrink-0"></div>
                <span><strong>Data fatigue</strong> — too many charts, no clear takeaway.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8925A] mt-2 shrink-0"></div>
                <span><strong>Decision ambiguity</strong> — users could see <em>what</em> happened but not <em>what to do about it</em>.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8925A] mt-2 shrink-0"></div>
                <span><strong>Cluttered, slow interfaces</strong> — dense layouts that punished quick scanning.</span>
              </li>
            </ul>
            <p className="pt-2">
              Existing tools function as data dumps, not decision engines. They rarely answer the two questions that actually matter: <em>why did this happen</em>, and <em>what should I do next</em>.
            </p>
          </div>
        </SectionReveal>

        {/* 5. Design Goals */}
        <SectionReveal className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#B8925A]"></div>
          <h2 className="font-display text-3xl font-bold mb-8">Design Goals</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/80 font-light leading-relaxed">
                <CheckCircle className="w-5 h-5 text-[#B8925A] shrink-0 mt-0.5" />
                <span>Reduce cognitive load through disciplined whitespace and a calm visual language.</span>
              </li>
              <li className="flex items-start gap-4 text-white/80 font-light leading-relaxed">
                <CheckCircle className="w-5 h-5 text-[#B8925A] shrink-0 mt-0.5" />
                <span>One primary business question answered per screen.</span>
              </li>
              <li className="flex items-start gap-4 text-white/80 font-light leading-relaxed">
                <CheckCircle className="w-5 h-5 text-[#B8925A] shrink-0 mt-0.5" />
                <span>Build trust by making the recommendation engine show its reasoning, not just its conclusion.</span>
              </li>
            </ul>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/80 font-light leading-relaxed">
                <CheckCircle className="w-5 h-5 text-[#B8925A] shrink-0 mt-0.5" />
                <span>Cut task time with global, persistent filtering instead of per-chart controls.</span>
              </li>
              <li className="flex items-start gap-4 text-white/80 font-light leading-relaxed">
                <CheckCircle className="w-5 h-5 text-[#B8925A] shrink-0 mt-0.5" />
                <span>Borrow onboarding patterns users already know from Stripe and Linear, rather than inventing new conventions.</span>
              </li>
            </ul>
          </div>
        </SectionReveal>

        {/* 6. Design System Showcase */}
        <SectionReveal className="space-y-12">
          <div className="space-y-4 text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold">Design System (Figma → Code)</h2>
            <p className="text-white/70 font-light leading-relaxed">
              Every value in the interface — color, spacing, type, motion — is a token, mapped 1:1 from Figma variables to CSS custom properties, so nothing in the codebase is a hardcoded magic number.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 pt-8 border-t border-white/10">
            {colors.map((c, i) => (
              <div key={i} className="space-y-3 group">
                <div 
                  className="w-full aspect-square rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] flex items-end p-3 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: c.hex }}
                >
                  <span className={`font-mono text-[10px] font-bold ${c.darkText ? 'text-[#101317]' : 'text-white'}`}>
                    {c.hex}
                  </span>
                </div>
                <span className="block font-medium text-sm text-white/80">{c.name}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="font-mono text-[10px] text-white/50 uppercase tracking-widest font-bold border-b border-white/10 pb-3 mb-4">Typography</h4>
              <div className="space-y-4">
                <div>
                  <div className="font-sans text-xl text-white">Inter</div>
                  <div className="text-xs text-white/40 font-mono mt-1">UI / Data Tables</div>
                </div>
                <div>
                  <div className="font-display text-xl text-white italic">Playfair Display</div>
                  <div className="text-xs text-white/40 font-mono mt-1">Hero-level insight statements</div>
                </div>
                <div>
                  <div className="font-mono text-xl text-white">JetBrains Mono</div>
                  <div className="text-xs text-white/40 font-mono mt-1">Tabular figures</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="font-mono text-[10px] text-white/50 uppercase tracking-widest font-bold border-b border-white/10 pb-3 mb-4">Spacing Scale</h4>
              <p className="text-sm font-light text-white/70 mb-6">Strict 8pt scale for predictable rhythm across every layout.</p>
              <div className="flex items-end gap-2 h-16">
                {[1, 2, 3, 4, 6, 8, 12].map((m) => (
                  <div key={m} className="bg-[#B8925A] rounded-sm flex-shrink-0" style={{ width: m * 4, height: m * 8, opacity: 0.1 + (m * 0.05) }}></div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="font-mono text-[10px] text-white/50 uppercase tracking-widest font-bold border-b border-white/10 pb-3 mb-4">Motion & Grid</h4>
              <ul className="space-y-3 font-mono text-xs text-white/70">
                <li className="flex justify-between"><span>Fast</span><span className="text-white">150ms</span></li>
                <li className="flex justify-between"><span>Normal</span><span className="text-white">250ms</span></li>
                <li className="flex justify-between"><span>Slow</span><span className="text-white">400ms</span></li>
                <li className="border-t border-white/10 pt-3 mt-3">Responsive 12-column grid</li>
                <li>Tests against <code>prefers-reduced-motion</code></li>
              </ul>
            </div>
          </div>
        </SectionReveal>

        {/* 7. Key UX Decisions */}
        <SectionReveal className="space-y-12">
           <h2 className="font-display text-3xl font-bold border-b border-white/10 pb-6">Key UX Decisions</h2>
           <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                 <h3 className="text-lg font-bold text-white flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-[#B8925A]"></div> Executive KPI Overview
                 </h3>
                 <p className="text-white/70 font-light text-sm leading-relaxed">
                   Auto-calculated KPI cards with sparklines and variance %, so users get business-health context before touching a single filter. Tradeoff: it eats premium above-the-fold space, pushing granular charts down — worth it for faster baseline comprehension.
                 </p>
              </div>
              <div className="space-y-4">
                 <h3 className="text-lg font-bold text-white flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-[#B8925A]"></div> AI-Assisted Insights
                 </h3>
                 <p className="text-white/70 font-light text-sm leading-relaxed">
                   An InsightCard component that states findings in plain language instead of leaving users to infer action from a chart. This is the component that directly closes the <code>Decide → Act</code> loop.
                 </p>
              </div>
              <div className="space-y-4">
                 <h3 className="text-lg font-bold text-white flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-[#B8925A]"></div> Global Contextual Filtering
                 </h3>
                 <p className="text-white/70 font-light text-sm leading-relaxed">
                   One DateRangePicker + region filter, persistent in the top nav, instead of per-chart controls. Cuts repetitive interaction; solved the "did I forget an active filter" risk with a prominent active-state badge.
                 </p>
              </div>
           </div>
        </SectionReveal>

        {/* 8. Key Screens / Components */}
        <SectionReveal className="space-y-16">
          <div className="text-center space-y-4">
             <h2 className="font-display text-3xl font-bold">Component Library & Interfaces</h2>
             <p className="text-white/70 font-light">Reusable UI primitives built with Tailwind and Lucide React.</p>
          </div>

          <div className="space-y-8">
             <h3 className="font-mono text-[10px] text-[#B8925A] uppercase tracking-widest font-bold">1. AppShell Component</h3>
             <AppShellMockup />
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8">
             <div className="space-y-8">
                <h3 className="font-mono text-[10px] text-[#B8925A] uppercase tracking-widest font-bold">2. MetricCard Primitives</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <MetricCard title="Total Revenue" value="$4.2M" variance={12.5} timeframe="vs last quarter" />
                  <MetricCard title="Churn Rate" value="1.8%" variance={-0.4} timeframe="vs last quarter" />
                </div>
             </div>
             <div className="space-y-8">
                <h3 className="font-mono text-[10px] text-[#B8925A] uppercase tracking-widest font-bold">3. AI InsightCard</h3>
                <InsightCard 
                  recommendation="Liquidate Furniture Inventory"
                  evidence="Q2 warehouse holding costs exceeded gross margin by 14% in the Midwest region."
                  action="Draft Liquidation Plan"
                />
             </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-4">
               <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#101317] flex items-center justify-center">
                 <div className="text-white/30 font-mono text-sm uppercase tracking-widest flex flex-col items-center gap-4 text-center px-6">
                   <Layers className="w-8 h-8 opacity-50" />
                   <span>Overview Dashboard (4:3) Placeholder</span>
                 </div>
               </div>
               <p className="text-sm font-light text-white/60">F-pattern layout: KPIs → revenue trend → categorical breakdowns. High-contrast data against #1F2630 cards.</p>
            </div>
            
            <div className="space-y-4">
               <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#101317] flex items-center justify-center">
                 <div className="text-white/30 font-mono text-sm uppercase tracking-widest flex flex-col items-center gap-4 text-center px-6">
                   <Sparkles className="w-8 h-8 opacity-50" />
                   <span>Insights Screen (4:3) Placeholder</span>
                 </div>
               </div>
               <p className="text-sm font-light text-white/60">Editorial-style layout using Playfair Display so it reads like a briefing. Visual hierarchy: Recommendation → Evidence → Action.</p>
            </div>
          </div>
        </SectionReveal>

        {/* 9. Frontend Engineering Highlights */}
        <SectionReveal className="space-y-12 border-t border-white/10 pt-16">
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="w-6 h-6 text-[#B8925A]" />
            <h2 className="font-display text-3xl font-bold">Frontend Engineering Highlights</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8925A] mt-2 shrink-0"></div>
                <span className="text-white/80 font-light leading-relaxed">Translated every Figma variable into a <strong>Tailwind + CSS variable token pipeline</strong>, eliminating hardcoded values across the app.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8925A] mt-2 shrink-0"></div>
                <span className="text-white/80 font-light leading-relaxed">Implemented core UI primitives (<code>MetricCard</code>, <code>InsightCard</code>, <code>AppShell</code>) as reusable, accessible React components.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8925A] mt-2 shrink-0"></div>
                <span className="text-white/80 font-light leading-relaxed">Built chart interactions and page-transition motion in <strong>Framer Motion</strong>, matched to hand-tuned easing curves.</span>
              </li>
            </ul>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8925A] mt-2 shrink-0"></div>
                <span className="text-white/80 font-light leading-relaxed">Partnered with engineering on the <strong>Zustand</strong> store design so global filters stayed predictable across routes.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8925A] mt-2 shrink-0"></div>
                <span className="text-white/80 font-light leading-relaxed">Contributed to virtualization strategy on the <code>OrdersTable</code> to keep large datasets performant.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8925A] mt-2 shrink-0"></div>
                <span className="text-white/80 font-light leading-relaxed">Used <strong>Radix UI</strong> primitives under the hood of custom components to get keyboard nav and focus management correct without reinventing it.</span>
              </li>
            </ul>
          </div>
        </SectionReveal>

        {/* 10. Impact */}
        <SectionReveal className="bg-[#B8925A]/10 border border-[#B8925A]/30 rounded-2xl p-8 md:p-12 space-y-8">
           <h2 className="font-display text-3xl font-bold text-[#B8925A]">Impact & Results</h2>
           <div className="grid md:grid-cols-2 gap-8">
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <ArrowRight className="w-5 h-5 text-[#B8925A] shrink-0 mt-0.5" />
                  <p className="text-white/90 font-light leading-relaxed">Replaced a raw CSV/data-dump experience with a structured decision workflow.</p>
                </div>
                <div className="flex items-start gap-4">
                  <ArrowRight className="w-5 h-5 text-[#B8925A] shrink-0 mt-0.5" />
                  <p className="text-white/90 font-light leading-relaxed">Design token system reused across 15+ components — zero visual debt, zero hardcoded values.</p>
                </div>
             </div>
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <ArrowRight className="w-5 h-5 text-[#B8925A] shrink-0 mt-0.5" />
                  <p className="text-white/90 font-light leading-relaxed">Meaningfully cut "observe → act" time by surfacing AI insights upfront instead of at the end of a manual analysis pass.</p>
                </div>
                <div className="flex items-start gap-4">
                  <ArrowRight className="w-5 h-5 text-[#B8925A] shrink-0 mt-0.5" />
                  <p className="text-white/90 font-light leading-relaxed">Token-mapped design system reduced back-and-forth between design and engineering during build.</p>
                </div>
             </div>
           </div>
        </SectionReveal>

        {/* 11. Resume Highlights */}
        <section className="space-y-8 border-t border-white/10 pt-16">
          <h2 className="font-mono text-[10px] text-white/50 uppercase tracking-widest font-bold mb-4">Resume Highlights</h2>
          <div className="space-y-4">
            {resumeHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="flex items-start gap-4 bg-white/5 border border-white/5 p-5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8925A] mt-2 shrink-0"></div>
                <p className="text-white/80 font-light text-sm leading-relaxed">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
