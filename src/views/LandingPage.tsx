import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ProductCard } from '../components/ProductCard';
import { ProductCategory } from '../types';
import heroMountainImg from '../assets/hero_mountain_forest.jpg';
import { 
  Scale, 
  ArrowRight, 
  ShieldCheck, 
  RefreshCw,
  Award,
  Smartphone,
  Droplets,
  Coffee,
  Shirt,
  Leaf,
  Users,
  PieChart,
  Home,
  BookOpen,
  Share2,
  ChevronDown,
  Play,
  Sun,
  Clock,
  Box,
  CheckCircle2
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { products, setActiveView, setSearchQuery, addToCompare, clearCompare } = useApp();
  
  // Interactive Hero comparison selection state
  const [slot1, setSlot1] = useState('Stainless Steel Water Bottle');
  const [slot2, setSlot2] = useState('Plastic Water Bottle');
  const [slot3, setSlot3] = useState('Glass Water Bottle');

  // Filter dropdowns in Comparison Results section
  const [selectedMetric, setSelectedMetric] = useState('Environmental Impact');
  const [selectedUnit, setSelectedUnit] = useState('kg CO₂');
  const [copiedShare, setCopiedShare] = useState(false);

  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 6);

  const handleStartComparing = () => {
    // Add realistic comparative items to compare tray
    const steelBottle = products.find(p => p.id.includes('bottle') || p.id.includes('klean')) || products[2];
    const plasticAlt = products.find(p => p.id.includes('plastic') || p.id.includes('phone')) || products[0];
    if (steelBottle) {
      clearCompare();
      addToCompare(steelBottle.id);
      if (plasticAlt) addToCompare(plasticAlt.id);
    }
    setActiveView('compare');
  };

  const handleHeroCompareClick = () => {
    // Smooth scroll down to comparison results section or open compare
    const resultsEl = document.getElementById('comparison-results-section');
    if (resultsEl) {
      resultsEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveView('compare');
    }
  };

  const handleShareClick = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const handleCategoryClick = (categoryName: ProductCategory) => {
    setSearchQuery('');
    setActiveView('explore');
  };

  // 6 Popular Categories matching the exact screenshot
  const popularCategories = [
    {
      label: 'Electronics',
      subtitle: 'Phones, Laptops...',
      category: 'Electronics' as ProductCategory,
      icon: Smartphone,
      iconBg: 'bg-blue-50 dark:bg-blue-950/60',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      label: 'Clothing',
      subtitle: 'T-shirts, Jeans...',
      category: 'Clothing' as ProductCategory,
      icon: Shirt,
      iconBg: 'bg-amber-50 dark:bg-amber-950/60',
      iconColor: 'text-amber-600 dark:text-amber-400',
    },
    {
      label: 'Food & Beverages',
      subtitle: 'Packaged Food...',
      category: 'Food & Beverages' as ProductCategory,
      icon: Leaf,
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/60',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      label: 'Household',
      subtitle: 'Cleaning, Kitchen...',
      category: 'Home & Kitchen' as ProductCategory,
      icon: Home,
      iconBg: 'bg-purple-50 dark:bg-purple-950/60',
      iconColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      label: 'Personal Care',
      subtitle: 'Skincare, Hygiene...',
      category: 'Personal Care' as ProductCategory,
      icon: Droplets,
      iconBg: 'bg-rose-50 dark:bg-rose-950/60',
      iconColor: 'text-rose-600 dark:text-rose-400',
    },
    {
      label: 'Stationery',
      subtitle: 'Notebooks, Pens...',
      category: 'Stationery' as ProductCategory,
      icon: BookOpen,
      iconBg: 'bg-cyan-50 dark:bg-cyan-950/60',
      iconColor: 'text-cyan-600 dark:text-cyan-400',
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-20 bg-slate-50/50 dark:bg-slate-950 min-h-screen">
      
      {/* =========================================================================
          1. HERO SECTION WITH VIBRANT MOUNTAIN BACKGROUND (MATCHING ATTACHED PIC)
         ========================================================================= */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24 border-b border-slate-200/70 dark:border-slate-800">
        
        {/* Full-bleed Mountain Landscape Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={heroMountainImg} 
            alt="Scenic Mountain Range and Pine Forest" 
            className="w-full h-full object-cover object-[center_35%] opacity-55 dark:opacity-25 filter saturate-110" 
          />
          {/* Subtle gradient overlay to ensure text contrast while keeping mountains vivid */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/40 dark:from-slate-950/95 dark:via-slate-950/85 dark:to-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-slate-950" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* LEFT COLUMN: HERO HEADLINE & CTAS */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Badge: Make Better Choices */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/90 dark:bg-emerald-950/90 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 text-xs font-semibold shadow-xs">
                <span>Make Better Choices</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.12] text-slate-900 dark:text-white">
                Compare Products. <br />
                <span className="text-emerald-700 dark:text-emerald-400">
                  Choose a Greener Tomorrow.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-xl leading-relaxed font-normal">
                Compare everyday products based on their environmental impact and make sustainable choices for a better planet.
              </p>

              {/* Action Buttons: Start Comparing & Learn More */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={handleStartComparing}
                  className="px-5 py-2.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-sm hover:shadow transition-all cursor-pointer"
                >
                  <span>Start Comparing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setActiveView('education')}
                  className="px-4 py-2.5 rounded-lg bg-white/95 dark:bg-slate-900/95 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-all cursor-pointer"
                >
                  <span>Learn More</span>
                  <Play className="w-3.5 h-3.5 fill-slate-800 dark:fill-slate-200" />
                </button>
              </div>

              {/* Stats Row: 3 White Pill Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 max-w-lg">
                
                {/* 1000+ Products Compared */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/80 dark:border-slate-800 shadow-xs backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center shrink-0">
                    <Leaf className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-900 dark:text-white leading-tight">1000+</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight">Products Compared</div>
                  </div>
                </div>

                {/* 50K+ Conscious Users */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/80 dark:border-slate-800 shadow-xs backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-900 dark:text-white leading-tight">50K+</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight">Conscious Users</div>
                  </div>
                </div>

                {/* 30% Avg. Lower Impact */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/80 dark:border-slate-800 shadow-xs backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center shrink-0">
                    <PieChart className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-900 dark:text-white leading-tight">30%</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight">Avg. Lower Impact</div>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT COLUMN: HERO FLOATING "COMPARE PRODUCTS" WIDGET (EXACTLY AS IN SCREENSHOT) */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 dark:bg-slate-900/95 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xl p-5 sm:p-6 backdrop-blur-md">
                
                {/* Header of Compare Box */}
                <div className="flex items-start justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center shrink-0 text-emerald-700 dark:text-emerald-400 mt-0.5">
                      <Leaf className="w-4 h-4 fill-emerald-600" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-slate-900 dark:text-white">Compare Products</h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Select 2-3 products to compare their environmental impact</p>
                    </div>
                  </div>

                  {/* Badge: Sustainable Choices Brighter Future */}
                  <div className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-semibold border border-emerald-200/60 shrink-0">
                    <Leaf className="w-2.5 h-2.5" />
                    <span>Sustainable Choices</span>
                  </div>
                </div>

                {/* 3 Product Selector Slots with Visual Bottle Renderings */}
                <div className="grid grid-cols-3 gap-3 my-5">
                  
                  {/* Slot 1: Stainless Steel Water Bottle */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex flex-col items-center text-center">
                    <div className="h-20 w-12 flex items-center justify-center mb-2">
                      {/* Stainless Steel Bottle Render */}
                      <svg viewBox="0 0 40 100" className="w-full h-full drop-shadow-xs">
                        {/* Cap */}
                        <rect x="14" y="5" width="12" height="10" rx="2" fill="#475569" />
                        <rect x="16" y="2" width="8" height="4" rx="1" fill="#94a3b8" />
                        {/* Neck */}
                        <rect x="15" y="15" width="10" height="8" fill="#1e3a8a" />
                        {/* Body */}
                        <rect x="10" y="23" width="20" height="70" rx="5" fill="#1e3a8a" />
                        {/* Metallic reflection highlights */}
                        <path d="M12 28 L15 28 L15 90 L12 90 Z" fill="#60a5fa" opacity="0.4" />
                        <rect x="17" y="50" width="6" height="1.5" rx="0.5" fill="#93c5fd" opacity="0.8" />
                      </svg>
                    </div>
                    <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 line-clamp-2 leading-tight">
                      Stainless Steel Water Bottle
                    </div>
                    <ChevronDown className="w-3 h-3 text-slate-400 mt-1" />
                  </div>

                  {/* Slot 2: Plastic Water Bottle */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex flex-col items-center text-center">
                    <div className="h-20 w-12 flex items-center justify-center mb-2">
                      {/* Single Use Plastic Bottle Render */}
                      <svg viewBox="0 0 40 100" className="w-full h-full drop-shadow-xs">
                        {/* Cap */}
                        <rect x="15" y="6" width="10" height="6" rx="1" fill="#38bdf8" />
                        {/* Neck */}
                        <rect x="16" y="12" width="8" height="6" fill="#bae6fd" opacity="0.8" />
                        {/* Body with ridges */}
                        <rect x="11" y="18" width="18" height="74" rx="4" fill="#7dd3fc" opacity="0.55" stroke="#38bdf8" strokeWidth="1" />
                        <line x1="12" y1="35" x2="28" y2="35" stroke="#0284c7" strokeWidth="1" opacity="0.5" />
                        <line x1="12" y1="50" x2="28" y2="50" stroke="#0284c7" strokeWidth="1" opacity="0.5" />
                        <line x1="12" y1="65" x2="28" y2="65" stroke="#0284c7" strokeWidth="1" opacity="0.5" />
                        <rect x="11" y="42" width="18" height="14" fill="#ffffff" opacity="0.6" />
                      </svg>
                    </div>
                    <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 line-clamp-2 leading-tight">
                      Plastic Water Bottle
                    </div>
                    <ChevronDown className="w-3 h-3 text-slate-400 mt-1" />
                  </div>

                  {/* Slot 3: Glass Water Bottle */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex flex-col items-center text-center">
                    <div className="h-20 w-12 flex items-center justify-center mb-2">
                      {/* Glass Water Bottle Render */}
                      <svg viewBox="0 0 40 100" className="w-full h-full drop-shadow-xs">
                        {/* Wooden / White Cap */}
                        <rect x="14" y="6" width="12" height="7" rx="1.5" fill="#d97706" />
                        {/* Glass Neck */}
                        <rect x="16" y="13" width="8" height="8" fill="#e2e8f0" opacity="0.7" />
                        {/* Glass Body */}
                        <rect x="10" y="21" width="20" height="72" rx="6" fill="#f1f5f9" opacity="0.75" stroke="#94a3b8" strokeWidth="1" />
                        {/* Silicone Sleeve accent */}
                        <rect x="11" y="46" width="18" height="38" rx="2" fill="#cbd5e1" opacity="0.4" />
                        <path d="M13 25 L15 25 L15 88 L13 88 Z" fill="#ffffff" opacity="0.8" />
                      </svg>
                    </div>
                    <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 line-clamp-2 leading-tight">
                      Glass Water Bottle
                    </div>
                    <ChevronDown className="w-3 h-3 text-slate-400 mt-1" />
                  </div>

                </div>

                {/* Compare Now CTA Button */}
                <button
                  onClick={handleHeroCompareClick}
                  className="w-full py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <span>Compare Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. POPULAR CATEGORIES (CLEAN WHITE CARDS - EXACTLY AS IN SCREENSHOT)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & View All */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            Popular Categories
          </h2>
          <button
            onClick={() => setActiveView('explore')}
            className="text-xs font-bold text-slate-500 hover:text-emerald-700 dark:text-slate-400 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* 6 Category Cards in a Responsive Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {popularCategories.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={() => handleCategoryClick(item.category)}
                className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700 transition-all flex items-center gap-3 text-left cursor-pointer group"
              >
                <div className={`w-9 h-9 rounded-lg ${item.iconBg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                  <Icon className={`w-4 h-4 ${item.iconColor}`} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 truncate mt-0.5">
                    {item.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </section>

      {/* =========================================================================
          3. COMPARISON RESULTS SECTION (MATCHING ATTACHED PIC MATRIX & ECO SCORE)
         ========================================================================= */}
      <section id="comparison-results-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div>
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Comparison Results
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Environmental impact comparison of selected products
            </p>
          </div>

          {/* Controls: Dropdowns & Share button */}
          <div className="flex items-center gap-2">
            
            {/* Metric Dropdown */}
            <div className="relative">
              <select 
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="appearance-none pl-3 pr-7 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 cursor-pointer shadow-2xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="Environmental Impact">Environmental Impact</option>
                <option value="Lifecycle Emissions">Lifecycle Emissions</option>
                <option value="Circular Economy">Circular Economy</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-2.5 pointer-events-none" />
            </div>

            {/* Unit Dropdown */}
            <div className="relative">
              <select 
                value={selectedUnit}
                onChange={(e) => setSelectedUnit(e.target.value)}
                className="appearance-none pl-3 pr-7 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 cursor-pointer shadow-2xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="kg CO₂">kg CO₂</option>
                <option value="g CO₂">g CO₂</option>
                <option value="Points">Eco Points</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-2.5 pointer-events-none" />
            </div>

            {/* Share Button */}
            <button
              onClick={handleShareClick}
              className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-1.5 cursor-pointer shadow-2xs transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedShare ? 'Copied!' : 'Share'}</span>
            </button>

          </div>
        </div>

        {/* Main Comparison Card (White, Clean, Divided into Matrix + Eco Score) */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-md p-5 sm:p-6 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT / CENTER: COMPARISON MATRIX (9 COLS) */}
            <div className="lg:col-span-8 overflow-x-auto">
              <div className="min-w-[540px]">
                
                {/* Table Header: Product Renders & Names */}
                <div className="grid grid-cols-4 gap-4 pb-4 border-b border-slate-100 dark:border-slate-800 items-end">
                  
                  {/* Parameter column title */}
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Parameters
                  </div>

                  {/* Product 1: Stainless Steel Bottle */}
                  <div className="flex flex-col items-center text-center">
                    <div className="h-14 w-8 mb-1.5 flex items-center justify-center">
                      <svg viewBox="0 0 40 100" className="w-full h-full">
                        <rect x="14" y="5" width="12" height="10" rx="2" fill="#334155" />
                        <rect x="15" y="15" width="10" height="8" fill="#1e3a8a" />
                        <rect x="10" y="23" width="20" height="70" rx="5" fill="#1e3a8a" />
                        <path d="M12 28 L15 28 L15 90 L12 90 Z" fill="#60a5fa" opacity="0.4" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                      Stainless Steel Bottle
                    </span>
                  </div>

                  {/* Product 2: Plastic Bottle */}
                  <div className="flex flex-col items-center text-center">
                    <div className="h-14 w-8 mb-1.5 flex items-center justify-center">
                      <svg viewBox="0 0 40 100" className="w-full h-full">
                        <rect x="15" y="6" width="10" height="6" rx="1" fill="#38bdf8" />
                        <rect x="11" y="18" width="18" height="74" rx="4" fill="#7dd3fc" opacity="0.6" stroke="#38bdf8" strokeWidth="1" />
                        <line x1="12" y1="40" x2="28" y2="40" stroke="#0284c7" strokeWidth="1" opacity="0.5" />
                        <line x1="12" y1="60" x2="28" y2="60" stroke="#0284c7" strokeWidth="1" opacity="0.5" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                      Plastic Bottle
                    </span>
                  </div>

                  {/* Product 3: Glass Bottle */}
                  <div className="flex flex-col items-center text-center">
                    <div className="h-14 w-8 mb-1.5 flex items-center justify-center">
                      <svg viewBox="0 0 40 100" className="w-full h-full">
                        <rect x="14" y="6" width="12" height="7" rx="1.5" fill="#d97706" />
                        <rect x="10" y="21" width="20" height="72" rx="6" fill="#f1f5f9" opacity="0.75" stroke="#94a3b8" strokeWidth="1" />
                        <rect x="11" y="46" width="18" height="38" rx="2" fill="#cbd5e1" opacity="0.4" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                      Glass Bottle
                    </span>
                  </div>

                </div>

                {/* PARAMETER ROWS */}
                <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                  
                  {/* 1. Carbon Footprint (kg CO2) */}
                  <div className="grid grid-cols-4 gap-4 py-3.5 items-center">
                    <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                      <Sun className="w-4 h-4 text-emerald-600" />
                      <span>Carbon Footprint <span className="text-[10px] text-slate-400 block sm:inline">(kg CO₂)</span></span>
                    </div>

                    {/* Col 1: 1.2 kg (Green bar) */}
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white mb-1">1.2</div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-600 h-full rounded-full" style={{ width: '30%' }} />
                      </div>
                    </div>

                    {/* Col 2: 2.8 kg (Red/Coral bar) */}
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white mb-1">2.8</div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-rose-400 h-full rounded-full" style={{ width: '85%' }} />
                      </div>
                    </div>

                    {/* Col 3: 1.6 kg (Amber bar) */}
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white mb-1">1.6</div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-400 h-full rounded-full" style={{ width: '45%' }} />
                      </div>
                    </div>
                  </div>

                  {/* 2. Water Usage (Litres) */}
                  <div className="grid grid-cols-4 gap-4 py-3.5 items-center">
                    <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                      <Droplets className="w-4 h-4 text-teal-600" />
                      <span>Water Usage <span className="text-[10px] text-slate-400 block sm:inline">(Litres)</span></span>
                    </div>

                    {/* Col 1: 6 L */}
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white mb-1">6</div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-600 h-full rounded-full" style={{ width: '35%' }} />
                      </div>
                    </div>

                    {/* Col 2: 12 L */}
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white mb-1">12</div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-rose-400 h-full rounded-full" style={{ width: '80%' }} />
                      </div>
                    </div>

                    {/* Col 3: 8 L */}
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white mb-1">8</div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-400 h-full rounded-full" style={{ width: '50%' }} />
                      </div>
                    </div>
                  </div>

                  {/* 3. Recyclability (%) */}
                  <div className="grid grid-cols-4 gap-4 py-3.5 items-center">
                    <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                      <RefreshCw className="w-4 h-4 text-emerald-600" />
                      <span>Recyclability <span className="text-[10px] text-slate-400 block sm:inline">(%)</span></span>
                    </div>

                    {/* Col 1: 90% */}
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white mb-1">90</div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-600 h-full rounded-full" style={{ width: '90%' }} />
                      </div>
                    </div>

                    {/* Col 2: 40% */}
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white mb-1">40</div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-rose-400 h-full rounded-full" style={{ width: '40%' }} />
                      </div>
                    </div>

                    {/* Col 3: 80% */}
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white mb-1">80</div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-400 h-full rounded-full" style={{ width: '80%' }} />
                      </div>
                    </div>
                  </div>

                  {/* 4. Average Lifespan (Years) */}
                  <div className="grid grid-cols-4 gap-4 py-3.5 items-center">
                    <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      <span>Average Lifespan <span className="text-[10px] text-slate-400 block sm:inline">(Years)</span></span>
                    </div>

                    {/* Col 1: 5 Years */}
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white mb-1">5</div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-600 h-full rounded-full" style={{ width: '95%' }} />
                      </div>
                    </div>

                    {/* Col 2: 1 Year */}
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white mb-1">1</div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-rose-400 h-full rounded-full" style={{ width: '20%' }} />
                      </div>
                    </div>

                    {/* Col 3: 3 Years */}
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white mb-1">3</div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-400 h-full rounded-full" style={{ width: '60%' }} />
                      </div>
                    </div>
                  </div>

                  {/* 5. Packaging Impact (Low is better) */}
                  <div className="grid grid-cols-4 gap-4 py-3.5 items-center">
                    <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                      <Box className="w-4 h-4 text-emerald-600" />
                      <span>Packaging Impact <span className="text-[10px] text-slate-400 block sm:inline">(Low is better)</span></span>
                    </div>

                    {/* Col 1: Low */}
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded font-bold text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                        Low
                      </span>
                    </div>

                    {/* Col 2: High */}
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded font-bold text-xs bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
                        High
                      </span>
                    </div>

                    {/* Col 3: Medium */}
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded font-bold text-xs bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                        Medium
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* RIGHT PANEL: ECO SCORE RINGS & RECOMMENDED CHOICE (4 COLS) */}
            <div className="lg:col-span-4 bg-slate-50/70 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-6">
              
              <div>
                {/* Eco Score Title */}
                <div className="flex items-center gap-2 mb-4">
                  <Leaf className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">Eco Score</h3>
                </div>

                {/* 3 Circular Score Rings Row */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  
                  {/* Gauge 1: 87/100 Stainless Steel Bottle */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e2e8f0"
                          strokeWidth="3.5"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#15803d"
                          strokeWidth="3.5"
                          strokeDasharray="87, 100"
                        />
                      </svg>
                      <div className="absolute text-xs font-black text-emerald-700 dark:text-emerald-400">
                        87
                      </div>
                    </div>
                    <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1 leading-tight line-clamp-1">
                      Stainless Steel Bottle
                    </div>
                    <span className="mt-1 px-1.5 py-0.2 rounded-full text-[9px] font-extrabold bg-emerald-700 text-white">
                      Best Choice
                    </span>
                  </div>

                  {/* Gauge 2: 58/100 Plastic Bottle */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e2e8f0"
                          strokeWidth="3.5"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#ea580c"
                          strokeWidth="3.5"
                          strokeDasharray="58, 100"
                        />
                      </svg>
                      <div className="absolute text-xs font-black text-orange-600 dark:text-orange-400">
                        58
                      </div>
                    </div>
                    <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1 leading-tight line-clamp-1">
                      Plastic Bottle
                    </div>
                  </div>

                  {/* Gauge 3: 72/100 Glass Bottle */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e2e8f0"
                          strokeWidth="3.5"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#ca8a04"
                          strokeWidth="3.5"
                          strokeDasharray="72, 100"
                        />
                      </svg>
                      <div className="absolute text-xs font-black text-amber-600 dark:text-amber-400">
                        72
                      </div>
                    </div>
                    <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1 leading-tight line-clamp-1">
                      Glass Bottle
                    </div>
                  </div>

                </div>
              </div>

              {/* Recommended Choice Callout Box */}
              <div className="p-3.5 rounded-xl bg-emerald-50/90 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800 text-left">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300 mb-1">
                  <Leaf className="w-3.5 h-3.5 fill-emerald-600" />
                  <span>Recommended Choice</span>
                </div>
                <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>Stainless Steel Bottle</strong> has the lowest environmental impact over its lifetime, with higher recyclability and longer lifespan.
                </p>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          4. FEATURED PRODUCTS CATALOG PREVIEW (6 CLEAN WHITE CARDS)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
              Verified Sustainable Products
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
              Top-Scoring Catalog Picks
            </h2>
          </div>

          <button
            onClick={() => setActiveView('explore')}
            className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
          >
            <span>View All {products.length} Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {featuredProducts.map((product) => (
            <div key={product.id} className="h-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setActiveView('explore')}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
          >
            <span>Explore Full Catalog ({products.length} Products)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </section>

      {/* =========================================================================
          5. 4-STEP HOW GREEN IS YOUR CHOICE ARCHITECTURE (ROUNDED WHITE CARDS)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
            System Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
            How Green Is Your Choice?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
            Our 4-step framework takes raw supply chain metrics and transforms them into intuitive purchasing decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
            <span className="text-2xl font-black text-emerald-700/40 font-mono">01</span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-2">Select Products</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
              Search or browse our verified catalog across categories and pick 2 to 4 everyday items to evaluate.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
            <span className="text-2xl font-black text-emerald-700/40 font-mono">02</span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-2">Compare Sustainability</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
              Review side-by-side carbon emissions (kg CO₂e), water footprints, recyclability, and durability indicators.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
            <span className="text-2xl font-black text-emerald-700/40 font-mono">03</span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-2">Understand the Impact</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
              Deconstruct the Green Score into 7 weighted dimensions and review our automated Greenwashing Check analysis.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
            <span className="text-2xl font-black text-emerald-700/40 font-mono">04</span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-2">Choose the Greener Option</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
              Use our priority weighting engine (Price vs Environment) to generate tailored smart purchase recommendations.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
