import React from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    { src: '/projects/pixel lab/dither.webp', algo: 'Floyd-Steinberg Dither' },
    { src: '/projects/pixel lab/dots.webp', algo: 'Halftone Dots' },
    { src: '/projects/pixel lab/edge detection.webp', algo: 'Edge Detection' },
    { src: '/projects/pixel lab/voronoi.webp', algo: 'Voronoi Pattern' },
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
            <img src={img.src} alt={img.algo} className="w-full h-full object-cover" />
            
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
