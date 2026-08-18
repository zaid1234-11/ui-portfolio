import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface PreloaderProps {
  onComplete?: () => void;
  themeMode?: 'dark' | 'light';
}

const WORDS = ['DISCOVER', 'EXPERIMENT', 'SYNTHESIZE', 'ZAID SAIFI'];

const STATUS_STEPS = [
  '01/04: ARCHITECTING TOKENS',
  '02/04: COMPOSING TYPOGRAPHY',
  '03/04: CALIBRATING 60FPS ENGINE',
  '04/04: ATELIER UNLOCKED'
];

export default function Preloader({ onComplete, themeMode = 'light' }: PreloaderProps) {
  const [percent, setPercent] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const isDark = themeMode === 'dark';

  useEffect(() => {
    // Steady, smooth counter progression (~3.2 seconds total duration)
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 32);

    return () => clearInterval(interval);
  }, []);

  // Update rotating words and status text in lockstep with progress percentage
  useEffect(() => {
    const wIdx = Math.min(Math.floor((percent / 100) * WORDS.length), WORDS.length - 1);
    setWordIndex(wIdx);

    const sIdx = Math.min(Math.floor((percent / 100) * STATUS_STEPS.length), STATUS_STEPS.length - 1);
    setStatusIndex(sIdx);

    if (percent === 100 && onComplete) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 650);
      return () => clearTimeout(timeout);
    }
  }, [percent, onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: '-100%',
        transition: {
          duration: 0.95,
          ease: [0.76, 0, 0.24, 1]
        }
      }}
      className={`fixed inset-0 z-[99999] flex flex-col justify-between p-6 sm:p-10 md:p-12 select-none overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#141413] text-[#FAF6EE]' : 'bg-[#FAF6EE] text-[#1c1c1b]'
      }`}
    >
      {/* Background ambient lighting and fine grid watermark */}
      <div 
        className={`absolute inset-0 pointer-events-none ${
          isDark 
            ? 'bg-[radial-gradient(circle_at_center,rgba(184,146,90,0.08)_0%,transparent_70%)]' 
            : 'bg-[radial-gradient(circle_at_center,rgba(184,146,90,0.12)_0%,transparent_70%)]'
        }`} 
      />
      <div 
        className={`absolute inset-0 bg-[size:3.5rem_3.5rem] pointer-events-none ${
          isDark 
            ? 'bg-[linear-gradient(to_right,rgba(250,246,238,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(250,246,238,0.02)_1px,transparent_1px)]' 
            : 'bg-[linear-gradient(to_right,rgba(184,146,90,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(184,146,90,0.08)_1px,transparent_1px)]'
        }`} 
      />

      {/* 4 Architectural Corner Crop Marks */}
      <div className="absolute top-5 left-5 font-mono text-sm text-[#B8925A] font-bold select-none">⌜</div>
      <div className="absolute top-5 right-5 font-mono text-sm text-[#B8925A] font-bold select-none">⌝</div>
      <div className="absolute bottom-5 left-5 font-mono text-sm text-[#B8925A] font-bold select-none">⌞</div>
      <div className="absolute bottom-5 right-5 font-mono text-sm text-[#B8925A] font-bold select-none">⌟</div>

      {/* TOP BAR: Brand Identity & Live Telemetry Readout */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#B8925A]/25 pb-4 sm:pb-5">
        {/* Monogram Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#B8925A] flex items-center justify-center text-[#FAF6EE] shadow-sm">
            <span className="font-display italic text-sm font-bold leading-none">a.</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-display font-bold tracking-[0.25em] text-[11px] sm:text-xs uppercase ${isDark ? 'text-[#FAF6EE]' : 'text-[#1c1c1b]'}`}>
              ARTEFACT
            </span>
            <span className="font-mono text-[8px] sm:text-[9px] text-[#B8925A] font-semibold tracking-widest uppercase italic mt-0.5">
              the journal vol. 2026
            </span>
          </div>
        </div>

        {/* Dynamic Status Readout Badge */}
        <motion.div
          key={statusIndex}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`font-mono text-[9px] sm:text-[10.5px] font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border shadow-sm ${
            isDark 
              ? 'bg-white/10 border-white/20 text-[#FAF6EE]' 
              : 'bg-[#ECE3D2] border-[#B8925A]/40 text-[#1c1c1b]'
          }`}
        >
          <span className="text-[#B8925A] mr-1.5 font-bold">✦</span>
          {STATUS_STEPS[statusIndex]}
        </motion.div>

        {/* Location & Time Readout */}
        <div className="hidden md:flex items-center gap-2 font-mono text-[9.5px] font-medium text-[#B8925A] tracking-widest uppercase">
          <span>28°38'N 77°13'E • EDITION 2026</span>
        </div>
      </div>

      {/* CENTER: Massive Rotating Editorial Headline & Progress Rail */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center py-6">
        {/* Label Tag */}
        <div className="mb-3 sm:mb-5 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.4em] uppercase text-[#B8925A]"
          >
            <span>DISCIPLINE</span>
            <span className="text-[8px]">✦</span>
            <span>DETAIL</span>
            <span className="text-[8px]">✦</span>
            <span>RIGOR</span>
          </motion.div>
        </div>

        {/* Dynamic Word Cycler */}
        <div className="min-h-[85px] sm:min-h-[120px] md:min-h-[145px] flex items-center justify-center overflow-hidden w-full px-4">
          <motion.h2
            key={wordIndex}
            initial={{ y: 50, opacity: 0, filter: 'blur(4px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: -50, opacity: 0, filter: 'blur(4px)' }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
            className={`font-display italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none ${
              isDark ? 'text-[#FAF6EE]' : 'text-[#1c1c1b]'
            }`}
            style={{ fontFamily: "'Fraunces', 'Cormorant Garamond', serif" }}
          >
            {WORDS[wordIndex]}
          </motion.h2>
        </div>

        {/* Minimal High-Precision Loading Rail with Milestone Nodes */}
        <div className="w-full max-w-xs sm:max-w-md md:max-w-xl mt-6 sm:mt-10">
          <div className="relative w-full h-[4px] bg-[#B8925A]/25 rounded-full overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-[#B8925A] via-[#B8925A] to-[#dc6305]"
              style={{ width: `${percent}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          {/* Rail Milestones */}
          <div className="flex justify-between items-center mt-3 px-1">
            <span className={`font-mono text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase ${isDark ? 'text-[#ECE3D2]/70' : 'text-[#383430]'}`}>
              CALIBRATING SYSTEM
            </span>
            <div className="hidden sm:flex items-center gap-3 font-mono text-[9px] text-[#B8925A]">
              <span className={percent >= 25 ? 'text-[#B8925A] font-bold underline' : 'opacity-40'}>25%</span>
              <span>•</span>
              <span className={percent >= 50 ? 'text-[#B8925A] font-bold underline' : 'opacity-40'}>50%</span>
              <span>•</span>
              <span className={percent >= 75 ? 'text-[#B8925A] font-bold underline' : 'opacity-40'}>75%</span>
            </div>
            <span className="font-mono text-[9px] sm:text-[10.5px] text-[#B8925A] font-bold tracking-widest">
              {percent < 100 ? `${percent}%` : '100% READY'}
            </span>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR: Engineering Meta & Monumental Numeric Counter */}
      <div className="relative z-10 flex items-end justify-between border-t border-[#B8925A]/25 pt-4 sm:pt-5">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className={`font-display font-bold text-sm sm:text-base tracking-wide ${isDark ? 'text-[#FAF6EE]' : 'text-[#1c1c1b]'}`}>
              Zaid Saifi
            </span>
            <span className="text-[#B8925A] text-[9px]">✦</span>
            <span className="font-mono text-[9px] sm:text-[10px] text-[#B8925A] font-bold uppercase tracking-wider">
              PORTFOLIO 2026
            </span>
          </div>
          <span className={`font-mono text-[8.5px] sm:text-[10px] font-medium uppercase tracking-widest ${isDark ? 'text-[#ECE3D2]/80' : 'text-[#4E4842]'}`}>
            Lead UI/UX Engineer & Creative Technologist
          </span>
        </div>

        {/* Giant Monospace Numeric Percentage Counter */}
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-tighter leading-none ${
              isDark ? 'text-[#FAF6EE]' : 'text-[#1c1c1b]'
            }`}
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            {String(percent).padStart(2, '0')}
          </span>
          <span className="font-mono text-lg sm:text-2xl text-[#B8925A] font-bold">
            %
          </span>
        </div>
      </div>
    </motion.div>
  );
}


