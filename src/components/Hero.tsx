import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, Globe } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import InkRevealText from './InkRevealText';
import VariableProximity from './VariableProximity';
import TextType from './TextType';

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      setMousePos({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Framer Motion scroll scrollYProgress target setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Inertial spring smooth scroll progression
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Core Zoom-Out & Translate Upwards Parallax (applied to main interactive block)
  const yHeader = useTransform(springScroll, [0, 1], [0, -150]);
  const scaleHeader = useTransform(springScroll, [0, 1], [1, 0.78]);
  const opacityHeader = useTransform(springScroll, [0, 0.85], [1, 0]);

  // Dynamic Glow Layer: Zoom-In Parallax
  const yGlow = useTransform(springScroll, [0, 1], [0, 220]);
  const scaleGlow = useTransform(springScroll, [0, 1], [1, 1.8]);
  const opacityGlow = useTransform(springScroll, [0, 1], [0.8, 0.1]);

  // Left background element "01": Heavy Zoom-In Parallax
  const yGhostLeft = useTransform(springScroll, [0, 1], [0, -320]);
  const scaleGhostLeft = useTransform(springScroll, [0, 1], [0.9, 1.6]);
  const opacityGhostLeft = useTransform(springScroll, [0, 1], [0.03, 0.08]);

  // Right background element "CRAFT": Heavy Zoom-Out Parallax
  const yGhostRight = useTransform(springScroll, [0, 1], [0, -420]);
  const scaleGhostRight = useTransform(springScroll, [0, 1], [1.3, 0.7]);
  const opacityGhostRight = useTransform(springScroll, [0, 1], [0.02, 0.07]);

  // Extra Parallax Layers: Floating sketched pencil crosses, compass circles, and grid anchors
  const yFloatCross1 = useTransform(springScroll, [0, 1], [0, -280]);
  const yFloatCross2 = useTransform(springScroll, [0, 1], [0, -520]);
  const yFloatCross3 = useTransform(springScroll, [0, 1], [0, -180]);
  const yFloatCross4 = useTransform(springScroll, [0, 1], [0, -620]);

  // Interactive mouse-follow rotation style
  const text3DStyle = {
    transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${mousePos.y * -12}deg) translateZ(30px)`,
    transition: isHovered ? 'none' : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
  };

  const backdropGradientStyle = {
    transform: `translate3d(${mousePos.x * -25}px, ${mousePos.y * -25}px, 0px)`,
    transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
  };

  const stats = [
    { label: 'Specialty', val: 'Digital Craft' },
    { label: 'Est.', val: 'July 2026' },
    { label: 'Role', val: 'Independent' },
  ];

  const techStack = [
    { name: 'Framer Motion', desc: 'Fluid Interfaces' },
    { name: 'React 19 & Vite', desc: 'Next-Gen Performance' },
    { name: 'Liquid Glass', desc: 'Sensory Tactility' },
    { name: 'Minimalist Grid', desc: 'Architectural Balance' },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 bg-obsidian overflow-hidden"
    >
      {/* 1. Heavy Parallax Background Element Left: Zooming IN */}
      <motion.div
        style={{
          y: yGhostLeft,
          scale: scaleGhostLeft,
          opacity: opacityGhostLeft,
        }}
        className="absolute left-[-5%] top-[15%] font-syne text-[26vw] font-black text-mocha/15 select-none pointer-events-none z-0 tracking-tighter leading-none"
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
        className="absolute right-[-8%] top-[25%] font-fraunces italic font-black text-chai/15 select-none pointer-events-none z-0 tracking-tighter leading-none"
      >
        CRAFT
      </motion.div>

      {/* Dynamic Solar Background Glow with scroll-driven zoom in/out */}
      <motion.div
        style={{
          y: yGlow,
          scale: scaleGlow,
          opacity: opacityGlow,
          ...backdropGradientStyle,
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-gradient-to-tr from-mocha/10 via-chai/5 to-transparent blur-[120px] pointer-events-none z-0"
      ></motion.div>

      {/* Sketchbook Grid Background Pattern (using Chai sepia colors for architectural graph paper feel) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(126,105,87,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(126,105,87,0.08)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_85%,transparent_100%)] pointer-events-none z-0"></div>

      {/* Parallax Floating Sketched pencil coordinates and crosshairs */}
      <motion.div
        style={{ y: yFloatCross1 }}
        className="absolute left-[8%] top-[40%] text-sand/35 font-mono text-[9px] tracking-widest pointer-events-none select-none z-0 flex flex-col items-start gap-1"
      >
        <span>+ LAT: 37.7749° N</span>
        <span>+ LNG: 122.4194° W</span>
        <span className="w-16 h-[1px] bg-sand/15 mt-1"></span>
      </motion.div>

      <motion.div
        style={{ y: yFloatCross2 }}
        className="absolute right-[12%] top-[35%] text-sage/40 font-mono text-[10px] tracking-widest pointer-events-none select-none z-0 flex items-center gap-2"
      >
        <span className="text-sm font-light">⌖</span>
        <span>[DRAFT-GRID-ANCHOR]</span>
      </motion.div>

      <motion.div
        style={{ y: yFloatCross3 }}
        className="absolute left-[15%] top-[72%] text-ivory/25 font-display italic text-xs tracking-widest pointer-events-none select-none z-0 flex flex-col items-start"
      >
        <span>Sloop Script Accent</span>
        <span className="font-marker text-lg text-sand/40 transform -rotate-12 mt-1">"Creative Draft"</span>
      </motion.div>

      <motion.div
        style={{ y: yFloatCross4 }}
        className="absolute right-[6%] top-[68%] text-sand/35 font-mono text-[9px] tracking-widest pointer-events-none select-none z-0 flex flex-col items-end gap-1"
      >
        <span>SCALE: 1 : 0.78</span>
        <span className="w-12 h-[1px] bg-sand/15"></span>
        <span>ROT: -2.00°</span>
      </motion.div>

      {/* Top Architectural Draft Header Bar with Variable Proximity and Thick Font */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 md:pt-10">
        <div className="border-t border-b border-[#B8925A]/15 py-3.5 flex items-center justify-between font-display font-black text-[11px] md:text-[13px] tracking-widest text-[#1c1c1b] uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8925A]"></span>
            <VariableProximity
              label="THE DIGITAL DIARY // VOL. 04"
              fromFontVariationSettings="'wght' 500"
              toFontVariationSettings="'wght' 900"
              containerRef={containerRef}
              radius={100}
              falloff="gaussian"
            />
          </div>
          <div className="text-center hidden sm:block pr-36">
            <span className="block tracking-[0.2em] text-[#1c1c1b]">
              <VariableProximity
                label="31 / 12 / 2025"
                fromFontVariationSettings="'wght' 500"
                toFontVariationSettings="'wght' 900"
                containerRef={containerRef}
                radius={100}
                falloff="gaussian"
              />
            </span>
            <span className="text-[10px] text-[#4E4842]/60 tracking-wider block mt-1">
              <VariableProximity
                label="MOMENTS, THOUGHTS & MEMORIES"
                fromFontVariationSettings="'wght' 500"
                toFontVariationSettings="'wght' 900"
                containerRef={containerRef}
                radius={100}
                falloff="gaussian"
              />
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#4E4842]/70">
            <span>
              <VariableProximity
                label="PAGE // 01"
                fromFontVariationSettings="'wght' 500"
                toFontVariationSettings="'wght' 900"
                containerRef={containerRef}
                radius={100}
                falloff="gaussian"
              />
            </span>
            <span className="opacity-40">✦</span>
            <span className="text-[#B8925A]">
              <VariableProximity
                label="ACTIVE"
                fromFontVariationSettings="'wght' 500"
                toFontVariationSettings="'wght' 900"
                containerRef={containerRef}
                radius={100}
                falloff="gaussian"
              />
            </span>
          </div>
        </div>
      </div>

      {/* Main 3D Text Core Layout with integrated Zoom/Parallax Scroll */}
      <motion.div
        style={{
          y: yHeader,
          scale: scaleHeader,
          opacity: opacityHeader,
        }}
        className="relative z-10 max-w-7xl mx-auto w-full my-auto flex flex-col items-center text-center py-12"
      >
        {/* Subtle Decorative Capsule */}
        <div className="mb-6 flex items-center gap-2 bg-[#ECE3D2]/40 border border-[#B8925A]/15 px-4 py-1.5 rounded-full backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#B8925A]" />
          <span className="font-mono text-[9px] tracking-widest text-[#1c1c1b] uppercase">
            Creative Portfolio Edition
          </span>
        </div>

        {/* 3D Extruded Parallax Header responding to mouse interaction */}
        <div
          style={text3DStyle}
          className="select-none cursor-default transition-transform duration-300 transform-gpu relative w-full max-w-4xl"
        >
          {/* Subheader Title */}
          <h2 className="font-sans text-[11px] sm:text-xs text-[#8A9A86] tracking-[0.35em] uppercase mb-4 font-normal">
            <VariableProximity
              label="ZAID"
              fromFontVariationSettings="'wght' 300"
              toFontVariationSettings="'wght' 700"
              containerRef={containerRef}
              radius={80}
              falloff="gaussian"
            />{' '}
            <span className="font-syne font-black text-[#1c1c1b]">
              <VariableProximity
                label="SAIFI"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
                containerRef={containerRef}
                radius={80}
                falloff="gaussian"
              />
            </span>
            <span className="text-[#1c1c1b]/40">
              <VariableProximity
                label="'s"
                fromFontVariationSettings="'wght' 300"
                toFontVariationSettings="'wght' 700"
                containerRef={containerRef}
                radius={80}
                falloff="gaussian"
              />
            </span>
          </h2>

          {/* Layered Heading Stack */}
          <div className="relative flex flex-col items-center justify-center min-h-[180px] sm:min-h-[220px] w-full">
            {/* Backdrop elegant solid block text matching the reference image */}
            <span className="absolute inset-0 flex items-center justify-center font-sans font-black text-[13vw] sm:text-[12vw] md:text-[11vw] lg:text-[130px] tracking-[0.05em] uppercase text-[#1c1c1b]/5 select-none pointer-events-none leading-none">
              <VariableProximity
                label="PORTFOLIO"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
                containerRef={containerRef}
                radius={220}
                falloff="gaussian"
                className="font-sans font-black text-[13vw] sm:text-[12vw] md:text-[11vw] lg:text-[130px] tracking-[0.05em] uppercase text-[#1c1c1b]/5 leading-none"
              />
            </span>

            {/* Foreground: Giant Organic Hand-Painted/Cursive/Ink Brush "Portfolio" Text with underline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col items-center justify-center select-none"
            >
              <h1 className="font-symphonie text-[16vw] sm:text-[13vw] md:text-[11vw] lg:text-[135px] text-[#1c1c1b] leading-none tracking-normal text-center relative transform hover:scale-[1.02] transition-transform duration-300 font-light cursor-pointer">
                <VariableProximity
                  label="Portfolio"
                  fromFontVariationSettings="'wght' 300"
                  toFontVariationSettings="'wght' 800"
                  containerRef={containerRef}
                  radius={180}
                  falloff="gaussian"
                  className="font-symphonie text-[16vw] sm:text-[13vw] md:text-[11vw] lg:text-[135px] text-[#1c1c1b] leading-none tracking-normal text-center font-light"
                />
              </h1>
              
              {/* Hand-drawn ink/brush stroke underline matching the reference image */}
              <div className="w-56 sm:w-72 md:w-80 mt-1 opacity-80 text-[#1c1c1b] flex justify-center">
                <svg viewBox="0 0 400 20" className="w-full h-auto fill-current" preserveAspectRatio="none">
                  {/* Organic distressed brush stroke underline */}
                  <path d="M10,12 C80,14 160,11 240,9 C300,7.5 360,10 390,11.5 C340,13 280,14 220,13.5 C150,13 80,16 10,12 Z" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Minimal Subtext block */}
        <div className="max-w-xl mx-auto mt-6 text-sm md:text-base text-[#4E4842] leading-relaxed font-light min-h-[4rem]">
          <TextType 
            as="p"
            text="Sculpting high-contrast layouts, raw sketch architectures, and tactile grid presentations for brands seeking unforgettable digital prestige."
            typingSpeed={40}
            loop={false}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        {/* Explore Button with a hand-drawn sketch look */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            id="hero-explore-btn"
            onClick={onExploreClick}
            className="group flex items-center gap-2.5 bg-[#1c1c1b] hover:bg-[#FAF6EE] text-[#FAF6EE] hover:text-[#1c1c1b] border-2 border-[#1c1c1b] hover:border-[#1c1c1b] font-display font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-lg cursor-pointer"
          >
            Explore Portfolio
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-300 text-[#B8925A]" />
          </button>
        </div>
      </motion.div>

      {/* Bottom Architectural Draft Bar (Double bordered footer bar styled like reference) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="border-t border-b border-ivory/10 py-4 mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-display font-bold text-[11px] tracking-widest text-ivory-dim/60">
          <div className="flex items-center gap-2">
            <span className="text-chai font-bold">✉</span>
            <a href="mailto:zaidsaifi150105@gmail.com" className="hover:text-ivory transition-colors">
              ZAIDSAIFI150105@GMAIL.COM
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-chai font-bold">☎</span>
            <span className="select-all font-display font-bold text-[12px]">9899582823</span>
          </div>
        </div>

        {/* Bottom Tech-Stack Strip & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
          {/* Left: Design philosophy */}
          <div className="flex flex-col justify-between">
            <span className="font-display font-bold text-[11px] text-ivory-dim/40 uppercase tracking-widest mb-2">
              <VariableProximity
                label="Philosophy"
                fromFontVariationSettings="'wght' 500"
                toFontVariationSettings="'wght' 900"
                containerRef={containerRef}
                radius={100}
                falloff="gaussian"
              />
            </span>
            <p className="text-[13px] font-display font-bold text-ivory-dim/80 leading-relaxed italic">
              <VariableProximity
                label="&quot;Eliminate the noise. Magnify the interaction. Treat the layout as an architect's canvas responding to physical space.&quot;"
                fromFontVariationSettings="'wght' 500"
                toFontVariationSettings="'wght' 900"
                containerRef={containerRef}
                radius={120}
                falloff="gaussian"
              />
            </p>
          </div>

          {/* Center: Tech stack capsules */}
          <div className="flex flex-col">
            <span className="font-display font-bold text-[11px] text-ivory-dim/40 uppercase tracking-widest mb-3">Core Stack Highlights</span>
            <div className="grid grid-cols-2 gap-2">
              {techStack.map((tech, i) => (
                <div key={i} className="flex flex-col bg-brew/40 border border-ivory/5 px-3 py-1.5 rounded-xl">
                  <span className="text-[11px] font-display font-bold text-ivory">{tech.name}</span>
                  <span className="text-[10px] font-display font-bold text-roast/70">{tech.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Studio stats */}
          <div className="flex justify-between md:justify-around items-end">
            {stats.map((stat, i) => (
              <div key={i} className="text-right md:text-left">
                <span className="block font-display font-bold text-[11px] text-ivory-dim/40 uppercase tracking-widest mb-1">
                  <VariableProximity
                    label={stat.label}
                    fromFontVariationSettings="'wght' 500"
                    toFontVariationSettings="'wght' 900"
                    containerRef={containerRef}
                    radius={100}
                    falloff="gaussian"
                  />
                </span>
                <span className="font-display text-lg font-bold text-ivory">
                  <VariableProximity
                    label={stat.val}
                    fromFontVariationSettings="'wght' 600"
                    toFontVariationSettings="'wght' 900"
                    containerRef={containerRef}
                    radius={100}
                    falloff="gaussian"
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
