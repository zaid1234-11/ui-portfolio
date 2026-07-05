import React from 'react';

export default function Philosophy() {
  const principles = [
    { num: '01', text: 'Every screen answers one business question.' },
    { num: '02', text: 'Context before visualization.' },
    { num: '03', text: 'Recommendations before exploration.' },
    { num: '04', text: 'Enterprise readability over visual effects.' },
    { num: '05', text: 'Every recommendation is explainable.' },
    { num: '06', text: 'Information density without cognitive overload.' },
    { num: '07', text: 'Whitespace communicates hierarchy.' },
    { num: '08', text: 'Color communicates meaning.' },
    { num: '09', text: 'Every interaction reduces decision time.' },
    { num: '10', text: 'Design earns trust through consistency.' },
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <h3 className="font-mono text-xs tracking-[0.2em] text-[#B8925A] uppercase mb-4">Design Principles</h3>
          <h2 className="font-display text-4xl font-bold text-[#1c1c1b]">SalesSphere Design Principles</h2>
          <p className="text-lg text-[#4E4842] mt-4">
            These ten principles guided every product and engineering decision, ensuring the platform remained focused on enterprise decision-making rather than visual decoration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-12">
          {principles.map((p) => (
            <div key={p.num} className="flex gap-4 items-start border-t border-[#B8925A]/20 pt-6">
              <span className="font-mono text-xl text-[#B8925A] font-light leading-none">{p.num}</span>
              <p className="text-[#1c1c1b] font-medium text-lg leading-snug">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
