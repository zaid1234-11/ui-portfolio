import React, { useRef } from 'react';
import { 
  Zap, ArrowRight, Code, Server, Cpu, CheckCircle, ExternalLink, Github 
} from 'lucide-react';
import VariableProximity from '../../VariableProximity';
import { CaseStudyLayout, CaseStudySection } from '../../ui/CaseStudyLayout';
import TransformationShowcase from './TransformationShowcase';

const TechBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#9ca777]/10 border border-[#9ca777]/20 text-[#9ca777] font-mono text-xs font-semibold tracking-wider hover:bg-[#9ca777]/20 hover:border-[#9ca777]/40 transition-colors shadow-sm cursor-default">
    {children}
  </span>
);

export default function RetroLabCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);

  const theme = {
    bg: '#111310',
    text: '#e6e8e3',
    accent: '#9ca777'
  };

  const techStack = ['React 19', 'TypeScript', 'Tailwind CSS', 'HTML5 Canvas API', 'Framer Motion', 'Graphics Programming'];

  return (
    <div ref={containerRef}>
      <CaseStudyLayout theme={theme}>
        
        {/* 1. Header & Hero */}
        <header className="space-y-8">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#9ca777]/30 bg-[#9ca777]/10 text-[#9ca777] font-mono text-xs uppercase tracking-widest self-start">
            <span>Case Study</span>
            <span className="w-1 h-1 rounded-full bg-[#9ca777]"></span>
            <span>Creative Engineering</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight cursor-default text-[#9ca777] drop-shadow-[0_4px_0_rgba(20,22,18,0.8)]">
            <VariableProximity
              label="RetroLab — Real-Time Browser Pixel, Dither & CRT Shader Engine"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 900, 'opsz' 144"
              containerRef={containerRef}
              radius={150}
              falloff="gaussian"
              fromColor="#e6e8e3"
              toColor="#9ca777"
            />
          </h1>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-[#9ca777]/10">
            {techStack.map(tech => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>

          <div className="pt-6 relative group">
            <div className="relative aspect-[21/9] w-full bg-[#111310] border border-[#9ca777]/30 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/projects/pixel lab/hero page.png"
                alt="RetroLab App Interface"
                className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] pointer-events-none z-10"></div>
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-[#9ca777]/30 text-[#9ca777] font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full z-20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#9ca777] animate-pulse"></span>
                <span>Sub-16ms Canvas Engine</span>
              </div>
            </div>
          </div>
        </header>

        {/* 2. Quick Overview & Impact Grid */}
        <CaseStudySection>
          <div className="bg-[#1a1c17]/60 backdrop-blur-xl border border-[#9ca777]/15 rounded-3xl p-8 md:p-10 shadow-2xl space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-[#9ca777]/10 pb-8">
              <div>
                <span className="block font-mono text-[10px] text-[#9ca777]/70 uppercase tracking-widest font-bold mb-1">Role</span>
                <p className="text-sm text-white/90 font-semibold">Designer & Engineer</p>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-[#9ca777]/70 uppercase tracking-widest font-bold mb-1">Timeline</span>
                <p className="text-sm text-[#9ca777] font-semibold">Personal Project</p>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-[#9ca777]/70 uppercase tracking-widest font-bold mb-1">Architecture</span>
                <p className="text-sm text-white/90 font-semibold">Client-Side Canvas</p>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-[#9ca777]/70 uppercase tracking-widest font-bold mb-1">Compute</span>
                <p className="text-sm text-white/90 font-semibold">0% Server Load</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#111310]/80 p-6 rounded-2xl border border-[#9ca777]/15">
                <span className="font-display text-4xl font-extrabold text-[#9ca777] block mb-1">60 FPS</span>
                <span className="font-mono text-xs text-white/80 uppercase tracking-wider block font-semibold mb-2">Real-Time Interaction</span>
                <p className="text-xs text-white/60 font-light leading-relaxed">Instant parameter adjustments with sub-16ms preview updates across all image resolutions.</p>
              </div>
              <div className="bg-[#111310]/80 p-6 rounded-2xl border border-[#9ca777]/15">
                <span className="font-display text-4xl font-extrabold text-[#9ca777] block mb-1">100%</span>
                <span className="font-mono text-xs text-white/80 uppercase tracking-wider block font-semibold mb-2">Client-Side Privacy</span>
                <p className="text-xs text-white/60 font-light leading-relaxed">Zero external API uploads. Pixel calculations run locally inside browser memory via Canvas API.</p>
              </div>
              <div className="bg-[#111310]/80 p-6 rounded-2xl border border-[#9ca777]/15">
                <span className="font-display text-4xl font-extrabold text-[#9ca777] block mb-1">4 Shader</span>
                <span className="font-mono text-xs text-white/80 uppercase tracking-wider block font-semibold mb-2">Algorithm Pipelines</span>
                <p className="text-xs text-white/60 font-light leading-relaxed">Floyd-Steinberg dithering, Voronoi cellular mosaic, Halftone dots, and Sobel CRT edge detection.</p>
              </div>
            </div>
          </div>
        </CaseStudySection>

        {/* 3. Interactive Transformation Showcase */}
        <CaseStudySection className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <span className="font-mono text-[10px] text-[#9ca777] uppercase tracking-[0.2em] font-bold">Interactive Demo</span>
              <h2 className="font-display text-3xl font-bold text-white mt-1">Live Before & After Comparison</h2>
            </div>
            <p className="font-mono text-[10px] uppercase text-white/50 tracking-widest border border-[#9ca777]/20 px-4 py-1.5 rounded-full bg-[#9ca777]/5">
              Drag slider to compare
            </p>
          </div>

          <TransformationShowcase />
        </CaseStudySection>

        {/* 4. Shader & Algorithm Output Grid */}
        <CaseStudySection className="space-y-8">
          <div>
            <span className="font-mono text-[10px] text-[#9ca777] uppercase tracking-[0.2em] font-bold">Graphics Pipeline</span>
            <h2 className="font-display text-3xl font-bold text-white mt-1">Supported Shader Outputs</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative aspect-square rounded-2xl overflow-hidden border border-[#9ca777]/20 bg-[#111310] shadow-xl">
              <img src="/projects/pixel lab/dither.webp" alt="Floyd-Steinberg Dithering" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 flex flex-col justify-end">
                <span className="font-mono text-xs text-[#9ca777] uppercase font-bold tracking-wider">Floyd-Steinberg Dither</span>
                <span className="text-[11px] text-white/70 font-light mt-0.5">Error diffusion matrix mapping</span>
              </div>
            </div>

            <div className="group relative aspect-square rounded-2xl overflow-hidden border border-[#9ca777]/20 bg-[#111310] shadow-xl">
              <img src="/projects/pixel lab/voronoi.webp" alt="Voronoi Geometry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 flex flex-col justify-end">
                <span className="font-mono text-xs text-[#9ca777] uppercase font-bold tracking-wider">Voronoi Cellular</span>
                <span className="text-[11px] text-white/70 font-light mt-0.5">Distance vector quantization</span>
              </div>
            </div>

            <div className="group relative aspect-square rounded-2xl overflow-hidden border border-[#9ca777]/20 bg-[#111310] shadow-xl">
              <img src="/projects/pixel lab/dots.webp" alt="Halftone Dot Matrix" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 flex flex-col justify-end">
                <span className="font-mono text-xs text-[#9ca777] uppercase font-bold tracking-wider">Halftone Dot Matrix</span>
                <span className="text-[11px] text-white/70 font-light mt-0.5">Radial density grid simulation</span>
              </div>
            </div>

            <div className="group relative aspect-square rounded-2xl overflow-hidden border border-[#9ca777]/20 bg-[#111310] shadow-xl">
              <img src="/projects/pixel lab/edge detection.webp" alt="Sobel CRT Scanlines" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 flex flex-col justify-end">
                <span className="font-mono text-xs text-[#9ca777] uppercase font-bold tracking-wider">Sobel & CRT Scanlines</span>
                <span className="text-[11px] text-white/70 font-light mt-0.5">Gradient edge extraction</span>
              </div>
            </div>
          </div>
        </CaseStudySection>

        {/* 5. Key Engineering Highlights */}
        <CaseStudySection className="bg-[#1a1c17]/50 border border-[#9ca777]/15 rounded-3xl p-8 md:p-10 shadow-2xl space-y-6">
          <h2 className="font-display text-2xl font-bold text-white flex items-center gap-3">
            <Cpu className="w-6 h-6 text-[#9ca777]" />
            Engineering & Performance Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#9ca777] font-mono text-xs uppercase font-bold">
                <CheckCircle className="w-4 h-4" />
                <span>In-Place Memory Mutation</span>
              </div>
              <p className="text-white/70 font-light leading-relaxed text-xs">
                Mutates pixel colors directly in <code>Uint8ClampedArray</code> buffers to eliminate garbage collection stutter during continuous slider scrubbing.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#9ca777] font-mono text-xs uppercase font-bold">
                <CheckCircle className="w-4 h-4" />
                <span>Adaptive Preview Scale</span>
              </div>
              <p className="text-white/70 font-light leading-relaxed text-xs">
                Downsamples live previews during active interaction, rendering full-resolution output on release for zero perceived latency.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#9ca777] font-mono text-xs uppercase font-bold">
                <CheckCircle className="w-4 h-4" />
                <span>Nearest-Neighbor Scaling</span>
              </div>
              <p className="text-white/70 font-light leading-relaxed text-xs">
                Custom export scaling (1x–8x) ensures pixel art remains crisp without unwanted browser smoothing or blurring.
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* 6. Live Demo & GitHub Code Links */}
        <CaseStudySection className="pt-4">
          <div className="bg-[#111310] border border-[#9ca777]/30 p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="font-mono text-[10px] text-[#9ca777] uppercase tracking-widest font-bold">Try RetroLab Live</span>
              <h3 className="font-display text-2xl font-bold text-white">Experience Real-Time Retro Rendering</h3>
              <p className="text-xs text-white/60 font-light max-w-md">Try the live browser application or explore the source code repository on GitHub.</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://retro-lab-pixel-art.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#9ca777] hover:bg-white text-[#111310] px-6 py-3 rounded-full font-mono text-xs uppercase font-bold transition-all shadow-lg hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Demo ↗</span>
              </a>
              <a
                href="https://github.com/zaid1234-11/retro-lab-pixel-art"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full font-mono text-xs uppercase font-semibold transition-all hover:scale-105"
              >
                <Github className="w-4 h-4 text-[#9ca777]" />
                <span>Source Code ↗</span>
              </a>
            </div>
          </div>
        </CaseStudySection>

      </CaseStudyLayout>
    </div>
  );
}
