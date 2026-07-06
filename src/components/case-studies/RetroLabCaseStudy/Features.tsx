import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Monitor, Wand2, DownloadCloud } from 'lucide-react';

const features = [
  { icon: Grid, title: 'Real-time Dithering', desc: 'Floyd-Steinberg, Bayer, and Halftone patterns generated instantly on the client.', color: 'text-blue-400', border: 'hover:border-blue-400/50' },
  { icon: Wand2, title: 'Pixel Sorting', desc: 'Custom algorithms to displace and sort pixels based on brightness thresholds.', color: 'text-purple-400', border: 'hover:border-purple-400/50' },
  { icon: Monitor, title: 'CRT Simulation', desc: 'Scanlines, RGB splitting, and phosphor glow effects that react to the image.', color: 'text-green-400', border: 'hover:border-green-400/50' },
  { icon: DownloadCloud, title: 'Pristine Export', desc: 'Nearest-neighbor scaling ensures sharp pixel edges in exported PNGs.', color: 'text-orange-400', border: 'hover:border-orange-400/50' },
];

export default function Features() {
  return (
    <section className="py-12">
      <div className="mb-12">
        <h3 className="font-display text-3xl font-bold mb-4">Core Features</h3>
        <p className="text-[#1c1c1b]/70 font-light max-w-2xl text-lg">
          A suite of highly optimized graphics processing tools built to manipulate ImageData arrays at blazing speed.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={`group bg-black/5 border border-black/10 rounded-2xl p-8 transition-all duration-300 ${feature.border} hover:bg-black/10 cursor-default relative overflow-hidden`}
          >
            <div className={`absolute -top-10 -right-10 w-40 h-40 bg-black/5 rounded-full blur-[50px] transition-all duration-500 group-hover:bg-current ${feature.color} group-hover:opacity-10`}></div>
            
            <feature.icon className={`w-8 h-8 mb-6 ${feature.color}`} />
            <h4 className="font-display text-xl font-bold mb-3">{feature.title}</h4>
            <p className="text-[#1c1c1b]/70 text-sm leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
