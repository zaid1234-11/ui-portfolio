import React, { useState, useRef } from 'react';
import { Layers, Code, Zap, Award, Download, Check, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { TIMELINE, SKILL_GROUPS } from '../data';
import AnimatedSignature from './AnimatedSignature';
import VariableProximity from './VariableProximity';

// --- Handdrawn Doodle Components in the spirit of Image 2 with Scroll Reactivity ---

interface ScrollProps {
  scrollProgress: any;
}

const DeadSmileDoodle = ({ scrollProgress }: ScrollProps) => {
  const y = useTransform(scrollProgress, [0, 1], [30, -30]);
  const scale = useTransform(scrollProgress, [0, 0.5, 1], [0.85, 1.15, 0.95]);
  const rotate = useTransform(scrollProgress, [0, 1], [-12, 12]);

  return (
    <motion.div
      style={{ y, scale, rotate }}
      className="absolute -top-12 -left-8 w-16 h-16 select-none pointer-events-none drop-shadow-md z-20"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full text-[#B8925A] stroke-[3] fill-none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* Left X eye */}
        <line x1="20" y1="35" x2="40" y2="55" />
        <line x1="40" y1="35" x2="20" y2="55" />
        {/* Right X eye */}
        <line x1="60" y1="35" x2="80" y2="55" />
        <line x1="80" y1="35" x2="60" y2="55" />
        {/* Smiling mouth */}
        <path d="M 25,70 Q 50,92 75,70" />
      </svg>
    </motion.div>
  );
};

const TopFlameDoodle = ({ scrollProgress }: ScrollProps) => {
  const y = useTransform(scrollProgress, [0, 1], [-50, 50]);
  const scale = useTransform(scrollProgress, [0, 0.5, 1], [0.75, 1.2, 0.8]);

  return (
    <motion.div
      style={{ y, scale }}
      className="absolute -top-20 left-12 flex flex-col items-center select-none pointer-events-none z-20"
    >
      <svg viewBox="0 0 60 80" className="w-9 h-12 stroke-[2.5] fill-none text-[#1c1c1b] drop-shadow-sm" stroke="currentColor" strokeLinecap="round">
        <path d="M 30,75 C 5,70 8,35 30,2 C 52,35 55,70 30,75 Z" />
        <path d="M 30,65 C 15,60 18,42 30,20 C 42,42 45,60 30,65 Z" />
      </svg>
      <span className="absolute top-6 text-[9px] font-mono font-bold text-[#1c1c1b] tracking-widest">1</span>
    </motion.div>
  );
};

const BottomFlamePinkDoodle = ({ scrollProgress }: ScrollProps) => {
  const y = useTransform(scrollProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollProgress, [0, 0.5, 1], [0.8, 1.15, 0.85]);

  return (
    <motion.div
      style={{ y, scale }}
      className="absolute -bottom-12 -left-8 w-24 h-28 select-none pointer-events-none drop-shadow-md z-20"
    >
      <svg viewBox="0 0 100 120" className="w-full h-full text-[#8A9A86] stroke-[3.5] fill-none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 50,110 C 20,110 8,75 35,35 C 45,50 50,25 50,25 C 55,55 60,60 70,40 C 92,75 80,110 50,110 Z" />
        <path d="M 50,100 C 35,100 25,82 40,62 C 45,72 50,72 50,52 C 55,72 60,72 65,62 C 75,82 65,100 50,100 Z" />
      </svg>
    </motion.div>
  );
};

const StarburstDoodle = ({ scrollProgress }: ScrollProps) => {
  const scale = useTransform(scrollProgress, [0, 0.5, 1], [0.6, 1.3, 0.6]);
  const rotate = useTransform(scrollProgress, [0, 1], [0, 180]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="absolute -right-8 top-1/4 w-10 h-10 select-none pointer-events-none z-20"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full text-[#1c1c1b] stroke-[3] fill-none" stroke="currentColor" strokeLinecap="round">
        <line x1="50" y1="10" x2="50" y2="90" />
        <line x1="10" y1="50" x2="90" y2="50" />
        <line x1="22" y1="22" x2="78" y2="78" />
        <line x1="78" y1="22" x2="22" y2="78" />
      </svg>
    </motion.div>
  );
};

const RotatingTextBadge = ({ scrollProgress }: ScrollProps) => {
  const rotate = useTransform(scrollProgress, [0, 1], [0, 240]);

  return (
    <div className="absolute -left-12 bottom-6 w-24 h-24 select-none pointer-events-none z-20">
      <motion.svg viewBox="0 0 100 100" style={{ rotate }} className="w-full h-full">
        <path
          id="circlePath"
          d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          fill="transparent"
        />
        <text className="font-mono text-[5.8px] uppercase fill-[#1c1c1b]/80 tracking-[0.25em] font-black">
          <textPath href="#circlePath" startOffset="0%">
            DESIGNER • DEVELOPER • ARTIST • CREATIVE •
          </textPath>
        </text>
      </motion.svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-[#B8925A] animate-pulse"></div>
      </div>
    </div>
  );
};

const AboutMeScribble = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={containerRef} className="absolute -top-20 left-16 select-none z-20">
      <span className="font-display italic text-3xl md:text-4xl text-[#1c1c1b] font-bold relative inline-block tracking-wide cursor-pointer">
        <VariableProximity
          label="About Me"
          fromFontVariationSettings="'wght' 400"
          toFontVariationSettings="'wght' 800"
          containerRef={containerRef}
          radius={120}
          falloff="gaussian"
          className="font-display italic font-bold"
        />
        <svg className="absolute -bottom-2 -left-2 w-[115%] h-3 text-[#B8925A] stroke-[2] fill-none pointer-events-none" stroke="currentColor">
          <path d="M 5,5 Q 55,11 110,6 T 5,9" strokeLinecap="round" />
        </svg>
      </span>
    </div>
  );
};

export default function About() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Initialize scroll tracking inside the biography container
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001,
  });

  // Polaroid frame-level transitions: smooth scaling up as it enters viewport, and rolling tilt!
  const polaroidY = useTransform(springScroll, [0, 1], [60, -60]);
  const polaroidScale = useTransform(springScroll, [0, 0.5, 1], [0.85, 1.05, 0.9]);
  const polaroidRotate = useTransform(springScroll, [0, 1], [-8, 6]);

  // Photo Zoom inside: OPPOSES the polaroid scale (Ken Burns perspective parallax!)
  const innerPhotoScale = useTransform(springScroll, [0, 1], [1.25, 1.0]);

  const handleDownloadCV = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 3000);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Design & Motion':
        return <Layers className="w-4 h-4 text-pink-500" />;
      case 'Frontend Engineering':
        return <Code className="w-4 h-4 text-white" />;
      case 'Creative Technology':
        return <Zap className="w-4 h-4 text-pink-500" />;
      default:
        return <Award className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative lg:pt-24 lg:pb-32 pt-20 pb-28 px-6 md:px-12 bg-transparent overflow-hidden"
    >
      {/* Background Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(184,146,90,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(184,146,90,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto pl-6 md:pl-10">
        
        {/* Overhaul Core Grid: Collage and Typo details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-28">
          
          {/* Left Collage Column (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[440px] pt-12">
            
            {/* Artistic Doodles and SVGs reacting with deep scrolling parallax */}
            <AboutMeScribble />
            <DeadSmileDoodle scrollProgress={springScroll} />
            <TopFlameDoodle scrollProgress={springScroll} />
            <BottomFlamePinkDoodle scrollProgress={springScroll} />
            <StarburstDoodle scrollProgress={springScroll} />
            <RotatingTextBadge scrollProgress={springScroll} />

            {/* Asymmetrical side marker "L" */}
            <div className="absolute right-0 bottom-4 font-display text-[110px] font-extrabold text-[#1c1c1b]/[0.03] select-none pointer-events-none tracking-tighter leading-none">
              L
            </div>

            {/* Tilted Polaroid Frame: reacting with scale, translation, and rotational scroll-driven parameters */}
            <motion.div
              style={{
                y: polaroidY,
                scale: polaroidScale,
                rotate: polaroidRotate,
              }}
              className="relative bg-[#1c1c1b] p-4 pb-12 shadow-[0_20px_50px_rgba(28,28,27,0.15)] border border-[#B8925A]/15 max-w-[310px] w-full rounded-sm transition-shadow duration-500 hover:shadow-2xl z-10"
            >
              {/* Grayscale Portrait */}
              <div className="aspect-[4/5] w-full overflow-hidden bg-stone-900 border border-white/5 relative">
                <motion.img
                  style={{
                    scale: innerPhotoScale,
                  }}
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
                  alt="Zaid Saifi Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-[1.12] brightness-[0.93] transition-all duration-700 ease-out hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1b]/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>
              </div>
              
              {/* Polaroid bottom border felt-tip ink text */}
              <div className="mt-5 flex flex-row justify-between items-center px-1">
                <div className="font-mono text-[10px] font-black text-[#FAF6EE] tracking-widest uppercase select-none">
                  DESIGN ARCHIVE
                </div>
                <div className="font-mono text-[9px] font-black text-[#FAF6EE] tracking-widest uppercase select-none">
                  EDITION: 2026
                </div>
              </div>

            </motion.div>

          </div>

          {/* Right Typography & Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Punchy Block Header from Image 2 */}
            <div className="relative inline-block">
              <h3 className="font-display font-bold text-7xl sm:text-8xl md:text-[95px] leading-none text-[#1c1c1b] tracking-tighter">
                HI!!
              </h3>
              {/* Decorative gold dot detail */}
              <div className="absolute -right-8 bottom-3 w-4 h-4 rounded-full bg-[#B8925A] animate-ping"></div>
            </div>

            <p className="text-lg md:text-xl text-[#4E4842] font-medium leading-relaxed max-w-xl italic">
              My name is Zaid Saifi, I'm a UI/UX designer, developer, and creative technologist.
            </p>

            {/* Paragraphs with playful serif drop-ins from Image 1 & 2 */}
            <div className="space-y-6 text-sm md:text-base text-[#4E4842]/90 leading-relaxed font-light max-w-xl">
              <p>
                <span className="font-display text-2xl md:text-3xl italic font-bold text-[#B8925A] mr-1.5 align-middle leading-none tracking-tight">
                  Ever since
                </span>{' '}
                I remember, I've had a profound passion for visual communication, bridging raw human feelings with clean, performant full-stack interactive code.
              </p>
              <p>
                <span className="font-display text-2xl md:text-3xl italic font-bold text-[#B8925A] mr-1.5 align-middle leading-none tracking-tight">
                  I live to
                </span>{' '}
                discover, experiment, and craft immersive digital experiences that leave a lasting impact.
              </p>
            </div>

            {/* Animated Calligraphy Sign-off Signature */}
            <div className="flex justify-start max-w-xl pl-2">
              <AnimatedSignature />
            </div>

            {/* Pill-shaped Contact Info Stripe matching the Image 2 bottom layout */}
            <div className="pt-6 border-t border-[#B8925A]/15 flex flex-wrap items-center gap-3">
              <a 
                href="mailto:zaidsaifi150105@gmail.com" 
                className="bg-[#1c1c1b] hover:bg-[#FAF6EE] border border-[#1c1c1b] px-4 py-2 rounded-full font-mono text-[10px] text-[#FAF6EE] hover:text-[#1c1c1b] tracking-widest transition-all duration-300 shadow"
              >
                zaidsaifi150105@gmail.com
              </a>
              <span className="text-[#B8925A] select-none text-[10px]">✦</span>
              <a 
                href="https://github.com/zaid1234-11" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-[#1c1c1b] hover:bg-[#FAF6EE] border border-[#1c1c1b] px-4 py-2 rounded-full font-mono text-[10px] text-[#FAF6EE] hover:text-[#1c1c1b] tracking-widest transition-all duration-300 shadow"
              >
                github.com/zaid1234-11
              </a>
              <span className="text-[#B8925A] select-none text-[10px]">✦</span>
              <a 
                href="https://linkedin.com/in/zaidsaifiai" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-[#1c1c1b] hover:bg-[#FAF6EE] border border-[#1c1c1b] px-4 py-2 rounded-full font-mono text-[10px] text-[#FAF6EE] hover:text-[#1c1c1b] tracking-widest transition-all duration-300 shadow"
              >
                linkedin.com/in/zaidsaifiai
              </a>
            </div>

          </div>

        </div>

        {/* Dynamic Skills Bento Grid */}
        <div className="mb-24 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8925A]"></span>
            <span className="font-mono text-[10px] text-[#4E4842]/60 uppercase tracking-widest">
              CORE CAPABILITIES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.id}
                className="liquid-glass-card p-6 rounded-xl flex flex-col justify-between transition-all duration-300 group shadow-lg"
              >
                <div className="flex items-center gap-2 mb-4">
                  {getCategoryIcon(group.category)}
                  <span className="text-xs font-display font-bold text-[#FAF6EE] tracking-tight">{group.category}</span>
                </div>

                <ul className="space-y-2.5">
                  {group.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-1.5 font-mono text-[9px] text-[#ECE3D2]/80">
                      <span className="text-[#B8925A] font-bold select-none group-hover:scale-125 transition-transform">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Chronology of Growth Timeline */}
        <div className="border-t border-[#B8925A]/15 pt-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-16">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8925A]"></span>
              <span className="font-mono text-[10px] text-[#4E4842]/60 uppercase tracking-widest">
                THE CHRONOLOGY OF GROWTH
              </span>
            </div>

            {/* Resume CV Download Action */}
            <button
              id="download-resume-btn"
              onClick={handleDownloadCV}
              className="flex items-center justify-center gap-2 bg-[#1c1c1b] hover:bg-[#FAF6EE] border-2 border-[#1c1c1b] hover:text-[#1c1c1b] text-[#FAF6EE] text-[9.5px] tracking-widest uppercase font-bold px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-lg"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 animate-bounce" />
                  CV DOWNLOADED
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-[#B8925A]" />
                  DOWNLOAD RESUME
                </>
              )}
            </button>
          </div>

          <div className="relative border-l-2 border-dashed border-[#B8925A]/30 ml-4 md:ml-32 pl-8 md:pl-12 space-y-12">
            {TIMELINE.map((node) => (
              <div key={node.id} className="relative group">
                
                {/* Visual Connector Dot - Styled matching Image 2 */}
                <div className="absolute -left-[39px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full border border-[#B8925A] bg-[#FAF6EE] flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-[#B8925A]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1c1c1b]"></div>
                </div>

                {/* Date Left Margin Label */}
                <div className="md:absolute md:-left-[150px] md:top-1 font-mono text-xs text-[#B8925A] font-semibold tracking-wider mb-2 md:mb-0">
                  {node.year}
                </div>

                {/* Content block */}
                <div className="space-y-2 liquid-glass-card p-6 rounded-xl transition-all duration-300 shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-display text-lg font-bold text-[#FAF6EE] tracking-tight">
                      {node.role}
                    </h4>
                    <span className="font-mono text-[9px] text-[#B8925A] bg-white/10 border border-white/5 px-2.5 py-0.5 rounded-full self-start sm:self-auto uppercase tracking-wider font-bold">
                      {node.company}
                    </span>
                  </div>
                  <p className="text-xs text-[#ECE3D2]/80 leading-relaxed font-light">
                    {node.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
