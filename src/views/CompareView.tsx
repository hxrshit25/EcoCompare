import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Product, PriorityWeights } from '../types';
import { generateSmartRecommendation, evaluateMetricComparison } from '../utils/scoring';
import { GreenScoreBadge } from '../components/GreenScoreBadge';
import { ProductVisual } from '../components/ProductVisual';
import { formatPrice } from '../utils/formatters';
import { 
  Scale, 
  Plus, 
  Trash2, 
  X, 
  Check, 
  TrendingDown, 
  Sparkles, 
  Sliders, 
  ShieldCheck, 
  Droplets, 
  Clock, 
  Wrench, 
  RefreshCw, 
  Box, 
  Award,
  Zap,
  ArrowRight,
  Table as TableIcon,
  LayoutGrid,
  CheckCircle2,
  Leaf
} from 'lucide-react';

export const CompareView: React.FC = () => {
  const { 
    products, 
    compareIds, 
    removeFromCompare, 
    addToCompare, 
    clearCompare, 
    setActiveView, 
    setSelectedProduct,
    isSaved,
    toggleSaved,
    recordComparison
  } = useApp();

  const [priorities, setPriorities] = useState<PriorityWeights>({
    environmentalImpact: 5,
    price: 3,
    durability: 4,
    materials: 3,
    recyclability: 4
  });

  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');
  const [showAddDropdown, setShowAddDropdown] = useState(false);
  const [showPrioritiesDrawer, setShowPrioritiesDrawer] = useState(false);
  const [addSearch, setAddSearch] = useState('');

  const comparedProducts = useMemo(() => {
    return products.filter(p => compareIds.includes(p.id));
  }, [products, compareIds]);

  const availableToAdd = products.filter(p => !compareIds.includes(p.id));

  const filteredAvailable = useMemo(() => {
    if (!addSearch.trim()) return availableToAdd;
    const q = addSearch.toLowerCase();
    return availableToAdd.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.brand.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q)
    );
  }, [availableToAdd, addSearch]);

  // Smart Recommendation Engine
  const recommendation = useMemo(() => {
    return generateSmartRecommendation(comparedProducts, priorities);
  }, [comparedProducts, priorities]);

  // Record comparison session into persistent history
  React.useEffect(() => {
    if (comparedProducts.length >= 2 && recommendation?.recommended) {
      recordComparison(
        comparedProducts.map(p => p.id),
        recommendation.recommended.id
      );
    }
  }, [comparedProducts, recommendation, recordComparison]);

  // Metric status evaluations (🟢 Best, 🟡 Mid, 🔴 Worst)
  const metricStatus = useMemo(() => {
    if (comparedProducts.length === 0) return {};
    return {
      price: evaluateMetricComparison(comparedProducts, p => p.price, true),
      greenScore: evaluateMetricComparison(comparedProducts, p => p.greenScore, false),
      carbon: evaluateMetricComparison(comparedProducts, p => p.carbonFootprintKg, true),
      water: evaluateMetricComparison(comparedProducts, p => p.waterFootprintLiters, true),
      lifespan: evaluateMetricComparison(comparedProducts, p => p.expectedLifespanYears, false),
      durability: evaluateMetricComparison(comparedProducts, p => p.subscores.durability, false),
      repairability: evaluateMetricComparison(comparedProducts, p => p.subscores.repairability, false),
      recyclability: evaluateMetricComparison(comparedProducts, p => p.subscores.recyclability, false),
      packaging: evaluateMetricComparison(comparedProducts, p => p.subscores.packaging, false),
      materials: evaluateMetricComparison(comparedProducts, p => p.subscores.materials, false),
    };
  }, [comparedProducts]);

  const renderBadge = (status?: 'best' | 'average' | 'worst') => {
    if (status === 'best') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Best in Class</span>
        </span>
      );
    }
    if (status === 'worst') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 text-[10px] font-bold border border-rose-200 dark:border-rose-800">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
          <span>Highest Impact</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 text-[10px] font-semibold border border-amber-200 dark:border-amber-800">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
        <span>Mid</span>
      </span>
    );
  };

  if (comparedProducts.length === 0) {
    return (
      <div className="max-w-xl mx-auto py-24 px-4 text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <Scale className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">
          No Products in Comparison Matrix
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
          Select 2 to 4 products from the catalog to compare their lifecycle carbon footprint, materials, and durability side-by-side.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-2">
          {products.slice(0, 2).map((p) => (
            <button
              key={p.id}
              onClick={() => addToCompare(p.id)}
              className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-emerald-50 dark:hover:bg-slate-800 text-emerald-700 dark:text-emerald-400 border border-emerald-600/30 text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              + Add {p.name.split(' ')[0]}
            </button>
          ))}
          <button
            onClick={() => setActiveView('explore')}
            className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  const maxCarbonInMatrix = Math.max(...comparedProducts.map(p => p.carbonFootprintKg), 1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* 1. HEADER BAR & CONTROLS */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Scale className="w-4 h-4" />
            <span>Comparison Intelligence Matrix</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Comparing {comparedProducts.length} Products
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Evaluated against ISO 14040 Life Cycle Assessment coefficients and verified third-party ecolabels.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          
          {/* View Mode Toggle (Table vs Cards) */}
          <div className="flex items-center p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Table</span>
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cards</span>
            </button>
          </div>

          {/* Add Product Dropdown */}
          {comparedProducts.length < 4 && (
            <div className="relative">
              <button
                onClick={() => setShowAddDropdown(!showAddDropdown)}
                className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Product ({comparedProducts.length}/4)</span>
              </button>

              {showAddDropdown && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-2 z-30 max-h-96 flex flex-col">
                  <div className="p-1.5 border-b border-slate-100 dark:border-slate-800">
                    <input
                      type="text"
                      placeholder="Search across 100+ products..."
                      value={addSearch}
                      onChange={(e) => setAddSearch(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                      autoFocus
                    />
                  </div>
                  <div className="overflow-y-auto flex-1 p-1">
                    <div className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500 px-2 py-1">
                      {filteredAvailable.length} products available:
                    </div>
                    {filteredAvailable.slice(0, 50).map(p => (
                      <button
                        key={p.id}
                        onClick={() => {
                          addToCompare(p.id);
                          setShowAddDropdown(false);
                          setAddSearch('');
                        }}
                        className="w-full text-left p-2 rounded-xl hover:bg-emerald-50 dark:hover:bg-slate-800 flex items-center gap-2.5 transition-all text-xs cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-slate-200/60 dark:border-slate-800">
                          <ProductVisual product={p} aspectRatio="square" />
                        </div>
                        <div className="truncate flex-1">
                          <div className="font-bold text-slate-900 dark:text-white truncate">{p.name}</div>
                          <div className="text-emerald-700 dark:text-emerald-400 text-[11px]">
                            Green Score {p.greenScore} · {formatPrice(p.price)}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Priorities Drawer Button */}
          <button
            onClick={() => setShowPrioritiesDrawer(!showPrioritiesDrawer)}
            className={`px-3.5 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs ${
              showPrioritiesDrawer
                ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-bold'
                : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
            }`}
          >
            <Sliders className="w-3.5 h-3.5 text-emerald-600" />
            <span>Customize Weights</span>
          </button>

          {/* Clear Comparison */}
          <button
            onClick={clearCompare}
            className="p-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-slate-500 hover:text-rose-600 border border-slate-200/80 dark:border-slate-800 transition-all cursor-pointer shadow-2xs"
            title="Clear all"
            aria-label="Clear all compared products"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Priorities Tuning Sliders (if expanded) */}
      {showPrioritiesDrawer && (
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-emerald-500/40 shadow-sm space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                What Matters Most to You?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Adjust the weights below to dynamically recalculate our smart buying recommendation.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
              Live Engine Recalculation
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-xs">
            <div>
              <div className="flex justify-between font-semibold mb-1 text-slate-700 dark:text-slate-300">
                <span>Environment:</span>
                <span className="text-emerald-600 font-bold">{priorities.environmentalImpact}/5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={priorities.environmentalImpact}
                onChange={(e) => setPriorities({ ...priorities, environmentalImpact: Number(e.target.value) })}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between font-semibold mb-1 text-slate-700 dark:text-slate-300">
                <span>Price Value:</span>
                <span className="text-emerald-600 font-bold">{priorities.price}/5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={priorities.price}
                onChange={(e) => setPriorities({ ...priorities, price: Number(e.target.value) })}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between font-semibold mb-1 text-slate-700 dark:text-slate-300">
                <span>Durability:</span>
                <span className="text-emerald-600 font-bold">{priorities.durability}/5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={priorities.durability}
                onChange={(e) => setPriorities({ ...priorities, durability: Number(e.target.value) })}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between font-semibold mb-1 text-slate-700 dark:text-slate-300">
                <span>Materials:</span>
                <span className="text-emerald-600 font-bold">{priorities.materials}/5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={priorities.materials}
                onChange={(e) => setPriorities({ ...priorities, materials: Number(e.target.value) })}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between font-semibold mb-1 text-slate-700 dark:text-slate-300">
                <span>Recyclability:</span>
                <span className="text-emerald-600 font-bold">{priorities.recyclability}/5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={priorities.recyclability}
                onChange={(e) => setPriorities({ ...priorities, recyclability: Number(e.target.value) })}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. OUR RECOMMENDATION (LUMINOUS WHITE CARD WITH GREEN INDICATORS) */}
      {recommendation && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-emerald-500/30 dark:border-emerald-800/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[11px] font-black uppercase tracking-wider">
                Our Recommendation
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Optimized by custom priority weighting
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              <span className="text-emerald-600 dark:text-emerald-400">{recommendation.recommended.name}</span> is the greener choice
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {recommendation.reasoning}
            </p>
          </div>

          {/* Environmental Difference Callout */}
          {recommendation.carbonDelta > 0 && (
            <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 shrink-0 text-center sm:text-right shadow-2xs">
              <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                Estimated Carbon Reduction
              </div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5">
                -{recommendation.carbonDelta} kg <span className="text-xs font-bold text-slate-500">CO₂e</span>
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-300 font-medium mt-0.5">
                {recommendation.percentLowerCarbon}% lower emissions than benchmark
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3A. DETAILED COMPARISON TABLE VIEW */}
      {viewMode === 'table' ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40">
                  <th className="p-4 sm:p-5 text-xs font-bold uppercase text-slate-400 tracking-wider w-48 min-w-[180px]">
                    Attribute
                  </th>
                  {comparedProducts.map(p => {
                    const isRec = recommendation?.recommended.id === p.id;
                    return (
                      <th key={p.id} className={`p-4 sm:p-5 min-w-[240px] align-top ${isRec ? 'bg-emerald-50/30 dark:bg-emerald-950/20' : ''}`}>
                        <div className="space-y-3">
                          <div className="relative">
                            <ProductVisual product={p} aspectRatio="landscape" className="h-32 w-full rounded-xl" />
                            <button
                              onClick={() => removeFromCompare(p.id)}
                              className="absolute top-2 right-2 p-1.5 rounded-lg bg-white/90 dark:bg-slate-900/90 text-slate-400 hover:text-rose-600 transition-all border border-slate-200/60 dark:border-slate-800 cursor-pointer shadow-xs"
                              title="Remove product"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                            {isRec && (
                              <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-emerald-600 text-white text-[10px] font-bold uppercase shadow-xs">
                                Top Pick
                              </div>
                            )}
                          </div>

                          <div>
                            <div className="text-[11px] font-extrabold uppercase text-emerald-600 dark:text-emerald-400">
                              {p.brand}
                            </div>
                            <div className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">
                              {p.name}
                            </div>
                            <div className="text-base font-black text-slate-900 dark:text-white mt-1">
                              {formatPrice(p.price, p.currency || '₹')}
                            </div>
                          </div>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                
                {/* Row: Green Score Ring */}
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-bold text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Leaf className="w-4 h-4 text-emerald-600" />
                      <span>Green Score</span>
                    </div>
                  </td>
                  {comparedProducts.map(p => (
                    <td key={p.id} className="p-4">
                      <div className="flex items-center gap-3">
                        <GreenScoreBadge score={p.greenScore} grade={p.grade} size="sm" />
                        <div>{renderBadge(metricStatus.greenScore?.[p.id])}</div>
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Row: Carbon Footprint */}
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-bold text-slate-700 dark:text-slate-300">
                    <div>Carbon Footprint</div>
                    <div className="text-[10px] text-slate-400 font-normal">Cradle-to-grave CO₂e</div>
                  </td>
                  {comparedProducts.map(p => (
                    <td key={p.id} className="p-4">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-sm text-slate-900 dark:text-white">
                            {p.carbonFootprintKg} kg CO₂e
                          </span>
                          {renderBadge(metricStatus.carbon?.[p.id])}
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-emerald-600 h-full rounded-full transition-all duration-300"
                            style={{ width: `${Math.max(12, (p.carbonFootprintKg / maxCarbonInMatrix) * 100)}%` }}
                          />
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Row: Emissions Delta */}
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-bold text-slate-700 dark:text-slate-300">
                    Emissions Avoided
                  </td>
                  {comparedProducts.map(p => {
                    const deltaPercent = Math.round(((p.conventionalCarbonKg - p.carbonFootprintKg) / p.conventionalCarbonKg) * 100);
                    return (
                      <td key={p.id} className="p-4">
                        <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                          <TrendingDown className="w-3.5 h-3.5" />
                          <span>-{deltaPercent}% vs standard</span>
                        </span>
                      </td>
                    );
                  })}
                </tr>

                {/* Row: Water Footprint */}
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-bold text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Droplets className="w-4 h-4 text-sky-500" />
                      <span>Water Usage</span>
                    </div>
                  </td>
                  {comparedProducts.map(p => (
                    <td key={p.id} className="p-4">
                      <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                        <span>{p.waterFootprintLiters} Liters</span>
                        {renderBadge(metricStatus.water?.[p.id])}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Row: Expected Lifespan */}
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-bold text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span>Expected Lifespan</span>
                    </div>
                  </td>
                  {comparedProducts.map(p => (
                    <td key={p.id} className="p-4">
                      <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                        <span>{p.expectedLifespanYears} Years</span>
                        {renderBadge(metricStatus.lifespan?.[p.id])}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Row: Repairability */}
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-bold text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Wrench className="w-4 h-4 text-slate-500" />
                      <span>Repairability Score</span>
                    </div>
                  </td>
                  {comparedProducts.map(p => (
                    <td key={p.id} className="p-4">
                      <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                        <span>{p.subscores.repairability}/100</span>
                        {renderBadge(metricStatus.repairability?.[p.id])}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Row: Recyclability */}
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-bold text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <RefreshCw className="w-4 h-4 text-teal-500" />
                      <span>Recyclability Rate</span>
                    </div>
                  </td>
                  {comparedProducts.map(p => (
                    <td key={p.id} className="p-4">
                      <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                        <span>{p.subscores.recyclability}%</span>
                        {renderBadge(metricStatus.recyclability?.[p.id])}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Row: Packaging */}
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-bold text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Box className="w-4 h-4 text-amber-600" />
                      <span>Packaging</span>
                    </div>
                  </td>
                  {comparedProducts.map(p => (
                    <td key={p.id} className="p-4 text-slate-700 dark:text-slate-300">
                      <div>{p.packagingType}</div>
                      {p.packagingPlasticFree && (
                        <span className="inline-block mt-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                          100% Plastic-Free
                        </span>
                      )}
                    </td>
                  ))}
                </tr>

                {/* Row: Verified Certifications */}
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-bold text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Audited Certifications</span>
                    </div>
                  </td>
                  {comparedProducts.map(p => (
                    <td key={p.id} className="p-4">
                      <div className="space-y-1">
                        {p.certifications.map(c => (
                          <div key={c.id} className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 text-xs">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                            <span className="truncate">{c.name}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Action Row */}
                <tr className="bg-slate-50/40 dark:bg-slate-950/30">
                  <td className="p-4 font-bold text-slate-700 dark:text-slate-300">
                    Actions
                  </td>
                  {comparedProducts.map(p => (
                    <td key={p.id} className="p-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedProduct(p)}
                          className="flex-1 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 hover:text-emerald-700 font-bold text-xs flex items-center justify-center gap-1 transition-all cursor-pointer"
                        >
                          <span>Deep-Dive LCA</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  ))}
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* 3B. SIDE-BY-SIDE CARDS LAYOUT */
        <div className={`grid grid-cols-1 md:grid-cols-${Math.min(comparedProducts.length, 4)} gap-6 items-stretch`}>
          {comparedProducts.map((product) => {
            const isRec = recommendation?.recommended.id === product.id;

            return (
              <div
                key={product.id}
                className={`bg-white dark:bg-slate-900 rounded-3xl border overflow-hidden shadow-xs flex flex-col justify-between transition-all ${
                  isRec
                    ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                    : 'border-slate-200/80 dark:border-slate-800'
                }`}
              >
                <div>
                  <div className="relative p-2.5 pb-0">
                    <ProductVisual product={product} aspectRatio="landscape" />
                    <button
                      onClick={() => removeFromCompare(product.id)}
                      className="absolute top-4 right-4 p-1.5 rounded-xl bg-white/95 dark:bg-slate-900/95 text-slate-500 hover:text-rose-600 shadow-xs border border-slate-200/80 dark:border-slate-800 transition-all cursor-pointer"
                      title="Remove product"
                      aria-label="Remove product from comparison"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-slate-900/95 px-3 py-1.5 rounded-xl text-xs font-black text-slate-900 dark:text-white shadow-xs border border-slate-200/60 dark:border-slate-800">
                      {formatPrice(product.price, product.currency || '₹')}
                    </div>

                    {isRec && (
                      <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-xs">
                        Top Pick
                      </div>
                    )}
                  </div>

                  <div className="p-5 space-y-4">
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        {product.brand}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 line-clamp-1">
                        {product.name}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
                      <GreenScoreBadge score={product.greenScore} grade={product.grade} size="sm" />
                      <div>{renderBadge(metricStatus.greenScore?.[product.id])}</div>
                    </div>

                    <div className="space-y-3 pt-2 text-xs divide-y divide-slate-100 dark:divide-slate-800">
                      <div className="pt-2">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-slate-500 dark:text-slate-400 font-medium">Carbon Footprint:</span>
                          <div className="flex items-center gap-1.5">
                            <span className="font-extrabold text-slate-900 dark:text-white text-sm">
                              {product.carbonFootprintKg} kg CO₂e
                            </span>
                            {renderBadge(metricStatus.carbon?.[product.id])}
                          </div>
                        </div>

                        <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden mt-1.5">
                          <div 
                            className="bg-emerald-600 dark:bg-emerald-500 h-full rounded-full transition-all"
                            style={{ width: `${Math.max(12, (product.carbonFootprintKg / maxCarbonInMatrix) * 100)}%` }}
                          />
                        </div>
                      </div>

                      <div className="pt-2 flex justify-between items-center">
                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <Droplets className="w-3.5 h-3.5 text-sky-500" />
                          <span>Water Usage:</span>
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-900 dark:text-white">{product.waterFootprintLiters} L</span>
                          {renderBadge(metricStatus.water?.[product.id])}
                        </div>
                      </div>

                      <div className="pt-2 flex justify-between items-center">
                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-amber-500" />
                          <span>Lifespan:</span>
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-900 dark:text-white">{product.expectedLifespanYears} Years</span>
                          {renderBadge(metricStatus.lifespan?.[product.id])}
                        </div>
                      </div>

                      <div className="pt-2 flex justify-between items-center">
                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <Wrench className="w-3.5 h-3.5 text-slate-500" />
                          <span>Repairability:</span>
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-900 dark:text-white">{product.subscores.repairability}/100</span>
                          {renderBadge(metricStatus.repairability?.[product.id])}
                        </div>
                      </div>

                      <div className="pt-2 flex justify-between items-center">
                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <RefreshCw className="w-3.5 h-3.5 text-teal-500" />
                          <span>Recyclability:</span>
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-900 dark:text-white">{product.subscores.recyclability}%</span>
                          {renderBadge(metricStatus.recyclability?.[product.id])}
                        </div>
                      </div>

                      <div className="pt-2">
                        <div className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500 mb-1.5">
                          Verified Certifications:
                        </div>
                        <div className="space-y-1">
                          {product.certifications.map(c => (
                            <div key={c.id} className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 stroke-[3]" />
                              <span className="truncate">{c.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 hover:text-emerald-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Deep-Dive LCA Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
