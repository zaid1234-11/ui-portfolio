import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Sparkles, Globe, Download } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import VariableProximity from './VariableProximity';
import HoverMaskReveal from './HoverMaskReveal';

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.2 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.2 });

  const rotateY = useTransform(smoothMouseX, [-1, 1], [-8, 8]);
  const rotateX = useTransform(smoothMouseY, [-1, 1], [8, -8]);

  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  // Framer Motion scroll scrollYProgress target setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Zoom-Out & Translate Upwards Parallax
  const yHeader = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scaleHeader = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const opacityHeader = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  // Background parallax typography
  const yGhostLeft = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const scaleGhostLeft = useTransform(scrollYProgress, [0, 1], [0.95, 1.3]);
  const opacityGhostLeft = useTransform(scrollYProgress, [0, 1], [0.03, 0.06]);

  const yGhostRight = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const scaleGhostRight = useTransform(scrollYProgress, [0, 1], [1.15, 0.85]);
  const opacityGhostRight = useTransform(scrollYProgress, [0, 1], [0.02, 0.05]);

  const yFloatCross1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yFloatCross2 = useTransform(scrollYProgress, [0, 1], [0, -380]);

  const techStack = [
    { name: 'Figma & Penpot', desc: 'Design Systems & UX' },
    { name: 'React 19 & Next.js', desc: 'Production Frontend' },
    { name: 'TypeScript & Tailwind', desc: 'Component Architecture' },
    { name: 'Motion & Canvas', desc: '60FPS Micro-interactions' },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-16 md:pt-24 pb-10 md:pb-12 px-4 md:px-12 bg-obsidian overflow-hidden"
    >
      {/* 1. Heavy Parallax Background Element Left: Zooming IN */}
      <motion.div
        style={{
          y: yGhostLeft,
          scale: scaleGhostLeft,
          opacity: opacityGhostLeft,
        }}
        className="absolute left-[-4%] top-[18%] font-syne text-[22vw] font-black text-mocha/10 select-none pointer-events-none z-0 tracking-tighter leading-none will-change-transform transform-gpu"
      >
        01
      </motion.div>

      {/* 2. Heavy Parallax Background Element Right: Zooming OUT */}
      <motion.div
        style={{
          y: yGhostRight,
          scale: scaleGhostRight,
          opacity: opacityGhostRight,
        }}
        className="absolute right-[-6%] top-[28%] font-fraunces italic font-black text-chai/10 select-none pointer-events-none z-0 tracking-tighter leading-none will-change-transform transform-gpu"
      >
        STUDIO
      </motion.div>

      {/* Full-screen Hover Mask Reveal Background — softened by 25% for pristine headline legibility */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-45 dark:opacity-35 transition-opacity duration-700">
        <HoverMaskReveal
          imageBase={{ src: isDark ? '/front dark.webp' : '/front.webp', positionX: '50%', positionY: '50%' }}
          imageHover={{ src: '/back.webp', positionX: '50%', positionY: '50%' }}
          radius={140}
          blur={0.6}
          splatRadius={0.06}
          circleBoost={0.5}
          parallax={false}
          pressureIterations={4}
        />
      </div>

      {/* Sketchbook Grid Background Pattern with Soft Center Vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(126,105,87,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(126,105,87,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      {/* Subtle Central Readable Focus Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#FAF6EE]/40 to-[#FAF6EE]/80 dark:via-[#141413]/40 dark:to-[#141413]/80 pointer-events-none z-0"></div>

      {/* Parallax Floating Sketched pencil coordinates and crosshairs — hidden on mobile */}
      <motion.div
        style={{ y: yFloatCross1 }}
        className="hidden lg:flex absolute left-[6%] top-[38%] text-sand/40 font-mono text-[9px] tracking-widest pointer-events-none select-none z-0 flex-col items-start gap-1"
      >
        <span>+ SPEC: PRODUCT ARCHITECTURE</span>
        <span>+ LOC: BANGALORE / MUMBAI</span>
        <span className="w-16 h-[1px] bg-sand/20 mt-1"></span>
      </motion.div>

      <motion.div
        style={{ y: yFloatCross2 }}
        className="hidden lg:flex absolute right-[6%] top-[34%] text-sage/45 font-mono text-[10px] tracking-widest pointer-events-none select-none z-0 items-center gap-2"
      >
        <span className="text-sm font-light text-[#B8925A]">✦</span>
        <span>[FIGMA ↔ REACT 19]</span>
      </motion.div>

      {/* Top Architectural Draft Header Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-2 md:pt-4">
        <div className="border-t border-b border-[#B8925A]/20 py-2.5 md:py-3 flex items-center justify-between font-display font-bold text-[9px] md:text-[12px] tracking-widest text-[#1c1c1b] dark:text-[#FAF6EE] uppercase [text-shadow:0_1px_4px_rgba(250,246,238,0.5)]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8925A]"></span>
            <VariableProximity
              label="ATELIER JOURNAL // 2026"
              fromFontVariationSettings="'wght' 500"
              toFontVariationSettings="'wght' 900"
              containerRef={containerRef}
              radius={100}
              falloff="gaussian"
            />
          </div>
          <div className="text-center hidden sm:block">
            <span className="text-[10px] text-[#4E4842] dark:text-[#ECE3D2]/80 tracking-wider font-mono font-semibold">
              <VariableProximity
                label="COMPLEX SYSTEMS → INTUITIVE INTERFACES"
                fromFontVariationSettings="'wght' 500"
                toFontVariationSettings="'wght' 900"
                containerRef={containerRef}
                radius={100}
                falloff="gaussian"
              />
            </span>
          </div>
          <div className="flex items-center gap-3 text-[#4E4842] dark:text-[#ECE3D2]/80 font-bold">
            <span className="hidden sm:inline font-mono text-[9px] tracking-widest text-[#B8925A]">
              BANGALORE / MUMBAI
            </span>
            <span className="opacity-40">✦</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-mono text-[9px] tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              AVAILABLE
            </span>
          </div>
        </div>
      </div>

      {/* Main Hero Core Layout with 3-Second Recruiter Conversion Hierarchy */}
      <motion.div
        style={{
          y: yHeader,
          scale: scaleHeader,
          opacity: opacityHeader,
        }}
        className="relative z-10 max-w-5xl mx-auto w-full my-auto flex flex-col items-center text-center py-6 md:py-10"
      >
        {/* 1. IDENTITY: Personal Signature / Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center justify-center select-none mb-3 md:mb-4"
        >
          <h1 className={`font-geraldine text-[15vw] sm:text-[11vw] md:text-[8vw] lg:text-[96px] leading-none tracking-normal text-center relative transform hover:scale-[1.02] transition-transform duration-300 font-normal cursor-default ${
            isDark 
              ? 'text-[#FAF6EE] [text-shadow:0_2px_0_rgba(184,146,90,0.5),0_4px_20px_rgba(0,0,0,0.8)]' 
              : 'text-[#20321e] [text-shadow:0_0_24px_rgba(250,246,238,0.8)]'
          }`}>
            <VariableProximity
              label="Zaid Saifi"
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 400"
              fromColor={isDark ? "#FAF6EE" : "#20321e"}
              toColor={isDark ? "#FFFFFF" : "#20321e"}
              containerRef={containerRef}
              radius={160}
              falloff="gaussian"
              className="font-geraldine text-[15vw] sm:text-[11vw] md:text-[8vw] lg:text-[96px] leading-none tracking-normal text-center font-normal"
            />
          </h1>

          {/* Hand-drawn ink brush stroke underline */}
          <div className={`w-44 sm:w-56 md:w-68 -mt-1 flex justify-center ${
            isDark 
              ? 'opacity-85 text-[#FAF6EE] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]' 
              : 'opacity-75 text-[#20321e] drop-shadow-[0_0_10px_rgba(250,246,238,0.8)]'
          }`}>
            <svg viewBox="0 0 400 20" className="w-full h-auto fill-current" preserveAspectRatio="none">
              <path d="M10,12 C80,14 160,11 240,9 C300,7.5 360,10 390,11.5 C340,13 280,14 220,13.5 C150,13 80,16 10,12 Z" />
            </svg>
          </div>
        </motion.div>

        {/* 2. PROFESSIONAL TITLE (Primary Eyebrow Badge) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-4 md:mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B8925A]/40 bg-[#FAF6EE]/90 dark:bg-[#1c1c1b]/80 shadow-xs"
        >
          <span className="text-[#B8925A] text-xs">✦</span>
          <span className="font-mono text-[9.5px] sm:text-[11.5px] font-bold tracking-[0.18em] uppercase text-[#1c1c1b] dark:text-[#FAF6EE]">
            UI/UX DESIGNER · PRODUCT DESIGNER · FRONT-END ENGINEER
          </span>
        </motion.div>

        {/* 3. STRONG VALUE PROPOSITION (Main Headline) */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold leading-[1.14] tracking-tight max-w-4xl text-[#1c1c1b] dark:text-[#FAF6EE] drop-shadow-xs px-2"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          I design digital products that make complex workflows feel simple.
        </motion.h2>

        {/* 4. SUPPORTING TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="max-w-2xl mx-auto mt-4 md:mt-5 text-sm sm:text-base md:text-[16.5px] text-[#4E4842] dark:text-[#ECE3D2]/90 leading-relaxed font-light px-2"
        >
          From fintech and AI products to data-heavy enterprise experiences — I turn complex systems into intuitive, thoughtful interfaces, and bring them to life with modern frontend engineering.
        </motion.p>

        {/* 5. LOCATION / AVAILABILITY BEACON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-5 md:mt-6 inline-flex items-center gap-2 font-mono text-[9.5px] sm:text-[11px] font-bold tracking-widest uppercase text-[#1c1c1b] dark:text-[#FAF6EE] bg-[#FAF6EE] dark:bg-[#1c1c1b] border border-[#B8925A]/40 px-4 py-1.5 rounded-full shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>OPEN TO RELOCATE · BANGALORE / MUMBAI</span>
        </motion.div>

        {/* 6. PRIMARY & SECONDARY ACTION CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-7 md:mt-8 flex flex-wrap justify-center items-center gap-3.5 sm:gap-5"
        >
          {/* Primary CTA */}
          <button
            id="hero-explore-btn"
            onClick={onExploreClick}
            className="group flex items-center gap-2.5 bg-[#1c1c1b] hover:bg-[#FAF6EE] text-[#FAF6EE] hover:text-[#1c1c1b] border-2 border-[#1c1c1b] font-display font-bold text-xs tracking-widest uppercase px-7 sm:px-9 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>VIEW SELECTED WORK</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-300 text-[#B8925A]" />
          </button>

          {/* Secondary CTA */}
          <a
            id="hero-resume-btn"
            href="mailto:zaidsaifi150105@gmail.com?subject=Resume%20Request%20-%20Zaid%20Saifi%20(UI/UX%20Designer%20%C2%B7%20Front-End%20Engineer)&body=Hi%20Zaid,%0A%0AI%20reviewed%20your%20portfolio%20and%20would%20love%20to%20review%20your%20detailed%20resume%20for%20an%20open%20role.%0A%0ACompany:%20%0ARole:%20"
            className="group flex items-center gap-2 bg-[#FAF6EE] dark:bg-[#1c1c1b] hover:bg-[#1c1c1b] hover:text-[#FAF6EE] text-[#1c1c1b] dark:text-[#FAF6EE] border-2 border-[#1c1c1b]/25 dark:border-[#B8925A]/40 hover:border-[#1c1c1b] font-display font-bold text-xs tracking-widest uppercase px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#B8925A] group-hover:translate-y-0.5 transition-transform duration-300" />
            <span>DOWNLOAD RESUME</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom Architectural Draft Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
        <div className="border-t border-b border-[#B8925A]/20 py-2.5 md:py-3 mb-4 md:mb-6 flex flex-col sm:flex-row justify-between items-center gap-2.5 md:gap-4 font-display font-bold text-[10px] md:text-[11px] tracking-widest text-[#4E4842] dark:text-[#ECE3D2]/80">
          <div className="flex items-center gap-2">
            <span className="text-[#B8925A] font-bold">✉</span>
            <a href="mailto:zaidsaifi150105@gmail.com" className="hover:text-[#1c1c1b] dark:hover:text-[#FAF6EE] transition-colors truncate">
              ZAIDSAIFI150105@GMAIL.COM
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#B8925A] font-bold">☎</span>
            <span className="select-all font-display font-bold text-[11px] md:text-[12px]">+91 9899582823</span>
          </div>
        </div>

        {/* Bottom Tech-Stack Strip & Positioning */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 pt-1">
          {/* Left: Design Philosophy */}
          <div className="flex flex-col justify-between">
            <span className="font-display font-bold text-[11px] text-[#4E4842]/80 dark:text-[#ECE3D2]/70 uppercase tracking-widest mb-1.5">
              <VariableProximity
                label="Core Philosophy"
                fromFontVariationSettings="'wght' 500"
                toFontVariationSettings="'wght' 900"
                containerRef={containerRef}
                radius={100}
                falloff="gaussian"
              />
            </span>
            <p className="text-[12.5px] font-display font-bold text-[#1c1c1b] dark:text-[#FAF6EE] leading-relaxed italic">
              <VariableProximity
                label="&quot;Turning complex workflows and dense data architecture into frictionless, memorable digital interactions.&quot;"
                fromFontVariationSettings="'wght' 500"
                toFontVariationSettings="'wght' 900"
                containerRef={containerRef}
                radius={120}
                falloff="gaussian"
              />
            </p>
          </div>

          {/* Center: Core Capabilities */}
          <div className="flex flex-col">
            <span className="font-display font-bold text-[11px] text-[#4E4842]/80 dark:text-[#ECE3D2]/70 uppercase tracking-widest mb-2.5">
              Core Capabilities
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {techStack.map((tech, i) => (
                <div key={i} className="flex flex-col bg-[#FAF6EE]/80 dark:bg-[#1c1c1b]/80 border border-[#B8925A]/20 px-3 py-1.5 rounded-lg shadow-2xs">
                  <span className="text-[11px] font-display font-bold text-[#1c1c1b] dark:text-[#FAF6EE]">{tech.name}</span>
                  <span className="text-[9.5px] font-display font-medium text-[#4E4842] dark:text-[#ECE3D2]/70">{tech.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Studio Positioning */}
          <div className="flex justify-between md:justify-around items-end">
            <div className="text-left">
              <span className="block font-display font-bold text-[10px] text-[#4E4842]/80 dark:text-[#ECE3D2]/70 uppercase tracking-widest mb-1">
                Domain Focus
              </span>
              <span className="font-display text-base font-bold text-[#1c1c1b] dark:text-[#FAF6EE]">
                Fintech & AI UX
              </span>
            </div>
            <div className="text-right md:text-left">
              <span className="block font-display font-bold text-[10px] text-[#4E4842]/80 dark:text-[#ECE3D2]/70 uppercase tracking-widest mb-1">
                Availability
              </span>
              <span className="font-display text-base font-bold text-emerald-700 dark:text-emerald-400">
                Immediate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
