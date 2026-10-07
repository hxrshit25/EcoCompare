import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Product, ProductCategory } from '../types';
import { ProductCard } from '../components/ProductCard';
import { formatPrice } from '../utils/formatters';
import { 
  Search, 
  SlidersHorizontal, 
  ArrowUpDown, 
  X, 
  RotateCcw, 
  Scale, 
  ArrowRight,
  Filter,
  Check,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const ExploreView: React.FC = () => {
  const { 
    products, 
    compareIds, 
    setActiveView, 
    searchQuery, 
    setSearchQuery,
    selectedCategory,
    setSelectedCategory
  } = useApp();

  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [minScore, setMinScore] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(350000);
  const [maxCarbon, setMaxCarbon] = useState<number>(500);
  const [minRecyclability, setMinRecyclability] = useState<number>(0);
  const [selectedCert, setSelectedCert] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'greenScore' | 'lowestCarbon' | 'carbonDelta' | 'priceLow' | 'priceHigh' | 'lifespan' | 'recyclability'>('greenScore');
  const [showFilters, setShowFilters] = useState(false);

  // Synchronize local search input when global search query changes
  React.useEffect(() => {
    setLocalSearch(searchQuery);
  }, [searchQuery]);

  const categories: (ProductCategory | 'All')[] = [
    'All',
    'Electronics',
    'Home & Kitchen',
    'Cleaning & Household',
    'Personal Care',
    'Food & Beverages',
    'Transportation',
    'Packaging',
    'Stationery',
    'Clothing'
  ];

  // Unique brands
  const allBrands = useMemo(() => {
    const brands = Array.from(new Set(products.map(p => p.brand))).sort();
    return ['All', ...brands];
  }, [products]);

  // Unique certification types
  const certOptions = [
    { id: 'All', label: 'All Certifications' },
    { id: 'b-corp', label: 'B-Corp Certified' },
    { id: 'epeat', label: 'EPEAT Certified' },
    { id: 'c2c', label: 'Cradle to Cradle' },
    { id: 'climate', label: 'Climate Neutral' },
    { id: 'fsc', label: 'FSC Certified Wood' },
    { id: 'organic', label: 'Organic Certified' },
    { id: 'bee', label: 'BEE 5-Star (India)' },
    { id: 'fair', label: 'Fair Trade Certified' }
  ];

  // Filtering
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // Category match
      if (selectedCategory !== 'All' && p.category !== selectedCategory) {
        return false;
      }

      // Brand match
      if (selectedBrand !== 'All' && p.brand !== selectedBrand) {
        return false;
      }

      // Search match (natural keyword matching)
      const query = (localSearch || searchQuery).trim().toLowerCase();
      if (query) {
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesBrand = p.brand.toLowerCase().includes(query);
        const matchesCat = p.category.toLowerCase().includes(query);
        const matchesSubcat = (p.subcategory || '').toLowerCase().includes(query);
        const matchesDesc = (p.scoreExplanation || '').toLowerCase().includes(query);
        const matchesMaterial = p.materialsBreakdown.some(m => m.name.toLowerCase().includes(query));
        
        // Synonyms / colloquial queries (e.g. "iPhone" matches Apple, "ev" or "scooter" matches Ather, "laptop" matches Framework)
        const isEvQuery = (query === 'ev' || query === 'electric') && (p.category === 'Transportation' || p.name.toLowerCase().includes('electric'));
        const isLaptopQuery = (query === 'laptop' || query === 'pc') && p.subcategory === 'Laptops';
        const isBottleQuery = (query.includes('bottle') || query.includes('reusable')) && (p.name.toLowerCase().includes('bottle') || p.subcategory?.includes('Drinkware') || p.subcategory?.includes('Cookware'));
        const isShampooQuery = query.includes('shampoo') && p.name.toLowerCase().includes('shampoo');
        const isWashQuery = (query.includes('washing') || query.includes('machine')) && p.name.toLowerCase().includes('washing');

        if (!matchesName && !matchesBrand && !matchesCat && !matchesSubcat && !matchesDesc && !matchesMaterial && !isEvQuery && !isLaptopQuery && !isBottleQuery && !isShampooQuery && !isWashQuery) {
          return false;
        }
      }

      // Minimum Green Score
      if (p.greenScore < minScore) {
        return false;
      }

      // Price ceiling
      if (p.price > maxPrice) {
        return false;
      }

      // Max carbon
      if (p.carbonFootprintKg > maxCarbon) {
        return false;
      }

      // Minimum recyclability
      if (p.subscores.recyclability < minRecyclability) {
        return false;
      }

      // Certification match
      if (selectedCert !== 'All') {
        const hasCert = p.certifications.some(c => 
          c.id.toLowerCase().includes(selectedCert.toLowerCase()) || 
          c.name.toLowerCase().includes(selectedCert.toLowerCase())
        );
        if (!hasCert) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'greenScore') return b.greenScore - a.greenScore;
      if (sortBy === 'lowestCarbon') return a.carbonFootprintKg - b.carbonFootprintKg;
      if (sortBy === 'carbonDelta') {
        const deltaA = a.conventionalCarbonKg - a.carbonFootprintKg;
        const deltaB = b.conventionalCarbonKg - b.carbonFootprintKg;
        return deltaB - deltaA;
      }
      if (sortBy === 'priceLow') return a.price - b.price;
      if (sortBy === 'priceHigh') return b.price - a.price;
      if (sortBy === 'lifespan') return b.expectedLifespanYears - a.expectedLifespanYears;
      if (sortBy === 'recyclability') return b.subscores.recyclability - a.subscores.recyclability;
      return 0;
    });
  }, [
    products, 
    selectedCategory, 
    selectedBrand, 
    localSearch, 
    searchQuery, 
    minScore, 
    maxPrice, 
    maxCarbon, 
    minRecyclability, 
    selectedCert, 
    sortBy
  ]);

  const handleResetFilters = () => {
    setLocalSearch('');
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedBrand('All');
    setMinScore(0);
    setMaxPrice(350000);
    setMaxCarbon(500);
    setMinRecyclability(0);
    setSelectedCert('All');
    setSortBy('greenScore');
  };

  const hasActiveFilters = 
    selectedCategory !== 'All' || 
    selectedBrand !== 'All' || 
    (localSearch || searchQuery).trim() !== '' || 
    minScore > 0 || 
    maxPrice < 350000 || 
    maxCarbon < 500 || 
    minRecyclability > 0 || 
    selectedCert !== 'All';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
            Verified Environmental Catalog
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Sustainability Product Catalog
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Compare products across electronics, appliances, personal care, and clean mobility in the Indian market.
          </p>
        </div>

        {compareIds.length > 0 && (
          <button
            onClick={() => setActiveView('compare')}
            className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-all self-start sm:self-auto cursor-pointer"
          >
            <Scale className="w-4 h-4" />
            <span>Compare Matrix ({compareIds.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search & Filter Controls */}
      <div className="space-y-4">
        
        {/* Search Row */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by product, brand, material, or keyword (e.g. iPhone, laptop, EV, shampoo, washing machine)..."
              value={localSearch || searchQuery}
              onChange={(e) => {
                setLocalSearch(e.target.value);
                setSearchQuery(e.target.value);
              }}
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-emerald-600 rounded-2xl pl-10 pr-10 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-all shadow-2xs"
            />
            {(localSearch || searchQuery) && (
              <button
                onClick={() => {
                  setLocalSearch('');
                  setSearchQuery('');
                }}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {/* Sort Selector */}
            <div className="relative flex-1 sm:flex-initial">
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="w-full sm:w-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-emerald-600 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-semibold focus:outline-none cursor-pointer pr-9 appearance-none shadow-2xs"
              >
                <option value="greenScore">Sort: Highest Green Score</option>
                <option value="lowestCarbon">Sort: Lowest Carbon Emissions</option>
                <option value="carbonDelta">Sort: Most CO₂e Avoided</option>
                <option value="priceLow">Price: Low to High (₹)</option>
                <option value="priceHigh">Price: High to Low (₹)</option>
                <option value="lifespan">Sort: Longest Lifespan</option>
                <option value="recyclability">Sort: Highest Recyclability</option>
              </select>
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Filter Drawer Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-3 rounded-2xl border flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all shadow-2xs cursor-pointer ${
                hasActiveFilters || showFilters
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 font-bold'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
              )}
            </button>
          </div>
        </div>

        {/* Category Horizontal Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white font-bold shadow-xs'
                  : 'bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scalable Filter Drawer Panel */}
        {showFilters && (
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  Precision Sustainability & Market Filters
                </span>
              </div>
              <button
                onClick={handleResetFilters}
                className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
              
              {/* Brand Filter */}
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Brand:
                </label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-800 dark:text-slate-200 focus:outline-none"
                >
                  {allBrands.map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Verified Certification Filter */}
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Eco-Certification Standard:
                </label>
                <select
                  value={selectedCert}
                  onChange={(e) => setSelectedCert(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-800 dark:text-slate-200 focus:outline-none"
                >
                  {certOptions.map(c => (
                    <option key={c.id} value={c.id}>{c.label}</option>
                  ))}
                </select>
              </div>

              {/* Price Ceiling (₹) */}
              <div>
                <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  <span>Price Ceiling:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{formatPrice(maxPrice)}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="350000"
                  step="500"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>₹500</span>
                  <span>₹50,000</span>
                  <span>₹3.5 Lakh</span>
                </div>
              </div>

              {/* Min Green Score */}
              <div>
                <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  <span>Minimum Green Score:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">{minScore}/100</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="98"
                  value={minScore}
                  onChange={(e) => setMinScore(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>0 (All)</span>
                  <span>80 (Grade A)</span>
                  <span>95+ (Benchmark)</span>
                </div>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs pt-3 border-t border-slate-100 dark:border-slate-800">
              {/* Max Carbon Footprint */}
              <div>
                <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  <span>Maximum Carbon Footprint:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">&le; {maxCarbon} kg CO₂e</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="500"
                  step="5"
                  value={maxCarbon}
                  onChange={(e) => setMaxCarbon(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>&le; 5 kg (Zero-waste)</span>
                  <span>&le; 50 kg</span>
                  <span>&le; 500 kg (EV / Mobility)</span>
                </div>
              </div>

              {/* Minimum Recyclability */}
              <div>
                <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  <span>Minimum Recyclability Rate:</span>
                  <span className="font-bold text-teal-600 dark:text-teal-400">&ge; {minRecyclability}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="98"
                  step="5"
                  value={minRecyclability}
                  onChange={(e) => setMinRecyclability(Number(e.target.value))}
                  className="w-full accent-teal-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>0%</span>
                  <span>80% Circular</span>
                  <span>95%+ Closed-Loop</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Product Count & Filter Summary */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1 pt-1">
        <span>
          Showing <strong className="text-slate-900 dark:text-white font-bold">{filteredProducts.length}</strong> of {products.length} products
        </span>
        {hasActiveFilters && (
          <button
            onClick={handleResetFilters}
            className="text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer font-semibold"
          >
            Clear active filters
          </button>
        )}
      </div>

      {/* Catalog Grid (Desktop 3-4, Tablet 2, Mobile 1) */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
          <Filter className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            No products match your criteria
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mt-1 mb-4">
            Try searching for &quot;iPhone&quot;, &quot;laptop&quot;, &quot;water bottle&quot;, &quot;shampoo&quot;, &quot;EV&quot;, or click reset to view the full catalog.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {filteredProducts.map(product => (
            <div key={product.id} className="h-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}

      {/* Floating Bottom Comparison Dock */}
      {compareIds.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 w-[92%] max-w-xl bg-white/95 dark:bg-slate-900/95 border border-emerald-500/80 rounded-2xl p-3.5 shadow-2xl backdrop-blur-md flex items-center justify-between gap-3 animate-in slide-in-from-bottom duration-200">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-black text-xs flex items-center justify-center border border-emerald-300 dark:border-emerald-800">
              {compareIds.length}
            </div>
            <div className="text-xs">
              <span className="font-bold text-slate-900 dark:text-white">{compareIds.length} products selected for comparison</span>
              <span className="text-slate-500 dark:text-slate-400 hidden sm:inline"> (max 4)</span>
            </div>
          </div>

          <button
            onClick={() => setActiveView('compare')}
            className="py-2 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
          >
            <span>Compare Side-by-Side</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

    </div>
  );
};
