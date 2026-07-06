import React from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop', algo: '1-Bit Macintosh' },
    { src: 'https://images.unsplash.com/photo-1614729939124-03290b0409ce?q=80&w=600&auto=format&fit=crop', algo: 'GameBoy' },
    { src: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=600&auto=format&fit=crop', algo: 'Arcade CRT' },
    { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop', algo: 'Digital Glitch' },
  ];

  return (
    <section className="py-12">
      <h3 className="font-display text-3xl font-bold mb-8">Output Gallery</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative aspect-square bg-white border border-black/10 rounded-xl overflow-hidden shadow-lg"
          >
            <img src={img.src} alt={img.algo} className="w-full h-full object-cover filter grayscale contrast-125 sepia-[0.3]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] pointer-events-none mix-blend-overlay"></div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
              <span className="font-mono text-sm text-[#E34A53] uppercase tracking-widest border border-[#E34A53] px-4 py-2 rounded bg-black/50">{img.algo}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
