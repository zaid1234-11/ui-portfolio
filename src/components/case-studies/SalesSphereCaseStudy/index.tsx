import React from 'react';
import Hero from './Hero';
import Problem from './Problem';
import Strategy from './Strategy';
import Philosophy from './Philosophy';
import BehindTheDecisions from './BehindTheDecisions';
import DesignSystem from './DesignSystem';
import Walkthrough from './Walkthrough';
import Engineering from './Engineering';
import Personas from './Personas';
import Results from './Results';
import Story from './Story';
import Evolution from './Evolution';
import Conclusion from './Conclusion';

export default function SalesSphereCaseStudy() {
  return (
    <div className="bg-[#FAF6EE] text-[#1c1c1b] min-h-screen font-sans selection:bg-[#B8925A]/30 pb-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-32 pt-12">
        <Hero />
        
        {/* The Challenge */}
        <Problem />
        {/* Research */}
        <Strategy />
        {/* Product Goals */}
        <Philosophy />
        {/* Information Architecture */}
        <BehindTheDecisions />
        {/* Design System */}
        <DesignSystem />
        {/* Dashboard Walkthrough */}
        <Walkthrough />
        {/* Engineering Architecture */}
        <Engineering />
        {/* Decision Engine */}
        <Personas />
        {/* Performance */}
        <Results />
        {/* Accessibility */}
        <Story />
        {/* Lessons Learned */}
        <Evolution />
        {/* Future Vision */}
        <Conclusion />
        
      </div>
    </div>
  );
}
