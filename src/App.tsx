import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkGallery from './components/WorkGallery';
import CaseStudyDetail from './components/CaseStudyDetail';
import Process from './components/Process';
import About from './components/About';
import ConnectForm from './components/ConnectForm';
import { Project } from './types';
import { PROJECTS } from './data';
import { ArrowUp, Sparkles, Code, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ReactLenis } from 'lenis/react';
import Preloader from './components/Preloader';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = async () => {
      // Wait for all custom fonts to be fully parsed and ready
      await document.fonts.ready;

      // Keep a small minimum delay (800ms) to prevent aggressive flashing on fast connections/caches
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    };

    // If the browser already finished loading everything before the effect ran
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Otherwise, wait for the full page load event (images, CSS, scripts, etc.)
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // Monitor scroll height to show back-to-top and handle active section highlights
  useEffect(() => {
    const handleScroll = () => {
      // Back to top visibility
      setShowScrollTop(window.scrollY > 400);

      // Section highlighters
      const sections = ['hero', 'work', 'process', 'about', 'connect'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateToConnect = () => {
    setSelectedProject(null);
    setTimeout(() => {
      const connectEl = document.getElementById('connect');
      if (connectEl) {
        connectEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleSetActiveSection = (sectionId: string) => {
    setSelectedProject(null);
    setActiveSection(sectionId);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const scrollToWork = () => {
    const workEl = document.getElementById('work');
    if (workEl) {
      workEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ReactLenis root options={{ lerp: 0.04, duration: 1.5, smoothWheel: true, wheelMultiplier: 0.9, touchMultiplier: 1.5, syncTouch: true }}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div className="relative min-h-screen bg-obsidian text-ivory-dim selection:bg-sand/30 selection:text-ivory antialiased">

        {/* 1. Global Noise Texture Film overlay */}
        <div className="noise-overlay" aria-hidden="true"></div>

        {/* 2. Physical spiral rings binder edge (immersive diary scrapbook notebook) */}
        <div className="fixed left-0 top-0 bottom-0 w-12 md:w-16 z-50 pointer-events-none flex flex-col justify-between py-6 pl-1.5 md:pl-3 bg-gradient-to-r from-stone-300/30 via-stone-200/10 to-transparent">
          {Array.from({ length: 24 }).map((_, idx) => (
            <div key={idx} className="relative w-6 h-6 flex items-center justify-start group">
              {/* Dark binder hole in paper */}
              <div className="w-3.5 h-3.5 rounded-full bg-stone-900 border border-stone-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)]"></div>
              {/* Silver metallic spiral wire wrapping from outside onto the paper */}
              <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-5.5 h-4.5 rounded-l-full border-t-[2.5px] border-b-[2.5px] border-l-[2.5px] border-stone-400/80 bg-gradient-to-b from-stone-200 via-stone-300 to-stone-400 shadow-[1px_2px_3px_rgba(0,0,0,0.18)]"></div>
              {/* Reflection shine on metallic spiral */}
              <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-3 bg-white/20 rounded-sm"></div>
            </div>
          ))}
        </div>

        {/* Flowing Silk Ribbon Overlay drifting behind content */}
        <div className="absolute inset-y-0 right-[8%] md:right-[15%] w-32 md:w-48 pointer-events-none opacity-45 z-0 overflow-hidden">
          <svg className="w-full h-full min-h-[5000px]" viewBox="0 0 120 5000" preserveAspectRatio="none">
            <path
              d="M60,0 Q105,250 45,500 T85,1000 T25,1500 T95,2000 T35,2500 T85,3000 T45,3500 T85,4000 T35,4500 T60,5000"
              fill="none"
              stroke="#D5C0A4"
              strokeWidth="3"
              strokeOpacity="0.45"
              strokeDasharray="6 3"
            />
            <path
              d="M58,0 Q103,250 43,500 T83,1000 T23,1500 T93,2000 T33,2500 T83,3000 T43,3500 T83,4000 T33,4500 T58,5000"
              fill="none"
              stroke="#B8925A"
              strokeWidth="1.5"
              strokeOpacity="0.35"
            />
          </svg>
        </div>

        {/* 3. Global Navigation Header */}
        <Header
          activeSection={selectedProject ? '' : activeSection}
          setActiveSection={handleSetActiveSection}
          onNavigateToConnect={handleNavigateToConnect}
        />

        {/* 4. Immersive View Routing with Physical Page Turn */}
        <div
          style={{ perspective: '2000px', transformStyle: 'preserve-3d' }}
          className="relative z-20 min-h-screen"
        >
          <AnimatePresence mode="wait">
            {selectedProject ? (
              /* Immersive Dedicated Case Study Screen (turns like a physical page from the right) */
              <motion.div
                key={`case-study-${selectedProject.id}`}
                initial={{ rotateY: 90, opacity: 0, scale: 0.98 }}
                animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                exit={{ rotateY: 90, opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.85, ease: [0.25, 1, 0.5, 1] }}
                style={{ transformOrigin: 'left center', backfaceVisibility: 'hidden' }}
                className="w-full origin-left"
              >
                <CaseStudyDetail
                  project={selectedProject}
                  onBack={() => setSelectedProject(null)}
                  onNavigateToProject={(p) => setSelectedProject(p)}
                />
              </motion.div>
            ) : (
              /* Standard Architectural Modular Home Presentation (turns back like a physical page to the left) */
              <motion.div
                key="portfolio-home"
                initial={{ rotateY: -90, opacity: 0, scale: 0.98 }}
                animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                exit={{ rotateY: -90, opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.85, ease: [0.25, 1, 0.5, 1] }}
                style={{ transformOrigin: 'left center', backfaceVisibility: 'hidden' }}
                className="w-full origin-left relative"
              >
                <main className="relative">
                  {/* Hero Segment */}
                  <Hero onExploreClick={scrollToWork} />

                  {/* Project Gallery Bento Segment */}
                  <WorkGallery onSelectProject={(project) => setSelectedProject(project)} />

                  {/* Process Methodology Segment */}
                  <Process />

                  {/* About Biography Timeline Segment */}
                  <About />

                  {/* Liquid Glass Contact Segment */}
                  <ConnectForm />
                </main>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 5. High-End Minimalist Footer */}
        <footer className="bg-obsidian-dark border-t border-white/5 py-16 px-6 md:px-12 relative z-30">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

            {/* Column A: Logo and Motto */}
            <div className="space-y-4 max-w-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sage" />
                <span className="font-display text-lg tracking-widest text-ivory font-bold">ARTEFACT</span>
              </div>
              <p className="text-xs text-ivory-dim/40 leading-relaxed font-light">
                Meticulous craftsmanship in digital interfaces. Merging raw visual weight with reactive frontend logic for elite brand presentation.
              </p>
            </div>

            {/* Column B: Links Navigation */}
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-3">
                <span className="block font-mono text-[9px] text-ivory-dim/40 uppercase tracking-widest">
                  ARCHITECT
                </span>
                <ul className="space-y-2 text-xs">
                  <li>
                    <button
                      onClick={() => handleSetActiveSection('hero')}
                      className="text-ivory-dim/55 hover:text-sage transition-colors focus:outline-none"
                    >
                      Home Index
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleSetActiveSection('work')}
                      className="text-ivory-dim/55 hover:text-sage transition-colors focus:outline-none"
                    >
                      Portfolio Work
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleSetActiveSection('process')}
                      className="text-ivory-dim/55 hover:text-sage transition-colors focus:outline-none"
                    >
                      Methodology
                    </button>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <span className="block font-mono text-[9px] text-ivory-dim/40 uppercase tracking-widest">
                  CONTACTS
                </span>
                <ul className="space-y-2 text-xs">
                  <li>
                    <button
                      onClick={() => handleSetActiveSection('about')}
                      className="text-ivory-dim/55 hover:text-sage transition-colors focus:outline-none"
                    >
                      Biography
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleSetActiveSection('connect')}
                      className="text-ivory-dim/55 hover:text-sage transition-colors focus:outline-none"
                    >
                      Inquire Project
                    </button>
                  </li>
                  <li>
                    <a href="mailto:zaidsaifi150105@gmail.com" className="text-ivory-dim/55 hover:text-sage transition-colors">
                      zaidsaifi150105@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column C: Technical Credits */}
            <div className="space-y-4 text-right md:text-left self-stretch md:self-auto flex flex-col justify-between items-end md:items-start">
              <div className="font-mono text-[9px] text-sand/60 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-sage" />
                SAN FRANCISCO edition · 2026
              </div>

              <p className="text-[10px] font-mono text-ivory-dim/30 leading-normal">
                © 2026 ARTEFACT. Hand-coded with TSX + Tailwind CSS.
              </p>
            </div>

          </div>
        </footer>

        {/* 6. Floating Action Button: Back to Top */}
        {showScrollTop && (
          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-[#1c1c1b] text-[#FAF6EE] flex items-center justify-center border border-[#B8925A]/40 hover:border-[#B8925A] hover:bg-[#FAF6EE] hover:text-[#1c1c1b] hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl focus:outline-none cursor-pointer"
            title="Return to peak"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

      </div>
    </ReactLenis>
  );
}
