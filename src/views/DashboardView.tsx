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
    addToCompare,
    clearCompare,
    removeHistoryEntry,
    clearComparisonHistory
  } = useApp();

  const savedProducts = products.filter(p => savedIds.includes(p.id));

  // Real user telemetry computed directly from active application state
  const totalComparisons = comparisonHistory.length;
  const savedCount = savedProducts.length;
  const userSavedCO2AvoidedKg = savedProducts
    .reduce((acc, p) => acc + Math.max(0, p.conventionalCarbonKg - p.carbonFootprintKg), 0)
    .toFixed(1);
  const avgGreenScore = savedProducts.length > 0
    ? (savedProducts.reduce((acc, p) => acc + p.greenScore, 0) / savedProducts.length).toFixed(1)
    : '0';

  const handleReopenComparison = (entryProductIds: string[]) => {
    clearCompare();
    entryProductIds.slice(0, 4).forEach(id => addToCompare(id));
    setActiveView('compare');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/90 via-slate-900 to-teal-950/80 text-white border border-emerald-800/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
            Personal Impact Telemetry
          </span>
          <h1 className="text-2xl sm:text-3xl font-black mt-2">
            My Sustainability Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Live telemetry derived from your bookmarked products and comparison audits.
          </p>
        </div>

        <button
          onClick={() => setActiveView('explore')}
          className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 transition-all shrink-0 self-start md:self-auto cursor-pointer"
        >
          <span>Explore Verified Catalog</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 4 Real Data Telemetry Cards */}
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 px-1">
          Your Verified Activity Metrics
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-xs space-y-1">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-emerald-600" />
              <span>Comparison Sessions</span>
            </div>
            <div className="text-3xl font-black text-gray-900 dark:text-white">
              {totalComparisons}
            </div>
            <div className="text-xs text-gray-400">
              {totalComparisons > 0 ? 'Recorded in local session history' : 'No comparisons run yet'}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-xs space-y-1">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              <Bookmark className="w-4 h-4 text-teal-600" />
              <span>Saved Sustainable Items</span>
            </div>
            <div className="text-3xl font-black text-teal-600 dark:text-teal-400">
              {savedCount}
            </div>
            <div className="text-xs text-teal-700 dark:text-teal-300 font-semibold">
              Curated shortlist in your library
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-xs space-y-1">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-sky-600" />
              <span>Estimated CO₂e Saved</span>
            </div>
            <div className="text-3xl font-black text-gray-900 dark:text-white">
              {userSavedCO2AvoidedKg} <span className="text-sm font-normal text-gray-400">kg</span>
            </div>
            <div className="text-xs text-gray-400">
              Cumulative vs conventional alternatives
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-xs space-y-1">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Portfolio Avg Green Score</span>
            </div>
            <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
              {avgGreenScore} <span className="text-sm font-normal text-gray-400">/ 100</span>
            </div>
            <div className="text-xs text-emerald-700 dark:text-emerald-300 font-semibold">
              {Number(avgGreenScore) >= 80 ? 'Grade A Sustainable tier' : 'Across your saved items'}
            </div>
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
              Your bookmarked sustainable products stored safely on your device.
            </p>
          </div>
        </div>

        {savedProducts.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-800 text-xs text-gray-400">
            No saved products yet. Tap the bookmark icon on any product in the Catalog.
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
              <span>Comparison History ({comparisonHistory.length})</span>
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Audit trail of previous product comparison sessions.
            </p>
          </div>
          {comparisonHistory.length > 0 && (
            <button
              onClick={clearComparisonHistory}
              className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear History</span>
            </button>
          )}
        </div>

        {comparisonHistory.length === 0 ? (
          <div className="py-8 text-center text-xs text-gray-400">
            No comparison sessions recorded yet. Start by comparing products in the comparison tool.
          </div>
        ) : (
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

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <button
                    onClick={() => handleReopenComparison(entry.productIds)}
                    className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Reopen Matrix</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => removeHistoryEntry(entry.id)}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
                    title="Delete entry"
                    aria-label="Delete entry"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
