import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onNavigateToConnect: () => void;
}

export default function Header({ activeSection, setActiveSection, onNavigateToConnect }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Live clock in UTC
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const minutes = String(now.getUTCMinutes()).padStart(2, '0');
      const seconds = String(now.getUTCSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds} UTC`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const menuItems = [
    { id: 'work', label: 'Work' },
    { id: 'process', label: 'Process' },
    { id: 'about', label: 'About' },
    { id: 'connect', label: 'Connect' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2.5rem)] max-w-7xl z-50 transition-all duration-500 rounded-2xl ${
        isScrolled 
          ? 'bg-[#1c1c1b] border border-[#B8925A]/25 py-3 shadow-[0_12px_36px_rgba(28,28,27,0.25)]' 
          : 'bg-transparent border border-transparent py-5'
      }`}
    >
      <div className="w-full px-6 md:px-10 flex items-center justify-between">
        {/* Logo (Hand-crafted calligraphy-serif hybrid) */}
        <button
          id="logo-btn"
          onClick={() => handleNavClick('hero')}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div className="relative w-8 h-8 rounded-full border border-[#B8925A]/45 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-[#B8925A] bg-[#1c1c1b]">
            <span className="font-display italic text-sm font-semibold text-[#FAF6EE]">a.</span>
          </div>
          <div className="flex flex-col justify-start leading-none">
            <span className="font-display font-bold tracking-widest text-xs text-[#1c1c1b] dark-text-swap group-hover:text-[#B8925A] transition-colors uppercase">
              ARTEFACT
            </span>
            <span className="font-mono text-[8px] tracking-widest text-[#B8925A] italic">
              the journal
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`relative py-1 text-xs tracking-widest uppercase font-medium focus:outline-none transition-colors duration-300 ${
                activeSection === item.id 
                  ? 'text-[#1c1c1b] font-semibold' 
                  : 'text-[#4E4842]/60 hover:text-[#1c1c1b]'
              }`}
              style={{
                color: isScrolled ? '#FAF6EE' : undefined
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B8925A] rounded-full"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Right side Metadata & Action Button */}
        <div className="hidden md:flex items-center gap-6">
          <div className="font-mono text-[10px] text-[#B8925A] tracking-widest bg-[#1c1c1b] border border-[#B8925A]/20 px-3.5 py-1.5 rounded-full">
            {currentTime}
          </div>

          <button
            id="hire-me-btn"
            onClick={onNavigateToConnect}
            className="relative flex items-center gap-1.5 bg-[#1c1c1b] text-[#FAF6EE] border border-[#B8925A]/60 text-xs tracking-widest uppercase font-semibold px-5 py-2.5 rounded-full hover:bg-[#FAF6EE] hover:text-[#1c1c1b] hover:border-[#1c1c1b] transition-all duration-300 active:scale-95 shadow-md cursor-pointer"
          >
            Hire Me
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <div className="font-mono text-[10px] text-[#B8925A] tracking-widest bg-[#1c1c1b] border border-[#B8925A]/15 px-2.5 py-1 rounded-full">
            {currentTime ? currentTime.split(' ')[0] : ''}
          </div>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#4E4842] hover:text-[#1c1c1b] transition-colors duration-300 rounded-full border border-[#B8925A]/20 bg-[#FAF6EE]/50 focus:outline-none"
            style={{
              color: isScrolled ? '#FAF6EE' : undefined,
              borderColor: isScrolled ? 'rgba(184, 146, 90, 0.25)' : undefined,
              backgroundColor: isScrolled ? '#1c1c1b' : undefined,
            }}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-[#1c1c1b] border border-[#B8925A]/20 py-8 px-6 md:hidden z-40 animate-fade-in rounded-2xl shadow-2xl">
          <div className="flex flex-col gap-6 text-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm tracking-widest uppercase font-medium py-2 border-b border-[#FAF6EE]/10 ${
                  activeSection === item.id ? 'text-[#B8925A] font-semibold' : 'text-[#FAF6EE]/70'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              id="mobile-hire-me-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToConnect();
              }}
              className="bg-[#FAF6EE] text-[#1c1c1b] text-xs tracking-wider uppercase font-semibold py-3.5 rounded-full mt-2 flex items-center justify-center gap-2 hover:bg-[#B8925A] hover:text-white transition-colors duration-300"
            >
              Hire Me
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
