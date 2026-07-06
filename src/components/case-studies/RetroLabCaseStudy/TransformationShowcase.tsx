import React, { useState, useRef } from 'react';

export default function TransformationShowcase() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - left, width));
    const percent = (x / width) * 100;
    setSliderPosition(percent);
  };

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h3 className="font-display text-3xl font-bold">Transformation</h3>
        <p className="font-mono text-[10px] uppercase text-[#1c1c1b]/50 tracking-widest border border-black/10 px-4 py-2 rounded-full">
          Slide to Compare
        </p>
      </div>

      <div 
        ref={containerRef}
        className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] bg-white rounded-xl overflow-hidden border border-black/10 shadow-2xl cursor-col-resize select-none"
        onMouseMove={handleMouseMove}
        onTouchMove={handleMouseMove}
      >
        {/* Underneath: Result image */}
        <div className="absolute inset-0">
          <img src="/projects/pixel lab/result.webp" className="w-full h-full object-cover" alt="Result" draggable="false" />
        </div>
        
        {/* On top: Original image with clip-path */}
        <div 
          className="absolute inset-0"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img src="/projects/pixel lab/original.webp" className="w-full h-full object-cover" alt="Original" draggable="false" />
        </div>

        {/* Slider line */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Slider handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_0_15px_rgba(0,0,0,0.3)] flex items-center justify-center border border-black/10">
            <div className="flex gap-1">
              <div className="w-0.5 h-3 bg-black/30 rounded-full"></div>
              <div className="w-0.5 h-3 bg-black/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/70 text-white backdrop-blur-md px-4 py-2 rounded font-mono text-xs border border-white/20 z-20 pointer-events-none transition-opacity duration-300" style={{ opacity: sliderPosition > 20 ? 1 : 0 }}>
          Before
        </div>
        <div className="absolute top-4 right-4 bg-black/70 text-[#E34A53] backdrop-blur-md px-4 py-2 rounded font-mono text-xs border border-[#E34A53] z-20 pointer-events-none transition-opacity duration-300" style={{ opacity: sliderPosition < 80 ? 1 : 0 }}>
          After
        </div>
      </div>
    </section>
  );
}
