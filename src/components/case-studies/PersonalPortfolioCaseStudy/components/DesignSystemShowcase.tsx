import React, { useState } from 'react';
import { Button } from '../../../ui/Button';
import { SectionHeader } from '../../../ui/SectionHeader';
import { ProjectCard } from '../../../ui/ProjectCard';
import { PROJECTS } from '../../../../data';
import { LayoutGrid, Download, Send } from 'lucide-react';

export default function DesignSystemShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sampleProject = PROJECTS[0];

  return (
    <div className="w-full bg-[#111310] rounded-2xl border border-white/5 p-6 md:p-12 my-12 shadow-inner space-y-16">
      
      {/* Component 1: Section Header */}
      <div className="space-y-4">
        <h4 className="font-mono text-[10px] text-white/40 uppercase tracking-widest border-b border-white/10 pb-2">
          Component: SectionHeader.tsx
        </h4>
        <div className="p-8 bg-black/40 rounded-xl border border-white/5">
          <SectionHeader
            kicker="System Archive Index"
            icon={LayoutGrid}
            title="Selected Works"
            description="A curated selection of high-end digital products, interactive prototypes, and production-ready frontend systems."
          />
        </div>
      </div>

      {/* Component 2: Button System */}
      <div className="space-y-4">
        <h4 className="font-mono text-[10px] text-white/40 uppercase tracking-widest border-b border-white/10 pb-2">
          Component: Button.tsx (Variants)
        </h4>
        <div className="p-8 bg-black/40 rounded-xl border border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="font-mono text-[9px] text-white/40 uppercase tracking-wider mb-4">Primary / Form Submit</p>
            <Button variant="primary" icon={Send}>Transmit Inquiry</Button>
          </div>
          <div>
            <p className="font-mono text-[9px] text-white/40 uppercase tracking-wider mb-4">Secondary / Action</p>
            <Button variant="secondary">Reset Filter</Button>
          </div>
          <div className="md:col-span-2">
            <p className="font-mono text-[9px] text-white/40 uppercase tracking-wider mb-4">Glass / Icon (Download Resume)</p>
            <div className="flex gap-4">
              <Button variant="glass" icon={Download}>Get PDF</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Component 3: Project Card */}
      <div className="space-y-4">
        <h4 className="font-mono text-[10px] text-white/40 uppercase tracking-widest border-b border-white/10 pb-2">
          Component: ProjectCard.tsx (Tactile Folder)
        </h4>
        <div className="p-8 bg-black/40 rounded-xl border border-white/5 overflow-hidden flex justify-center py-16">
          <div className="relative w-full max-w-[400px] h-[450px]">
            <ProjectCard
              project={sampleProject}
              visibleIdx={0}
              hoveredIndex={hoveredIndex}
              onHover={setHoveredIndex}
              onClick={() => {}}
              totalVisible={1}
              isFirst={true}
              meta={{ paper: '1', plate: 'PLATE — 01', code: 'SYS-DEMO' }}
              getTransform={() => ({})}
              styleIdx={0}
              renderBarcode={() => (
                <div className="barcode flex items-end gap-0.5 h-6 opacity-55">
                  {[2, 1, 3, 1, 2, 1, 1, 3].map((w, idx) => (
                    <i key={idx} className="block bg-current" style={{ width: `${w}px`, height: `${10 + (w * 4) % 12}px` }} />
                  ))}
                </div>
              )}
            />
          </div>
        </div>
      </div>

    </div>
  );
}
