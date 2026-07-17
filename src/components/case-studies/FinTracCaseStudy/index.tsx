import React, { useRef } from 'react';
import { ArrowRight, LayoutDashboard, Target, CheckCircle, Cpu, Github, ExternalLink, Sparkles, Layers, Search, Layout } from 'lucide-react';
import VariableProximity from '../../VariableProximity';
import { motion, useInView } from 'motion/react';
import { CommandCenterMockup } from './components/CommandCenterMockup';
import { FutureSimulatorMockup } from './components/FutureSimulatorMockup';
import { TrustCenterMockup } from './components/TrustCenterMockup';

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

export default function FinTracCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);

  const colors = [
    { name: 'Background (Ocean)', hex: '#0A1118' },
    { name: 'Surface (Glass)', hex: 'rgba(255,255,255,0.05)' },
    { name: 'Primary Text', hex: '#F0F4F8', darkText: true },
    { name: 'Action (Teal)', hex: '#14b8a6', darkText: true },
    { name: 'Trust (Blue)', hex: '#3b82f6', darkText: true },
    { name: 'Urgency (Coral)', hex: '#f43f5e', darkText: true }
  ];

  const resumeHighlights = [
    "Designed and helped build a predictive Financial Decision Operating System in React, TypeScript, Tailwind CSS, and Framer Motion (Vite), shifting the product from historical tracking to forward-looking forecasting.",
    "Built a scalable 'Liquid Glass' design system — translucent surfaces, semantic elevation, and fluid motion — implemented directly in Tailwind and optimized for mobile performance.",
    "Designed and specified a 'Prioritization Engine' UI, writing the deterministic ranking logic myself to eliminate conflicting recommendations shown to users.",
    "Implemented an accessible, keyboard-navigable Future Simulator using Radix UI primitives and real-time Framer Motion recalculation.",
    "Championed an Explainability Layer that increased user trust in automated financial advice, contributing to a Time-to-First-Insight metric under 10 seconds."
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
              <span>Financial Tech</span>
            </div>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight tracking-tight cursor-default">
            <VariableProximity
              label="Designing a financial operating system that turns tomorrow's goals into today's decisions."
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 900, 'opsz' 144"
              containerRef={containerRef}
              radius={150}
              falloff="gaussian"
              fromColor="#FAF6EE"
              toColor="#B8925A"
            />
          </h1>
          
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl mt-12 bg-[#0A1118] flex items-center justify-center">
             {/* Placeholder for Hero Image */}
             <div className="text-white/30 font-mono text-sm uppercase tracking-widest flex flex-col items-center gap-4">
               <LayoutDashboard className="w-12 h-12 opacity-50" />
               <span>FinTrac Hero Image (21:9)</span>
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
                  { label: "Role", value: "Senior Product Designer (UI/UX) & Frontend Developer" },
                  { label: "Duration", value: "4 Months" },
                  { label: "Platform", value: "Responsive Web App (Desktop & Mobile)" },
                  { label: "Team", value: "Product Manager, 2 Backend Engineers, 1 Frontend Engineer, 1 Data Scientist" },
                  { label: "Responsibilities", value: "UX/UI Design, Information Architecture, Interaction Design, UX Writing, Design System Creation, Frontend Implementation" },
                  { label: "Design Tools", value: "Figma, Framer, FigJam, Notion" },
                  { label: "Tech Stack", value: "Vite, React 18, TypeScript, Tailwind CSS, Framer Motion, Zustand, Radix UI, Phosphor Icons" },
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
              FinTrac isn't another budgeting app — it's a <strong>Financial Decision Operating System</strong>. Most finance apps are passive mirrors: they show past spending and current balances and stop there. FinTrac acts as an active navigator, designed to help young professionals and mid-income earners connect today's small habits to tomorrow's big goals — solving what I came to think of as "financial myopia."
            </p>
            <p>
              I owned UX/UI end-to-end and built the core frontend experience myself, translating a "Liquid Glass" motion language from Figma prototypes into a real, performant React interface.
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
              Users could see <em>what</em> they'd spent, but never <em>what it cost them</em> in future terms — the gap between intent ("save for a house") and action ("order the expensive takeout") stayed invisible.
            </p>
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8925A] mt-2 shrink-0"></div>
                <span><strong>Information overload</strong> — charts, categories, and transaction tables that answer "what happened" but never "what does this mean for me."</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8925A] mt-2 shrink-0"></div>
                <span><strong>Guilt-driven design</strong> — competitors flag overspending without offering a forward-looking fix.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8925A] mt-2 shrink-0"></div>
                <span><strong>No simulation</strong> — no way to ask "if I cut $50/month from subscriptions, how much faster do I hit my goal?"</span>
              </li>
            </ul>
            <p className="pt-2">
              Existing tools deliver data, not decisions — they're built for looking backward, not planning forward.
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
                <span><strong>Reduce friction</strong> — Time to First Insight under 10 seconds.</span>
              </li>
              <li className="flex items-start gap-4 text-white/80 font-light leading-relaxed">
                <CheckCircle className="w-5 h-5 text-[#B8925A] shrink-0 mt-0.5" />
                <span><strong>Increase clarity</strong> — plain-language projections instead of raw charts.</span>
              </li>
              <li className="flex items-start gap-4 text-white/80 font-light leading-relaxed">
                <CheckCircle className="w-5 h-5 text-[#B8925A] shrink-0 mt-0.5" />
                <span><strong>Build trust</strong> — every recommendation transparent and auditable via an Explainability Layer.</span>
              </li>
            </ul>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/80 font-light leading-relaxed">
                <CheckCircle className="w-5 h-5 text-[#B8925A] shrink-0 mt-0.5" />
                <span><strong>Improve discoverability</strong> — surface exactly one high-impact next action.</span>
              </li>
              <li className="flex items-start gap-4 text-white/80 font-light leading-relaxed">
                <CheckCircle className="w-5 h-5 text-[#B8925A] shrink-0 mt-0.5" />
                <span><strong>Drive engagement</strong> — reframe finance around future possibility, not past mistakes.</span>
              </li>
            </ul>
          </div>
        </SectionReveal>

        {/* 6. Design System Showcase */}
        <SectionReveal className="space-y-12">
          <div className="space-y-4 text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold">Liquid Glass Design System</h2>
            <p className="text-white/70 font-light leading-relaxed">
              Finance apps default to rigid and stressful. "Liquid Glass" plus fluid motion was a deliberate bet that a calmer surface would lower anxiety and invite exploration.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-8 border-t border-white/10">
            {colors.map((c, i) => (
              <div key={i} className="space-y-3 group">
                <div 
                  className="w-full aspect-square rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] flex items-end p-3 transition-transform group-hover:scale-105 backdrop-blur-md"
                  style={{ backgroundColor: c.hex }}
                >
                  <span className={`font-mono text-[10px] font-bold ${c.darkText ? 'text-white' : 'text-white'}`}>
                    {c.hex}
                  </span>
                </div>
                <span className="block font-medium text-sm text-white/80">{c.name}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
              <h4 className="font-mono text-[10px] text-white/50 uppercase tracking-widest font-bold border-b border-white/10 pb-3 mb-4">Typography</h4>
              <div className="space-y-4">
                <div>
                  <div className="font-sans text-xl text-white">Geist & Inter</div>
                  <div className="text-xs text-white/40 font-mono mt-1">Modern & Authoritative</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
              <h4 className="font-mono text-[10px] text-white/50 uppercase tracking-widest font-bold border-b border-white/10 pb-3 mb-4">Surfaces</h4>
              <p className="text-sm font-light text-white/70">"Liquid Glass" translucent blurred panels built with Tailwind + CSS <code>backdrop-filter</code>, layered for depth.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
              <h4 className="font-mono text-[10px] text-white/50 uppercase tracking-widest font-bold border-b border-white/10 pb-3 mb-4">Elevation</h4>
              <p className="text-sm font-light text-white/70">Semantic, not decorative — interactive elements float higher, historical data sits flat.</p>
            </div>
          </div>
        </SectionReveal>

        {/* 7. Key UX Decisions */}
        <SectionReveal className="space-y-12">
           <h2 className="font-display text-3xl font-bold border-b border-white/10 pb-6">Key UX Decisions</h2>
           <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                 <h3 className="text-lg font-bold text-white flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-[#B8925A]"></div> Financial Command Center
                 </h3>
                 <p className="text-white/70 font-light text-sm leading-relaxed">
                   A "Prioritization Engine" forces exactly one Hero Recommendation to the top, ranked by risk or impact. Secondary optimizations sit behind a scroll — worth it, since a user with 10 seconds should leave knowing the one thing that matters most.
                 </p>
              </div>
              <div className="space-y-4">
                 <h3 className="text-lg font-bold text-white flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-[#B8925A]"></div> The Future Simulator
                 </h3>
                 <p className="text-white/70 font-light text-sm leading-relaxed">
                   A side-by-side timeline slider. Dragging "Monthly Savings" instantly recalculates and animates the goal date. Making an abstract tradeoff concrete drives real follow-through.
                 </p>
              </div>
              <div className="space-y-4">
                 <h3 className="text-lg font-bold text-white flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-[#B8925A]"></div> Explainability Layer
                 </h3>
                 <p className="text-white/70 font-light text-sm leading-relaxed">
                   Every insight card carries a mandatory "Why am I seeing this?" dropdown. Directly targets the trust gap that sinks most automated financial advice.
                 </p>
              </div>
           </div>
        </SectionReveal>

        {/* 8. Key Screens / Components */}
        <SectionReveal className="space-y-16">
          <div className="text-center space-y-4">
             <h2 className="font-display text-3xl font-bold">Core Interfaces</h2>
             <p className="text-white/70 font-light">Interactive components demonstrating the Liquid Glass motion language.</p>
          </div>

          <div className="space-y-8">
             <h3 className="font-mono text-[10px] text-[#B8925A] uppercase tracking-widest font-bold text-center">1. Command Center & Prioritization Engine</h3>
             <div className="p-4 md:p-8 bg-[#05080b] rounded-3xl border border-white/5">
                <CommandCenterMockup />
             </div>
          </div>

          <div className="space-y-8">
             <h3 className="font-mono text-[10px] text-[#B8925A] uppercase tracking-widest font-bold text-center">2. Future Simulator</h3>
             <div className="p-4 md:p-8 bg-[#05080b] rounded-3xl border border-white/5">
                <FutureSimulatorMockup />
             </div>
          </div>
          
          <div className="space-y-8">
             <h3 className="font-mono text-[10px] text-[#B8925A] uppercase tracking-widest font-bold text-center">3. Trust & Transparency Center</h3>
             <div className="p-4 md:p-8 bg-[#05080b] rounded-3xl border border-white/5">
                <TrustCenterMockup />
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
                <span className="text-white/80 font-light leading-relaxed">Implemented the "Liquid Glass" surfaces in <strong>Tailwind CSS</strong> using layered <code>backdrop-filter</code> blur and semantic elevation tokens — tuned specifically to stay performant on lower-end mobile devices.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8925A] mt-2 shrink-0"></div>
                <span className="text-white/80 font-light leading-relaxed">Built the Future Simulator's draggable comparison slider and real-time timeline recalculation using <strong>Radix UI's Slider primitive</strong> + <strong>Framer Motion</strong>.</span>
              </li>
            </ul>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8925A] mt-2 shrink-0"></div>
                <span className="text-white/80 font-light leading-relaxed">Optimized the Liquid Glass rendering pipeline with the frontend engineer — introduced lazy loading and reduced layer count to keep blur effects from tanking frame rate.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8925A] mt-2 shrink-0"></div>
                <span className="text-white/80 font-light leading-relaxed">Wrote the UI logic rules for the <strong>"Prioritization Engine"</strong> myself — deterministic ranking of critical risk vs. minor optimization.</span>
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
                  <p className="text-white/90 font-light leading-relaxed">Cut the path from "open the app" to "take action" from roughly 5 minutes of manual analysis to under 10 seconds.</p>
                </div>
                <div className="flex items-start gap-4">
                  <ArrowRight className="w-5 h-5 text-[#B8925A] shrink-0 mt-0.5" />
                  <p className="text-white/90 font-light leading-relaxed">The Explainability Layer measurably reduced user anxiety around automated advice and became the foundation for the product's internal Trust Score.</p>
                </div>
             </div>
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <ArrowRight className="w-5 h-5 text-[#B8925A] shrink-0 mt-0.5" />
                  <p className="text-white/90 font-light leading-relaxed">Standardized design tokens and components let engineers ship subsequent features roughly 40% faster.</p>
                </div>
                <div className="flex items-start gap-4">
                  <ArrowRight className="w-5 h-5 text-[#B8925A] shrink-0 mt-0.5" />
                  <p className="text-white/90 font-light leading-relaxed">Established "Liquid Glass" as a coherent, reusable design system across the product suite — not a one-off aesthetic.</p>
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
