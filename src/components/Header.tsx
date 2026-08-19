import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onNavigateToConnect: () => void;
  themeMode?: 'dark' | 'light';
  toggleTheme?: () => void;
}

export default function Header({ 
  activeSection, 
  setActiveSection, 
  onNavigateToConnect,
  themeMode = 'light',
  toggleTheme
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 50;
    setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
  });

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Work', id: 'work' },
    { name: 'Process', id: 'process' },
    { name: 'About', id: 'about' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isAboutSection = activeSection === 'about';

  return (
    <>
      {/* SVG Filter for Liquidmorphism (Desktop Only) */}
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

      <header className="fixed top-3 sm:top-4 md:top-5 left-0 right-0 z-[100] flex justify-center pointer-events-none px-3 sm:px-6 md:px-4">
        <motion.div 
          className={`pointer-events-auto flex flex-col md:flex-row md:items-center justify-between p-2 sm:p-2.5 md:py-2 md:px-4 border border-[#383734] shadow-2xl backdrop-blur-md w-full max-w-4xl transform-gpu bg-[#1c1c1b]/95 text-[#FAF6EE] transition-[border-radius] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isMobileMenuOpen ? 'rounded-[1.5rem] sm:rounded-[2rem]' : 'rounded-full'}`}
          initial={{ y: -80, opacity: 0 }}
          animate={isAboutSection ? { y: -120, opacity: 0 } : { y: 0, opacity: 1 }}
          style={{ pointerEvents: isAboutSection ? 'none' : 'auto' }}
          transition={{ 
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          {/* Logo & Toggle Wrapper */}
          <div className="flex items-center justify-between w-full md:w-auto">
            {/* Logo */}
            <button 
              onClick={() => { handleNavClick('hero'); setIsMobileMenuOpen(false); }}
              className="flex items-center gap-2.5 text-left focus:outline-none relative z-20 pl-1 sm:pl-1.5 group cursor-pointer"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FAF6EE] text-[#1c1c1b] flex items-center justify-center shadow-inner transition-transform duration-300 group-hover:scale-105">
                <span className="font-display italic text-xs sm:text-sm font-bold text-[#1c1c1b]">a.</span>
              </div>
              <div className="flex flex-col justify-start leading-tight">
                <span className="font-display font-bold tracking-widest text-[11px] sm:text-xs uppercase text-[#FAF6EE]">ARTEFACT</span>
                <span className="font-serif italic text-[9px] sm:text-[10px] text-[#B8925A]">by Zaid Saifi</span>
              </div>
            </button>

            {/* Mobile Actions (Theme Toggle & Mobile Nav Button) */}
            <div className="flex items-center gap-2 md:hidden">
              {toggleTheme && (
                <button
                  onClick={toggleTheme}
                  aria-label={themeMode === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
                  className={`p-2 rounded-full border transition-all duration-300 focus:outline-none flex items-center justify-center cursor-pointer active:scale-95 ${
                    isScrolled
                      ? 'bg-[#1c1c1b] text-[#B8925A] border-stone-700'
                      : 'bg-[#FAF6EE]/10 text-[#B8925A] border-[#B8925A]/30'
                  }`}
                >
                  {themeMode === 'dark' ? <Sun className="w-4 h-4 text-[#B8925A]" /> : <Moon className="w-4 h-4 text-[#B8925A]" />}
                </button>
              )}

              {/* Smooth Animated Hamburger Icon */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#B8925A] focus:outline-none flex flex-col items-center justify-center gap-1.25 w-8 h-8 cursor-pointer relative"
                aria-label="Toggle Navigation Menu"
              >
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="w-4.5 h-[1.75px] bg-[#B8925A] rounded-full block origin-center"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-4.5 h-[1.75px] bg-[#B8925A] rounded-full block origin-center"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="w-4.5 h-[1.75px] bg-[#B8925A] rounded-full block origin-center"
                />
              </button>
            </div>
          </div>
          
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
                      className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${isScrolled && themeMode !== 'dark' ? 'bg-[#1c1c1b]' : 'bg-[#B8925A]'}`}
                      transition={{ type: "spring", stiffness: 350, damping: 28, mass: 0.6 }}
                    />
                  )}

                  {/* Hover Pill Background */}
                  {hoveredSection === item.id && (
                    <motion.div
                      layoutId="navbar-hover"
                      className={`absolute inset-0 rounded-full ${isScrolled && themeMode !== 'dark' ? 'bg-[#1c1c1b]' : 'bg-[#B8925A]'}`}
                      transition={{ type: "spring", stiffness: 350, damping: 28, mass: 0.5 }}
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
                if (isScrolled && themeMode !== 'dark') {
                  textColor = isHovered ? 'text-white' : (isActive ? 'text-[#1c1c1b] font-bold' : 'text-stone-500 hover:text-[#1c1c1b]');
                } else {
                  textColor = isHovered ? 'text-[#1c1c1b] font-bold' : (isActive ? 'text-[#FAF6EE] font-bold' : 'text-stone-400 hover:text-[#FAF6EE]');
                }
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    onMouseEnter={() => setHoveredSection(item.id)}
                    className={`relative px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-250 focus:outline-none rounded-full cursor-pointer ${textColor}`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right Action Group (Theme Toggle & CTA) */}
          <div className="hidden md:flex items-center gap-2 relative z-20">
            {toggleTheme && (
              <button
                onClick={toggleTheme}
                aria-label={themeMode === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
                title={themeMode === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
                className={`p-2.5 rounded-full border transition-all duration-300 focus:outline-none flex items-center justify-center cursor-pointer shadow-sm hover:scale-105 active:scale-95 ${
                  isScrolled
                    ? 'bg-[#1c1c1b] text-[#B8925A] border-stone-700 hover:bg-[#B8925A] hover:text-[#1c1c1b]'
                    : 'bg-[#FAF6EE]/10 text-[#B8925A] border-[#B8925A]/30 hover:bg-[#B8925A] hover:text-[#1c1c1b]'
                }`}
              >
                {themeMode === 'dark' ? <Sun className="w-4 h-4 text-[#B8925A]" /> : <Moon className="w-4 h-4 text-[#B8925A]" />}
              </button>
            )}

            <button 
              onClick={onNavigateToConnect}
              className="px-5 py-2 rounded-full font-mono text-[10.5px] font-bold uppercase tracking-wider bg-[#B8925A] text-[#1c1c1b] hover:bg-[#FAF6EE] transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Nav Dropdown Content with 60fps Butter-Smooth Grid Transition */}
          <div
            className={`grid md:hidden w-full overflow-hidden transition-[grid-template-rows,opacity,margin,padding] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isMobileMenuOpen 
                ? 'grid-rows-[1fr] opacity-100 mt-3 sm:mt-4 pt-3 sm:pt-4 pb-2 border-t border-[#B8925A]/15' 
                : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 pb-0 border-t-0'
            }`}
          >
            <div className="overflow-hidden flex flex-col items-center gap-4 w-full">
              {/* Vertical menu links */}
              <nav className="flex flex-col items-center gap-1.5 sm:gap-2 w-full">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  const textColor = isScrolled
                    ? (isActive ? 'text-[#1c1c1b] font-bold' : 'text-stone-500')
                    : (isActive ? 'text-[#FAF6EE] font-bold' : 'text-stone-400');
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        handleNavClick(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`font-mono text-[10.5px] sm:text-xs uppercase tracking-[0.25em] py-2 w-full text-center transition-colors duration-200 focus:outline-none cursor-pointer hover:text-[#B8925A] ${textColor}`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </nav>

              {/* Mobile Connect CTA */}
              <button
                onClick={() => {
                  onNavigateToConnect();
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full max-w-[180px] sm:max-w-[200px] py-2.5 sm:py-3 rounded-full font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-center transition-all duration-300 focus:outline-none cursor-pointer active:scale-95
                  ${isScrolled 
                    ? 'bg-[#1c1c1b] text-[#FAF6EE] hover:bg-[#B8925A]' 
                    : 'bg-[#B8925A] text-[#1c1c1b] hover:bg-[#FAF6EE]'}`}
              >
                Hire Me
              </button>
            </div>
          </div>

        </motion.div>
      </header>
    </>
  );
}
