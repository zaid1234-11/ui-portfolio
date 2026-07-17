import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface CaseStudyLayoutProps {
  children: React.ReactNode;
  theme: {
    bg: string;
    text: string;
    accent: string;
  };
}

export function CaseStudyLayout({ children, theme }: CaseStudyLayoutProps) {
  return (
    <article 
      className={`min-h-screen font-sans selection:bg-white/20 overflow-hidden relative rounded-3xl p-6 md:p-12 lg:p-16 mb-20 shadow-2xl border`}
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        borderColor: `${theme.accent}33` // 20% opacity
      }}
    >
      {/* Global Aesthetics */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0"
          style={{ background: `radial-gradient(circle at top right, ${theme.accent}15 0%, transparent 60%)` }}
        ></div>
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        ></div>
      </div>
      
      {/* Main Content Area */}
      <main className="relative z-10 max-w-5xl mx-auto space-y-24 md:space-y-32">
        {children}
      </main>
    </article>
  );
}

// Reusable Section Reveal (subtle tactile entrance)
export function CaseStudySection({ children, className = '', id }: { children: React.ReactNode, className?: string, id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.99 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.99 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`scroll-mt-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}
