import React from 'react';
import { ABOUT_PROJECT_INFO } from '../data/education';
import { Info, ShieldCheck, AlertTriangle, CheckCircle2, ArrowRight, Layers, Award } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AboutView: React.FC = () => {
  const { setActiveView } = useApp();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Title */}
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          Methodology & Platform Architecture
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          About EcoCompare
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Green Product Comparison & Sustainability Intelligence Platform.
        </p>
      </div>

      {/* Purpose */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Info className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <span>Why Transparent Comparison Matters</span>
        </h2>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
          Consumers are inundated with unverified marketing terms like &ldquo;100% eco-friendly&rdquo;, &ldquo;carbon-neutral&rdquo;, and &ldquo;green&rdquo;. Without standardized Life Cycle Assessment (LCA) telemetry, choosing between products is guesswork. ECOCOMPARE establishes transparent engineering criteria that quantify the actual environmental trade-offs between everyday choices.
        </p>

        <div className="pt-2">
          <h3 className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 mb-2">
            Core Evaluation Principles:
          </h3>
          <div className="space-y-2 text-xs">
            {ABOUT_PROJECT_INFO.scoringPhilosophy.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scoring weights breakdown */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <span>The Green Score Formulation (0–100)</span>
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          The Green Score is mathematically computed as a normalized weighted composite index across seven distinct lifecycle dimensions:
        </p>

        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 font-mono text-xs text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 leading-relaxed overflow-x-auto">
          GreenScore = (0.25 × CarbonImpact) + (0.15 × Materials) + (0.15 × Durability) + (0.15 × Recyclability) + (0.10 × Packaging) + (0.10 × Repairability) + (0.10 × Certifications)
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
            <span className="font-extrabold text-emerald-600 dark:text-emerald-400">25%</span> Carbon (kg CO₂e)
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
            <span className="font-extrabold text-teal-600 dark:text-teal-400">15%</span> Circular Materials
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
            <span className="font-extrabold text-sky-600 dark:text-sky-400">15%</span> Expected Durability
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
            <span className="font-extrabold text-indigo-600 dark:text-indigo-400">15%</span> Recyclability Rate
          </div>
        </div>
      </div>

      {/* Standards note */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold text-sm">
          <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <span>Scientific Assessment Standard</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {ABOUT_PROJECT_INFO.disclaimer}
        </p>
      </div>

      <div className="pt-2 text-center">
        <button
          onClick={() => setActiveView('compare')}
          className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm inline-flex items-center gap-2 shadow-xs transition-all cursor-pointer"
        >
          <span>Launch Product Comparison</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
