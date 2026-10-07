import React from 'react';
import { useApp } from '../context/AppContext';
import { GreenScoreBadge } from '../components/GreenScoreBadge';
import { ProductVisual } from '../components/ProductVisual';
import { formatPrice } from '../utils/formatters';
import { 
  X, 
  Leaf, 
  Droplets, 
  Clock, 
  ShieldCheck, 
  Wrench, 
  RefreshCw, 
  Box, 
  ArrowRight, 
  Check, 
  Plus, 
  Bookmark, 
  AlertTriangle, 
  HelpCircle, 
  CheckCircle2, 
  TrendingDown,
  Layers,
  Sparkles
} from 'lucide-react';

export const ProductDetailView: React.FC = () => {
  const { 
    selectedProduct, 
    setSelectedProduct, 
    isInCompare, 
    toggleCompare, 
    isSaved, 
    toggleSaved,
    addToCompare,
    setActiveView 
  } = useApp();

  // Escape key listener & body scroll lock
  React.useEffect(() => {
    if (!selectedProduct) return;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProduct, setSelectedProduct]);

  if (!selectedProduct) return null;

  const product = selectedProduct;
  const inCompare = isInCompare(product.id);
  const saved = isSaved(product.id);

  const getClaimBadge = (status: 'Verified' | 'Potentially Misleading' | 'Needs Evidence') => {
    if (status === 'Verified') {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-300 dark:border-emerald-800">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Verified Claim</span>
        </span>
      );
    }
    if (status === 'Potentially Misleading') {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-800 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/80 px-2 py-0.5 rounded-md border border-rose-300 dark:border-rose-800">
          <AlertTriangle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
          <span>Potentially Misleading</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/80 px-2 py-0.5 rounded-md border border-amber-300 dark:border-amber-800">
        <HelpCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
        <span>Needs Evidence</span>
      </span>
    );
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs overflow-y-auto"
      onClick={() => setSelectedProduct(null)}
    >
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-extrabold tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              {product.category}
            </span>
            <span className="text-xs text-gray-400">• Detailed LCA Intelligence</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleSaved(product.id)}
              className={`p-2 rounded-xl transition-all ${
                saved
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-emerald-600'
              }`}
              title="Save Product"
            >
              <Bookmark className={`w-4 h-4 ${saved ? 'fill-white' : ''}`} />
            </button>

            <button
              onClick={() => setSelectedProduct(null)}
              className="p-2 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Top Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-5 rounded-2xl overflow-hidden relative">
              <ProductVisual product={product} aspectRatio="landscape" />
              <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-slate-900/95 px-3.5 py-1.5 rounded-xl text-sm font-black text-slate-900 dark:text-white shadow-sm border border-slate-200/60 dark:border-slate-800">
                {formatPrice(product.price, product.currency || '₹')}
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  {product.brand}
                </span>
                <h1 className="text-2xl font-black text-gray-900 dark:text-white mt-0.5">
                  {product.name}
                </h1>
              </div>

              {/* Green Score Hero Card */}
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-slate-950/60 border border-gray-200/80 dark:border-slate-800 flex items-center justify-between">
                <GreenScoreBadge score={product.greenScore} grade={product.grade} size="lg" />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2.5 pt-1">
                <button
                  onClick={() => toggleCompare(product.id)}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs ${
                    inCompare
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-emerald-700 dark:text-emerald-400 border border-emerald-600 dark:border-emerald-500/50'
                  }`}
                >
                  {inCompare ? <Check className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4" />}
                  <span>{inCompare ? 'In Comparison Matrix' : 'Add to Comparison Matrix'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Detailed Breakdown: "Why this product scored X" */}
          <div className="p-6 rounded-3xl bg-gray-50 dark:bg-slate-950/60 border border-gray-200 dark:border-slate-800 space-y-4">
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                Why this product scored {product.greenScore}/100
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                {product.scoreExplanation}
              </p>
            </div>

            {/* 7-part Subscore Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pt-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800">
                <div className="text-[10px] uppercase font-bold text-gray-400">Carbon (25%)</div>
                <div className="text-sm font-black text-emerald-600 dark:text-emerald-400 mt-0.5">{product.subscores.carbonImpact}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800">
                <div className="text-[10px] uppercase font-bold text-gray-400">Materials (15%)</div>
                <div className="text-sm font-black text-teal-600 dark:text-teal-400 mt-0.5">{product.subscores.materials}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800">
                <div className="text-[10px] uppercase font-bold text-gray-400">Durability (15%)</div>
                <div className="text-sm font-black text-sky-600 dark:text-sky-400 mt-0.5">{product.subscores.durability}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800">
                <div className="text-[10px] uppercase font-bold text-gray-400">Recycle (15%)</div>
                <div className="text-sm font-black text-indigo-600 dark:text-indigo-400 mt-0.5">{product.subscores.recyclability}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800">
                <div className="text-[10px] uppercase font-bold text-gray-400">Packaging (10%)</div>
                <div className="text-sm font-black text-amber-600 dark:text-amber-400 mt-0.5">{product.subscores.packaging}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800">
                <div className="text-[10px] uppercase font-bold text-gray-400">Repair (10%)</div>
                <div className="text-sm font-black text-rose-600 dark:text-rose-400 mt-0.5">{product.subscores.repairability}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800">
                <div className="text-[10px] uppercase font-bold text-gray-400">Certs (10%)</div>
                <div className="text-sm font-black text-emerald-600 dark:text-emerald-400 mt-0.5">{product.subscores.certifications}</div>
              </div>
            </div>
          </div>

          {/* Environmental Impact Telemetry Cards */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-gray-900 dark:text-white">
              Environmental Impact Metrics
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800">
                <Leaf className="w-4 h-4 text-emerald-600 mb-1" />
                <div className="text-gray-500 text-[10px]">Carbon Footprint</div>
                <div className="text-base font-black text-gray-900 dark:text-white mt-0.5">{product.carbonFootprintKg} kg CO₂e</div>
                <div className="text-[10px] text-emerald-600 font-semibold mt-1">vs {product.conventionalCarbonKg} kg standard</div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800">
                <Droplets className="w-4 h-4 text-sky-600 mb-1" />
                <div className="text-gray-500 text-[10px]">Water Footprint</div>
                <div className="text-base font-black text-gray-900 dark:text-white mt-0.5">{product.waterFootprintLiters} Liters</div>
                <div className="text-[10px] text-gray-400 mt-1">Cradle-to-gate total</div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800">
                <Clock className="w-4 h-4 text-amber-600 mb-1" />
                <div className="text-gray-500 text-[10px]">Expected Lifespan</div>
                <div className="text-base font-black text-gray-900 dark:text-white mt-0.5">{product.expectedLifespanYears} Years</div>
                <div className="text-[10px] text-gray-400 mt-1">Design durability life</div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800">
                <RefreshCw className="w-4 h-4 text-teal-600 mb-1" />
                <div className="text-gray-500 text-[10px]">Energy & Waste Impact</div>
                <div className="text-base font-black text-gray-900 dark:text-white mt-0.5">{product.energyUsage} / {product.wasteGeneration}</div>
                <div className="text-[10px] text-gray-400 mt-1">{product.renewableEnergyPercent}% renewable power</div>
              </div>
            </div>
          </div>

          {/* Material Analysis Visualization */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-gray-900 dark:text-white">
              Material Analysis
            </h3>

            {/* Stacked Percentage Bar */}
            <div className="w-full h-4 rounded-full bg-gray-100 dark:bg-slate-800 overflow-hidden flex">
              {product.materialsBreakdown.map((m, i) => (
                <div
                  key={i}
                  style={{ width: `${m.percentage}%`, backgroundColor: m.color || '#10b981' }}
                  className="h-full transition-all"
                  title={`${m.name}: ${m.percentage}%`}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {product.materialsBreakdown.map((m, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-slate-950/60 border border-gray-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: m.color || '#10b981' }} />
                    <span className="font-medium text-gray-800 dark:text-gray-200">{m.name}</span>
                  </div>
                  <span className="font-black text-gray-900 dark:text-white">{m.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lifecycle Stages Waterfall */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-gray-900 dark:text-white">
              Life Cycle Assessment (LCA) Stages
            </h3>

            <div className="space-y-3">
              {product.lifecycleStages.map((stage, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-gray-50 dark:bg-slate-950/60 border border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{stage.stage}</div>
                      <div className="text-gray-500 dark:text-gray-400 text-[11px]">{stage.notes}</div>
                    </div>
                  </div>

                  <div className="text-right sm:shrink-0">
                    <span className="font-extrabold text-gray-900 dark:text-white">{stage.impactKgCO2} kg CO₂e</span>
                    <span className="text-gray-400 ml-1.5">({stage.percentage}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Greenwashing Detector Feature */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Greenwashing Check</span>
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Automated verification analysis of manufacturer marketing claims.
                </p>
              </div>
              <span className="text-[10px] uppercase font-bold text-gray-400 px-2 py-0.5 rounded bg-gray-100 dark:bg-slate-800">
                EcoCompare Audit Engine
              </span>
            </div>

            <div className="space-y-3">
              {product.greenwashingClaims.map((claim) => (
                <div key={claim.id} className="p-4 rounded-2xl bg-gray-50 dark:bg-slate-950/60 border border-gray-100 dark:border-slate-800 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="font-bold text-xs text-gray-900 dark:text-white">
                      &ldquo;{claim.claim}&rdquo;
                    </div>
                    <div>{getClaimBadge(claim.status)}</div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {claim.analysis}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Greener Alternatives Recommendation Card */}
          {product.greenerAlternatives.length > 0 && (
            <div className="p-6 rounded-3xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 space-y-3">
              <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Greener Alternative</span>
              </h3>

              {product.greenerAlternatives.map((alt, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400">
                      {alt.brand}
                    </div>
                    <div className="font-bold text-sm text-gray-900 dark:text-white">{alt.name}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">{alt.reason}</div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="text-right">
                      <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        -{alt.carbonReductionPercent}% CO₂e
                      </div>
                      <div className="text-xs text-gray-500">{formatPrice(alt.price)}</div>
                    </div>
                    <button
                      onClick={() => {
                        addToCompare(alt.productId);
                        setSelectedProduct(null);
                        setActiveView('compare');
                      }}
                      className="px-3 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center gap-1 shadow-xs hover:bg-emerald-700 transition-all"
                    >
                      <span>Compare</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
