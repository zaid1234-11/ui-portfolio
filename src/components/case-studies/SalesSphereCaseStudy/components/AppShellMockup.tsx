import React from 'react';
import { Search, Bell, Menu, Calendar, Globe2, LayoutDashboard, LineChart, Users, Package, Settings } from 'lucide-react';

export function AppShellMockup() {
  return (
    <div className="w-full h-[600px] bg-[#101317] rounded-xl border border-white/10 flex flex-col overflow-hidden shadow-2xl relative font-sans text-[#F5F5F5]">
      
      {/* Top Navigation */}
      <header className="h-16 border-b border-white/5 bg-[#171B22] flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 font-display font-bold text-lg text-[#FAF6EE]">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-[#B8925A] to-[#E5B25D] flex items-center justify-center">
              <span className="text-[#101317] text-xs">S</span>
            </div>
            SalesSphere
          </div>
          
          <nav className="hidden md:flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider font-bold">
            <button className="px-4 py-2 rounded-lg bg-white/10 text-white transition-colors">Overview</button>
            <button className="px-4 py-2 rounded-lg text-white/50 hover:bg-white/5 hover:text-white transition-colors">Sales</button>
            <button className="px-4 py-2 rounded-lg text-white/50 hover:bg-white/5 hover:text-white transition-colors">Revenue</button>
            <button className="px-4 py-2 rounded-lg text-white/50 hover:bg-white/5 hover:text-white transition-colors">Products</button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Global Filters */}
          <div className="hidden lg:flex items-center bg-[#101317] border border-white/10 rounded-lg p-1 mr-4">
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-white/5 text-xs text-white/70 transition-colors">
              <Calendar className="w-3.5 h-3.5" />
              Q3 2026
            </button>
            <div className="w-px h-4 bg-white/10 mx-1"></div>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-white/5 text-xs text-white/70 transition-colors">
              <Globe2 className="w-3.5 h-3.5" />
              North America
            </button>
          </div>

          <button aria-label="Search" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5 text-white/70 transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <button aria-label="Notifications" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5 text-white/70 transition-colors relative">
            <Bell className="w-4 h-4" />
            <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#E5B25D]"></div>
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-stone-600 to-stone-800 border border-white/20"></div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 bg-[#101317] p-6 md:p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h1 className="font-display text-2xl font-bold mb-1">Executive Overview</h1>
              <p className="font-mono text-xs text-white/50 uppercase tracking-widest">Last updated 12 mins ago</p>
            </div>
            <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#B8925A] text-[#101317] font-bold text-xs font-mono uppercase tracking-widest rounded-lg hover:bg-[#E5B25D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4E8EF7]">
              Generate Report
            </button>
          </div>

          {/* Skeletons to represent content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-32 bg-[#171B22] rounded-xl border border-white/5 p-5 flex flex-col justify-between">
                <div className="w-20 h-3 bg-white/10 rounded"></div>
                <div className="w-32 h-8 bg-white/5 rounded"></div>
                <div className="flex gap-2">
                  <div className="w-12 h-3 bg-white/10 rounded"></div>
                  <div className="w-16 h-3 bg-white/5 rounded"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 h-80 bg-[#171B22] rounded-xl border border-white/5 p-6 flex flex-col">
               <div className="w-32 h-4 bg-white/10 rounded mb-auto"></div>
               {/* Chart placeholder lines */}
               <div className="flex-1 flex items-end gap-2 mt-8 opacity-20">
                  {Array.from({length: 12}).map((_, i) => (
                    <div key={i} className="flex-1 bg-white rounded-t-sm" style={{ height: `${Math.random() * 60 + 20}%`}}></div>
                  ))}
               </div>
            </div>
            <div className="h-80 bg-[#171B22] rounded-xl border border-white/5 p-6 space-y-4">
               <div className="w-24 h-4 bg-white/10 rounded mb-6"></div>
               {[1, 2, 3].map(i => (
                 <div key={i} className="w-full h-16 bg-white/5 rounded-lg"></div>
               ))}
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}
