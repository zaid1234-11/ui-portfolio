import React, { useMemo } from 'react';

export default function TornPaperEdge() {
  // Generate a highly realistic, organic jagged SVG path for a 1000px vertical spine.
  // We will scale it inside the SVG using preserveAspectRatio="none".
  const jaggedPath = useMemo(() => {
    let path = 'M 0,0 L 22,0 ';
    const segments = 100;
    const step = 10; // total height is 1000
    
    for (let i = 1; i < segments; i++) {
      const y = i * step;
      // Combine multiple sine waves and random noise to mimic paper grain tearing
      const wave1 = Math.sin(i * 0.2) * 5;
      const wave2 = Math.cos(i * 0.45) * 3;
      const noise = (Math.random() - 0.5) * 2.5;
      const x = 16 + wave1 + wave2 + noise;
      path += `L ${x.toFixed(1)},${y} `;
    }
    
    path += 'L 22,1000 L 0,1000 Z';
    return path;
  }, []);

  // Backing fiber shadow layer (slightly darker beige to represent torn paper backing)
  const backingPath = useMemo(() => {
    let path = 'M 0,0 L 26,0 ';
    const segments = 100;
    const step = 10;
    
    for (let i = 1; i < segments; i++) {
      const y = i * step;
      const wave1 = Math.sin(i * 0.2) * 5.2;
      const wave2 = Math.cos(i * 0.45) * 3.1;
      const noise = (Math.random() - 0.5) * 2.2;
      const x = 19 + wave1 + wave2 + noise;
      path += `L ${x.toFixed(1)},${y} `;
    }
    
    path += 'L 26,1000 L 0,1000 Z';
    return path;
  }, []);

  // Generate binding tear holes (mimicking a sheet torn from a wirebound spiral diary)
  const bindingHoles = useMemo(() => {
    const holes = [];
    const count = 35;
    const spacing = 1000 / count;
    for (let i = 1; i < count; i++) {
      holes.push({
        y: i * spacing,
        r: 3 + Math.random() * 0.8,
        // Slit leading to the torn edge
        slitY: i * spacing + (Math.random() - 0.5) * 1.5,
      });
    }
    return holes;
  }, []);

  return (
    <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 z-50 pointer-events-none select-none flex h-full">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 40 1000"
        preserveAspectRatio="none"
        className="h-full w-full filter drop-shadow-[3px_0_6px_rgba(78,72,66,0.12)]"
      >
        <defs>
          {/* Subtle noise pattern to emulate raw cotton paper fiber */}
          <filter id="paper-grain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.04 0" />
            <feComposite operator="in" in2="SourceGraphic" />
          </filter>
        </defs>

        {/* Layer 1: Darker Warm Backing Tear Edge (Fibers layer) */}
        <path
          d={backingPath}
          fill="#D9CDBC"
          opacity="0.85"
        />

        {/* Layer 2: Main Ivory Page Paper Tear Edge */}
        <path
          d={jaggedPath}
          fill="#FAF6EE"
          filter="url(#paper-grain)"
        />

        {/* Layer 3: White paper rip highlight (simulating fluffy torn paper fringe) */}
        <path
          d={jaggedPath}
          fill="none"
          stroke="#FAFDF9"
          strokeWidth="0.8"
          opacity="0.9"
        />

        {/* Spiral Notebook binding tear holes with tiny radial paper fiber tears */}
        {bindingHoles.map((hole, idx) => (
          <g key={idx}>
            {/* The binding hole itself (drawn as dark brown/shadow cutouts) */}
            <circle cx="6" cy={hole.y} r={hole.r} fill="#2B2621" opacity="0.12" />
            <circle cx="6.5" cy={hole.y + 0.5} r={hole.r - 0.5} fill="#4E4842" opacity="0.08" />
            
            {/* Slit tear lines leading outwards to the torn spine */}
            <path
              d={`M 6,${hole.y} L 0,${hole.slitY}`}
              stroke="#D9CDBC"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.75"
            />
            <path
              d={`M 6,${hole.y} L 0,${hole.slitY}`}
              stroke="#4E4842"
              strokeWidth="0.6"
              strokeLinecap="round"
              opacity="0.25"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
