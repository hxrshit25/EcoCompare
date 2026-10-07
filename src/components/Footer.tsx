import React from 'react';
import { useApp } from '../context/AppContext';
import { Leaf, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveView } = useApp();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                <Leaf className="w-5 h-5 fill-emerald-600 text-emerald-700 transform -rotate-12" />
              </div>
              <span className="font-extrabold text-lg text-slate-900 dark:text-white tracking-tight">
                EcoCompare
              </span>
              <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-200">
                Green Product Comparison Tool
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Compare Products. Choose a Greener Tomorrow. Transparent lifecycle intelligence for consumer products based on peer-reviewed Life Cycle Assessment (LCA) telemetry and audited certifications.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs font-semibold">
            <button onClick={() => setActiveView('home')} className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer">Home</button>
            <button onClick={() => setActiveView('explore')} className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer">Categories</button>
            <button onClick={() => setActiveView('compare')} className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer">Compare</button>
            <button onClick={() => setActiveView('education')} className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer">Learn</button>
            <button onClick={() => setActiveView('about')} className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer">About</button>
            <button onClick={() => setActiveView('calculator')} className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer">Calculator</button>
            <button onClick={() => setActiveView('dashboard')} className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer">Dashboard</button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-slate-400 dark:text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
            <span>
              Environmental impact criteria grounded in ISO 14040/14044 Life Cycle Assessment frameworks and verified ecolabels.
            </span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} EcoCompare. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
