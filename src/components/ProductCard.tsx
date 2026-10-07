import React from 'react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import { ProductVisual } from './ProductVisual';
import { formatPrice, getDataConfidenceBadge } from '../utils/formatters';
import { 
  Check, 
  Plus, 
  Bookmark, 
  ShieldCheck, 
  ArrowRight,
  Droplets,
  Clock,
  RefreshCw,
  Leaf,
  Layers
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const { isInCompare, toggleCompare, isSaved, toggleSaved, setSelectedProduct } = useApp();

  const inCompare = isInCompare(product.id);
  const saved = isSaved(product.id);

  const handleOpenDetail = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedProduct(product);
    if (onSelect) onSelect();
  };

  const confidence = getDataConfidenceBadge(product.sustainabilityStatus, product.dataConfidence);

  // Score color styles
  const getScoreColor = (score: number) => {
    if (score >= 90) return { text: 'text-emerald-600 dark:text-emerald-400', bar: 'from-emerald-500 to-teal-400' };
    if (score >= 80) return { text: 'text-teal-600 dark:text-teal-400', bar: 'from-teal-500 to-cyan-400' };
    if (score >= 70) return { text: 'text-sky-600 dark:text-sky-400', bar: 'from-sky-500 to-blue-400' };
    if (score >= 60) return { text: 'text-amber-600 dark:text-amber-400', bar: 'from-amber-500 to-orange-400' };
    return { text: 'text-rose-600 dark:text-rose-400', bar: 'from-rose-500 to-red-400' };
  };

  const scoreColor = getScoreColor(product.greenScore);

  return (
    <div 
      className={`group h-full bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 ${
        inCompare
          ? 'border-emerald-600 dark:border-emerald-500 ring-2 ring-emerald-600/20 dark:ring-emerald-500/20'
          : 'border-slate-200/90 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/40'
      }`}
    >
      
      {/* 1. TOP STUDIO PRODUCT VISUAL */}
      <div 
        onClick={handleOpenDetail}
        className="relative cursor-pointer p-2.5 pb-0"
      >
        <ProductVisual product={product} aspectRatio="landscape" />

        {/* Floating Quick Action: Bookmark / Save */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleSaved(product.id);
          }}
          title={saved ? 'Remove from saved' : 'Save product'}
          className={`absolute top-4 right-4 p-2 rounded-xl backdrop-blur-md transition-all duration-200 cursor-pointer shadow-xs ${
            saved
              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
              : 'bg-white/90 dark:bg-slate-900/90 text-slate-600 dark:text-slate-300 hover:text-emerald-600 hover:scale-105 border border-slate-200/60 dark:border-slate-800'
          }`}
          aria-label={saved ? 'Remove from saved' : 'Save product'}
        >
          <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-white' : ''}`} />
        </button>

        {/* Data Credibility Indicator Chip */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-800 text-[10px] font-semibold text-slate-600 dark:text-slate-300 shadow-2xs">
          <span className={`w-1.5 h-1.5 rounded-full ${confidence.dotColor}`} />
          <span>{confidence.label}</span>
        </div>
      </div>

      {/* 2. PRODUCT DETAILS & HIERARCHY */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          {/* Metadata: Brand · Category */}
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
            <span className="font-extrabold text-emerald-600 dark:text-emerald-400 truncate max-w-[140px]">
              {product.brand}
            </span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
            <span className="truncate">{product.subcategory || product.category}</span>
          </div>

          {/* Product Name */}
          <h3 
            onClick={handleOpenDetail}
            className="text-base font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer line-clamp-1 mt-1"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Price (in ₹ Indian Rupees) */}
          <div className="mt-2 flex items-baseline justify-between">
            <div className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
              {formatPrice(product.price, product.currency || '₹')}
            </div>
            {product.conventionalCarbonKg > product.carbonFootprintKg && (
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                -{Math.round(((product.conventionalCarbonKg - product.carbonFootprintKg) / product.conventionalCarbonKg) * 100)}% CO₂e
              </span>
            )}
          </div>

          {/* 3. GREEN SCORE VISUAL INDICATOR */}
          <div className="mt-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80 space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1">
                <Leaf className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Green Score</span>
              </span>
              <div className="flex items-center gap-1.5">
                <span className={`text-sm font-extrabold ${scoreColor.text}`}>
                  {product.greenScore}
                  <span className="text-[10px] text-slate-400 font-normal">/100</span>
                </span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-black bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 ${scoreColor.text}`}>
                  {product.grade}
                </span>
              </div>
            </div>

            {/* Visual Animated Progress Meter */}
            <div className="w-full bg-slate-200/80 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full bg-gradient-to-r ${scoreColor.bar} transition-all duration-500 ease-out`}
                style={{ width: `${product.greenScore}%` }}
              />
            </div>
          </div>

          {/* 4. ENVIRONMENTAL IMPACT TELEMETRY (3 COLS) */}
          <div className="grid grid-cols-3 gap-2 mt-3 text-center py-2 px-1 rounded-xl bg-slate-50/60 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60 text-xs">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">CO₂e</div>
              <div className="font-extrabold text-slate-900 dark:text-white mt-0.5">
                {product.carbonFootprintKg} <span className="text-[10px] font-normal text-slate-400">kg</span>
              </div>
            </div>
            
            <div className="border-x border-slate-200/60 dark:border-slate-800/60">
              <div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">Water</div>
              <div className="font-extrabold text-slate-900 dark:text-white mt-0.5">
                {product.waterFootprintLiters} <span className="text-[10px] font-normal text-slate-400">L</span>
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">Lifespan</div>
              <div className="font-extrabold text-slate-900 dark:text-white mt-0.5">
                {product.expectedLifespanYears} <span className="text-[10px] font-normal text-slate-400">yrs</span>
              </div>
            </div>
          </div>

          {/* 5. CIRCULARITY & CERTIFICATIONS SUMMARY */}
          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 px-0.5">
            <div className="flex items-center gap-1 font-medium">
              <RefreshCw className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>{product.subscores.recyclability}% Recyclable</span>
            </div>

            <div className="flex items-center gap-1 font-medium text-emerald-700 dark:text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{product.certifications.length} Certified</span>
            </div>
          </div>

        </div>

        {/* 6. BOTTOM ACTION CONTROLS */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
          
          {/* Compare Button */}
          <button
            onClick={() => toggleCompare(product.id)}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-150 cursor-pointer shadow-xs ${
              inCompare
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-300 border border-slate-200/80 dark:border-slate-700'
            }`}
          >
            {inCompare ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>In Compare</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Compare</span>
              </>
            )}
          </button>

          {/* Deep-Dive LCA Button */}
          <button
            onClick={handleOpenDetail}
            title="Inspect Life Cycle Assessment"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all text-xs font-semibold flex items-center justify-center cursor-pointer"
            aria-label="Inspect Life Cycle Assessment"
          >
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>

    </div>
  );
};
