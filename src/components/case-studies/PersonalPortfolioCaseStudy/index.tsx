import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowLeft, ExternalLink, ArrowRight, CheckCircle2, User, Clock, Layout, Users, Settings, Wrench, Layers } from 'lucide-react';
import { CaseStudyLayout, CaseStudySection } from '../../ui/CaseStudyLayout';
import { SectionHeader } from '../../ui/SectionHeader';
import VariableProximity from '../../VariableProximity';
import SitemapDiagram from './components/SitemapDiagram';
import DesignSystemShowcase from './components/DesignSystemShowcase';

const ImagePlaceholder = ({ label, aspect = "aspect-video" }: any) => (
  <div className={`w-full ${aspect} bg-gradient-to-br from-[#1a1c17] to-[#111310] border border-[#9ca777]/20 rounded-2xl flex flex-col items-center justify-center shadow-[inset_0_0_40px_rgba(156,167,119,0.05)] overflow-hidden relative group`}>
    <div className="absolute inset-0 bg-[#9ca777] opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
    <span className="font-mono text-xs tracking-widest text-[#9ca777]/60 uppercase">{label}</span>
  </div>
);

export default function PersonalPortfolioCaseStudy() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.5 });
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.95]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0.3]);

  return (
    <CaseStudyLayout theme={{ bg: '#1c1c1b', text: '#FAF6EE', accent: '#B8925A' }}>
      {/* 1. Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-end pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,146,90,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 space-y-8"
        >
          <div className="space-y-4 max-w-4xl">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#B8925A] bg-[#B8925A]/10 px-3 py-1.5 rounded-full border border-[#B8925A]/20">
              System Architecture & Design
            </span>
            <div className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-[#FAF6EE] uppercase overflow-hidden">
              <VariableProximity
                label="Cinematic Developer Portfolio"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
                containerRef={React.createRef()}
                radius={100}
                falloff="gaussian"
              />
            </div>
            <p className="text-xl md:text-2xl text-[#ECE3D2]/70 font-light max-w-2xl leading-relaxed">
              A living digital product, not a static resume — designed and built end-to-end in four weeks.
            </p>
          </div>

          <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl mt-12 bg-[#1a1c17]">
            <img 
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop" 
              alt="Cinematic Portfolio Hero" 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(184,146,90,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(184,146,90,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] mix-blend-overlay" />
          </div>
        </motion.div>
      </section>

      {/* 2. Project Details Grid */}
      <CaseStudySection>
        <SectionHeader kicker="01 - Metadata" title="Project Details" className="mb-8" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 pt-8 border-t border-white/10">
          {[
            { icon: User, label: "Role", value: "Product Designer & Frontend Engineer" },
            { icon: Clock, label: "Duration", value: "4 Weeks" },
            { icon: Layout, label: "Platform", value: "Web (Responsive)" },
            { icon: Users, label: "Team", value: "Solo" },
            { icon: Settings, label: "Responsibilities", value: "End-to-End Design, Engineering, Motion" },
            { icon: Wrench, label: "Tech Stack", value: "Vite, React 18, TS, Tailwind, Framer Motion" }
          ].map((item, i) => (
            <div key={i} className="space-y-3">
              <item.icon className="w-5 h-5 text-[#B8925A]" />
              <div className="space-y-1">
                <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest">{item.label}</p>
                <p className="text-sm text-white/90 font-medium leading-snug">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* 3. Overview */}
      <CaseStudySection>
        <SectionHeader kicker="02 - Synopsis" title="Overview" className="mb-8" />
        <p className="text-lg md:text-xl text-[#ECE3D2]/80 leading-relaxed font-light">
          Most developer portfolios are static resumes with a coat of paint. I designed and built mine as a <strong className="text-white font-medium">living product</strong> — a motion-rich, story-driven experience that proves interaction design and frontend craft in context, rather than describing them in bullet points. It's built to do double duty: convert a recruiter's first 3 seconds of attention, and hold up to a design director's deepest scrutiny.
        </p>
      </CaseStudySection>

      {/* 4. The Problem */}
      <CaseStudySection>
        <SectionHeader kicker="03 - Context" title="The Problem" className="mb-8" />
        <p className="text-lg md:text-xl text-[#ECE3D2]/80 leading-relaxed font-light">
          Standard portfolios suffer from identical architectures and passive UX. They rely on dense text case studies that nobody reads, and standard scroll-jacking that breaks user control. My goal was to build a system that acts as a true demonstration of craft — performant, physically grounded, and highly interactive — while remaining fully accessible and natively responsive.
        </p>
      </CaseStudySection>

      {/* 5. Design Goals */}
      <CaseStudySection>
        <SectionHeader kicker="04 - Strategy" title="Design Goals" className="mb-8" />
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Tactile Materiality", desc: "Use noise, layered gradients, and distinct physics (springs, dampening) to make digital elements feel physically grounded." },
            { title: "Narrative Pacing", desc: "Control the reveal of information using scroll-linked animations, preventing cognitive overload." },
            { title: "Systematic Scalability", desc: "Treat the portfolio as a scalable SaaS product. Case studies should be modular, JSON-driven components, not bespoke hardcoded pages." },
            { title: "Zero-Compromise Performance", desc: "Achieve 90+ Lighthouse scores despite heavy Canvas and WebGL usage through dynamic imports and strict rendering control." }
          ].map((goal, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <h4 className="font-display font-bold text-xl text-white mb-3 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B8925A]" />
                {goal.title}
              </h4>
              <p className="text-white/60 leading-relaxed">{goal.desc}</p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* 6. Information Architecture */}
      <CaseStudySection>
        <SectionHeader kicker="05 - Structure" title="Information Architecture" className="mb-8" />
        <p className="text-lg text-[#ECE3D2]/80 leading-relaxed font-light mb-8">
          The site abandons the classic "hamburger menu" for an always-accessible spatial navigation model, prioritizing immediate access to work and reducing click depth.
        </p>
        <SitemapDiagram />
      </CaseStudySection>

      {/* 7. Design System */}
      <CaseStudySection>
        <SectionHeader kicker="06 - Tokens" title="Design System & Component Engineering" className="mb-8" />
        <p className="text-lg text-[#ECE3D2]/80 leading-relaxed font-light mb-8">
          The visual language relies on a stark "Midnight & Gold" palette, prioritizing contrast and typography over excessive color.
        </p>
        <DesignSystemShowcase />
      </CaseStudySection>

      {/* 8. Key UX Decisions */}
      <CaseStudySection>
        <SectionHeader kicker="07 - Execution" title="Key UX Decisions" className="mb-8" />
        <div className="space-y-16">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-4">
              <h3 className="font-display font-bold text-2xl text-white">1. The Interactive Archive</h3>
              <p className="text-white/70 leading-relaxed">
                Instead of a standard grid, the work gallery is designed as a tactile file archive. Project cards behave like physical folders, stacking and sorting based on user hover states. This transforms a mundane list into an engaging discovery mechanic.
              </p>
            </div>
            <div className="md:col-span-7">
              <ImagePlaceholder label="Archive Interaction Preview" aspect="aspect-video" />
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center md:flex-row-reverse">
            <div className="md:col-span-7 md:order-last">
              <ImagePlaceholder label="Variable Proximity Demo" aspect="aspect-video" />
            </div>
            <div className="md:col-span-5 space-y-4">
              <h3 className="font-display font-bold text-2xl text-white">2. Variable Typography</h3>
              <p className="text-white/70 leading-relaxed">
                The primary headings use a custom-built Variable Proximity component. As the user's cursor moves across the screen, the font weight shifts dynamically based on cursor distance. It creates an immediate, visceral connection between the user's physical input and the digital interface.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-4">
              <h3 className="font-display font-bold text-2xl text-white">3. Accessible Motion</h3>
              <p className="text-white/70 leading-relaxed">
                While the site is heavily animated, every motion component checks for <code>prefers-reduced-motion</code>. If enabled, spring physics gracefully degrade to static layouts or simple opacity fades, ensuring compliance without sacrificing the core aesthetic.
              </p>
            </div>
            <div className="md:col-span-7">
              <ImagePlaceholder label="Reduced Motion Fallback State" aspect="aspect-video" />
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* 9. Frontend Engineering Highlights */}
      <CaseStudySection>
        <SectionHeader kicker="08 - Architecture" title="Frontend Engineering Highlights" className="mb-8" />
        <div className="space-y-6">
          {[
            { title: "Custom React Hooks", desc: "Built specialized hooks for scroll tracking, cursor proximity, and WebGL context management to keep the component tree clean." },
            { title: "Tailwind Extension", desc: "Heavily extended the Tailwind config with custom bezier curves, gradient stops, and noise overlays to avoid repetitive arbitrary values in JSX." },
            { title: "Framer Motion Architecture", desc: "Implemented a unified motion layout system. Using layoutId across the app allows components to seamlessly transition between the main gallery and individual case study routes without unmounting." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="mt-1">
                <Layers className="w-6 h-6 text-[#B8925A]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* 10. Impact & Results */}
      <CaseStudySection>
        <SectionHeader kicker="09 - Outcomes" title="Impact & Results" className="mb-8" />
        <div className="bg-[#B8925A]/10 border border-[#B8925A]/30 p-8 md:p-12 rounded-3xl text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-[#ECE3D2] font-medium leading-relaxed">
            The portfolio acts as my primary lead-generation tool, significantly increasing inbound interview requests and shortening the technical screening process, as the site itself serves as the technical test.
          </p>
        </div>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
