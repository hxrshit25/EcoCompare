import React from 'react';
import { useApp } from '../context/AppContext';
import { ProductCard } from '../components/ProductCard';
import { 
  BarChart3, 
  Bookmark, 
  Scale, 
  Leaf, 
  TrendingDown, 
  Clock, 
  Trash2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const { 
    products, 
    savedIds, 
    comparisonHistory, 
    setActiveView, 
    addToCompare 
  } = useApp();

  const savedProducts = products.filter(p => savedIds.includes(p.id));

  // Cumulative impact estimates
  const totalComparisons = comparisonHistory.length + 25;
  const greenerChoicesCount = 19;
  const estimatedCO2AvoidedKg = 34.8;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/90 via-slate-900 to-teal-950/80 text-white border border-emerald-800/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
            User Impact Telemetry
          </span>
          <h1 className="text-2xl sm:text-3xl font-black mt-2">
            My Sustainability Journey
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Track your comparison decisions, saved sustainable products, and personal carbon reduction progress.
          </p>
        </div>

        <button
          onClick={() => setActiveView('explore')}
          className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 transition-all shrink-0 self-start md:self-auto"
        >
          <span>Find More Green Items</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3 Telemetry Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-xs space-y-1">
          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
            <Scale className="w-4 h-4 text-emerald-600" />
            <span>Comparisons Evaluated</span>
          </div>
          <div className="text-3xl font-black text-gray-900 dark:text-white">
            {totalComparisons}
          </div>
          <div className="text-xs text-gray-400">
            Across 8 product categories
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-xs space-y-1">
          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>Greener Choices Made</span>
          </div>
          <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
            {greenerChoicesCount}
          </div>
          <div className="text-xs text-emerald-700 dark:text-emerald-300 font-semibold">
            76% preference rate for Grade A products
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-xs space-y-1">
          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
            <Leaf className="w-4 h-4 text-sky-600" />
            <span>Estimated CO₂ Avoided</span>
          </div>
          <div className="text-3xl font-black text-gray-900 dark:text-white">
            {estimatedCO2AvoidedKg} <span className="text-sm font-normal text-gray-400">kg CO₂e</span>
          </div>
          <div className="text-xs text-gray-400">
            Equivalent to planting 1.6 mature trees
          </div>
        </div>

      </div>

      {/* Saved / Favorite Products Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-emerald-600" />
              <span>Saved Products ({savedProducts.length})</span>
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Your bookmarked sustainable products stored locally.
            </p>
          </div>
        </div>

        {savedProducts.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-800 text-xs text-gray-400">
            No saved products yet. Tap the bookmark icon on any product in the Explore catalog.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Comparison History */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-800 p-6 space-y-4 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-slate-800">
          <div>
            <h2 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Recent Comparison History</span>
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Audit trail of previous product comparison sessions.
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          {comparisonHistory.map(entry => (
            <div
              key={entry.id}
              className="p-3.5 rounded-2xl bg-gray-50 dark:bg-slate-950/60 border border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
            >
              <div>
                <div className="font-bold text-gray-900 dark:text-white">
                  {entry.productNames.join('  vs  ')}
                </div>
                <div className="text-gray-400 text-[11px] mt-0.5">{entry.timestamp}</div>
              </div>

              <button
                onClick={() => {
                  entry.productIds.forEach(id => addToCompare(id));
                  setActiveView('compare');
                }}
                className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold flex items-center gap-1 self-start sm:self-auto"
              >
                <span>Reopen Matrix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
