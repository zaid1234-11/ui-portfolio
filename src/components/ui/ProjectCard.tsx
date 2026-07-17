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
        <div className="folder-body card-swap-card">
          <div className="folder-tab" style={{ top: visibleIdx % 2 === 1 ? '34px' : '0px' }}>
            <span className="tab-code">{meta.code} //</span>
            <span className="tab-title">{project.title.split(' ')[0]}</span>
          </div>
          <div className="folder-mark">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start font-mono text-[9px] tracking-widest opacity-45 uppercase font-bold mb-3">
                  <span>{meta.plate}</span>
                  <span>{project.timeline}</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold leading-tight tracking-tight border-b border-black/10 pb-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-[11px] leading-relaxed opacity-75 font-serif italic mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>
              <div className="relative aspect-[16/10] w-full rounded border border-black/10 overflow-hidden bg-black/5 shadow-[inset_0_2px_6px_rgba(0,0,0,0.08)]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out ${project.id === 'the-adrocket' ? 'opacity-90' : 'grayscale contrast-[1.05] opacity-75 mix-blend-multiply'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div className="flex flex-wrap gap-1 mt-3">
                {project.techStack.slice(0, 2).map((tech, tIdx) => (
                  <span key={tIdx} className="font-mono text-[8px] bg-black/5 border border-black/10 px-2 py-0.5 rounded-full opacity-60">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="folder-footer">
            {renderBarcode()}
            <span className="folder-id font-mono text-[10px] tracking-wider opacity-60">
              N° 0{styleIdx + 1}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
