'use client';
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const PRACTICE_AREAS = [
  {
    id: '01',
    title: 'DESIGN',
    subtitle: 'VISUAL & INTERACTION',
    label: 'FIG-X8',
    tools: ['FIGMA', 'SPLINE', 'ILLUSTRATOR', 'PENPOT', 'PROTOPIE']
  },
  {
    id: '02',
    title: 'MOTION',
    subtitle: 'PHYSICS & CHOREOGRAPHY',
    label: 'KIN-02',
    tools: ['FRAMER MOTION', 'GSAP', 'LOTTIE', 'RIVE', 'REACT SPRING']
  },
  {
    id: '03',
    title: 'FRONTEND',
    subtitle: 'ARCHITECTURE & LOGIC',
    label: 'DOM-99',
    tools: ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND CSS', 'VITE']
  },
  {
    id: '04',
    title: 'TECH',
    subtitle: 'CREATIVE ENGINEERING',
    label: 'WEBGL-X',
    tools: ['THREE.JS', 'WEBGL', 'D3.JS', 'SHADERS', 'ZUSTAND']
  }
];

function AreaRow({ area }: { area: typeof PRACTICE_AREAS[0] }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  
  const [repetitions, setRepetitions] = useState(2);
  const speed = 25; // marquee speed in seconds

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  // GSAP Edge Detection
  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee-part') as HTMLElement;
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      const viewportWidth = window.innerWidth;
      // We need enough copies to fill the screen plus one for seamless scrolling
      const needed = Math.ceil(viewportWidth / contentWidth) + 1;
      setRepetitions(Math.max(2, needed));
    };

    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);
    return () => window.removeEventListener('resize', calculateRepetitions);
  }, []);

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee-part') as HTMLElement;
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      if (contentWidth === 0) return;

      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: 'none',
        repeat: -1
      });
    };

    const timer = setTimeout(setupMarquee, 100);
    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [repetitions, speed]);

  const handleMouseEnter = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
  };

  const handleMouseLeave = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };

  // Reusable Marquee Content Block
  const MarqueeContent = () => (
    <div className="marquee-part flex items-center flex-shrink-0 text-[#FAF6EE]">
      {area.tools.map((tool, idx) => (
        <React.Fragment key={idx}>
          <span className="whitespace-nowrap font-display font-black text-5xl md:text-[75px] leading-none px-5 md:px-8 tracking-tighter uppercase">
            {tool}
          </span>
          <span className="text-[#B8925A] opacity-60 text-3xl md:text-[45px] leading-none px-3 select-none">
            ✦
          </span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div 
      ref={itemRef}
      className="group relative flex flex-col md:flex-row md:items-center justify-between border-b border-[#1c1c1b]/15 transition-colors duration-500 hover:bg-[#1c1c1b] w-full overflow-hidden cursor-crosshair"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Subtle Grain Overlay on Hover for the base row */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Content Container (The Swiss Ledger) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center pointer-events-none">
        
        {/* Column 1: Archival Label (Rotated on Desktop) */}
        <div className="md:col-span-1 hidden md:flex justify-center items-center h-full">
          <div className="transform -rotate-90 origin-center whitespace-nowrap">
            <span className="font-mono text-[9px] text-[#4E4842]/60 group-hover:text-[#FAF6EE]/50 tracking-[0.2em] uppercase transition-colors duration-500">
              REF: {area.label}
            </span>
          </div>
        </div>

        {/* Mobile-only Label */}
        <div className="md:hidden font-mono text-[9px] text-[#4E4842]/60 tracking-[0.2em] uppercase group-hover:text-[#FAF6EE]/50 transition-colors duration-500 border-l border-[#B8925A] pl-2">
          REF: {area.label}
        </div>

        {/* Column 2: Massive Title */}
        <div className="md:col-span-8 flex items-center">
          <h3 className="font-display font-black text-6xl sm:text-7xl md:text-[85px] lg:text-[110px] text-[#1c1c1b] group-hover:text-[#FAF6EE] leading-none tracking-tighter uppercase transition-colors duration-500">
            {area.title}
          </h3>
        </div>

        {/* Column 4: Static Tool Prompt */}
        <div className="md:col-span-3 flex md:justify-end items-center h-full min-h-[130px]">
          <div className="font-mono text-[9px] text-[#1c1c1b]/30 group-hover:text-transparent tracking-[0.15em] uppercase w-full text-left md:text-right transition-colors duration-200">
            — Hover to View Toolkit —
          </div>
        </div>
      </div>

      {/* GSAP Flowing Marquee Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none translate-y-[101%] z-20 flex items-center"
        ref={marqueeRef}
        style={{ backgroundColor: '#1c1c1b' }}
      >
        <div className="h-fit flex items-center" ref={marqueeInnerRef}>
          {[...Array(repetitions)].map((_, idx) => (
            <MarqueeContent key={idx} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default function AreasOfPractice() {
  return (
    <div className="relative w-full py-20 md:py-32 mb-20 bg-transparent">
      
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-16 max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1c1c1b]"></span>
        <span className="font-display font-bold text-[11px] text-[#1c1c1b] uppercase tracking-widest border border-[#1c1c1b]/20 px-3 py-1">
          AREAS OF PRACTICE & TOOLKIT
        </span>
        <div className="h-[1px] bg-[#1c1c1b]/10 flex-grow ml-4"></div>
        <span className="font-mono text-[9px] text-[#4E4842]/60 tracking-widest">INDEX: 02</span>
      </div>

      {/* Structured Editorial Ledger */}
      <div className="w-full border-t border-[#1c1c1b]/15 flex flex-col">
        {PRACTICE_AREAS.map((area) => (
          <AreaRow key={area.id} area={area} />
        ))}
      </div>
      
    </div>
  );
}
