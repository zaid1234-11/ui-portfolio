import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function LessonsLearned() {
  return (
    <section className="py-12 my-12 bg-[#0d1418] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
      {/* Decorative glitch squares */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-blue-500/10 border-l border-b border-blue-500/20"></div>
      
      <div className="flex items-center gap-3 mb-8 relative z-10">
        <Lightbulb className="w-6 h-6 text-[#E34A53]" />
        <h3 className="font-display text-3xl font-bold">Lessons Learned</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <ul className="space-y-6">
          <li className="flex gap-4">
            <span className="text-[#E34A53] font-mono text-sm mt-1">01</span>
            <p className="text-[#FAF6EE]/80 text-sm leading-relaxed">
              <strong>Efficient pixel manipulation:</strong> Iterating over massive 1D typed arrays (Uint8ClampedArray) taught me the importance of bitwise operations and loop optimization over standard array methods.
            </p>
          </li>
          <li className="flex gap-4">
            <span className="text-[#E34A53] font-mono text-sm mt-1">02</span>
            <p className="text-[#FAF6EE]/80 text-sm leading-relaxed">
              <strong>Balancing rendering performance with quality:</strong> Implementing Floyd-Steinberg dithering without freezing the main thread required careful chunking and Web Worker integration.
            </p>
          </li>
        </ul>
        <ul className="space-y-6">
          <li className="flex gap-4">
            <span className="text-[#E34A53] font-mono text-sm mt-1">03</span>
            <p className="text-[#FAF6EE]/80 text-sm leading-relaxed">
              <strong>Responsive interaction patterns:</strong> Adapting a dense, graphics-heavy control panel for mobile touch interactions required abandoning standard hover states in favor of explicit toggle mechanisms.
            </p>
          </li>
          <li className="flex gap-4">
            <span className="text-[#E34A53] font-mono text-sm mt-1">04</span>
            <p className="text-[#FAF6EE]/80 text-sm leading-relaxed">
              <strong>Browser-native workflows:</strong> Creating an experience that feels like a standalone desktop application within the constraints of a browser sandbox was incredibly rewarding.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
