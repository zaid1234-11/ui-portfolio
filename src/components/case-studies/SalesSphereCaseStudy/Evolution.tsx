import React from 'react';

export default function Evolution() {
  return (
    <section className="py-20 bg-[#1c1c1b] -mx-6 md:-mx-12 px-6 md:px-12 text-[#FAF6EE] rounded-3xl my-20">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h3 className="font-mono text-xs tracking-[0.2em] text-[#B8925A] uppercase mb-4">Reflection</h3>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
          Beyond the Dashboard
        </h2>
        
        <p className="text-xl md:text-2xl text-[#FAF6EE]/80 font-light leading-relaxed text-left md:text-center">
          Building SalesSphere changed how I think about software. I started with the goal of creating a visually appealing dashboard, but through multiple iterations I realized that enterprise users don't need more charts—they need better decisions. That shift led me to redesign the product around business context, explainability, and actionable recommendations rather than raw analytics. The result is a platform that prioritizes clarity, trust, and decision-making over visual complexity.
        </p>
      </div>
    </section>
  );
}
