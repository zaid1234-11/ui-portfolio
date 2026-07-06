import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Video, Palette, Sparkles } from 'lucide-react';

export default function Roadmap() {
  const items = [
    { icon: Layers, title: 'WebGL Support', status: 'In Progress' },
    { icon: Video, title: 'Video Processing', status: 'Planned' },
    { icon: Palette, title: 'Palette Builder', status: 'Planned' },
    { icon: Sparkles, title: 'Batch Processing', status: 'Exploring' },
  ];

  return (
    <section className="py-12 border-y border-black/5 relative">
       {/* Terminal divider top */}
       <div className="absolute top-0 left-0 right-0 h-px bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.1),rgba(0,0,0,0.1)_4px,transparent_4px,transparent_8px)]"></div>
       
      <h3 className="font-display text-3xl font-bold mb-12 pt-8">Future Roadmap</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-black/10 rounded-xl p-6 hover:border-[#E34A53]/50 transition-colors flex flex-col items-center text-center group"
          >
            <item.icon className="w-6 h-6 text-[#1c1c1b]/50 group-hover:text-[#E34A53] transition-colors mb-4" />
            <h4 className="font-mono text-sm text-[#1c1c1b] uppercase mb-2">{item.title}</h4>
            <span className="font-mono text-[9px] bg-black/5 px-2 py-1 rounded text-[#1c1c1b]/50">{item.status}</span>
          </motion.div>
        ))}
      </div>
      
       {/* Terminal divider bottom */}
       <div className="absolute bottom-0 left-0 right-0 h-px bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.1),rgba(0,0,0,0.1)_4px,transparent_4px,transparent_8px)]"></div>
    </section>
  );
}
