import React, { useState, useRef } from 'react';
import { Layers, Code, Zap, Award, Download, Check, Sparkles, ExternalLink } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { TIMELINE, SKILL_GROUPS } from '../data';
import AnimatedSignature from './AnimatedSignature';
import VariableProximity from './VariableProximity';
import AreasOfPractice from './AreasOfPractice';

// --- Handdrawn Doodle Components in the spirit of Image 2 with Scroll Reactivity ---

interface ScrollProps {
  scrollProgress: any;
}

const RetroStarDoodle = ({ scrollProgress }: ScrollProps) => {
  const y = useTransform(scrollProgress, [0, 1], [30, -30]);
  const scale = useTransform(scrollProgress, [0, 0.5, 1], [0.85, 1.15, 0.95]);
  const rotate = useTransform(scrollProgress, [0, 1], [-12, 12]);

  return (
    <motion.div
      style={{ y, scale, rotate }}
      className="absolute -top-12 -left-8 w-20 h-20 select-none pointer-events-none drop-shadow-md z-20"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full text-[#1c1c1b] fill-current">
        <path d="M50 0 L58 35 L93 25 L65 50 L93 75 L58 65 L50 100 L42 65 L7 75 L35 50 L7 25 L42 35 Z" />
      </svg>
    </motion.div>
  );
};

const TimelineNode = ({ node, index }: { node: typeof TIMELINE[0]; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect: nodes float upwards slightly faster than the scroll, fading in/out
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className="relative group">
      {/* Visual Connector Dot */}
      <div className="absolute -left-[39px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full border border-[#B8925A] bg-[#FAF6EE] flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-[#B8925A]">
        <div className="w-1.5 h-1.5 rounded-full bg-[#1c1c1b]"></div>
      </div>

      {/* Date Left Margin Label */}
      <div className="md:absolute md:-left-[180px] md:top-1 font-display text-sm text-[#B8925A] font-bold tracking-wider mb-2 md:mb-0">
        {node.year}
      </div>

      {/* Content block */}
      <div className="space-y-4 liquid-glass-card p-6 rounded-xl transition-all duration-300 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h4 className="font-display text-lg font-bold text-[#FAF6EE] tracking-tight">
            {node.role}
          </h4>
          {node.company && node.company !== 'Self-Employed' && (
            <span className="font-display text-[10px] text-[#B8925A] bg-white/10 border border-white/5 px-2.5 py-0.5 rounded-full self-start sm:self-auto uppercase tracking-wider font-bold">
              {node.company}
            </span>
          )}
        </div>
        <p className="text-xs text-[#ECE3D2]/80 leading-relaxed font-light">
          {node.description}
        </p>

        {/* Highlighted Projects Render */}
        {node.projects && node.projects.length > 0 && (
          <div className="pt-4 mt-4 border-t border-[#B8925A]/15">
            <h5 className="font-mono text-[9px] text-[#B8925A] tracking-widest uppercase mb-3 font-bold">
              Highlighted Projects
            </h5>
            <ul className="space-y-2">
              {node.projects.map((project, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[#FAF6EE] text-xs font-light">
                  <span className="text-[#B8925A] mt-0.5 text-[8px]">✦</span>
                  <span className="leading-snug">{project}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Focus Render */}
        {node.focus && node.focus.length > 0 && (
          <div className="pt-4 mt-4 border-t border-[#B8925A]/15">
            <h5 className="font-mono text-[9px] text-[#B8925A] tracking-widest uppercase mb-3 font-bold">
              Focus
            </h5>
            <div className="flex flex-wrap gap-2">
              {node.focus.map((item, idx) => (
                <span key={idx} className="font-mono text-[8.5px] tracking-wider text-[#FAF6EE]/80 uppercase bg-white/5 border border-white/10 px-2 py-1 rounded-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Offer Letter Link */}
        {node.offerLetter && (
          <a 
            href={node.offerLetter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute bottom-6 right-6 text-[#B8925A]/60 hover:text-[#B8925A] transition-colors"
            title="View Offer Letter"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const WireframeArchDoodle = ({ scrollProgress }: ScrollProps) => {
  const y = useTransform(scrollProgress, [0, 1], [-50, 50]);
  const scale = useTransform(scrollProgress, [0, 0.5, 1], [0.75, 1.2, 0.8]);

  return (
    <motion.div
      style={{ y, scale }}
      className="absolute -top-20 left-16 flex flex-col items-center select-none pointer-events-none z-20"
    >
      <svg viewBox="0 0 100 140" className="w-16 h-24 stroke-[1.5] fill-none text-[#4E4842]" stroke="currentColor">
        <path d="M 20,130 L 20,50 A 30,30 0 0 1 80,50 L 80,130 Z" />
        {/* Little star accents */}
        <path d="M 20,40 Q 20,50 30,50 Q 20,50 20,60 Q 20,50 10,50 Q 20,50 20,40 Z" className="fill-current" />
        <path d="M 80,40 Q 80,50 90,50 Q 80,50 80,60 Q 80,50 70,50 Q 80,50 80,40 Z" className="fill-current" />
      </svg>
    </motion.div>
  );
};

const OverlappingOvalsDoodle = ({ scrollProgress }: ScrollProps) => {
  const y = useTransform(scrollProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollProgress, [0, 0.5, 1], [0.8, 1.15, 0.85]);

  return (
    <motion.div
      style={{ y, scale }}
      className="absolute -bottom-12 -left-8 w-32 h-32 select-none pointer-events-none drop-shadow-md z-20"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full text-[#B8925A] stroke-[1] fill-none" stroke="currentColor">
        <ellipse cx="50" cy="40" rx="45" ry="15" transform="rotate(-15 50 40)" />
        <ellipse cx="50" cy="60" rx="45" ry="15" transform="rotate(15 50 60)" />
        {/* Tiny stars */}
        <path d="M 15,30 Q 15,35 20,35 Q 15,35 15,40 Q 15,35 10,35 Q 15,35 15,30 Z" className="fill-current stroke-none" />
        <path d="M 85,70 Q 85,75 90,75 Q 85,75 85,80 Q 85,75 80,75 Q 85,75 85,70 Z" className="fill-current stroke-none" />
      </svg>
    </motion.div>
  );
};

const SunburstDoodle = ({ scrollProgress }: ScrollProps) => {
  const scale = useTransform(scrollProgress, [0, 0.5, 1], [0.6, 1.3, 0.6]);
  const rotate = useTransform(scrollProgress, [0, 1], [0, 180]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="absolute -right-8 top-1/4 w-16 h-16 select-none pointer-events-none z-20"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full text-[#1c1c1b] stroke-[1] fill-none" stroke="currentColor">
        <line x1="50" y1="5" x2="50" y2="95" />
        <line x1="5" y1="50" x2="95" y2="50" />
        <line x1="18" y1="18" x2="82" y2="82" />
        <line x1="82" y1="18" x2="18" y2="82" />
        <line x1="28" y1="10" x2="72" y2="90" />
        <line x1="72" y1="10" x2="28" y2="90" />
        <line x1="10" y1="28" x2="90" y2="72" />
        <line x1="90" y1="28" x2="10" y2="72" />
      </svg>
    </motion.div>
  );
};

const RotatingTextBadge = ({ scrollProgress }: ScrollProps) => {
  const rotate = useTransform(scrollProgress, [0, 1], [0, 240]);

  return (
    <div className="absolute -left-12 bottom-6 w-28 h-28 select-none pointer-events-none z-20">
      <motion.svg viewBox="0 0 100 100" style={{ rotate }} className="w-full h-full">
        <path
          id="circlePath"
          d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
          fill="transparent"
        />
        <text className="font-display text-[6.5px] uppercase fill-[#1c1c1b] tracking-[0.25em] font-black">
          <textPath href="#circlePath" startOffset="0%">
            GIRU AESTHETIC • FRAUNCES FONT •
          </textPath>
        </text>
      </motion.svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#B8925A] fill-current animate-pulse">
          <path d="M 12,0 Q 12,12 24,12 Q 12,12 12,24 Q 12,12 0,12 Q 12,12 12,0 Z" />
        </svg>
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
            <RetroStarDoodle scrollProgress={springScroll} />
            <WireframeArchDoodle scrollProgress={springScroll} />
            <OverlappingOvalsDoodle scrollProgress={springScroll} />
            <SunburstDoodle scrollProgress={springScroll} />
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
                  src="/me.jpg"
                  alt="Zaid Saifi Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-[1.12] brightness-[0.93] transition-all duration-700 ease-out hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1b]/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>
              </div>
              
              {/* Polaroid bottom border felt-tip ink text */}
              <div className="mt-5 flex flex-row justify-between items-center px-1">
                <div className="font-display text-[11px] font-black text-[#FAF6EE] tracking-widest uppercase select-none">
                  DESIGN ARCHIVE
                </div>
                <div className="font-display text-[10px] font-black text-[#FAF6EE] tracking-widest uppercase select-none">
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
                <VariableProximity
                  label="HI!!"
                  fromFontVariationSettings="'wght' 400"
                  toFontVariationSettings="'wght' 900"
                  containerRef={sectionRef}
                  radius={120}
                  falloff="gaussian"
                  className="font-display font-bold"
                />
              </h3>
              {/* Decorative gold dot detail */}
              <div className="absolute -right-8 bottom-3 w-4 h-4 rounded-full bg-[#B8925A] animate-ping"></div>
            </div>

            <p className="text-lg md:text-xl text-[#4E4842] font-medium leading-relaxed max-w-xl italic">
              <VariableProximity
                label="My name is Zaid Saifi, I'm a UI/UX designer, developer, and creative technologist."
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 700"
                containerRef={sectionRef}
                radius={120}
                falloff="gaussian"
              />
            </p>

            {/* Paragraphs with playful serif drop-ins from Image 1 & 2 */}
            <div className="space-y-6 text-sm md:text-base text-[#4E4842]/90 leading-relaxed font-light max-w-xl">
              <p>
                <span className="font-display text-2xl md:text-3xl italic font-bold text-[#B8925A] mr-1.5 align-middle leading-none tracking-tight">
                  <VariableProximity
                    label="Ever since"
                    fromFontVariationSettings="'wght' 400"
                    toFontVariationSettings="'wght' 800"
                    containerRef={sectionRef}
                    radius={100}
                    falloff="gaussian"
                  />
                </span>{' '}
                <VariableProximity
                  label="I remember, I've had a profound passion for visual communication, bridging raw human feelings with clean, performant full-stack interactive code."
                  fromFontVariationSettings="'wght' 300"
                  toFontVariationSettings="'wght' 700"
                  containerRef={sectionRef}
                  radius={120}
                  falloff="gaussian"
                />
              </p>
              <p>
                <span className="font-display text-2xl md:text-3xl italic font-bold text-[#B8925A] mr-1.5 align-middle leading-none tracking-tight">
                  <VariableProximity
                    label="I live to"
                    fromFontVariationSettings="'wght' 400"
                    toFontVariationSettings="'wght' 800"
                    containerRef={sectionRef}
                    radius={100}
                    falloff="gaussian"
                  />
                </span>{' '}
                <VariableProximity
                  label="discover, experiment, and craft immersive digital experiences that leave a lasting impact."
                  fromFontVariationSettings="'wght' 300"
                  toFontVariationSettings="'wght' 700"
                  containerRef={sectionRef}
                  radius={120}
                  falloff="gaussian"
                />
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
                className="bg-[#1c1c1b] hover:bg-[#FAF6EE] border border-[#1c1c1b] px-4 py-2 rounded-full font-display text-[11px] font-bold text-[#FAF6EE] hover:text-[#1c1c1b] tracking-widest transition-all duration-300 shadow"
              >
                zaidsaifi150105@gmail.com
              </a>
              <span className="text-[#B8925A] select-none text-[10px]">✦</span>
              <a 
                href="https://github.com/zaid1234-11" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-[#1c1c1b] hover:bg-[#FAF6EE] border border-[#1c1c1b] px-4 py-2 rounded-full font-display text-[11px] font-bold text-[#FAF6EE] hover:text-[#1c1c1b] tracking-widest transition-all duration-300 shadow"
              >
                github.com/zaid1234-11
              </a>
              <span className="text-[#B8925A] select-none text-[10px]">✦</span>
              <a 
                href="https://linkedin.com/in/zaidsaifiai" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-[#1c1c1b] hover:bg-[#FAF6EE] border border-[#1c1c1b] px-4 py-2 rounded-full font-display text-[11px] font-bold text-[#FAF6EE] hover:text-[#1c1c1b] tracking-widest transition-all duration-300 shadow"
              >
                linkedin.com/in/zaidsaifiai
              </a>
            </div>

          </div>

        </div>

        {/* Editorial Areas of Practice Section */}
        <AreasOfPractice />

        {/* Chronology of Growth Timeline */}
        <div className="border-t border-[#B8925A]/15 pt-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-16">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8925A]"></span>
              <span className="font-display font-bold text-[11px] text-[#4E4842]/60 uppercase tracking-widest">
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

          <div className="relative border-l-2 border-dashed border-[#B8925A]/30 ml-4 md:ml-32 pl-8 md:pl-12 space-y-20">
            {TIMELINE.map((node, index) => (
              <TimelineNode key={node.id} node={node} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
