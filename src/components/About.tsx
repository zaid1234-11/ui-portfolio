import React, { useState, useRef, useEffect } from 'react';
import { Layers, Code, Zap, Award, Download, Check, Sparkles, ExternalLink } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'motion/react';
import { TIMELINE, SKILL_GROUPS } from '../data';
import AnimatedSignature from './AnimatedSignature';
import VariableProximity from './VariableProximity';
import AreasOfPractice from './AreasOfPractice';
import AlbumCoverPortrait from './AlbumCoverPortrait';
import AboutGraffiti from './AboutGraffiti';

// --- Handdrawn Doodle Components in the spirit of Image 2 with Scroll Reactivity ---

interface ScrollProps {
  scrollProgress: import('motion/react').MotionValue<number>;
}

const RetroStarDoodle = ({ scrollProgress }: ScrollProps) => {
  const y = useTransform(scrollProgress, [0, 1], [30, -30]);
  const scale = useTransform(scrollProgress, [0, 0.5, 1], [0.85, 1.15, 0.95]);
  const rotate = useTransform(scrollProgress, [0, 1], [-12, 12]);

  return (
    <motion.div
      style={{ y, scale, rotate }}
      className="hidden md:block absolute -top-12 -left-8 w-20 h-20 select-none pointer-events-none drop-shadow-md z-20"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full text-[#1c1c1b] fill-current">
        <path d="M50 0 L58 35 L93 25 L65 50 L93 75 L58 65 L50 100 L42 65 L7 75 L35 50 L7 25 L42 35 Z" />
      </svg>
    </motion.div>
  );
};

const TimelineNode: React.FC<{ node: typeof TIMELINE[0]; index: number }> = ({ node, index }) => {
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
      <div className="md:absolute md:-left-[180px] md:w-[110px] md:text-right md:top-1 font-display text-sm text-[#B8925A] font-bold tracking-wider mb-2 md:mb-0">
        {node.year}
      </div>

      {/* Content block */}
      <div className="space-y-4 liquid-glass-card p-6 rounded-xl transition-all duration-300 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h4 className="font-display text-lg font-bold text-[#FAF6EE] tracking-tight">
            <VariableProximity
              label={node.role}
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 800"
              fromColor="#FAF6EE"
              toColor="#dc6305"
              containerRef={ref}
              radius={120}
              falloff="gaussian"
              className="font-display font-bold text-[#FAF6EE]"
            />
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
      className="hidden md:flex absolute -top-20 left-16 flex-col items-center select-none pointer-events-none z-20"
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
      className="hidden md:block absolute -bottom-12 -left-8 w-32 h-32 select-none pointer-events-none drop-shadow-md z-20"
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
      className="hidden md:block absolute -right-8 top-1/4 w-16 h-16 select-none pointer-events-none z-20"
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
    <div className="hidden md:block absolute -left-12 bottom-6 w-28 h-28 select-none pointer-events-none z-20">
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
    <div ref={containerRef} className="absolute -top-14 md:-top-20 left-4 md:left-16 select-none z-20">
      <span className="font-display italic text-3xl md:text-4xl text-[#1c1c1b] dark:text-[#FAF6EE] font-bold relative inline-block tracking-wide cursor-pointer">
        <VariableProximity
          label="About Me"
          fromFontVariationSettings="'wght' 400"
          toFontVariationSettings="'wght' 800"
          containerRef={containerRef}
          radius={120}
          falloff="gaussian"
          className="font-display italic font-bold text-[#1c1c1b] dark:text-[#FAF6EE]"
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
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const collageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll tracking inside the whole section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Dedicated scroll tracking with snappy runway for desktop sticky pinned presentation
  const { scrollYProgress: collageScroll } = useScroll({
    target: collageRef,
    offset: ['start start', 'end end'],
  });
  const smoothCollage = useSpring(collageScroll, { stiffness: 80, damping: 22, mass: 0.5 });

  // Sequential Story & Info Steps (desktop snappy scroll unroll)
  const step1Opacity = useTransform(smoothCollage, [0.00, 0.16], [0, 1]);
  const step1Y = useTransform(smoothCollage, [0.00, 0.16], [20, 0]);

  const step2Opacity = useTransform(smoothCollage, [0.15, 0.38], [0, 1]);
  const step2Y = useTransform(smoothCollage, [0.15, 0.38], [20, 0]);

  const step3Opacity = useTransform(smoothCollage, [0.36, 0.60], [0, 1]);
  const step3Y = useTransform(smoothCollage, [0.36, 0.60], [20, 0]);

  const step4Opacity = useTransform(smoothCollage, [0.58, 0.82], [0, 1]);
  const step4Y = useTransform(smoothCollage, [0.58, 0.82], [20, 0]);

  const { scrollYProgress: zoomProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });
  const smoothZoom = useSpring(zoomProgress, { stiffness: 80, damping: 20, mass: 0.5 });
  const sectionScale = useTransform(smoothZoom, [0, 1], [1.15, 1]);
  const sectionY = useTransform(smoothZoom, [0, 1], [60, 0]);

  // Frame-level transitions on desktop
  const polaroidY = useTransform(smoothCollage, [0, 1], [30, -30]);
  const polaroidScale = useTransform(smoothCollage, [0, 0.5, 1], [0.92, 1.02, 0.96]);
  const polaroidRotate = useTransform(smoothCollage, [0, 1], [-6, 4]);

  // Conditionally assigned styles so mobile renders instantly without scroll-lag
  const step1Style = isMobile ? undefined : { opacity: step1Opacity, y: step1Y };
  const step2Style = isMobile ? undefined : { opacity: step2Opacity, y: step2Y };
  const step3Style = isMobile ? undefined : { opacity: step3Opacity, y: step3Y };
  const step4Style = isMobile ? undefined : { opacity: step4Opacity, y: step4Y };
  const polaroidStyle = isMobile ? undefined : { y: polaroidY, scale: polaroidScale, rotate: polaroidRotate };

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
      case 'Engineering':
        return <Code className="w-4 h-4 text-pink-400" />;
      case 'UX & Strategy':
        return <Zap className="w-4 h-4 text-pink-600" />;
      case 'Leadership & Impact':
        return <Award className="w-4 h-4 text-pink-500" />;
      default:
        return <Check className="w-4 h-4 text-pink-500" />;
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="relative bg-transparent"
    >
      {/* Background Notebook Architectural Draft Grid Lines */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-70 dark:opacity-25"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 50% 30%, rgba(184, 146, 90, 0.1) 0%, transparent 70%),
            linear-gradient(to right, rgba(184, 146, 90, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 146, 90, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 3rem 3rem, 3rem 3rem'
        }}
      ></div>

      {/* Pinned Scroll Track for Biography Collage */}
      <div ref={collageRef} className="relative lg:h-[240vh] h-auto">
        <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center py-16 lg:py-0 px-6 md:px-12 z-10 will-change-transform">
          <div className="relative z-10 max-w-7xl mx-auto w-full pl-0 md:pl-10">
            
            {/* Top Architectural Section Index Bar */}
            <div className="hidden lg:flex items-center justify-between border-b border-[#B8925A]/15 pb-3 mb-8 select-none">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8925A] animate-pulse" />
                <span className="font-ui text-[9px] font-bold tracking-[0.25em] text-[#8C7A65] dark:text-[#C5A880] uppercase">
                  SECTION 02 • THE HUMAN LAYER &amp; CREATIVE ARCHIVE
                </span>
              </div>
              <div className="font-mono text-[8.5px] text-[#8C7A65]/70 dark:text-[#C5A880]/70 tracking-widest uppercase">
                33⅓ RPM HI-FI STEREO • FOLIO 2026
              </div>
            </div>

            {/* Overhaul Core Grid: Collage and Typo details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Collage Column (5 cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[440px] pt-12">
              
              {/* Artistic Doodles and SVGs reacting with deep scrolling parallax */}
              <AboutMeScribble />
              <AboutGraffiti />
              <RetroStarDoodle scrollProgress={smoothCollage} />
              <WireframeArchDoodle scrollProgress={smoothCollage} />
              <OverlappingOvalsDoodle scrollProgress={smoothCollage} />
              <SunburstDoodle scrollProgress={smoothCollage} />
              <RotatingTextBadge scrollProgress={smoothCollage} />

              {/* Asymmetrical side marker "L" */}
              <div className="absolute right-0 bottom-4 font-display text-[110px] font-extrabold text-[#1c1c1b]/[0.03] select-none pointer-events-none tracking-tighter leading-none">
                L
              </div>

              {/* Interactive Vinyl Album Cover Sleeve & Sliding Disc */}
              <div className="relative z-10">
                <AlbumCoverPortrait
                  style={polaroidStyle}
                  imageSrc="/me.jpg"
                  title="Zaid Saifi"
                  type="UI/UX &amp; Creative Tech"
                  year="Edition 2026"
                />
              </div>

            </div>

            {/* Right Typography & Narrative Column (7 cols) with sequential scroll reveal */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Step 1: Punchy Block Header and Intro */}
              <motion.div 
                style={step1Style}
                initial={isMobile ? { opacity: 0, y: 15 } : undefined}
                whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="relative inline-block">
                  <h3 className="font-display font-bold text-7xl sm:text-8xl md:text-[95px] leading-none text-[#1c1c1b] dark:text-[#FAF6EE] tracking-tighter">
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

                <p className="text-lg md:text-xl text-[#4E4842] dark:text-[#ECE3D2] font-medium leading-relaxed max-w-xl italic">
                  <VariableProximity
                    label="My name is Zaid Saifi, I'm a UI/UX designer, developer, and creative technologist."
                    fromFontVariationSettings="'wght' 400"
                    toFontVariationSettings="'wght' 700"
                    containerRef={sectionRef}
                    radius={120}
                    falloff="gaussian"
                  />
                </p>
              </motion.div>

              {/* Step 2: Story Paragraphs with playful serif drop-ins & Core Craft Pills */}
              <motion.div 
                style={step2Style}
                initial={isMobile ? { opacity: 0, y: 15 } : undefined}
                whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-5 text-sm md:text-base text-[#4E4842]/90 dark:text-[#ECE3D2]/90 leading-relaxed font-light max-w-xl"
              >
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

                {/* Core Craft Pills */}
                <div className="pt-2 flex flex-wrap items-center gap-2 select-none">
                  {['Interactive UI/UX', 'WebGL & Creative Tech', 'Design Systems', 'Full-Stack Eng.'].map((tag, i) => (
                    <span key={i} className="font-ui text-[8.5px] font-semibold text-[#8C7A65] dark:text-[#C5A880] bg-[#EFE6D6]/60 dark:bg-[#1E1B18]/60 border border-[#C5B5A2]/30 dark:border-[#38332E] px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Step 3: Animated Calligraphy Sign-off Signature */}
              <motion.div 
                style={step3Style}
                initial={isMobile ? { opacity: 0, y: 15 } : undefined}
                whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex justify-start max-w-xl pl-2"
              >
                <AnimatedSignature />
              </motion.div>

              {/* Step 4: Pill-shaped Contact Info Stripe matching the bottom layout */}
              <motion.div 
                style={step4Style}
                initial={isMobile ? { opacity: 0, y: 15 } : undefined}
                whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pt-6 border-t border-[#B8925A]/15 flex flex-wrap items-center gap-3"
              >
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
              </motion.div>

            </div>

          </div>
          </div>
        </div>
      </div>

      {/* Editorial Areas of Practice Section - Moved outside padded container for full width */}
      <AreasOfPractice />

      {/* Chronology of Growth Timeline */}
      <div className="px-6 md:px-12">
        <div className="relative z-10 max-w-7xl mx-auto pb-20 md:pb-32">
          <div className="border-t border-[#B8925A]/15 pt-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-16">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8925A]"></span>
                <span className="font-display font-bold text-[11px] text-[#4E4842]/60 uppercase tracking-widest">
                  THE CHRONOLOGY OF GROWTH
                </span>
              </div>

              {/* Resume CV Download Action */}
              <a
                id="download-resume-btn"
                href="/Zaid_Saifi_Resume.pdf"
                download="Zaid_Saifi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1c1c1b] hover:bg-[#FAF6EE] border-2 border-[#1c1c1b] hover:text-[#1c1c1b] text-[#FAF6EE] text-[9.5px] tracking-widest uppercase font-bold px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-lg"
              >
                <Download className="w-3.5 h-3.5 text-[#B8925A]" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            <div className="relative border-l-2 border-dashed border-[#B8925A]/30 ml-4 md:ml-32 pl-8 md:pl-12 space-y-20">
              {TIMELINE.map((node, index) => (
                <TimelineNode key={node.id} node={node} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
