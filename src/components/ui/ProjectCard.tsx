import React from 'react';
import { Project } from '../../types';

export interface ProjectCardProps {
  project: Project;
  visibleIdx: number;
  hoveredIndex: number | null;
  onHover: (idx: number | null) => void;
  onClick: (project: Project) => void;
  totalVisible: number;
  isFirst: boolean;
  meta: { paper: string; plate: string; code: string; };
  getTransform: (idx: number) => React.CSSProperties;
  styleIdx: number;
  renderBarcode: () => React.ReactNode;
  key?: React.Key;
}

// Creative journal metadata annotations tailored per dossier entry
const DOSSIER_DETAILS = [
  {
    stamp: 'APPROVED // PRODUCTION',
    stampColor: 'border-rose-900/70 text-rose-900 bg-rose-950/5',
    postmark: 'ATELIER • SPEC. 01',
    tapeText: '✦ FIGMA → SHADERS',
    tapeBg: 'bg-[#FAF6EE]/90 border-[#C5A059]/60 text-[#1c1c1b]',
    note: 'Canvas 60FPS • 0% server compute',
    clipSide: 'right',
    rotation: '-rotate-[0.6deg]'
  },
  {
    stamp: 'VERIFIED // 97% RETENTION',
    stampColor: 'border-emerald-900/70 text-emerald-900 bg-emerald-950/5',
    postmark: 'RESEARCH • SPEC. 02',
    tapeText: '✦ BEHAVIORAL AI',
    tapeBg: 'bg-[#ECE3D2]/90 border-[#8A9A86]/60 text-[#1c1c1b]',
    note: 'POMDP Model • Haptic UX feedback',
    clipSide: 'left',
    rotation: 'rotate-[0.8deg]'
  },
  {
    stamp: 'ARCHIVE // STAGGER MOTION',
    stampColor: 'border-indigo-900/70 text-indigo-900 bg-indigo-950/5',
    postmark: 'MOTION • SPEC. 03',
    tapeText: '✦ KINETIC ENGINE',
    tapeBg: 'bg-[#FAF6EE]/90 border-[#B8925A]/60 text-[#1c1c1b]',
    note: 'Custom Shaders • TSX + Lenis',
    clipSide: 'right',
    rotation: '-rotate-[0.5deg]'
  },
  {
    stamp: 'COMMERCE // HIGH FIDELITY',
    stampColor: 'border-amber-900/70 text-amber-900 bg-amber-950/5',
    postmark: 'COMMERCE • SPEC. 04',
    tapeText: '✦ ATELIER COMMERCE',
    tapeBg: 'bg-[#ECE3D2]/90 border-[#C5A059]/60 text-[#1c1c1b]',
    note: 'Tactile Cart • Minimal checkout',
    clipSide: 'left',
    rotation: 'rotate-[0.7deg]'
  },
  {
    stamp: 'TELEMETRY // LIVE METRICS',
    stampColor: 'border-stone-900/70 text-stone-900 bg-stone-950/5',
    postmark: 'SYSTEMS • SPEC. 05',
    tapeText: '✦ PIPELINE TELEMETRY',
    tapeBg: 'bg-[#FAF6EE]/90 border-[#B8925A]/60 text-[#1c1c1b]',
    note: 'Real-time telemetry • 100% Lighthouse',
    clipSide: 'right',
    rotation: '-rotate-[0.6deg]'
  },
];

