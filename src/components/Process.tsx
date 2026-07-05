import React, { useState, useRef } from 'react';
import { CheckCircle2, Grid } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import FuzzyText from './FuzzyText';
import VariableProximity from './VariableProximity';
import DecryptedText from './DecryptedText';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingContainerRef = useRef<HTMLDivElement>(null);

  // Setup scroll tracking for process background depth effects and pinning
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 35%', 'end end'],
  });

  // Track and update active step based on scroll position on large screens
  React.useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      // Only update state based on scroll if screen size is lg (1024px or above)
      if (window.innerWidth >= 1024) {
        let nextStep = 0;
        if (latest < 0.32) {
          nextStep = 0;
        } else if (latest < 0.55) {
          nextStep = 1;
        } else if (latest < 0.77) {
          nextStep = 2;
        } else {
          nextStep = 3;
        }
        
        setActiveStep((prev) => (prev !== nextStep ? nextStep : prev));
      }
    });
  }, [scrollYProgress]);

  const handleStepClick = (index: number) => {
    if (window.innerWidth >= 1024 && sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const sectionStart = rect.top + scrollTop;
      const scrollRange = rect.height - window.innerHeight;
      
      const stepRanges = [
        { min: 0.09, max: 0.32 },
        { min: 0.32, max: 0.55 },
        { min: 0.55, max: 0.77 },
        { min: 0.77, max: 1.0 }
      ];
      const targetProgress = (stepRanges[index].min + stepRanges[index].max) / 2;
      const targetScrollY = sectionStart + scrollRange * targetProgress;
      
      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
      });
    } else {
      setActiveStep(index);
    }
  };

  // Zoom-in & out parallax for decorative background items
  const bgSphereY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const bgSphereScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1.4, 0.8]);
  const bgSphereOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.35, 0.1]);

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
      className="relative lg:h-[380vh] h-auto bg-transparent lg:mb-0 mb-0"
    >
      {/* Heading (normal scroll) */}
      <div className="relative z-10 max-w-7xl mx-auto pl-6 md:pl-10 px-6 md:px-12 pt-24 lg:translate-x-10 md:translate-x-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between lg:mb-10 mb-16 gap-6">
          <div ref={headingContainerRef}>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[9px] text-[#B8925A] tracking-[0.3em] uppercase bg-[#ECE3D2] border border-[#B8925A]/20 px-3.5 py-1 rounded-full">
                03 - WORK METHODOLOGY
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c1c1b] tracking-tight leading-none">
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
        </div>
      </div>

      {/* Spacer (20–40vh) */}
      <div className="hidden lg:block lg:h-[10vh]"></div>

      {/* Sticky viewport frame */}
      <div className="lg:sticky lg:top-[12vh] lg:h-[88vh] lg:flex lg:flex-col lg:justify-center lg:py-6 py-24 px-6 md:px-12 bg-transparent">
        <div className="relative z-10 max-w-7xl mx-auto pl-6 md:pl-10 w-full">
          
          {/* Process Visual Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 relative z-10">
            
            {/* Left Block: Steps Selection list */}
            <div className="lg:col-span-5 space-y-4">
              {steps.map((step, index) => (
                <button
                  key={index}
                  id={`process-step-btn-${index}`}
                  onClick={() => handleStepClick(index)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 focus:outline-none flex gap-4 cursor-pointer ${
                    activeStep === index
                      ? 'bg-[#1c1c1b] text-[#FAF6EE] border-[#B8925A]/40 shadow-lg'
                      : 'bg-transparent border-[#B8925A]/20 hover:border-[#1c1c1b] hover:bg-[#ECE3D2]/30'
                  }`}
                >
                  <span className={`font-mono text-sm font-bold transition-colors duration-300 ${
                    activeStep === index ? 'text-[#B8925A]' : 'text-[#4E4842]/40'
                  }`}>
                    {step.num}
                  </span>

                  <div className="space-y-1">
                    <h3 className={`font-display text-base font-bold tracking-tight transition-colors duration-300 ${
                      activeStep === index ? 'text-[#FAF6EE]' : 'text-[#1c1c1b]/80'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-xs font-light ${
                      activeStep === index ? 'text-[#ECE3D2]/60' : 'text-[#4E4842]/50'
                    }`}>
                      {step.tags.join(' · ')}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Block: Active Step Detail Panel with interactive scale Zoom in/out entrance */}
            <div className="lg:col-span-7">
              <div
                className="relative w-full min-h-[480px] sm:aspect-[1.45] sm:min-h-0 max-w-[660px] mx-auto translate-y-6 lg:translate-y-4"
              >
                {/* Vintage TV Frame Image (overlay) */}
                <img
                  src="/tv1.webp"
                  alt="Vintage Television"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-fill pointer-events-none z-20 filter drop-shadow-md"
                />

                {/* TV Screen Container */}
                <div 
                  className="absolute top-[11%] bottom-[16%] left-[7%] right-[29%] z-10 bg-[#FAF6EE] rounded-[1.5rem] shadow-[inset_0_4px_12px_rgba(0,0,0,0.08)] p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-y-auto overflow-x-hidden"
                  style={{
                    backgroundImage: 'radial-gradient(circle at center, #FAF6EE 0%, #E8DFCE 100%)',
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="h-full flex flex-col justify-between"
                    >
                      <div>
                        {/* Title and Description */}
                        <FuzzyText
                          baseIntensity={0.03}
                          hoverIntensity={0.22}
                          fuzzRange={12}
                          enableHover={true}
                          fontSize="clamp(1.15rem, 3.8vw, 1.55rem)"
                          fontWeight="bold"
                          fontFamily="'Cormorant Garamond', serif"
                          color="#1c1c1b"
                          className="mb-3 block cursor-pointer"
                        >
                          {steps[activeStep].title}
                        </FuzzyText>
                        <p className="text-xs sm:text-sm text-[#4E4842] leading-relaxed font-light mb-4">
                          <DecryptedText
                            text={steps[activeStep].description}
                            animateOn="view"
                            speed={10}
                            maxIterations={12}
                            revealDirection="start"
                            sequential={true}
                          />
                        </p>
                      </div>

                      {/* Step Metric Highlight */}
                      <div className="bg-[#ECE3D2]/40 border border-[#B8925A]/20 p-3 sm:p-4 rounded-xl flex items-center gap-4 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-[#B8925A]/15 border border-[#B8925A]/25 flex items-center justify-center text-[#B8925A] shrink-0">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block font-mono text-[8px] text-[#4E4842]/60 uppercase tracking-widest mb-0.5">
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
