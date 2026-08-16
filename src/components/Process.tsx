import React, { useState, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion, useScroll, AnimatePresence } from 'motion/react';
import VariableProximity from './VariableProximity';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingContainerRef = useRef<HTMLDivElement>(null);

  // Setup scroll tracking for sticky pinning and step transitions
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Track and update active step based on scroll position on large screens
  React.useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      // Only update state based on scroll if screen size is lg (1024px or above)
      if (window.innerWidth >= 1024) {
        let nextStep = 0;
        if (latest < 0.25) {
          nextStep = 0;
        } else if (latest < 0.50) {
          nextStep = 1;
        } else if (latest < 0.75) {
          nextStep = 2;
        } else {
          nextStep = 3;
        }
        
        setActiveStep((prev) => (prev !== nextStep ? nextStep : prev));
      }
    });
  }, [scrollYProgress]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    if (window.innerWidth >= 1024 && sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const sectionStart = rect.top + scrollTop;
      const scrollRange = sectionRef.current.offsetHeight - window.innerHeight;
      
      const targetProgress = (index + 0.5) / 4;
      const targetScrollY = sectionStart + scrollRange * targetProgress;
      
      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
      });
    }
  };

  const steps = [
    {
      num: '01',
      title: 'Structural Discovery',
      description: 'Understanding the brand topography, target user demographics, and visual positioning strategy. We map out content hierarchies, information architectures, and technical constraints before sketching a single layout.',
      metric: 'Outcome',
      metricVal: 'Holistic wireframe blueprint & visual direction board.',
      tags: ['Sitemaps', 'Content Strategy', 'Moodboards']
    },
    {
      num: '02',
      title: 'Aesthetic Framing (Figma)',
      description: 'Sculpting the tactile high-contrast interface. Choosing intentional typography pairings, establishing strict design system tokens (spacing, grid rhythm), and prototyping advanced glass transitions and micro-animations.',
      metric: 'Fidelity',
      metricVal: 'Production-ready interactive responsive prototypes.',
      tags: ['High-Contrast', 'Glassmorphism', 'Grid Alignment']
    },
    {
      num: '03',
      title: 'Technical Synthesis (React)',
      description: 'Translating Figma vectors into clean, hand-crafted TypeScript. Writing responsive Tailwind styles, configuring performant animation timelines with Framer Motion, and setting up client-side data pipelines.',
      metric: 'Standard',
      metricVal: 'Zero-clutter, clean, accessible, and fast TSX code.',
      tags: ['TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      num: '04',
      title: 'Rigor & Optimization',
      description: 'Polishing assets, optimizing build bundle sizes, linting, verifying cross-device responsiveness, and ensuring strict asset compression. We do not ship lag; every script compiles flawlessly and renders instantly.',
      metric: 'Metric',
      metricVal: '100% Lighthouse Performance & SEO alignment.',
      tags: ['Bundle Shaking', 'Lighthouse Score', 'Cross-Device']
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative lg:h-[400vh] h-auto bg-transparent"
    >
      {/* Sticky viewport frame - stays pinned while user scrolls through all 4 steps */}
      <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center py-16 lg:py-0 px-6 md:px-12 bg-transparent z-10 will-change-transform">
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-center h-full max-h-[850px] pl-0 md:pl-10">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 lg:mb-8 gap-4">
            <div ref={headingContainerRef}>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[9px] text-[#B8925A] tracking-[0.3em] uppercase bg-[#ECE3D2] dark:bg-[#242424] border border-[#B8925A]/20 px-3.5 py-1 rounded-full">
                  03 - WORK METHODOLOGY
                </span>
                <span className="font-mono text-[9px] text-[#1c1c1b]/60 dark:text-[#ECE3D2]/70 tracking-[0.2em] uppercase bg-[#ECE3D2]/50 dark:bg-[#242424]/50 border border-[#B8925A]/15 px-2.5 py-0.5 rounded-full">
                  CHANNEL 0{activeStep + 1} / 04
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1c1c1b] dark:text-[#FAF6EE] tracking-tight leading-none">
                <span className="font-display block uppercase tracking-tighter text-3d-ivory">
                  <VariableProximity
                    label="Meticulous"
                    fromFontVariationSettings="'wght' 400"
                    toFontVariationSettings="'wght' 900"
                    containerRef={headingContainerRef}
                    radius={120}
                    falloff="gaussian"
                    className="font-display block uppercase tracking-tighter text-3d-ivory cursor-pointer"
                  />
                </span>
                <span className="font-marker font-light italic text-[#B8925A] mt-1 block">
                  <VariableProximity
                    label="journey log"
                    fromFontVariationSettings="'wght' 300"
                    toFontVariationSettings="'wght' 700"
                    containerRef={headingContainerRef}
                    radius={140}
                    falloff="gaussian"
                    className="font-marker font-light italic text-[#B8925A] cursor-pointer"
                  />
                </span>
              </h2>
            </div>

            {/* Step Indicators (Desktop) */}
            <div className="hidden lg:flex items-center gap-2 pb-2">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleStepClick(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeStep === idx
                      ? 'w-8 bg-[#1c1c1b] dark:bg-[#B8925A]'
                      : 'w-2 bg-[#B8925A]/30 hover:bg-[#B8925A]/60'
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Process Visual Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 relative z-10 items-center">
            
            {/* Left Block: Steps Selection list */}
            <div className="lg:col-span-5 space-y-3.5">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col">
                  <button
                    id={`process-step-btn-${index}`}
                    onClick={() => handleStepClick(index)}
                    className={`w-full text-left p-5 md:p-6 border transition-all duration-300 focus:outline-none flex gap-4 cursor-pointer ${
                      activeStep === index
                        ? 'bg-[#1c1c1b] dark:bg-[#1f1f1f] text-[#FAF6EE] border-[#B8925A]/50 shadow-xl rounded-xl lg:scale-[1.02]'
                        : 'bg-transparent border-[#B8925A]/20 hover:border-[#1c1c1b] dark:hover:border-[#B8925A] hover:bg-[#ECE3D2]/30 dark:hover:bg-[#242424]/40 rounded-xl'
                    }`}
                  >
                    <span className={`font-mono text-sm font-bold transition-colors duration-300 ${
                      activeStep === index ? 'text-[#B8925A]' : 'text-[#4E4842]/60 dark:text-[#B8925A]/60'
                    }`}>
                      {step.num}
                    </span>

                    <div className="space-y-1">
                      <h3 className={`font-display text-base font-bold tracking-tight transition-colors duration-300 ${
                        activeStep === index ? 'text-[#FAF6EE]' : 'text-[#1c1c1b]/80 dark:text-[#FAF6EE]/80'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-xs font-light ${
                        activeStep === index ? 'text-[#ECE3D2]/70' : 'text-[#4E4842]/60 dark:text-[#ECE3D2]/60'
                      }`}>
                        {step.tags.join(' · ')}
                      </p>
                    </div>
                  </button>
                  
                  {/* Mobile Detail Panel (Accordion) */}
                  <AnimatePresence>
                    {activeStep === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="lg:hidden overflow-hidden bg-[#FAF6EE] dark:bg-[#1c1c1b] border-x border-b border-[#B8925A]/20 rounded-b-xl shadow-[inset_0_4px_12px_rgba(0,0,0,0.02)]"
                      >
                        <div className="p-5 flex flex-col gap-4">
                          <p className="text-sm text-[#4E4842] dark:text-[#ECE3D2] leading-relaxed font-light">
                            {steps[activeStep].description}
                          </p>

                          {/* Step Metric Highlight */}
                          <div className="bg-[#ECE3D2]/40 dark:bg-[#242424] border border-[#B8925A]/20 p-3 rounded-xl flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#B8925A]/15 border border-[#B8925A]/25 flex items-center justify-center text-[#B8925A] shrink-0">
                              <CheckCircle2 className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="block font-mono text-[8px] text-[#4E4842]/60 dark:text-[#ECE3D2]/60 uppercase tracking-widest mb-0.5">
                                {steps[activeStep].metric}
                              </span>
                              <span className="text-xs font-semibold text-[#B8925A]">
                                {steps[activeStep].metricVal}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Block: Active Step Detail Panel inside Vintage TV Frame */}
            <div className="hidden lg:block lg:col-span-7">
              <div
                className="relative w-full min-h-[460px] sm:aspect-[1.45] sm:min-h-0 max-w-[640px] mx-auto"
              >
                {/* Vintage TV Frame Image (overlay) */}
                <img
                  src="/tv1.webp"
                  alt="Vintage Television"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-fill pointer-events-none z-20 filter drop-shadow-lg"
                />

                {/* TV Screen Container */}
                <div 
                  className="absolute top-[11%] bottom-[16%] left-[7%] right-[29%] z-10 bg-[#FAF6EE] dark:bg-[#1a1a1a] rounded-[1.5rem] shadow-[inset_0_4px_12px_rgba(0,0,0,0.08)] p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-y-auto overflow-x-hidden"
                >
                  <AnimatePresence>
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="h-full flex flex-col justify-between"
                    >
                      <div>
                        {/* Title and Description */}
                        <h4
                          className="mb-3 block font-display text-xl sm:text-2xl font-bold text-[#1c1c1b] dark:text-[#FAF6EE] tracking-tight leading-snug"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          {steps[activeStep].title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#4E4842] dark:text-[#ECE3D2]/90 leading-relaxed font-light mb-4">
                          {steps[activeStep].description}
                        </p>
                      </div>

                      {/* Step Metric Highlight */}
                      <div className="bg-[#ECE3D2]/40 dark:bg-[#242424] border border-[#B8925A]/20 p-3 sm:p-4 rounded-xl flex items-center gap-4 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-[#B8925A]/15 border border-[#B8925A]/25 flex items-center justify-center text-[#B8925A] shrink-0">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block font-mono text-[8px] text-[#4E4842]/60 dark:text-[#ECE3D2]/60 uppercase tracking-widest mb-0.5">
                            {steps[activeStep].metric}
                          </span>
                          <span className="text-xs font-semibold text-[#B8925A]">
                            {steps[activeStep].metricVal}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
