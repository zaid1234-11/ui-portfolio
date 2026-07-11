import React, { useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Clock, ShieldCheck, Cpu, Code, Quote, Sparkles, ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data';
import TornPaperEdge from './TornPaperEdge';
import SalesSphereCaseStudy from './case-studies/SalesSphereCaseStudy';
import RetroLabCaseStudy from './case-studies/RetroLabCaseStudy';
import AdRocketCaseStudy from './case-studies/AdRocketCaseStudy';

interface CaseStudyDetailProps {
  project: Project;
  onBack: () => void;
  onNavigateToProject: (project: Project) => void;
}

export default function CaseStudyDetail({ project, onBack, onNavigateToProject }: CaseStudyDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to top when mounting a new project case study
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [project]);

  const handleNextProject = () => {
    const nextProj = PROJECTS.find(p => p.id === project.nextProjectId) || PROJECTS[0];
    onNavigateToProject(nextProj);
  };

  const isSalesSphere = project.id === 'salessphere';
  const isRetroLab = project.id === 'retrolab';
  const isAdRocket = project.id === 'the-adrocket';

  return (
    <div
      ref={containerRef}
      id={`case-study-${project.id}`}
      className="min-h-screen bg-[#FAF6EE] text-[#4E4842] pt-32 pb-24 px-6 md:px-12 relative z-40 transition-all duration-700 ease-in-out pl-12 md:pl-20"
    >
      {/* Dynamic Torn Paper Notebook Left Spine Edge */}
      <TornPaperEdge />

      {/* Background Notebook Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(184,146,90,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(184,146,90,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Navigation Action Row */}
        <div className="flex items-center justify-between mb-12 border-b border-[#B8925A]/15 pb-6">
          <button
            id="case-study-back-btn"
            onClick={onBack}
            className="flex items-center gap-2 font-mono text-xs text-[#1c1c1b] hover:text-[#B8925A] uppercase tracking-widest transition-colors duration-300 focus:outline-none cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#B8925A]" />
            Back to selected work
          </button>

          <span className="font-mono text-xs text-[#B8925A]">
            {isSalesSphere ? 'PROCESS' : `CASE STUDY · ${project.category}`}
          </span>
        </div>

        {/* Conditionally Render Custom Product Story or Default Layout */}
        {isRetroLab ? (
          <div className="-mx-6 md:-mx-12 lg:-mx-20">
             <RetroLabCaseStudy />
          </div>
        ) : isSalesSphere ? (
          <div className="-mx-6 md:-mx-12 lg:-mx-20">
             <SalesSphereCaseStudy />
          </div>
        ) : isAdRocket ? (
          <div className="-mx-6 md:-mx-12 lg:-mx-20">
             <AdRocketCaseStudy />
          </div>
        ) : (
          <>
            {/* Hero Title Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4.5 h-4.5 text-[#B8925A]" />
                  <span className="font-mono text-xs tracking-widest text-[#B8925A] uppercase">
                    Featured Case Study
                  </span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#1c1c1b] leading-tight tracking-tight text-3d-ivory">
                  {project.title}
                </h1>
                <p className="mt-6 text-base md:text-lg text-[#4E4842]/90 leading-relaxed font-light italic">
                  {project.description}
                </p>
              </div>

              {/* Quick Stats Sidebar */}
              <div className="lg:col-span-4 bg-[#1c1c1b] border border-[#B8925A]/15 p-6 rounded-xl flex flex-col justify-between shadow-xl">
                <div className="space-y-5">
                  <div>
                    <span className="block font-mono text-[9px] text-[#ECE3D2]/50 uppercase tracking-widest mb-1">
                      My Role
                    </span>
                    <span className="text-sm font-semibold text-[#FAF6EE]">{project.role}</span>
                  </div>
                  <div className="border-t border-white/5 pt-4">
                    <span className="block font-mono text-[9px] text-[#ECE3D2]/50 uppercase tracking-widest mb-1">
                      Timeline
                    </span>
                    <span className="text-sm font-semibold text-[#B8925A]">{project.timeline}</span>
                  </div>
                  <div className="border-t border-white/5 pt-4">
                    <span className="block font-mono text-[9px] text-[#ECE3D2]/50 uppercase tracking-widest mb-2">
                      Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="font-mono text-[9px] text-[#FAF6EE]/80 bg-white/5 border border-[#FAF6EE]/10 px-2.5 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {(project.liveUrl || project.repoUrl) && (
                    <div className="border-t border-white/5 pt-4 space-y-2">
                      <span className="block font-mono text-[9px] text-[#ECE3D2]/50 uppercase tracking-widest mb-1">
                        Project Links
                      </span>
                      <div className="flex flex-col gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between bg-[#B8925A] hover:bg-[#FAF6EE] text-[#1c1c1b] px-3.5 py-2 rounded-lg font-mono text-[10px] tracking-wider uppercase font-semibold transition-all duration-300 shadow hover:shadow-md group/link"
                          >
                            <span className="flex items-center gap-1.5">
                              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                              Live Demo
                            </span>
                            <span className="text-[8px] opacity-70">{project.liveUrl.replace('https://', '').split('/')[0]}</span>
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between bg-white/5 hover:bg-white/10 border border-[#FAF6EE]/15 hover:border-[#FAF6EE]/30 text-[#FAF6EE] px-3.5 py-2 rounded-lg font-mono text-[10px] tracking-wider uppercase transition-all duration-300 group/link"
                          >
                            <span className="flex items-center gap-1.5">
                              <Github className="w-3.5 h-3.5 text-[#B8925A]" />
                              Source Code
                            </span>
                            <span className="text-[8px] opacity-50">GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Large Aesthetic Image Canvas styled like a taped polaroid sheet */}
            <div className="relative rounded-xl overflow-hidden border border-[#B8925A]/15 bg-[#FAF8F5] p-3 shadow-xl mb-16 aspect-[16/8]">
              <div className="w-full h-full overflow-hidden rounded border border-stone-200/20 bg-stone-100">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-[1.02] sepia-[0.15] hover:grayscale-0 hover:sepia-0 transition-all duration-700 hover:scale-[1.02]"
                />
              </div>
              {/* Scotch tape on top corner */}
              <div className="absolute top-2 left-6 z-20 pointer-events-none masking-tape text-[8px] transform -rotate-12 bg-white/40">
                ★ ATTACHMENT
              </div>
            </div>

            {/* Narrative Split Details */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">

              {/* Left Block: Problem & Approach */}
              <div className="md:col-span-7 space-y-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#B8925A]" />
                    <h3 className="font-display text-2xl font-bold text-[#1c1c1b]">The Challenge</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#4E4842]/85 font-light">
                    {project.problem}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-[#8A9A86]" />
                    <h3 className="font-display text-2xl font-bold text-[#1c1c1b]">The Approach</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#4E4842]/85 font-light">
                    {project.approach}
                  </p>
                </div>
              </div>

              {/* Right Block: Solution & Big Pullquote */}
              <div className="md:col-span-5 space-y-12">
                {/* Pull Quote Panel styled as a paper snippet taped to the screen */}
                <div className="relative bg-[#ECE3D2]/40 border border-[#B8925A]/15 p-8 rounded-xl flex flex-col justify-center shadow-inner transform rotate-1">
                  <Quote className="w-8 h-8 text-[#B8925A] opacity-20 absolute top-4 left-4" />
                  <p className="font-display text-lg md:text-xl font-light italic text-[#1c1c1b] relative z-10 pl-6 border-l-2 border-[#B8925A] leading-relaxed">
                    {project.quote}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-[#B8925A]" />
                    <h3 className="font-display text-2xl font-bold text-[#1c1c1b]">The Solution</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#4E4842]/85 font-light">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Dynamic Key Outcomes Bento - Styled as a gorgeous Slate card */}
            <div className="bg-[#1c1c1b] border border-[#B8925A]/15 p-8 md:p-12 rounded-xl mb-16 relative overflow-hidden shadow-xl">
              <div className="relative z-10">
                <span className="block font-mono text-[9px] text-[#B8925A] tracking-[0.25em] uppercase mb-4 font-bold">
                  MEASURABLE VALUE
                </span>
                <h3 className="font-display text-3xl font-bold text-[#FAF6EE] mb-8">
                  Core Project Outcomes
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 border-t border-white/5 pt-8">
                  {project.outcomes.map((outcome, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="font-display text-4xl md:text-5xl font-extrabold text-[#B8925A] mb-2">
                        {outcome.value}
                      </span>
                      <span className="font-mono text-[10px] text-[#ECE3D2]/55 uppercase tracking-widest">
                        {outcome.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Case Study Footer Navigation */}
        <div className="border-t border-[#B8925A]/15 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            id="case-study-footer-back-btn"
            onClick={onBack}
            className="flex items-center gap-2 font-mono text-xs text-[#1c1c1b] hover:text-[#B8925A] uppercase tracking-widest transition-colors duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#B8925A]" />
            Back to selected work
          </button>

          {/* Action Trigger for Next Case Study */}
          <button
            id="case-study-next-btn"
            onClick={handleNextProject}
            className="group flex items-center gap-3 bg-[#1c1c1b] hover:bg-[#FAF6EE] border border-[#1c1c1b] px-6 py-4 rounded-full transition-all duration-300 shadow-md cursor-pointer"
          >
            <div className="text-right">
              <span className="block font-mono text-[8px] text-[#ECE3D2]/60 uppercase tracking-widest">
                UP NEXT
              </span>
              <span className="font-display text-sm font-semibold text-[#FAF6EE] group-hover:text-[#1c1c1b] transition-colors duration-300">
                Explore next project
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#FAF6EE] group-hover:bg-[#1c1c1b] text-[#1c1c1b] group-hover:text-[#FAF6EE] flex items-center justify-center group-hover:translate-x-1.5 transition-transform duration-300">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}
