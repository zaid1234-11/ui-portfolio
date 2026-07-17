import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, Database, Lock, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function TrustCenterMockup() {
  const [openSection, setOpenSection] = useState<string | null>('score');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-[#0A1118] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative font-sans">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <h3 className="text-white font-display text-xl font-bold">Trust & Transparency</h3>
          <p className="text-white/50 text-xs">Audit your data footprint</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Accordion 1 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-colors hover:border-white/20">
          <button 
            onClick={() => toggleSection('score')}
            className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus-visible:bg-white/5"
            aria-expanded={openSection === 'score'}
          >
            <div className="flex items-center gap-3">
              <ActivityIcon />
              <span className="text-white font-medium">How is my Health Score calculated?</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${openSection === 'score' ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {openSection === 'score' && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 pt-2 border-t border-white/5 mt-2">
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    Your score (88/100) is a weighted average of three connected data sources. We do not use credit bureau data.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5"></div>
                      <div>
                        <div className="text-sm text-white/90">Liquid Reserves (40%)</div>
                        <div className="text-xs text-white/40 font-mono">Source: Chase Checking (Synced 2h ago)</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5"></div>
                      <div>
                        <div className="text-sm text-white/90">Debt-to-Income Ratio (40%)</div>
                        <div className="text-xs text-white/40 font-mono">Source: Amex Platinum & ADP Payroll</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5"></div>
                      <div>
                        <div className="text-sm text-white/90">Goal Velocity (20%)</div>
                        <div className="text-xs text-white/40 font-mono">Source: FinTrac Savings Tracker</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Accordion 2 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-colors hover:border-white/20">
          <button 
            onClick={() => toggleSection('data')}
            className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus-visible:bg-white/5"
            aria-expanded={openSection === 'data'}
          >
            <div className="flex items-center gap-3">
              <Database className="w-4 h-4 text-teal-400" />
              <span className="text-white font-medium">Data Connections</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${openSection === 'data' ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {openSection === 'data' && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 pt-2 border-t border-white/5 mt-2">
                  <p className="text-white/60 text-sm leading-relaxed">
                    You have 3 active bank connections via Plaid. FinTrac only has read access.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// Simple icon wrapper
const ActivityIcon = () => <Info className="w-4 h-4 text-blue-400" />;
