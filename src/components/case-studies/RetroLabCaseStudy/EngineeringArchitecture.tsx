import React from 'react';
import { Network, Database, Cpu, LayoutTemplate } from 'lucide-react';

export default function EngineeringArchitecture() {
  return (
    <section className="py-12">
      <h3 className="font-display text-3xl font-bold mb-8">Engineering Architecture</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: LayoutTemplate, title: 'UI Layer', desc: 'React 18 & Framer Motion', color: 'border-blue-500' },
          { icon: Network, title: 'Modules', desc: 'Custom hooks & context', color: 'border-green-500' },
          { icon: Cpu, title: 'Pipeline', desc: 'Web Workers for offloading', color: 'border-purple-500' },
          { icon: Database, title: 'Rendering', desc: 'HTML5 Canvas API', color: 'border-orange-500' },
        ].map((item, i) => (
          <div key={i} className={`bg-[#0d1418] border-t-2 ${item.color} p-6 rounded-b-xl shadow-lg hover:-translate-y-1 transition-transform`}>
            <item.icon className="w-6 h-6 mb-4 text-[#FAF6EE]/70" />
            <h4 className="font-mono text-sm uppercase mb-2 text-[#FAF6EE]">{item.title}</h4>
            <p className="text-xs text-[#FAF6EE]/50">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
