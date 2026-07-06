import React from 'react';
import { Check } from 'lucide-react';

export default function EngineeringDecisions() {
  return (
    <section className="py-12 bg-white border border-black/5 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
      {/* Decorative glitch squares */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-[#E34A53]/10 border-l border-b border-[#E34A53]/20"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 bg-[#E34A53]/10 border-r border-t border-[#E34A53]/20"></div>

      <h3 className="font-display text-3xl font-bold mb-8 relative z-10">Engineering Decisions</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 relative z-10">
        {[
          { q: 'Canvas vs SVG', a: 'Canvas was chosen because pixel manipulation requires direct buffer access (ImageData array). SVG is DOM-heavy and unsuitable for real-time per-pixel operations.' },
          { q: 'Offline-first', a: 'By relying strictly on browser APIs, the tool is entirely self-contained, enhancing user trust and speed.' },
          { q: 'Nearest Neighbor', a: 'Used during export to ensure that 1x1 pixels scale sharply to 4x4 or 8x8 without blurry anti-aliasing.' },
          { q: 'Client-side processing', a: 'Guarantees privacy since user photos never touch a server, while simultaneously eliminating network latency during experimentation.' }
        ].map((dec, i) => (
          <div key={i} className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-transparent border border-[#E34A53]/30 p-1 rounded">
                <Check className="w-3 h-3 text-[#E34A53]" />
              </div>
              <h4 className="font-mono text-sm text-[#1c1c1b]">{dec.q}</h4>
            </div>
            <p className="text-[#1c1c1b]/60 text-sm leading-relaxed pl-8">
              {dec.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
