import React from 'react';
import { motion } from 'framer-motion';

export default function CinematicIntro() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"
        />
      </div>
      <div className="z-10 text-center space-y-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, filter: 'blur(10px)' }}
          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex justify-center mb-12"
        >
          {/* Faux RetroLab Logo Assembling */}
          <div className="flex gap-1">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                className={`w-4 h-4 md:w-6 md:h-6 ${i % 2 === 0 ? 'bg-[#E34A53]' : 'bg-[#FAF6EE]'} rounded-sm`}
              />
            ))}
          </div>
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="font-display text-2xl md:text-4xl text-[#1c1c1b] max-w-2xl mx-auto leading-relaxed tracking-wide"
        >
          "Modern images were never meant to look this nostalgic."
        </motion.h2>
      </div>
    </section>
  );
}
