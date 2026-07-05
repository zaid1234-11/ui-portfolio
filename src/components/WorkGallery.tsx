import React, { useState, useRef } from 'react';
import { ArrowUpRight, Grid, Layout, Tag } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Project } from '../types';
import { PROJECTS } from '../data';
import VariableProximity from './VariableProximity';
import TextType from './TextType';

interface WorkGalleryProps {
  onSelectProject: (project: Project) => void;
}

// Custom textured folder color and label mappings matching the high-end archive reference
const folderStyles = [
  { paper: '1', plate: 'PLATE — 01', code: 'BANK-UX' },
  { paper: '2', plate: 'PLATE — 02', code: 'GALL-ID' },
  { paper: '3', plate: 'PLATE — 03', code: 'FLOW-APP' },
  { paper: '4', plate: 'PLATE — 04', code: 'SHOP-ECOM' },
  { paper: '5', plate: 'PLATE — 05', code: 'DATA-VIS' },
];

export default function WorkGallery({ onSelectProject }: WorkGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const headingContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  const filters = ['All', 'UI/UX', 'Web App', 'Branding', 'E-Commerce', 'Data Vis'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  // Generate dynamic vector barcode lines for authentic file-archive design
  const renderBarcode = () => {
    const widths = [2, 1, 3, 1, 2, 1, 1, 3, 2, 1, 2, 1, 3, 1];
    return (
      <div className="barcode flex items-end gap-0.5 h-6 opacity-55">
        {widths.map((w, idx) => (
          <i
            key={idx}
            className="block bg-current"
            style={{
              width: `${w}px`,
              height: `${10 + (w * 4) % 12}px`
            }}
          />
        ))}
      </div>
    );
  };

  // Calculate physical displacement for neighboring folders when one is hovered
  const getFolderTransform = (visibleIdx: number) => {
    if (hoveredIndex === null || hoveredIndex === visibleIdx) return {};
    const dir = visibleIdx < hoveredIndex ? -1 : 1;
    const dist = Math.abs(visibleIdx - hoveredIndex);
    const push = dist === 1 ? 24 * dir : (dist === 2 ? 8 * dir : 0);
    return { '--tx': `${push}px` } as React.CSSProperties;
  };

  return (
    <section ref={sectionRef} id="work" className="relative py-28 px-6 md:px-12 bg-transparent overflow-hidden">
      {/* Background Notebook Architectural Draft Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(184,146,90,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(184,146,90,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0"></div>

      <motion.div style={{ scale, y }} className="relative z-10 max-w-7xl mx-auto transform-gpu">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div ref={headingContainerRef}>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[9px] text-[#B8925A] tracking-[0.3em] uppercase bg-[#ECE3D2] border border-[#B8925A]/20 px-3.5 py-1 rounded-full">
                01 - SYSTEM ARCHIVE INDEX
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c1c1b] tracking-tight leading-none">
              <span className="font-display block uppercase tracking-tighter text-3d-ivory">
                <VariableProximity
                  label="Project"
                  fromFontVariationSettings="'wght' 400"
                  toFontVariationSettings="'wght' 900"
                  containerRef={headingContainerRef}
                  radius={120}
                  falloff="gaussian"
                  className="font-display block uppercase tracking-tighter text-3d-ivory cursor-pointer"
                />
              </span>
              <span className="font-symphonie font-light text-5xl md:text-6xl text-[#B8925A] mt-2 block">
                <VariableProximity
                  label="Folders Stack"
                  fromFontVariationSettings="'wght' 300"
                  toFontVariationSettings="'wght' 800"
                  containerRef={headingContainerRef}
                  radius={140}
                  falloff="gaussian"
                  className="font-symphonie font-light text-5xl md:text-6xl text-[#B8925A] cursor-pointer"
                />
              </span>
            </h2>
          </div>
          <div className="max-w-md text-sm text-[#4E4842] leading-relaxed font-light italic min-h-[4rem]">
            <TextType 
              as="p"
              text="Each folder represents an elite digital case study: physical paper material weights containing highly tactile wireframes and responsive telemetry metrics."
              typingSpeed={40}
              loop={false}
              showCursor={true}
              cursorCharacter="|"
              startOnVisible={true}
            />
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-16 border-b border-[#B8925A]/15 pb-6">
          <span className="text-xs font-mono text-[#4E4842]/60 mr-4 flex items-center gap-1.5 uppercase tracking-widest">
            <Grid className="w-3.5 h-3.5 text-[#B8925A]" /> Cabinet Filter:
          </span>
          {filters.map((filter) => (
            <button
              key={filter}
              id={`filter-btn-${filter.toLowerCase().replace(' ', '-')}`}
              onClick={() => {
                setActiveFilter(filter);
                setHoveredIndex(null);
              }}
              className={`text-xs font-mono tracking-wider uppercase px-4 py-2 rounded-full transition-all duration-300 border focus:outline-none cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[#1c1c1b] text-[#FAF6EE] border-[#1c1c1b] font-semibold shadow-md'
                  : 'bg-transparent text-[#4E4842]/70 border-[#B8925A]/25 hover:border-[#1c1c1b] hover:text-[#1c1c1b]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Tactile Folder Stack Container */}
        <div className="folder-stack-container py-12 flex justify-center w-full overflow-visible">
          <div className="folder-stack" role="list" aria-label="Project portfolio folders">
            {filteredProjects.map((project, visibleIdx) => {
              // Find style index matching project id to ensure color consistency
              const styleIdx = PROJECTS.findIndex(p => p.id === project.id) % folderStyles.length;
              const meta = folderStyles[styleIdx];
              const isFirst = visibleIdx === 0;

              return (
                <button
                  key={project.id}
                  id={`folder-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  onMouseEnter={() => setHoveredIndex(visibleIdx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onFocus={() => setHoveredIndex(visibleIdx)}
                  onBlur={() => setHoveredIndex(null)}
                  className="folder-btn focus:outline-none group"
                  style={{
                    zIndex: filteredProjects.length - visibleIdx,
                    marginLeft: isFirst ? '0px' : undefined,
                  }}
                  data-paper={meta.paper}
                  role="listitem"
                  aria-label={`${project.title} folder - press Enter to view case study`}
                >
                  <div
                    className="folder-inner"
                    style={getFolderTransform(visibleIdx)}
                  >
                    {/* The physical-like paper folder body */}
                    <div className="folder-body card-swap-card">
                      
                      {/* Folder tab at the top-right corner */}
                      <div
                        className="folder-tab"
                        style={{ top: visibleIdx % 2 === 1 ? '34px' : '0px' }}
                      >
                        <span className="tab-code">{meta.code} //</span>
                        <span className="tab-title">{project.title.split(' ')[0]}</span>
                      </div>

                      {/* Main inside face plate design */}
                      <div className="folder-mark">
                        <div className="flex flex-col h-full justify-between">
                          
                          {/* Folder Top Plate content */}
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

                          {/* Monochrome Preview Image insert with custom sepia vintage wash */}
                          <div className="relative aspect-[16/10] w-full rounded border border-black/10 overflow-hidden bg-black/5 shadow-[inset_0_2px_6px_rgba(0,0,0,0.08)]">
                            <img
                              src={project.image}
                              alt={project.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover grayscale contrast-[1.05] opacity-75 mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                          </div>

                          {/* Tech stack mini tags */}
                          <div className="flex flex-wrap gap-1 mt-3">
                            {project.techStack.slice(0, 2).map((tech, tIdx) => (
                              <span key={tIdx} className="font-mono text-[8px] bg-black/5 border border-black/10 px-2 py-0.5 rounded-full opacity-60">
                                {tech}
                              </span>
                            ))}
                          </div>

                        </div>
                      </div>

                      {/* Archive physical credentials footer */}
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
            })}
          </div>
        </div>

        {/* Empty state when filters return nothing */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 bg-[#1c1c1b] rounded-2xl border border-[#B8925A]/15 shadow-xl max-w-2xl mx-auto">
            <Layout className="w-12 h-12 text-[#B8925A]/30 mx-auto mb-4 animate-pulse" />
            <span className="font-mono text-xs text-[#FAF6EE] tracking-widest block font-bold">
              NO INDEX ENTRIES IN CATEGORY
            </span>
          </div>
        )}
      </motion.div>
    </section>
  );
}
