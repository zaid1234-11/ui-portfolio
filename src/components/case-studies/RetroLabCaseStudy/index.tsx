import React, { useRef } from 'react';
import { 
  Zap, ArrowRight, LayoutDashboard, Target, Users, Monitor, 
  Smartphone, Eye, Layers, Camera, Code, Server, Cpu, CheckCircle
} from 'lucide-react';
import VariableProximity from '../../VariableProximity';
import { CaseStudyLayout, CaseStudySection } from '../../ui/CaseStudyLayout';
import { motion } from 'motion/react';

// Reusable styled placeholder for images
const ImagePlaceholder = ({ label, aspect = "aspect-video" }: { label: string, aspect?: string }) => (
  <div className={`w-full ${aspect} bg-gradient-to-br from-[#1a1c17] to-[#111310] border border-[#9ca777]/20 rounded-2xl flex flex-col items-center justify-center shadow-[inset_0_0_40px_rgba(156,167,119,0.05)] overflow-hidden relative group`}>
    <div className="absolute inset-0 bg-[#9ca777] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
    <Camera className="w-10 h-10 text-[#9ca777]/40 mb-4 group-hover:scale-110 transition-transform duration-500" />
    <span className="font-mono text-[11px] text-[#9ca777]/60 uppercase tracking-[0.2em] px-6 text-center">{label}</span>
  </div>
);

// Tech badge component
const TechBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#9ca777]/10 border border-[#9ca777]/20 text-[#9ca777] font-mono text-xs font-semibold tracking-wider hover:bg-[#9ca777]/20 hover:border-[#9ca777]/40 transition-colors shadow-sm cursor-default">
    {children}
  </span>
);

