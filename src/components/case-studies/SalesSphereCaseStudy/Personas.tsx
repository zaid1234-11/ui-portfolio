import React from 'react';

export default function Personas() {
  const personas = [
    {
      role: 'Sales Manager',
      needs: 'Daily sales monitoring',
      goal: 'Hit quarterly targets',
      color: 'bg-stone-100'
    },
    {
      role: 'Business Analyst',
      needs: 'Trend exploration',
      goal: 'Identify revenue gaps',
      color: 'bg-stone-200'
    },
    {
      role: 'Sales Director',
      needs: 'Executive reporting',
      goal: 'Strategic expansion',
      color: 'bg-[#1c1c1b] text-white'
    }
  ];

  return (
    <section className="py-12 space-y-12">
      <div className="text-center">
        <h3 className="font-mono text-xs tracking-[0.2em] text-[#B8925A] uppercase mb-4">Target Users</h3>
        <h2 className="font-display text-3xl font-bold text-[#1c1c1b]">Built for Decision Makers</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {personas.map((persona, idx) => (
          <div key={idx} className={`${persona.color} p-8 rounded-2xl border ${persona.role === 'Sales Director' ? 'border-[#B8925A]/30' : 'border-stone-200'}`}>
            <h4 className={`font-display text-2xl font-bold mb-6 ${persona.role === 'Sales Director' ? 'text-[#B8925A]' : 'text-[#1c1c1b]'}`}>
              {persona.role}
            </h4>
            <div className="space-y-4">
              <div>
                <span className={`block font-mono text-[10px] uppercase tracking-widest mb-1 ${persona.role === 'Sales Director' ? 'text-[#FAF6EE]/50' : 'text-stone-500'}`}>Primary Need</span>
                <p className={`font-medium ${persona.role === 'Sales Director' ? 'text-[#FAF6EE]' : 'text-[#1c1c1b]'}`}>{persona.needs}</p>
              </div>
              <div>
                <span className={`block font-mono text-[10px] uppercase tracking-widest mb-1 ${persona.role === 'Sales Director' ? 'text-[#FAF6EE]/50' : 'text-stone-500'}`}>End Goal</span>
                <p className={`font-medium ${persona.role === 'Sales Director' ? 'text-[#FAF6EE]' : 'text-[#1c1c1b]'}`}>{persona.goal}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
