import React from 'react';
import CinematicIntro from './CinematicIntro';
import Hero from './Hero';
import Problem from './Problem';
import UserJourney from './UserJourney';
import TransformationShowcase from './TransformationShowcase';
import Features from './Features';
import DesignSystem from './DesignSystem';
import Performance from './Performance';
import EngineeringArchitecture from './EngineeringArchitecture';
import Algorithms from './Algorithms';
import PerformanceOptimizations from './PerformanceOptimizations';
import EngineeringDecisions from './EngineeringDecisions';
import Challenges from './Challenges';
import ResponsiveExperience from './ResponsiveExperience';
import Accessibility from './Accessibility';
import DesignProcess from './DesignProcess';
import Gallery from './Gallery';
import DevelopmentTimeline from './DevelopmentTimeline';
import Roadmap from './Roadmap';
import LessonsLearned from './LessonsLearned';
import FinalCTA from './FinalCTA';

export default function RetroLabCaseStudy() {
  return (
    <div className="bg-[#162127] text-[#FAF6EE] min-h-screen font-sans selection:bg-[#E34A53]/30 overflow-hidden relative">
      {/* Global Aesthetics */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Pixel grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
        {/* CRT Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] opacity-30"></div>
        {/* CRT Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 space-y-32 pb-32">
        <CinematicIntro />
        <Hero />
        <Problem />
        <UserJourney />
        <TransformationShowcase />
        <Features />
        <DesignSystem />
        <Performance />
        <EngineeringArchitecture />
        <Algorithms />
        <PerformanceOptimizations />
        <EngineeringDecisions />
        <Challenges />
        <ResponsiveExperience />
        <Accessibility />
        <DesignProcess />
        <Gallery />
        <DevelopmentTimeline />
        <Roadmap />
        <LessonsLearned />
        <FinalCTA />
      </div>
    </div>
  );
}