export function ProjectCard({ 
  project, 
  visibleIdx, 
  hoveredIndex, 
  onHover, 
  onClick, 
  totalVisible, 
  isFirst, 
  meta, 
  getTransform,
  styleIdx,
  renderBarcode
}: ProjectCardProps) {
  const dossier = DOSSIER_DETAILS[styleIdx % DOSSIER_DETAILS.length];

  return (
    <button
      id={`folder-${project.id}`}
      onClick={() => onClick(project)}
      onMouseEnter={() => onHover(visibleIdx)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(visibleIdx)}
      onBlur={() => onHover(null)}
      className="folder-btn focus:outline-none group"
      style={{
        zIndex: hoveredIndex === visibleIdx ? 100 : (totalVisible - visibleIdx),
        marginLeft: isFirst ? '0px' : undefined,
      }}
      data-paper={meta.paper}
      role="listitem"
      aria-label={`${project.title} folder - press Enter to view case study`}
    >
      <div className="folder-inner" style={getTransform(visibleIdx)}>
        <div className="folder-body card-swap-card relative">
          
          {/* Top Folder Tab with Brass Eyelet Grommet */}
          <div className="folder-tab shadow-sm" style={{ top: visibleIdx % 2 === 1 ? '34px' : '0px' }}>
            {/* Metallic Brass Eyelet Grommet */}
            <div className="w-2.5 h-2.5 rounded-full border-[1.5px] border-[#C5A059] bg-[#1c1c1b]/30 shadow-inner mb-2 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-black/40"></div>
            </div>
            <span className="tab-code font-bold tracking-widest">{meta.code} //</span>
            <span className="tab-title font-display">{project.title.split(' ')[0]}</span>
          </div>

          {/* Folder Inner Mark Container */}
          <div className="folder-mark">
            <div className="flex flex-col h-full justify-between">
              
              {/* Header Dossier Plate Info */}
              <div>
                <div className="flex justify-between items-center font-mono text-[8.5px] tracking-widest opacity-70 uppercase font-bold mb-1.5 border-b border-black/10 pb-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8925A]"></span>
                    {meta.plate}
                  </span>
                  <span className="text-[#B8925A] font-semibold">{project.timeline}</span>
                </div>

                <div className="flex items-baseline justify-between mt-1 mb-1.5">
                  <h3 className="font-display text-xl md:text-2xl font-bold leading-tight tracking-tight">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[8px] opacity-50 uppercase tracking-tighter hidden sm:inline">
                    {dossier.postmark}
                  </span>
                </div>

                <p className="text-[11px] leading-relaxed opacity-85 font-serif italic mb-2 line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Central Attached Polaroid / Specimen Photographic Plate */}
              <div className={`relative aspect-[16/10] w-full rounded border-2 border-black/15 bg-[#FAF6EE] shadow-[0_3px_10px_rgba(0,0,0,0.14)] my-1 transform ${dossier.rotation} transition-transform duration-300 group-hover:rotate-0`}>
                
                {/* Washi Masking Tape Accent Strip with jagged torn cut */}
                <div 
                  className={`absolute -top-2.5 ${dossier.clipSide === 'left' ? 'left-3 -rotate-4' : 'right-3 rotate-3'} z-20 px-2.5 py-0.5 border shadow-sm rounded-xs font-mono text-[7px] font-bold tracking-wider uppercase pointer-events-none ${dossier.tapeBg}`}
                  style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.05) 1px, transparent 0)', backgroundSize: '4px 4px' }}
                >
                  {dossier.tapeText}
                </div>

                {/* Metallic Brass 3D Paperclip */}
                <div 
                  className={`absolute -top-3.5 ${dossier.clipSide === 'left' ? 'right-4' : 'left-4'} z-30 w-4 h-9 pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]`}
                >
                  <svg viewBox="0 0 24 60" fill="none" className="w-full h-full">
                    <path
                      d="M6 14 V46 C6 52 18 52 18 46 V8 C18 3 9 3 9 8 V40 C9 43 15 43 15 40 V16"
                      stroke="#A88238"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 14 V46 C6 52 18 52 18 46 V8 C18 3 9 3 9 8 V40 C9 43 15 43 15 40 V16"
                      stroke="#F7D88B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Screenshot Image inside Polaroid Frame */}
                <div className="w-full h-full rounded-xs overflow-hidden bg-black/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-95 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5 pointer-events-none"></div>
                </div>

                {/* Handwritten Field Note Strip */}
                <div className="absolute -bottom-2 right-2 z-20 bg-[#FAF6EE] border border-black/15 px-2 py-0.5 rounded shadow-sm">
                  <span className="font-mono text-[8px] text-[#1c1c1b] font-bold tracking-tight italic">
                    ✍ {dossier.note}
                  </span>
                </div>
              </div>

              {/* Tags & Rubber Ink Stamp */}
              <div className="flex items-center justify-between gap-2 mt-2">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 2).map((tech, tIdx) => (
                    <span key={tIdx} className="font-mono text-[7.5px] bg-black/10 border border-black/20 px-2 py-0.5 rounded font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Archival Rubber Ink Stamp Seal */}
                <div 
                  className={`border-2 border-dashed px-2 py-0.5 rounded-xs font-mono text-[7.5px] font-black tracking-tighter uppercase transform rotate-[-3deg] select-none shadow-xs ${dossier.stampColor}`}
                >
                  {dossier.stamp}
                </div>
              </div>

            </div>
          </div>

          {/* Folder Bottom Footer */}
          <div className="folder-footer">
            {renderBarcode()}
            <div className="flex items-center gap-1.5">
              <span className="folder-id font-mono text-[10px] font-bold tracking-wider opacity-80">
                N° 0{styleIdx + 1}
              </span>
              <span className="font-mono text-[8px] opacity-60 uppercase tracking-tighter font-semibold">
                • ARCHIVE SPECIMEN
              </span>
            </div>
          </div>

        </div>
      </div>
    </button>
  );
}

