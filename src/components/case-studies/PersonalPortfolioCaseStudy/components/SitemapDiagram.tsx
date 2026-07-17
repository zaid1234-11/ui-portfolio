import React from 'react';
import { motion } from 'motion/react';
import { Network, Home, Box, LayoutGrid, FileText, User, Mail, Database, Route, ArrowDown } from 'lucide-react';

const Node = ({ icon: Icon, title, desc, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-black/40 border border-white/10 rounded-xl p-4 flex flex-col items-center gap-2 relative z-10 hover:border-[#B8925A]/50 hover:bg-black/60 transition-all text-center w-32 md:w-40"
  >
    <Icon className="w-6 h-6 text-[#B8925A]" />
    <div>
      <h4 className="font-display font-bold text-sm text-white/90">{title}</h4>
      <p className="font-mono text-[9px] text-white/50 uppercase tracking-wider">{desc}</p>
    </div>
  </motion.div>
);

const ConnectorLine = ({ className = "" }) => (
  <div className={`absolute bg-white/10 ${className}`} />
);

export default function SitemapDiagram() {
  return (
    <div className="w-full bg-[#111310] rounded-2xl border border-white/5 p-8 md:p-16 overflow-x-auto my-12 relative flex flex-col items-center shadow-inner">
      <div className="min-w-[700px] flex flex-col items-center relative">
        
        {/* Level 1: Home */}
        <Node icon={Home} title="Home" desc="Index Route" delay={0.1} />
        
        {/* Main Vertical Trunk */}
        <ConnectorLine className="w-px h-12 top-[88px] left-1/2 -translate-x-1/2" />
        
        {/* Horizontal Distibution Line */}
        <ConnectorLine className="h-px w-[600px] top-[136px] left-1/2 -translate-x-1/2" />

        {/* Vertical Drops to Level 2 */}
        <ConnectorLine className="w-px h-8 top-[136px] left-[calc(50%-300px)]" />
        <ConnectorLine className="w-px h-8 top-[136px] left-[calc(50%-150px)]" />
        <ConnectorLine className="w-px h-8 top-[136px] left-1/2 -translate-x-1/2" />
        <ConnectorLine className="w-px h-8 top-[136px] left-[calc(50%+150px)]" />
        <ConnectorLine className="w-px h-8 top-[136px] left-[calc(50%+300px)]" />

        {/* Level 2: Main Sections */}
        <div className="flex gap-4 md:gap-8 mt-12">
          <Node icon={Box} title="Hero" desc="Physical Identity" delay={0.2} />
          <Node icon={FileText} title="Methodology" desc="Design Process" delay={0.3} />
          <Node icon={LayoutGrid} title="Gallery" desc="Interactive Work" delay={0.4} />
          <Node icon={User} title="Biography" desc="About Me" delay={0.5} />
          <Node icon={Mail} title="Connection" desc="Terminal" delay={0.6} />
        </div>

        {/* Sub-branch from Gallery (3rd item, left 50%) */}
        <ConnectorLine className="w-px h-12 top-[260px] left-1/2 -translate-x-1/2" />

        {/* Router Node */}
        <div className="mt-12 relative">
          <Node icon={Route} title="Case Study Router" desc="Dynamic Loading" delay={0.7} />
        </div>

        {/* Router Horizontal Distibution */}
        <ConnectorLine className="w-px h-8 top-[408px] left-1/2 -translate-x-1/2" />
        <ConnectorLine className="h-px w-[480px] top-[440px] left-1/2 -translate-x-1/2" />

        {/* Vertical Drops to Level 4 */}
        <ConnectorLine className="w-px h-8 top-[440px] left-[calc(50%-240px)]" />
        <ConnectorLine className="w-px h-8 top-[440px] left-[calc(50%-80px)]" />
        <ConnectorLine className="w-px h-8 top-[440px] left-[calc(50%+80px)]" />
        <ConnectorLine className="w-px h-8 top-[440px] left-[calc(50%+240px)]" />

        {/* Level 4: Case Studies */}
        <div className="flex gap-4 mt-16">
          <Node icon={Database} title="FinTrac App" desc="JSON Config" delay={0.8} />
          <Node icon={Database} title="SalesSphere" desc="JSON Config" delay={0.9} />
          <Node icon={Database} title="RetroLab" desc="JSON Config" delay={1.0} />
          <Node icon={Database} title="This Portfolio" desc="JSON Config" delay={1.1} />
        </div>

      </div>
    </div>
  );
}
