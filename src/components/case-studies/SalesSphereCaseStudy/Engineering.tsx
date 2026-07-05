import React from 'react';
import { Database, ArrowDown, Activity, CheckCircle, Monitor, FolderTree } from 'lucide-react';

export default function Engineering() {
  const stack = ['React 19', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui', 'Zustand', 'Recharts', 'TanStack Table'];
  
  return (
    <section className="py-12 space-y-16">
      <div className="text-center">
        <h3 className="font-mono text-xs tracking-[0.2em] text-[#B8925A] uppercase mb-4">Engineering</h3>
        <h2 className="font-display text-3xl font-bold text-[#1c1c1b]">Building the Engine</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        
        {/* Layered Architecture */}
        <div className="space-y-8">
          <h4 className="font-mono text-xs text-stone-500 uppercase tracking-widest border-b border-stone-200 pb-2">Architecture Layers</h4>
          
          <div className="flex flex-col items-center">
            <div className="w-full bg-[#1c1c1b] border border-[#B8925A]/30 p-4 rounded-xl shadow flex items-center justify-center gap-3 text-[#FAF6EE]">
               <Database className="w-4 h-4 text-[#B8925A]" />
               <span className="font-mono text-sm tracking-wider">Repository</span>
            </div>
            <ArrowDown className="w-4 h-4 text-stone-300 my-2" />
            <div className="w-full bg-stone-100 border border-stone-200 p-4 rounded-xl flex items-center justify-center gap-3 text-[#1c1c1b]">
               <Activity className="w-4 h-4 text-stone-500" />
               <span className="font-mono text-sm tracking-wider">Transformation</span>
            </div>
            <ArrowDown className="w-4 h-4 text-stone-300 my-2" />
            <div className="w-full bg-stone-100 border border-stone-200 p-4 rounded-xl flex items-center justify-center gap-3 text-[#1c1c1b]">
               <Activity className="w-4 h-4 text-stone-500" />
               <span className="font-mono text-sm tracking-wider">Analytics</span>
            </div>
            <ArrowDown className="w-4 h-4 text-stone-300 my-2" />
            <div className="w-full bg-stone-100 border border-stone-200 p-4 rounded-xl flex items-center justify-center gap-3 text-[#1c1c1b]">
               <CheckCircle className="w-4 h-4 text-stone-500" />
               <span className="font-mono text-sm tracking-wider">Decision</span>
            </div>
            <ArrowDown className="w-4 h-4 text-[#B8925A] my-2" />
            <div className="w-full bg-[#B8925A] border border-[#1c1c1b] p-4 rounded-xl shadow-lg flex items-center justify-center gap-3 text-[#1c1c1b]">
               <Monitor className="w-4 h-4" />
               <span className="font-mono text-sm font-bold tracking-wider">Presentation</span>
            </div>
          </div>
        </div>

        {/* Stack & Structure */}
        <div className="space-y-8">
           <h4 className="font-mono text-xs text-stone-500 uppercase tracking-widest border-b border-stone-200 pb-2">Tech Stack</h4>
           <div className="flex flex-wrap gap-2">
             {stack.map(tech => (
               <span key={tech} className="bg-stone-100 border border-stone-200 text-[#1c1c1b] px-4 py-2 rounded-full font-mono text-xs">
                 {tech}
               </span>
             ))}
           </div>

           <h4 className="font-mono text-xs text-stone-500 uppercase tracking-widest border-b border-stone-200 pb-2 pt-6">Folder Structure</h4>
           <div className="bg-[#1c1c1b] p-6 rounded-xl border border-[#B8925A]/20 text-[#FAF6EE] font-mono text-xs leading-loose overflow-x-auto shadow-inner">
             <div className="flex items-center gap-2 text-[#B8925A] mb-2"><FolderTree className="w-4 h-4"/> src/</div>
             <div className="pl-6 text-stone-400">├── assets/</div>
             <div className="pl-6 text-stone-400">├── components/</div>
             <div className="pl-12 text-stone-500">├── dashboard/</div>
             <div className="pl-12 text-stone-500">└── ui/</div>
             <div className="pl-6 text-stone-400">├── hooks/</div>
             <div className="pl-6 text-stone-400">├── store/</div>
             <div className="pl-6 text-stone-400">├── types/</div>
             <div className="pl-6 text-stone-400">└── utils/</div>
           </div>
        </div>

      </div>
    </section>
  );
}
