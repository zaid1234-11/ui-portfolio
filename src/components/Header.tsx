import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onNavigateToConnect: () => void;
}

export default function Header({ activeSection, setActiveSection, onNavigateToConnect }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Work', id: 'work' },
    { name: 'Process', id: 'process' },
    { name: 'About', id: 'about' },
  ];

  const handleNavClick = (id: string) => {
    // setActiveSection here triggers App.tsx's handleSetActiveSection
    // which handles clearing the case study and scrolling to the right place.
    setActiveSection(id);
  };

  return (
    <>
      {/* SVG Filter for Liquidmorphism */}
      <svg width="0" height="0" className="absolute hidden">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="
            1 0 0 0 0  
            0 1 0 0 0  
            0 0 1 0 0  
            0 0 0 20 -8" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
        </filter>
      </svg>

      <header className="fixed top-6 left-0 right-0 z-[100] flex justify-center pointer-events-none px-4">
        <motion.div 
          className={`pointer-events-auto flex items-center justify-between p-1.5 rounded-full transition-all duration-500 ease-out border shadow-xl backdrop-blur-md w-full max-w-4xl transform-gpu
            ${isScrolled 
              ? 'bg-white/80 border-stone-200/50 shadow-black/5' 
              : 'bg-[#1c1c1b]/90 border-[#B8925A]/20 shadow-black/20'}`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
        >
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 text-left focus:outline-none relative z-20 pl-2 group"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isScrolled ? 'bg-[#1c1c1b]' : 'bg-[#FAF6EE]'}`}>
              <span className={`font-display italic text-sm font-semibold ${isScrolled ? 'text-[#FAF6EE]' : 'text-[#1c1c1b]'}`}>a.</span>
            </div>
            <div className="flex flex-col justify-start leading-none">
              <span className={`font-display font-bold tracking-widest text-xs uppercase transition-colors duration-300 ${isScrolled ? 'text-[#1c1c1b]' : 'text-[#FAF6EE]'}`}>ARTEFACT</span>
              <span className="font-mono text-[8px] tracking-widest text-[#B8925A] italic">the journal</span>
            </div>
          </button>
          
          {/* Nav Container */}
          <div 
            className="hidden md:flex relative px-2"
            onMouseLeave={() => setHoveredSection(null)}
          >
            {/* Liquid Background Layer (Goo Filter applied) */}
            <div 
              className="absolute inset-0 flex items-center gap-1 px-2 pointer-events-none z-0" 
              style={{ filter: 'url(#goo)' }}
            >
              {navItems.map((item) => (
                <div key={`bg-${item.id}`} className="relative px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-transparent select-none">
                  {item.name}
                  
                  {/* Active Dot Background */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="navbar-active"
                      className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${isScrolled ? 'bg-[#1c1c1b]' : 'bg-[#B8925A]'}`}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  {/* Hover Pill Background */}
                  {hoveredSection === item.id && (
                    <motion.div
                      layoutId="navbar-hover"
                      className={`absolute inset-0 rounded-full ${isScrolled ? 'bg-[#1c1c1b]' : 'bg-[#B8925A]'}`}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Foreground Text Layer */}
            <nav className="flex items-center gap-1 relative z-10">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const isHovered = hoveredSection === item.id;
                
                let textColor = '';
                if (isScrolled) {
                  // Light theme
                  textColor = isHovered ? 'text-white' : (isActive ? 'text-[#1c1c1b] font-bold' : 'text-stone-500 hover:text-[#1c1c1b]');
                } else {
                  // Dark theme
                  textColor = isHovered ? 'text-[#1c1c1b] font-bold' : (isActive ? 'text-[#FAF6EE] font-bold' : 'text-stone-400 hover:text-[#FAF6EE]');
                }
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    onMouseEnter={() => setHoveredSection(item.id)}
                    className={`relative px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 focus:outline-none rounded-full ${textColor}`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* CTA Button */}
          <button 
            onClick={onNavigateToConnect}
            className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-mono text-[10px] uppercase tracking-widest transition-all duration-300 group focus:outline-none relative z-20
            ${isScrolled 
              ? 'bg-[#1c1c1b] text-[#FAF6EE] hover:bg-[#B8925A]' 
              : 'bg-[#B8925A] text-[#1c1c1b] hover:bg-[#FAF6EE]'}`}
          >
            <span className="font-semibold">Hire Me</span>
          </button>

          {/* Mobile Nav Toggle fallback */}
          <div className="md:hidden pr-4 font-mono text-[10px] uppercase tracking-widest text-[#B8925A] relative z-20">
            Menu
          </div>

        </motion.div>
      </header>
    </>
  );
}