export default function RetroLabCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);

  const theme = {
    bg: '#111310',
    text: '#e6e8e3',
    accent: '#9ca777' // Olive green
  };

  const techStack = ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'HTML5 Canvas API', 'Framer Motion', 'Figma'];

  return (
    <div ref={containerRef}>
      <CaseStudyLayout theme={theme}>
        
        {/* Header Section */}
        <header className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 sm:gap-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#9ca777]/30 bg-[#9ca777]/10 text-[#9ca777] font-mono text-xs uppercase tracking-widest self-start">
              <span>Case Study</span>
              <span className="w-1 h-1 rounded-full bg-[#9ca777]"></span>
              <span>Web Application</span>
            </div>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight cursor-default text-[#9ca777] drop-shadow-[0_4px_0_rgba(20,22,18,0.8)]">
            <VariableProximity
              label="Advanced Pixel, Dither & Glitch Engine — Real-Time Retro Image Processing in the Browser"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 900, 'opsz' 144"
              containerRef={containerRef}
              radius={150}
              falloff="gaussian"
              fromColor="#e6e8e3"
              toColor="#9ca777"
            />
          </h1>

          <div className="flex flex-wrap gap-3 pt-6 border-t border-[#9ca777]/10">
            {techStack.map(tech => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>

          <div className="pt-8">
            <ImagePlaceholder label="Hero Image Placeholder — split-screen comparison of a high-fidelity image transforming into pixel art" aspect="aspect-[21/9]" />
          </div>
        </header>

        {/* Project Details Grid */}
        <CaseStudySection>
          <div className="bg-[#1a1c17]/50 backdrop-blur-xl border border-[#9ca777]/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <div className="space-y-2">
                <span className="block font-mono text-[10px] text-[#9ca777]/70 uppercase tracking-widest font-bold">Role</span>
                <p className="text-sm text-white/90 font-medium">UI/UX Designer & Frontend Engineer</p>
              </div>
              <div className="space-y-2">
                <span className="block font-mono text-[10px] text-[#9ca777]/70 uppercase tracking-widest font-bold">Duration</span>
                <p className="text-sm text-white/90 font-medium">3 Months</p>
              </div>
              <div className="space-y-2">
                <span className="block font-mono text-[10px] text-[#9ca777]/70 uppercase tracking-widest font-bold">Platform</span>
                <p className="text-sm text-white/90 font-medium">Web App — Responsive</p>
              </div>
              <div className="space-y-2">
                <span className="block font-mono text-[10px] text-[#9ca777]/70 uppercase tracking-widest font-bold">Team</span>
                <p className="text-sm text-white/90 font-medium">Cross-functional</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[#9ca777]/10 space-y-2">
               <span className="block font-mono text-[10px] text-[#9ca777]/70 uppercase tracking-widest font-bold">Focus</span>
               <p className="text-sm text-white/70 font-light leading-relaxed">
                 UI/UX Design · Interaction Design · Design Systems · Frontend Prototyping · Performance-Aware UI Architecture
               </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Snapshot */}
        <CaseStudySection className="space-y-6">
          <h2 className="font-display text-3xl font-bold flex items-center gap-3 drop-shadow-[0_2px_0_rgba(20,22,18,0.8)]">
            <Zap className="w-6 h-6 text-[#9ca777]" />
            Snapshot
          </h2>
          <div className="prose prose-invert max-w-none text-white/70 font-light leading-relaxed space-y-6">
            <p className="text-lg text-white/90 font-medium">
              RetroLab is an <strong>offline-first, browser-based image processing tool</strong> that turns high-fidelity photos into authentic pixel art, dithered graphics, and glitch textures — entirely client-side, with zero server round-trips.
            </p>
            <p>
              I owned the UI/UX end-to-end and worked closely with graphics engineering to translate hard technical constraints (Canvas pixel manipulation, real-time rendering, 60 FPS interaction) into an interface that feels instant, intuitive, and precise.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 list-none pl-0 mt-8">
              <li className="flex items-start gap-3 bg-[#1a1c17]/30 p-4 rounded-xl border border-[#9ca777]/10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#9ca777] mt-2 shrink-0"></div>
                <span><strong>Sub-16ms</strong> preview renders → flawless 60 FPS interaction, zero perceived latency</span>
              </li>
              <li className="flex items-start gap-3 bg-[#1a1c17]/30 p-4 rounded-xl border border-[#9ca777]/10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#9ca777] mt-2 shrink-0"></div>
                <span><strong>100% client-side</strong> processing → zero server cost, zero data-privacy risk</span>
              </li>
              <li className="flex items-start gap-3 bg-[#1a1c17]/30 p-4 rounded-xl border border-[#9ca777]/10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#9ca777] mt-2 shrink-0"></div>
                <span><strong>One design system, three breakpoints</strong> — desktop control panel → tablet drawer → mobile tab bar</span>
              </li>
              <li className="flex items-start gap-3 bg-[#1a1c17]/30 p-4 rounded-xl border border-[#9ca777]/10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#9ca777] mt-2 shrink-0"></div>
                <span><strong>Custom export scaler</strong> — removed a manual Photoshop step from users' workflow</span>
              </li>
            </ul>
          </div>
        </CaseStudySection>

        {/* The Problem */}
        <CaseStudySection className="grid md:grid-cols-12 gap-12 items-start pt-8 border-t border-[#9ca777]/10">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl font-bold drop-shadow-[0_2px_0_rgba(20,22,18,0.8)]">The Problem</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-white/70 font-light leading-relaxed">
            <p>
              Creating authentic retro visuals (Floyd-Steinberg dithering, CRT scanlines, pixel sorting) usually means choosing between two bad options: slow, server-dependent web tools that break creative flow on every parameter tweak, or expensive desktop software with a steep learning curve.
            </p>
            <ul className="space-y-6 pt-4">
              <li className="flex items-start gap-4">
                <Server className="w-5 h-5 text-[#9ca777] shrink-0 mt-1" />
                <div>
                  <strong className="text-white/90">Latency</strong>
                  <p className="mt-1">Server round-trips turn a slider drag into a multi-second wait.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Eye className="w-5 h-5 text-[#9ca777] shrink-0 mt-1" />
                <div>
                  <strong className="text-white/90">Privacy</strong>
                  <p className="mt-1">Uploading proprietary game or client assets to a third-party server is a non-starter for professionals.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Layers className="w-5 h-5 text-[#9ca777] shrink-0 mt-1" />
                <div>
                  <strong className="text-white/90">Complexity</strong>
                  <p className="mt-1">Existing tools expose raw technical parameters with no visual translation layer.</p>
                </div>
              </li>
            </ul>
          </div>
        </CaseStudySection>

        {/* Goals */}
        <CaseStudySection className="space-y-8 pt-8 border-t border-[#9ca777]/10">
          <h2 className="font-display text-3xl font-bold drop-shadow-[0_2px_0_rgba(20,22,18,0.8)]">Goals</h2>
          <div className="bg-[#1a1c17]/50 backdrop-blur-xl border border-[#9ca777]/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#9ca777]/10">
              <div className="p-6 md:p-8 space-y-2 bg-[#9ca777]/5">
                <h4 className="font-mono text-xs text-[#9ca777] uppercase tracking-widest font-bold">Goal</h4>
                <div className="font-display text-xl font-bold text-white/90">Zero friction</div>
                <p className="text-sm text-white/60 font-light mt-4">No login, no upload required — drop an image or start from a sample</p>
              </div>
              <div className="p-6 md:p-8 space-y-2">
                <h4 className="font-mono text-xs text-[#9ca777] uppercase tracking-widest font-bold">Goal</h4>
                <div className="font-display text-xl font-bold text-white/90">Real-time feedback</div>
                <p className="text-sm text-white/60 font-light mt-4">&lt;16ms render on every slider adjustment, no "wait and see"</p>
              </div>
              <div className="p-6 md:p-8 space-y-2 border-t divide-[#9ca777]/10">
                <h4 className="font-mono text-xs text-[#9ca777] uppercase tracking-widest font-bold">Goal</h4>
                <div className="font-display text-xl font-bold text-white/90">Total privacy</div>
                <p className="text-sm text-white/60 font-light mt-4">100% client-side architecture, nothing leaves the browser</p>
              </div>
              <div className="p-6 md:p-8 space-y-2 border-t divide-[#9ca777]/10 bg-[#9ca777]/5">
                <h4 className="font-mono text-xs text-[#9ca777] uppercase tracking-widest font-bold">Goal</h4>
                <div className="font-display text-xl font-bold text-white/90">Clarity & Discoverability</div>
                <p className="text-sm text-white/60 font-light mt-4">Complex graphics parameters mapped to intuitive, visual controls. One-click presets surface powerful algorithms without a manual.</p>
              </div>
            </div>
          </div>
        </CaseStudySection>

        {/* Research & Users */}
        <CaseStudySection className="grid md:grid-cols-12 gap-12 items-start pt-8 border-t border-[#9ca777]/10">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl font-bold drop-shadow-[0_2px_0_rgba(20,22,18,0.8)]">Research & Users</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-white/70 font-light leading-relaxed">
            <p>
              Three personas shaped the design: <strong>indie game developers</strong> batching pixel-perfect assets under game-jam time pressure, <strong>digital artists</strong> hunting for organic, unpredictable textures, and <strong>casual creators</strong> turning personal photos into retro avatars.
            </p>
            <div className="bg-[#1a1c17] p-6 rounded-2xl border-l-2 border-[#9ca777] my-8 shadow-inner">
              <h4 className="font-mono text-[10px] text-[#9ca777] uppercase tracking-widest font-bold mb-4">Recurring pain points from research</h4>
              <ul className="space-y-4">
                <li className="italic">"I can't tell what this slider does until I release it and wait 5 seconds."</li>
                <li className="italic">"When I export my pixel art, my image viewer blurs it into a muddy mess."</li>
                <li className="italic">"The UI gets too cramped on my iPad."</li>
              </ul>
            </div>
            <p>
              <strong>Competitive gap:</strong> no existing tool offered a real-time, 60 FPS split-screen comparison — most buried their best features behind complex menus.
            </p>
          </div>
        </CaseStudySection>

        {/* Information Architecture & Flow */}
        <CaseStudySection className="space-y-8 pt-8 border-t border-[#9ca777]/10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-display text-3xl font-bold drop-shadow-[0_2px_0_rgba(20,22,18,0.8)]">Information Architecture & Flow</h2>
            <p className="text-white/70 font-light leading-relaxed">
              A single-page workspace built around progressive disclosure — the canvas stays primary, controls stay secondary, and complexity reveals itself only as needed.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 py-8">
            {['Drop image', 'Select preset', 'Tweak parameters', 'Compare', 'Export'].map((step, idx, arr) => (
              <React.Fragment key={step}>
                <div className="px-4 py-2 bg-[#9ca777]/10 border border-[#9ca777]/30 rounded-lg text-[#9ca777] font-mono text-sm tracking-wide shadow-sm">
                  {step}
                </div>
                {idx < arr.length - 1 && <ArrowRight className="w-4 h-4 text-[#9ca777]/40" />}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-8">
            <ImagePlaceholder label="Sitemap Placeholder — single-page app structure and control panel groupings" aspect="aspect-[16/6]" />
          </div>
        </CaseStudySection>

        {/* Design System */}
        <CaseStudySection className="space-y-12 pt-8 border-t border-[#9ca777]/10">
          <h2 className="font-display text-3xl font-bold drop-shadow-[0_2px_0_rgba(20,22,18,0.8)]">Design System</h2>
          <p className="text-white/70 font-light text-lg">A visual language built to feel modern and nostalgic at once.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1a1c17]/40 backdrop-blur-md p-6 rounded-2xl border border-[#9ca777]/10 shadow-lg hover:border-[#9ca777]/30 transition-colors">
              <h4 className="font-mono text-xs text-[#9ca777] uppercase tracking-widest font-bold mb-4">Typography</h4>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                Geometric sans-serif (Inter) for UI legibility + a custom monospace pixel font for parameter values, reinforcing the retro theme.
              </p>
            </div>
            <div className="bg-[#1a1c17]/40 backdrop-blur-md p-6 rounded-2xl border border-[#9ca777]/10 shadow-lg hover:border-[#9ca777]/30 transition-colors">
              <h4 className="font-mono text-xs text-[#9ca777] uppercase tracking-widest font-bold mb-4">Color & Grid</h4>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                Dark-mode default (Deep Slate, Charcoal) with neon retro accents (Cyan, Magenta, Phosphor Green) for active states. Tight 8pt structured panels.
              </p>
            </div>
            <div className="bg-[#1a1c17]/40 backdrop-blur-md p-6 rounded-2xl border border-[#9ca777]/10 shadow-lg hover:border-[#9ca777]/30 transition-colors">
              <h4 className="font-mono text-xs text-[#9ca777] uppercase tracking-widest font-bold mb-4">Elevation</h4>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                Flat design, hard 100%-opacity drop shadows instead of soft blurs. Modular components built for high-frequency interaction.
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Key UI/UX & Frontend Decisions */}
        <CaseStudySection className="grid md:grid-cols-12 gap-12 items-start pt-8 border-t border-[#9ca777]/10">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl font-bold drop-shadow-[0_2px_0_rgba(20,22,18,0.8)]">Key Decisions</h2>
          </div>
          <div className="md:col-span-8 space-y-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#9ca777]/20 text-[#9ca777] font-mono text-sm">1</span>
                Real-Time Interactive Scrubbing
              </h3>
              <p className="text-white/70 font-light leading-relaxed pl-11">
                Down-sampled the image during live scrubbing and deferred full-resolution rendering until export — trading a sliver of preview fidelity for zero latency during parameter discovery.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#9ca777]/20 text-[#9ca777] font-mono text-sm">2</span>
                Split-Screen Compare Slider
              </h3>
              <p className="text-white/70 font-light leading-relaxed pl-11">
                A draggable vertical barrier between the original and processed image lets users focus on one detail (an eye, a line of text) and watch the exact pixel transformation happen in real time.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#9ca777]/20 text-[#9ca777] font-mono text-sm">3</span>
                Crisp Export Scaling
              </h3>
              <p className="text-white/70 font-light leading-relaxed pl-11">
                Built a custom nearest-neighbor upscaler (1x–8x) directly into the export flow, so pixel art never gets blurred by default browser or OS interpolation — no secondary tool required.
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Engineering Challenge */}
        <CaseStudySection className="bg-gradient-to-br from-[#1a1c17] to-[#111310] border border-[#9ca777]/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Cpu className="w-48 h-48 text-[#9ca777]" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-6">
            <h2 className="font-display text-3xl font-bold drop-shadow-[0_2px_0_rgba(20,22,18,0.8)] flex items-center gap-3">
              <Code className="w-8 h-8 text-[#9ca777]" />
              Engineering Challenge: 60 FPS Under Heavy Math
            </h2>
            <p className="text-white/80 font-light leading-relaxed text-lg">
              JavaScript is single-threaded, and Floyd-Steinberg error diffusion is expensive. Rather than offloading to a Web Worker (async complexity, memory overhead), the team reused canvas buffers and mutated pixels in-place via <code>Uint8ClampedArray</code>, keeping the architecture simple while eliminating garbage-collection stutter entirely.
            </p>
            <p className="text-white/70 font-light leading-relaxed">
              Understanding how Canvas <code>ImageData</code> works let me design UI constraints — like the live-preview down-sampler — that solved engineering bottlenecks <em>before</em> they became performance bugs, rather than patching them after the fact.
            </p>
          </div>
        </CaseStudySection>

        {/* Key Screens */}
        <CaseStudySection className="space-y-12 pt-8 border-t border-[#9ca777]/10">
          <div className="text-center space-y-4 mb-12">
             <h2 className="font-display text-3xl font-bold drop-shadow-[0_2px_0_rgba(20,22,18,0.8)]">Key Screens</h2>
          </div>

          <div className="space-y-6">
            <h3 className="font-mono text-sm text-[#9ca777] uppercase tracking-widest font-bold">Desktop Workspace</h3>
            <p className="text-white/70 font-light">Dual-column layout, pinned control panel, maximum canvas real estate. Custom pixel-art cursor states on hover.</p>
            <ImagePlaceholder label="Desktop Workspace Placeholder" aspect="aspect-[16/9]" />
          </div>

          <div className="space-y-6 pt-12">
            <h3 className="font-mono text-sm text-[#9ca777] uppercase tracking-widest font-bold">Mobile Studio</h3>
            <p className="text-white/70 font-light">Single-column, swipe-to-scrub controls; an 8-bit themed sliding drawer replaces the desktop panel. Split-compare slider maps to raw touch events for 1:1 finger tracking.</p>
            <div className="max-w-sm mx-auto">
              <ImagePlaceholder label="Mobile Workspace Placeholder" aspect="aspect-[9/19]" />
            </div>
          </div>
        </CaseStudySection>

        {/* Responsive & Accessible by Default */}
        <CaseStudySection className="grid md:grid-cols-2 gap-12 pt-8 border-t border-[#9ca777]/10">
          <div className="space-y-8">
            <h2 className="font-display text-3xl font-bold drop-shadow-[0_2px_0_rgba(20,22,18,0.8)]">Responsive & Accessible by Default</h2>
            <div className="bg-[#1a1c17]/50 backdrop-blur-md rounded-2xl border border-[#9ca777]/10 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <tbody className="divide-y divide-[#9ca777]/10">
                  <tr className="hover:bg-[#9ca777]/5 transition-colors">
                    <td className="py-4 px-6 font-mono text-[10px] text-[#9ca777]/80 uppercase tracking-widest font-bold">Desktop</td>
                    <td className="py-4 px-6 text-sm text-white/80 font-light">Dual-column, full tool access</td>
                  </tr>
                  <tr className="hover:bg-[#9ca777]/5 transition-colors">
                    <td className="py-4 px-6 font-mono text-[10px] text-[#9ca777]/80 uppercase tracking-widest font-bold">Tablet</td>
                    <td className="py-4 px-6 text-sm text-white/80 font-light">Floating, collapsible slide-out panels</td>
                  </tr>
                  <tr className="hover:bg-[#9ca777]/5 transition-colors">
                    <td className="py-4 px-6 font-mono text-[10px] text-[#9ca777]/80 uppercase tracking-widest font-bold">Mobile</td>
                    <td className="py-4 px-6 text-sm text-white/80 font-light">Tabbed, low-height cards, canvas auto-scales</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-6">
             <ul className="space-y-4">
               <li className="flex items-start gap-3 text-white/80 font-light">
                 <CheckCircle className="w-5 h-5 text-[#9ca777] shrink-0" />
                 <span>WCAG AA contrast across text, active components, and workspace background</span>
               </li>
               <li className="flex items-start gap-3 text-white/80 font-light">
                 <CheckCircle className="w-5 h-5 text-[#9ca777] shrink-0" />
                 <span>Full keyboard navigation with arrow-key value increments</span>
               </li>
               <li className="flex items-start gap-3 text-white/80 font-light">
                 <CheckCircle className="w-5 h-5 text-[#9ca777] shrink-0" />
                 <span>44×44px minimum touch targets on all mobile controls</span>
               </li>
               <li className="flex items-start gap-3 text-white/80 font-light">
                 <CheckCircle className="w-5 h-5 text-[#9ca777] shrink-0" />
                 <span>Respects <code>prefers-reduced-motion</code>, defaulting to instant state changes</span>
               </li>
             </ul>
          </div>
        </CaseStudySection>

        {/* Impact */}
        <CaseStudySection className="space-y-8 pt-8 border-t border-[#9ca777]/10">
          <h2 className="font-display text-3xl font-bold drop-shadow-[0_2px_0_rgba(20,22,18,0.8)] text-center mb-12">Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-b from-[#9ca777]/10 to-transparent p-8 rounded-2xl border border-[#9ca777]/20 text-center shadow-lg hover:border-[#9ca777]/40 transition-colors">
              <div className="text-4xl font-display font-bold text-white mb-2">&lt;16ms</div>
              <div className="text-sm text-white/70 font-light">render times on every preview update → consistent 60 FPS interaction</div>
            </div>
            <div className="bg-gradient-to-b from-[#9ca777]/10 to-transparent p-8 rounded-2xl border border-[#9ca777]/20 text-center shadow-lg hover:border-[#9ca777]/40 transition-colors">
              <div className="text-4xl font-display font-bold text-white mb-2">Zero</div>
              <div className="text-sm text-white/70 font-light">latency onboarding — no account, no upload wait, instant results</div>
            </div>
            <div className="bg-gradient-to-b from-[#9ca777]/10 to-transparent p-8 rounded-2xl border border-[#9ca777]/20 text-center shadow-lg hover:border-[#9ca777]/40 transition-colors">
              <div className="text-4xl font-display font-bold text-white mb-2">1 less</div>
              <div className="text-sm text-white/70 font-light">tool in the workflow — crisp export scaling baked in, no Photoshop round-trip</div>
            </div>
          </div>
        </CaseStudySection>

        {/* What I Learned & What's Next */}
        <CaseStudySection className="grid md:grid-cols-2 gap-12 pt-8 border-t border-[#9ca777]/10">
          <div className="space-y-8">
            <h2 className="font-display text-3xl font-bold drop-shadow-[0_2px_0_rgba(20,22,18,0.8)]">What I Learned</h2>
            <ul className="space-y-6">
              <li className="text-white/80 font-light leading-relaxed">
                <strong className="text-[#9ca777] font-semibold block mb-1">Performance is UX.</strong>
                No amount of visual polish compensates for a sluggish tool — designing for the browser's main-thread constraints produced a better product, not a smaller one.
              </li>
              <li className="text-white/80 font-light leading-relaxed">
                <strong className="text-[#9ca777] font-semibold block mb-1">Technical fluency sharpens design decisions.</strong>
                Understanding the dual-buffer canvas setup is what made the split-screen comparison possible in the first place.
              </li>
              <li className="text-white/80 font-light leading-relaxed">
                <strong className="text-[#9ca777] font-semibold block mb-1">Retro is a precision problem, not a style problem.</strong>
                Making nostalgia feel professional came down to typography, spacing, and micro-interaction discipline — not kitsch.
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <h2 className="font-display text-3xl font-bold drop-shadow-[0_2px_0_rgba(20,22,18,0.8)]">What's Next</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 bg-[#1a1c17]/30 p-4 rounded-xl border border-[#9ca777]/10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#9ca777] mt-2 shrink-0"></div>
                <span className="text-white/80 font-light">Interactive palette builder for extracting and constraining custom color palettes</span>
              </li>
              <li className="flex items-start gap-3 bg-[#1a1c17]/30 p-4 rounded-xl border border-[#9ca777]/10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#9ca777] mt-2 shrink-0"></div>
                <span className="text-white/80 font-light">Real-time video dithering (webcam + short MP4 input)</span>
              </li>
              <li className="flex items-start gap-3 bg-[#1a1c17]/30 p-4 rounded-xl border border-[#9ca777]/10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#9ca777] mt-2 shrink-0"></div>
                <span className="text-white/80 font-light">WebGL migration for GPU-accelerated, real-time 4K processing</span>
              </li>
            </ul>
          </div>
        </CaseStudySection>

        {/* Resume Bullets */}
        <CaseStudySection className="space-y-8 pt-16 border-t border-[#9ca777]/10">
          <h2 className="font-mono text-[10px] text-[#9ca777] uppercase tracking-widest font-bold mb-4">Resume Bullets</h2>
          <div className="space-y-4 max-w-4xl">
            {[
              "Designed and helped engineer an offline-first image processing web app, achieving sub-16ms interactive rendering entirely client-side",
              "Built a responsive design system that scales a control-dense desktop tool into a tactile, touch-first mobile experience",
              "Partnered with graphics engineering on Canvas/Uint8ClampedArray performance constraints, directly shaping UI decisions like real-time preview down-sampling",
              "Shipped a custom nearest-neighbor export pipeline, removing a manual Photoshop step from users' workflow"
            ].map((bullet, index) => (
              <div key={index} className="flex items-start gap-4 bg-[#1a1c17]/50 border border-[#9ca777]/5 p-5 rounded-xl hover:bg-[#1a1c17] transition-colors shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#9ca777] mt-2 shrink-0"></div>
                <p className="text-white/80 font-light text-sm leading-relaxed">{bullet}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>
        
        {/* Summary Footer */}
        <CaseStudySection className="pt-8">
           <div className="p-8 rounded-3xl bg-[#9ca777] text-[#111310] relative overflow-hidden shadow-[0_0_40px_rgba(156,167,119,0.3)]">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none transform translate-x-4 -translate-y-4">
                 <Monitor className="w-64 h-64" />
              </div>
              <div className="relative z-10 max-w-3xl">
                 <h4 className="font-mono text-xs uppercase tracking-widest font-bold mb-4 opacity-80">Summary</h4>
                 <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 italic">"Professional retro graphics processing, directly in your browser."</h3>
                 <p className="font-light leading-relaxed opacity-90 text-sm md:text-base">
                   RetroLab is an offline-first, browser-based tool that transforms images into authentic pixel art and glitch aesthetics in real time. I designed a responsive, touch-optimized interface backed by a client-side rendering architecture — delivering a zero-latency, 60 FPS experience with total data privacy.
                 </p>
              </div>
           </div>
        </CaseStudySection>

      </CaseStudyLayout>
    </div>
  );
}
