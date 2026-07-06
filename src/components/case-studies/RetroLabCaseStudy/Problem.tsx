import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function Problem() {
  return (
    <section className="max-w-3xl border-l-2 border-[#E34A53] pl-8 py-4 relative">
      {/* Decorative terminal bracket */}
      <div className="absolute -left-[1.2rem] top-0 font-mono text-[#E34A53] text-2xl">[</div>
      <div className="absolute -left-[1.2rem] bottom-0 font-mono text-[#E34A53] text-2xl">]</div>

      <div className="flex items-center gap-3 mb-6">
        <AlertCircle className="w-5 h-5 text-[#E34A53]" />
        <h3 className="font-mono text-sm tracking-widest uppercase text-[#FAF6EE]">The Problem</h3>
      </div>
      
      <div className="space-y-6 text-[#FAF6EE]/70 font-light leading-relaxed text-lg">
        <p>
          Achieving authentic retro aesthetics—like dithering, CRT scanlines, and pixel sorting—typically requires either heavy desktop software like Photoshop or slow server-side processing pipelines.
        </p>
        <p>
          For digital artists and creative developers, this creates friction. The iteration cycle is slow, experimentation is tedious, and privacy is often compromised by having to upload personal images to a remote server just to apply a filter.
        </p>
        <p className="text-[#FAF6EE] font-medium border-l border-white/20 pl-4 py-1 italic">
          There was a clear need for a tool that brings powerful, high-performance image processing directly into the browser, running entirely client-side.
        </p>
      </div>
    </section>
  );
}
