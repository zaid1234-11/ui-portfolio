import React from 'react';

export default function Walkthrough() {
  return (
    <section className="py-20 space-y-16">
      <div className="text-center">
        <h3 className="font-mono text-xs tracking-[0.2em] text-[#B8925A] uppercase mb-4">Dashboard Walkthrough</h3>
        <h2 className="font-display text-4xl font-bold text-[#1c1c1b]">Dissecting the Interface</h2>
      </div>

      <div className="relative rounded-2xl overflow-hidden border border-[#1c1c1b]/10 shadow-2xl bg-white aspect-[16/10]">
         <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIZfWC7c3WjWNnpxJoZqDCof491RJ1aH-EAoUdHb6C2r3ajvx9MWiKgDAwXsGIHEEIXZl1ZHFRlAO_iulwpQJMCTi0CRDn5Z8tczmQJDpYqkH5xDJkxlUwFPQyBGBUExhSAZdthYb7Tguztuddd2MmQhouDJysmxG0CUrStzJkTdvu1CwLdfi4B8gqh7eIbrya8QBexIhVZfOyhoKomhRkxlLp4A9vMuJpomBQT_pW2ijRIeWDcLiF" 
          alt="SalesSphere Dashboard Annotations" 
          className="w-full h-full object-cover"
        />
        
        {/* Floating annotations */}
        <div className="absolute top-[10%] left-[5%] flex items-start gap-3 max-w-[200px] md:max-w-[250px]">
          <div className="w-6 h-6 rounded-full bg-[#1c1c1b] text-[#FAF6EE] flex items-center justify-center font-mono text-xs font-bold shrink-0 shadow-lg border border-[#B8925A]">1</div>
          <div className="bg-white/95 backdrop-blur border border-stone-200 p-3 rounded-lg shadow-xl text-sm">
            <strong className="block text-[#1c1c1b] mb-1">KPI Cards</strong>
            <p className="text-stone-600 text-xs leading-relaxed">Top-level health check. Tells the user immediately what happened.</p>
          </div>
        </div>

        <div className="absolute top-[35%] right-[10%] flex items-start gap-3 max-w-[200px] md:max-w-[250px]">
          <div className="w-6 h-6 rounded-full bg-[#1c1c1b] text-[#FAF6EE] flex items-center justify-center font-mono text-xs font-bold shrink-0 shadow-lg border border-[#B8925A]">2</div>
          <div className="bg-white/95 backdrop-blur border border-stone-200 p-3 rounded-lg shadow-xl text-sm">
            <strong className="block text-[#1c1c1b] mb-1">Revenue Trend</strong>
            <p className="text-stone-600 text-xs leading-relaxed">Line chart contextualizes the KPIs over time to explain why numbers changed.</p>
          </div>
        </div>

        <div className="absolute bottom-[20%] left-[30%] flex items-start gap-3 max-w-[200px] md:max-w-[250px]">
          <div className="w-6 h-6 rounded-full bg-[#1c1c1b] text-[#FAF6EE] flex items-center justify-center font-mono text-xs font-bold shrink-0 shadow-lg border border-[#B8925A]">3</div>
          <div className="bg-white/95 backdrop-blur border border-stone-200 p-3 rounded-lg shadow-xl text-sm">
            <strong className="block text-[#1c1c1b] mb-1">Business Insights</strong>
            <p className="text-stone-600 text-xs leading-relaxed">AI-assisted recommendations detailing exactly what should happen next.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
