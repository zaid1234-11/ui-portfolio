import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Volume2, Disc3 } from 'lucide-react';

interface AlbumCoverPortraitProps {
  imageSrc?: string;
  audioSrc?: string;
  title?: string;
  type?: string;
  year?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AlbumCoverPortrait({
  imageSrc = '/me.jpg',
  audioSrc = '/me image record.aac',
  title = 'Zaid Saifi',
  type = 'Design & Engineering',
  year = 'Vol. 2026',
  className = '',
  style
}: AlbumCoverPortraitProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(audioSrc);
    audio.preload = 'metadata';
    audio.onloadedmetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    audio.ontimeupdate = () => {
      setCurrentTime(audio.currentTime);
    };
    audio.onended = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    audio.onpause = () => setIsPlaying(false);
    audio.onplay = () => setIsPlaying(true);
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, [audioSrc]);

  const togglePlayback = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => {
        console.warn('Audio playback error:', err);
      });
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs <= 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <motion.div
      style={style}
      className={`relative inline-flex flex-col items-start cursor-pointer select-none group/album ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={togglePlayback}
    >
      {/* Outer Sleeve & Vinyl Disc Assembly */}
      <div className="relative w-[260px] xs:w-[290px] sm:w-[320px] aspect-square">
        
        {/* ========================================================================= */}
        {/* 1. VINYL RECORD (DISC) - SLIDES OUT ON PLAY, RETRACTS BEHIND ON PAUSE     */}
        {/* ========================================================================= */}
        <motion.div
          animate={{
            x: isPlaying ? '52%' : isHovered ? '12%' : '0%',
            rotate: isPlaying ? [0, 360] : isHovered ? -20 : -45,
            scale: isPlaying ? 1.0 : isHovered ? 0.98 : 0.92,
            opacity: isPlaying || isHovered ? 1 : 0.7,
          }}
          transition={
            isPlaying
              ? {
                  x: { type: 'spring', stiffness: 220, damping: 28, mass: 1 },
                  scale: { type: 'spring', stiffness: 220, damping: 28, mass: 1 },
                  rotate: { repeat: Infinity, ease: 'linear', duration: 4.5 }
                }
              : {
                  type: 'spring',
                  stiffness: 240,
                  damping: 30,
                  mass: 1
                }
          }
          className="absolute top-0 right-0 w-full h-full rounded-full z-0 flex items-center justify-center pointer-events-none shadow-[0_15px_35px_rgba(0,0,0,0.45)]"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, #121212 0%, #171717 38%, #0d0d0d 40%, #1a1a1a 42%, #111111 55%, #1c1c1c 57%, #0f0f0f 70%, #1a1a1a 72%, #080808 100%)
            `,
          }}
        >
          {/* Micro-groove ridges overlay */}
          <div 
            className="absolute inset-0 rounded-full opacity-60 pointer-events-none"
            style={{
              backgroundImage: `repeating-radial-gradient(circle at center, transparent 0, transparent 2px, rgba(255,255,255,0.03) 3px, transparent 4px)`
            }}
          />

          {/* Vinyl Specular Light Reflection / Sheen Flares */}
          <div 
            className="absolute inset-0 rounded-full opacity-40 pointer-events-none"
            style={{
              background: `conic-gradient(from 45deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.18) 45deg, transparent 90deg, rgba(255,255,255,0.15) 225deg, transparent 270deg)`
            }}
          />

          {/* Outer edge rim */}
          <div className="absolute inset-0 rounded-full border border-white/10" />

          {/* Center Vinyl Label Sticker (36% width of disc) */}
          <div className="relative w-[36%] aspect-square rounded-full bg-[#EFE6D6] dark:bg-[#1E1B18] border-2 border-[#B8925A] flex items-center justify-center overflow-hidden shadow-inner p-1">
            {/* Center artwork thumbnail */}
            <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={imageSrc}
                alt="Vinyl Label Artwork"
                className="w-full h-full object-cover grayscale contrast-125 brightness-90"
              />
              <div className="absolute inset-0 bg-[#B8925A]/20 mix-blend-overlay" />
              
              {/* Circular Label Typography */}
              <div className="absolute inset-0 flex flex-col items-center justify-between p-1 select-none pointer-events-none">
                <span className="font-ui text-[5.5px] font-black tracking-widest text-[#FAF6EE] uppercase bg-black/60 px-1 rounded-xs">
                  {isPlaying ? 'PLAYING' : 'SIDE A'}
                </span>
                <span className="font-ui text-[4.5px] font-bold tracking-wider text-[#FAF6EE] uppercase bg-black/60 px-1 rounded-xs">
                  33⅓ RPM
                </span>
              </div>

              {/* Center Spindle Hole / Interactive Play/Pause Icon */}
              <div className="absolute w-4 h-4 rounded-full bg-[#0d0d0d] border border-[#FAF6EE]/80 shadow-md flex items-center justify-center">
                {isPlaying ? (
                  <Pause className="w-2 h-2 text-[#FAF6EE] fill-current" />
                ) : (
                  <Play className="w-2 h-2 text-[#FAF6EE] fill-current translate-x-0.2" />
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. ALBUM SLEEVE / JACKET (POCHETTE)                                       */}
        {/* ========================================================================= */}
        <motion.div
          animate={{
            rotate: isPlaying ? -3 : isHovered ? -1.5 : 0,
            scale: isPlaying ? 1.03 : isHovered ? 1.015 : 1.0,
            y: isPlaying ? -4 : isHovered ? -2 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 240,
            damping: 30,
            mass: 1
          }}
          className="relative w-full h-full rounded-md z-10 overflow-hidden bg-[#1c1c1b] border border-[#B8925A]/20 shadow-[0_20px_45px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_50px_rgba(0,0,0,0.6)] group-hover/album:shadow-[0_30px_60px_rgba(0,0,0,0.35)] transition-shadow duration-500"
        >
          {/* Main Album Artwork Photo */}
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover contrast-[1.08] brightness-[1.02] transition-transform duration-700 group-hover/album:scale-[1.02]"
          />

          {/* Cardboard Texture Sheen & Spine Ring Highlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
          
          {/* Left Spine Cardboard Crease */}
          <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-gradient-to-r from-black/30 via-black/10 to-transparent border-r border-white/5 pointer-events-none" />

          {/* Right Sleeve Pocket Opening Shadow */}
          <div className="absolute top-0 bottom-0 right-0 w-3 bg-gradient-to-l from-black/40 to-transparent pointer-events-none" />

          {/* Top Tape Strip Accent */}
          <div className="absolute -top-1 left-8 w-14 h-3 bg-[#E8DCB8]/80 dark:bg-[#2A251D]/80 border-t border-b border-[#C5B5A2]/40 backdrop-blur-xs transform -rotate-2 z-20 pointer-events-none shadow-xs" />

          {/* Center Play Button Overlay on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/album:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-[#1c1c1b]/85 backdrop-blur-md border border-[#B8925A] flex items-center justify-center shadow-2xl transform scale-90 group-hover/album:scale-100 transition-transform duration-300">
              {isPlaying ? (
                <Pause className="w-5 h-5 text-[#FAF6EE] fill-current" />
              ) : (
                <Play className="w-5 h-5 text-[#FAF6EE] fill-current translate-x-0.5" />
              )}
            </div>
          </div>

          {/* Top Foil Stamp Header / Atelier Sticker */}
          <div className="absolute top-3 left-3 z-20 pointer-events-none">
            <div className="bg-[#1c1c1b]/85 backdrop-blur-md border border-[#B8925A]/40 px-2.5 py-1 rounded-xs shadow-md">
              <span className="font-ui text-[7.5px] font-bold text-[#FAF6EE] tracking-[0.2em] uppercase flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-[#B8925A] animate-pulse'}`} />
                <span>{isPlaying ? 'AUDIO PLAYING' : 'CLICK TO PLAY'}</span>
              </span>
            </div>
          </div>

          {/* Bottom Foil Stamp Badge */}
          <div className="absolute bottom-3 left-3 right-3 z-20 flex justify-between items-end pointer-events-none">
            <div className="bg-[#FAF6EE]/95 dark:bg-[#1c1c1b]/95 backdrop-blur-md border border-[#B8925A]/30 px-2.5 py-1 rounded-xs shadow-md">
              <span className="font-display font-black text-[9px] text-[#1c1c1b] dark:text-[#FAF6EE] tracking-wider uppercase">
                {title}
              </span>
            </div>
            <div className="bg-[#FAF6EE]/95 dark:bg-[#1c1c1b]/95 backdrop-blur-md border border-[#B8925A]/30 px-2 py-1 rounded-xs shadow-md">
              <span className="font-ui font-bold text-[7.5px] text-[#B8925A] tracking-widest uppercase">
                {year}
              </span>
            </div>
          </div>

          {/* Corner Framing Accents */}
          <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t border-l border-[#B8925A]/60 pointer-events-none" />
          <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t border-r border-[#B8925A]/60 pointer-events-none" />
          <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b border-l border-[#B8925A]/60 pointer-events-none" />
          <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b border-r border-[#B8925A]/60 pointer-events-none" />
        </motion.div>

        {/* ========================================================================= */}
        {/* 3. TURNTABLE TONEARM NEEDLE ARM (PIVOTS ONTO DISC WHEN PLAYING)            */}
        {/* ========================================================================= */}
        <div className="absolute -top-4 -right-5 z-20 pointer-events-none hidden sm:block">
          <motion.div
            animate={{ rotate: isPlaying ? 26 : 0 }}
            transition={{ type: 'spring', stiffness: 140, damping: 22 }}
            className="relative origin-top-right w-14 h-24"
          >
            {/* Pivot Base */}
            <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#1c1c1b] border border-[#B8925A] shadow-md flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#B8925A]" />
            </div>
            {/* Metallic Arm */}
            <div className="absolute top-3.5 right-1.5 w-0.5 h-16 bg-gradient-to-b from-[#C5B5A2] via-[#8C7A65] to-[#B8925A] rounded-full shadow" />
            {/* Cartridge Head & Needle */}
            <div className="absolute bottom-2.5 right-0 w-3 h-4 bg-[#1c1c1b] border border-[#B8925A] rounded-xs shadow-xs transform -rotate-12 flex items-center justify-center">
              <div className="w-0.5 h-1 bg-[#B8925A] rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. ALBUM METADATA LABELS & AUDIO EQUALIZER INDICATOR                      */}
      {/* ========================================================================= */}
      <div className="mt-4 w-full flex flex-col items-start gap-1.5 px-1">
        <div className="w-full flex items-center justify-between">
          <h4 className="font-display font-bold text-base md:text-lg text-[#1c1c1b] dark:text-[#FAF6EE] tracking-tight leading-none group-hover/album:text-[#B8925A] transition-colors">
            {title}
          </h4>
          {isPlaying && (
            <div className="flex items-center gap-1.5 text-[#B8925A]">
              <Disc3 className="w-3.5 h-3.5 animate-spin" />
              <div className="flex items-end gap-0.5 h-3">
                <span className="w-0.5 h-full bg-[#B8925A] animate-[bounce_0.6s_infinite]" />
                <span className="w-0.5 h-2/3 bg-[#B8925A] animate-[bounce_0.8s_infinite]" />
                <span className="w-0.5 h-4/5 bg-[#B8925A] animate-[bounce_0.5s_infinite]" />
              </div>
            </div>
          )}
        </div>

        {/* Audio Progress Scrubber Bar */}
        {isPlaying && (
          <div className="w-full flex items-center gap-2 mt-0.5">
            <div className="flex-1 h-1 bg-[#8C7A65]/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#B8925A] rounded-full transition-all duration-200" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="font-mono text-[8px] text-[#8C7A65] dark:text-[#C5A880] tabular-nums">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
        )}

        <div className="flex items-center gap-1.5 font-ui text-[10.5px] text-[#736350] dark:text-[#A89F91] font-medium tracking-wide">
          <span>{type}</span>
          <span className="text-[#B8925A]">•</span>
          <span>{year}</span>
          <span className="text-[#B8925A]">•</span>
          <span className="text-[#B8925A] font-bold">{isPlaying ? 'Playing record.aac' : 'Click to listen'}</span>
        </div>
      </div>
    </motion.div>
  );
}
