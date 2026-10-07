import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { POPULAR_SEARCH_TERMS } from '../data/products';
import { Search, X, ArrowRight, ShieldCheck, Leaf } from 'lucide-react';
import { GreenScoreBadge } from './GreenScoreBadge';
import { ProductVisual } from './ProductVisual';
import { formatPrice } from '../utils/formatters';

export const SearchModal: React.FC = () => {
  const { 
    searchModalOpen, 
    setSearchModalOpen, 
    products, 
    setSelectedProduct, 
    setActiveView 
  } = useApp();

  const [query, setQuery] = useState('');

  // Keyboard shortcut listener for Cmd+K / Ctrl+K & Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(!searchModalOpen);
      }
      if (e.key === 'Escape' && searchModalOpen) {
        setSearchModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchModalOpen, setSearchModalOpen]);

  if (!searchModalOpen) return null;

  const filtered = query.trim()
    ? products.filter(p => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.materialsBreakdown.some(m => m.name.toLowerCase().includes(q))
        );
      })
    : [];

  const handleSelect = (product: any) => {
    setSelectedProduct(product);
    setSearchModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-gray-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Search products by brand, material, or category (e.g. fairphone, recycled, cotton)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="text-[10px] font-mono text-gray-400 border border-gray-200 dark:border-slate-700 px-1.5 py-0.5 rounded">
              ESC
            </kbd>
          )}
        </div>

        {/* Content Box */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-4">
          
          {query.trim() === '' ? (
            <div className="space-y-4">
              <div>
                <div className="text-xs font-bold uppercase text-gray-400 dark:text-gray-500 mb-2">
                  Popular Searches
                </div>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCH_TERMS.map((term, i) => (
                    <button
                      key={i}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-xs text-gray-700 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400 font-medium transition-all"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase text-gray-400 dark:text-gray-500 mb-2">
                  Explore by Category
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {['Electronics', 'Clothing', 'Personal Care', 'Home & Kitchen', 'Food & Beverages', 'Stationery', 'Transportation', 'Packaging'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setQuery(cat);
                      }}
                      className="p-2.5 rounded-xl bg-gray-50 dark:bg-slate-950/60 border border-gray-200/60 dark:border-slate-800 text-left hover:border-emerald-500 font-medium text-gray-700 dark:text-gray-300"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-12 text-center text-gray-400 dark:text-gray-500 text-sm">
              No products found matching &quot;{query}&quot;. Try searching by brand, material, or category.
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase text-gray-400 dark:text-gray-500 mb-1">
                Matching Products ({filtered.length})
              </div>
              {filtered.map(product => (
                <div
                  key={product.id}
                  onClick={() => handleSelect(product)}
                  className="p-3 rounded-2xl bg-gray-50 dark:bg-slate-950/60 hover:bg-emerald-50 dark:hover:bg-slate-800/80 border border-gray-200/60 dark:border-slate-800 flex items-center justify-between gap-3 cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-200/80 dark:border-slate-800">
                      <ProductVisual product={product} aspectRatio="square" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-extrabold uppercase tracking-wide">
                        {product.brand} · {product.subcategory || product.category}
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                        {product.name}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {product.carbonFootprintKg} kg CO₂e · {formatPrice(product.price, product.currency || '₹')}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <GreenScoreBadge score={product.greenScore} grade={product.grade} size="sm" />
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="p-3 border-t border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/50 flex items-center justify-between text-[11px] text-gray-400">
          <span>Press ESC to close</span>
          <span>EcoCompare • Green Product Comparison Tool</span>
        </div>

      </div>
    </div>
  );
};
