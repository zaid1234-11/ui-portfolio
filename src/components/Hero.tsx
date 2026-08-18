import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import HoverMaskReveal from './HoverMaskReveal';
import SplitText from './SplitText';

interface HeroProps {
  onExploreClick: () => void;
  isLoading?: boolean;
}

export default function Hero({ onExploreClick, isLoading = false }: HeroProps) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-12 md:pb-14 px-6 sm:px-10 md:px-14 lg:px-18 xl:px-24 bg-[#FAF6EE] dark:bg-[#111110] text-[#1c1c1b] dark:text-[#FAF6EE] overflow-hidden transition-colors duration-500 font-sans"
    >
      {/* 1. Full-screen Interactive Hover Mask Reveal Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
        <HoverMaskReveal
          imageBase={{ src: isDark ? '/dark front 2.webp' : '/front.webp', positionX: '50%', positionY: '50%' }}
          imageHover={{ src: isDark ? '/dark back.webp' : '/back.webp', positionX: '50%', positionY: '50%' }}
          radius={150}
          blur={0.5}
          splatRadius={0.08}
          circleBoost={0.6}
          parallax={false}
          pressureIterations={5}
        />
      </div>

      {/* 2. Dark Mode Editorial Atmosphere: Ghosted Typography, Notebook Spine, Chalk Doodles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        
        {/* Left Margin: Vintage Spiral Notebook Wire Rings (Visible on Desktop in Dark Mode) */}
        <div className="hidden lg:flex flex-col gap-5 absolute left-2 sm:left-3 top-20 bottom-16 opacity-0 dark:opacity-20 z-10">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="w-3.5 h-2.5 rounded-full border border-white/60 bg-black/40 shadow-inner"></div>
          ))}
        </div>

        {/* Ghosted "Design" Large Editorial Serif in Dark Mode Background */}
        <div className="absolute left-6 sm:left-12 top-28 opacity-0 dark:opacity-8 pointer-events-none z-0">
          <span 
            className="text-[90px] sm:text-[140px] md:text-[180px] font-normal leading-none text-[#FAF6EE] tracking-tight block"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Design
          </span>
        </div>

        {/* Delicate Chalk / Pencil Handwritten "keep it simple." Doodle in Dark Mode */}
        <div className="absolute left-[38%] bottom-14 opacity-0 dark:opacity-30 pointer-events-none z-10 hidden md:block">
          <span 
            className="text-lg md:text-xl text-[#C5A880] tracking-wide block font-normal transform -rotate-6"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            keep it<br />simple.
          </span>
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#C5A880] fill-none stroke-current mt-1 ml-4 transform rotate-12" strokeWidth="1.5">
            <path d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5 C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3 C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z" />
          </svg>
        </div>

      </div>

      {/* 3. Top Architectural Date & Volume Sub-header Strip */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-[9.5px] sm:text-[10px] md:text-[10.5px] font-ui font-semibold text-[#8C7A65] dark:text-[#8C7A65] tracking-wider mb-6 md:mb-8 select-none border-b border-[#8C7A65]/10 dark:border-white/5 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="w-5 h-[1.5px] bg-[#8C7A65]/40 inline-block"></span>
          <span className="uppercase tracking-[0.2em] font-bold">THE DIGITAL DIARY // VOL. 04</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <span className="tracking-[0.2em] font-bold">DATE / 31 / 12 / 2025</span>
          <span className="text-[#8C7A65]/40">·</span>
          <span className="tracking-widest uppercase opacity-75 font-medium">
            MOMENTS, THOUGHTS &amp; MEMORIES
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="uppercase tracking-widest font-bold opacity-80">PAGE / 01</span>
          <span className="text-[#B8925A] dark:text-[#C59B63] text-[9px] font-bold">✦</span>
          <span className="text-[#B8925A] dark:text-[#C59B63] font-bold uppercase tracking-widest">ACTIVE</span>
        </div>
      </div>

      {/* Top-Right Ephemera: 5¢ Postage Stamp & Circular Postmark */}
      <div className="absolute top-20 right-8 sm:top-24 sm:right-16 z-20 pointer-events-none select-none hidden md:flex items-center gap-3 opacity-90">
        {/* Circular Postmark */}
        <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-dashed border-[#8C7A65]/60 dark:border-[#8C7A65]/50 flex items-center justify-center text-center p-1 transform -rotate-12">
          <span className="font-ui text-[7px] font-bold tracking-tighter text-[#8C7A65] dark:text-[#8C7A65] uppercase leading-tight">
            EVERY DAY<br />IS A FRESH<br />START
          </span>
          <svg className="absolute -right-5 top-1/2 -translate-y-1/2 w-7 h-5 text-[#8C7A65]/45 dark:text-[#8C7A65]/40 fill-none stroke-current" viewBox="0 0 40 30">
            <path d="M0,5 Q10,0 20,5 T40,5 M0,15 Q10,10 20,15 T40,15 M0,25 Q10,20 20,25 T40,25" strokeWidth="1" />
          </svg>
        </div>

        {/* Scalloped Perforated Postage Stamp (5¢) */}
        <div className="relative w-13 h-17 sm:w-14 sm:h-18 bg-[#E8D4C8] dark:bg-[#201D1A] border border-[#C5A898] dark:border-[#3D352F] rounded-xs shadow-sm p-1.5 flex flex-col justify-between items-center transform rotate-6">
          <div className="w-full flex justify-between items-center font-ui font-bold text-[6px] text-[#8C6B58] dark:text-[#C59B63]">
            <span>POST</span>
            <span>5¢</span>
          </div>
          <svg viewBox="0 0 40 40" className="w-6 h-6 text-[#8C6B58] dark:text-[#C59B63] fill-none stroke-current" strokeWidth="1.2">
            <circle cx="20" cy="20" r="2.5" fill="currentColor" />
            <path d="M20,17 C18,10 22,10 20,17 M23,20 C30,18 30,22 23,20 M20,23 C22,30 18,30 20,23 M17,20 C10,22 10,18 17,20 M22,18 C28,13 29,17 22,18 M18,22 C12,27 11,23 18,22" />
          </svg>
          <span className="font-ui text-[6px] font-bold text-[#8C6B58] dark:text-[#C59B63] uppercase tracking-wider">ATELIER</span>
        </div>
      </div>

      {/* 4. Main Editorial Content (Left-Aligned, Spacious, No Image or Placeholder Box) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start justify-center my-auto py-4 md:py-8">
        <div className="max-w-[760px] flex flex-col items-start">
          
          {/* STEP 1: Small Eyebrow in Manrope (Warm Antique Camel Gold) */}
          <motion.div 
            initial={{ opacity: 0, y: -8 }}
            animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-3 sm:mb-4"
          >
            <span className="font-ui text-[10px] sm:text-[11px] md:text-[11.5px] font-bold tracking-[0.22em] text-[#9E8365] dark:text-[#C59B63] uppercase inline-block">
              UI/UX DESIGNER • PRODUCT DESIGNER • FRONT-END ENGINEER
            </span>
          </motion.div>

          {/* STEP 2: Main Headline in DM Serif Display with Botanical Motif */}
          <div className="relative mb-4 sm:mb-5 w-full">
            
            {/* Botanical Flower Illustration (pinned beside "that") */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={!isLoading ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="absolute -left-7 sm:-left-9 top-[36%] -translate-y-1/2 w-8 h-10 sm:w-9 sm:h-11 pointer-events-none select-none z-20 drop-shadow-sm hidden xs:block"
            >
              <svg viewBox="0 0 60 70" fill="none" className="w-full h-full">
                <path d="M30,35 Q15,20 18,5 Q32,15 30,35 Z" fill="#4B634B" className="dark:fill-[#4B634B]" opacity="0.9" />
                <path d="M30,35 Q45,22 42,8 Q28,18 30,35 Z" fill="#3D523D" className="dark:fill-[#3D523D]" opacity="0.85" />
                <path d="M30,45 Q12,50 8,62 Q24,62 30,45 Z" fill="#4B634B" className="dark:fill-[#4B634B]" opacity="0.9" />
                <path d="M30,45 Q48,52 52,65 Q36,64 30,45 Z" fill="#3D523D" className="dark:fill-[#3D523D]" opacity="0.85" />
                <path d="M22,35 Q10,38 4,30 Q14,24 22,35 Z" fill="#587358" className="dark:fill-[#587358]" opacity="0.8" />
                <circle cx="30" cy="38" r="10" fill="#FAF6EE" stroke="#4B634B" strokeWidth="1" />
                <circle cx="23" cy="35" r="7" fill="#F4EFE6" stroke="#4B634B" strokeWidth="0.8" />
                <circle cx="37" cy="35" r="7" fill="#F4EFE6" stroke="#4B634B" strokeWidth="0.8" />
                <circle cx="30" cy="45" r="7" fill="#F4EFE6" stroke="#4B634B" strokeWidth="0.8" />
                <circle cx="30" cy="30" r="7" fill="#F4EFE6" stroke="#4B634B" strokeWidth="0.8" />
                <circle cx="30" cy="37" r="4.5" fill="#D4AF37" />
                <circle cx="30" cy="37" r="2" fill="#8B6508" />
              </svg>
            </motion.div>

            <h1 
              className="font-display text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] xl:text-[62px] font-normal leading-[1.1] tracking-[-0.015em] text-[#1c1c1b] dark:text-[#FAF6EE]"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              {/* Line 1 */}
              <div className="block overflow-hidden">
                <SplitText
                  text="I design digital products"
                  className="font-display inline font-normal leading-[1.1] tracking-[-0.015em] text-[#1c1c1b] dark:text-[#FAF6EE]"
                  delay={24}
                  duration={0.85}
                  ease="power3.out"
                  splitType="words, chars"
                  from={{ opacity: 0, y: 24 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="left"
                  tag="span"
                  isReady={!isLoading}
                />
              </div>

              {/* Line 2 */}
              <div className="block overflow-hidden">
                <SplitText
                  text="that make complex"
                  className="font-display inline font-normal leading-[1.1] tracking-[-0.015em] text-[#1c1c1b] dark:text-[#FAF6EE]"
                  delay={28}
                  duration={0.85}
                  ease="power3.out"
                  splitType="words, chars"
                  from={{ opacity: 0, y: 24 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="left"
                  tag="span"
                  isReady={!isLoading}
                />
              </div>

              {/* Line 3 */}
              <div className="flex items-center flex-wrap gap-x-2 sm:gap-x-3 overflow-hidden">
                <SplitText
                  text="workflows feel"
                  className="font-display inline font-normal leading-[1.1] tracking-[-0.015em] text-[#1c1c1b] dark:text-[#FAF6EE]"
                  delay={32}
                  duration={0.85}
                  ease="power3.out"
                  splitType="words, chars"
                  from={{ opacity: 0, y: 24 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="left"
                  tag="span"
                  isReady={!isLoading}
                />
                <span className="relative inline-block italic font-normal text-[#20321E] dark:text-[#C59B63]">
                  <SplitText
                    text="simple."
                    className="italic font-normal text-[#20321E] dark:text-[#C59B63]"
                    delay={36}
                    duration={0.85}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 24 }}
                    to={{ opacity: 1, y: 0 }}
                    textAlign="left"
                    tag="span"
                    isReady={!isLoading}
                  />
                  {/* Refined subtle organic ink brush underline (Gold in dark mode) */}
                  <svg 
                    viewBox="0 0 160 14" 
                    fill="none" 
                    className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-2 sm:h-3 text-[#20321E] dark:text-[#C59B63] pointer-events-none overflow-visible opacity-90"
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M2,9 C45,4 95,3 158,8 C115,11 60,12 3,10" 
                      fill="currentColor" 
                    />
                  </svg>
                </span>
              </div>
            </h1>
          </div>

          {/* STEP 3: Supporting Copy in Handwritten Kalam (3 distinct lines) */}
          <div className="handwritten-3lines-container mb-4 sm:mb-5">
            {/* Line 1 */}
            <p className="handwritten-word-flow">
              {!isLoading && [
                "From", "fintech", "and", "AI", "products", "to", "data-heavy", "enterprise", "experiences", "—"
              ].map((word, i) => (
                <span
                  key={`l1-${i}`}
                  className="handwritten-word"
                  style={{ animationDelay: `${0.35 + i * 0.055}s` }}
                >
                  {word}
                </span>
              ))}
            </p>

            {/* Line 2 */}
            <p className="handwritten-word-flow">
              {!isLoading && [
                "I", "turn", "complex", "systems", "into", "intuitive,", "thoughtful", "interfaces,"
              ].map((word, i) => (
                <span
                  key={`l2-${i}`}
                  className="handwritten-word"
                  style={{ animationDelay: `${0.9 + i * 0.055}s` }}
                >
                  {word}
                </span>
              ))}
            </p>

            {/* Line 3 */}
            <p className="handwritten-word-flow">
              {!isLoading && [
                "and", "bring", "them", "to", "life", "with", "modern", "frontend", "engineering."
              ].map((word, i) => (
                <span
                  key={`l3-${i}`}
                  className="handwritten-word"
                  style={{ animationDelay: `${1.4 + i * 0.055}s` }}
                >
                  {word}
                </span>
              ))}
            </p>
          </div>

          {/* STEP 4: Understated Location / Availability Line in Manrope */}
          <motion.div 
            initial={{ opacity: 0, y: 8 }}
            animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center gap-1.5 mb-6 sm:mb-7 text-[#8C7A65] dark:text-[#A89F91] select-none"
          >
            <MapPin className="w-3.5 h-3.5 text-[#B8925A] dark:text-[#C59B63] flex-shrink-0" />
            <span className="font-ui text-[10px] sm:text-[10.5px] md:text-[11px] font-semibold tracking-[0.16em] uppercase text-[#736350] dark:text-[#A89F91]">
              OPEN TO RELOCATE · <span className="dark:text-[#C59B63]">BANGALORE / MUMBAI</span>
            </span>
          </motion.div>

          {/* STEP 5: Compact & Elegant CTAs in Manrope */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap items-center gap-3 font-ui"
          >
            {/* Primary Button */}
            <button
              id="hero-explore-btn"
              onClick={onExploreClick}
              className="group flex items-center gap-2 bg-[#1C1C1B] dark:bg-[#141413] border border-transparent dark:border-[#2B2723] text-[#FAF6EE] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-ui text-[10.5px] sm:text-[11px] font-semibold tracking-wider uppercase shadow-sm hover:bg-[#B8925A] dark:hover:bg-[#C59B63] hover:text-[#1c1c1b] dark:hover:text-[#141413] transition-all duration-300 cursor-pointer"
            >
              <span>VIEW SELECTED WORK</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B8925A] dark:text-[#C59B63] group-hover:text-[#1c1c1b] dark:group-hover:text-[#141413] group-hover:translate-x-0.5 transition-all duration-300" />
            </button>

            {/* Secondary Button - Download Resume */}
            <a
              href="/Zaid_Saifi_Resume.pdf"
              download="Zaid_Saifi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-transparent dark:bg-[#141413]/30 text-[#1C1C1B] dark:text-[#A89F91] border border-[#1C1C1B]/30 dark:border-[#423931] hover:border-[#1C1C1B] dark:hover:border-[#C59B63] dark:hover:text-[#FAF6EE] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-ui text-[10.5px] sm:text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#1c1c1b]/5 dark:hover:bg-white/5 cursor-pointer"
            >
              <span>DOWNLOAD RESUME</span>
              <Download className="w-3.5 h-3.5 text-[#8C7A65] dark:text-[#C59B63] group-hover:translate-y-0.5 transition-all duration-300" />
            </a>
          </motion.div>

        </div>
      </div>

      {/* Bottom-Right Corner Taped Lined Note Scrap */}
      <div className="absolute bottom-6 right-8 sm:bottom-8 sm:right-16 z-20 pointer-events-none select-none hidden md:block opacity-85">
        <div className="bg-[#EFE6D6] dark:bg-[#1E1B18] border border-[#C5B5A2] dark:border-[#38332E] px-3.5 py-2.5 rounded-xs shadow-sm transform -rotate-1 max-w-[155px]">
          <span className="font-ui text-[8.5px] font-bold tracking-widest text-[#3D2C27] dark:text-[#C5A880] uppercase block leading-tight mb-1">
            DESIGN IS<br />THINKING<br />MADE VISUAL.
          </span>
          <svg viewBox="0 0 45 12" className="w-10 h-2.5 text-[#3D2C27] dark:text-[#C5A880] fill-none stroke-current" strokeWidth="1.2">
            <path d="M2,8 Q12,2 22,9 T42,5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* 5. Minimalist Bottom Scroll Indicator */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center pt-2 text-center select-none">
        <button
          onClick={onExploreClick}
          className="group flex flex-col items-center gap-1 font-ui text-[9px] sm:text-[9.5px] font-bold uppercase tracking-[0.25em] text-[#8C7A65]/80 dark:text-[#C5A880]/80 hover:text-[#1c1c1b] dark:hover:text-[#FAF6EE] transition-colors cursor-pointer"
        >
          <span className="w-[1px] h-2.5 bg-[#8C7A65]/40 dark:bg-[#C5A880]/40 group-hover:h-3.5 transition-all duration-300"></span>
          <span>SCROLL TO EXPLORE</span>
        </button>
      </div>

    </section>
  );
}
