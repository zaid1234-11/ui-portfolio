import React from 'react';

export default function DesignSystem() {
  const colors = [
    { name: 'Background', hex: '#101317' },
    { name: 'Surface', hex: '#171B22' },
    { name: 'Card', hex: '#1F2630' },
    { name: 'Primary', hex: '#F5F5F5', darkText: true },
    { name: 'Success', hex: '#3FA96B', darkText: true },
    { name: 'Warning', hex: '#E5B25D', darkText: true },
    { name: 'Danger', hex: '#E06B6B', darkText: true }
  ];

  return (
    <section className="py-12 space-y-12">
      <div className="text-center">
        <h3 className="font-mono text-xs tracking-[0.2em] text-[#B8925A] uppercase mb-4">Design System</h3>
        <h2 className="font-display text-3xl font-bold text-[#1c1c1b]">Visual Language</h2>
      </div>

      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Colors */}
        <div>
          <h4 className="font-mono text-xs text-stone-500 uppercase tracking-widest mb-6 border-b border-stone-200 pb-2">Color Palette</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {colors.map((c, i) => (
              <div key={i} className="space-y-3">
                <div 
                  className="w-full aspect-square rounded-xl shadow-sm border border-stone-200 flex items-end p-3"
                  style={{ backgroundColor: c.hex }}
                >
                  <span className={`font-mono text-[10px] font-bold ${c.darkText ? 'text-[#101317]' : 'text-white'}`}>
                    {c.hex}
                  </span>
                </div>
                <span className="block font-medium text-sm text-[#1c1c1b]">{c.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div>
          <h4 className="font-mono text-xs text-stone-500 uppercase tracking-widest mb-6 border-b border-stone-200 pb-2">Typography</h4>
          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <span className="font-mono text-xs text-stone-500">Primary Font (Inter)</span>
              <p className="font-sans text-4xl font-bold text-[#1c1c1b]">Aa</p>
              <p className="font-sans text-lg text-[#1c1c1b]">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-sans text-lg text-[#1c1c1b]">abcdefghijklmnopqrstuvwxyz</p>
              <p className="font-sans text-lg text-[#1c1c1b]">0123456789</p>
            </div>
            <div className="space-y-6">
               <div>
                  <p className="font-sans text-3xl font-bold text-[#1c1c1b]">Heading 1</p>
                  <span className="font-mono text-[10px] text-stone-400">Inter Bold / 30px</span>
               </div>
               <div>
                  <p className="font-sans text-xl font-semibold text-[#1c1c1b]">Heading 2</p>
                  <span className="font-mono text-[10px] text-stone-400">Inter SemiBold / 20px</span>
               </div>
               <div>
                  <p className="font-sans text-base text-[#1c1c1b] leading-relaxed">Body text designed for maximum readability across dense enterprise interfaces.</p>
                  <span className="font-mono text-[10px] text-stone-400">Inter Regular / 16px</span>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
