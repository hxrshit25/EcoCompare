import React from 'react';
import { Product } from '../types';
import { 
  Smartphone, 
  Laptop, 
  BatteryCharging, 
  Sparkles, 
  Droplets, 
  Leaf, 
  RefreshCw, 
  ShieldCheck, 
  Box, 
  Coffee, 
  Shirt, 
  Bike, 
  Zap, 
  Wrench,
  Layers
} from 'lucide-react';

interface ProductVisualProps {
  product: Product;
  className?: string;
  aspectRatio?: 'landscape' | 'square' | 'wide';
}

export const ProductVisual: React.FC<ProductVisualProps> = ({
  product,
  className = '',
  aspectRatio = 'landscape'
}) => {
  const aspectClass = 
    aspectRatio === 'square' ? 'aspect-square' :
    aspectRatio === 'wide' ? 'aspect-[16/9]' : 'aspect-[16/10]';

  // Determine specific product visual render
  const renderProductGraphic = () => {
    const id = product.id.toLowerCase();
    const cat = product.category;
    const name = product.name.toLowerCase();

    // 1. FAIRPHONE / SMARTPHONES
    if (id.includes('fairphone') || name.includes('phone') || name.includes('iphone') || name.includes('samsung')) {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-md">
          {/* Studio Shadow */}
          <ellipse cx="100" cy="180" rx="55" ry="8" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
          
          {/* Phone Body Chassis */}
          <rect x="62" y="24" width="76" height="152" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="2.5" />
          {/* Inner Display Screen */}
          <rect x="65" y="28" width="70" height="144" rx="11" fill="#022c22" />
          {/* Gradient Display Wallpaper */}
          <rect x="66" y="30" width="68" height="140" rx="10" fill="url(#phoneScreenGrad)" />
          
          {/* Punch Hole Camera */}
          <circle cx="100" cy="38" r="3" fill="#0f172a" />
          
          {/* Screen Content Graphic - Circular Eco Wave */}
          <circle cx="100" cy="95" r="24" fill="#059669" opacity="0.3" />
          <circle cx="100" cy="95" r="18" fill="#10b981" opacity="0.5" />
          <path d="M100 83 C108 83, 112 90, 112 97 C112 105, 106 109, 100 109 C94 109, 88 105, 88 97 C88 90, 92 83, 100 83 Z" fill="#ecfdf5" />
          <path d="M100 86 L100 106" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Modular Indicator Dots on Frame */}
          <circle cx="63" cy="50" r="1.5" fill="#10b981" />
          <circle cx="63" cy="70" r="1.5" fill="#10b981" />
          <circle cx="137" cy="58" r="1.5" fill="#10b981" />

          {/* Home indicator pill */}
          <rect x="88" y="162" width="24" height="2.5" rx="1.25" fill="#ffffff" opacity="0.8" />

          <defs>
            <linearGradient id="phoneScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#064e3b" />
              <stop offset="60%" stopColor="#047857" />
              <stop offset="100%" stopColor="#0f766e" />
            </linearGradient>
          </defs>
        </svg>
      );
    }

    // 2. FRAMEWORK LAPTOP / LAPTOPS
    if (id.includes('framework') || name.includes('laptop') || name.includes('macbook') || name.includes('zenbook')) {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-md">
          {/* Studio Shadow */}
          <ellipse cx="100" cy="174" rx="72" ry="7" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
          
          {/* Laptop Lid & Screen */}
          <path d="M42 56 L158 56 L150 134 L50 134 Z" fill="#1e293b" stroke="#475569" strokeWidth="2" />
          {/* Screen Glass */}
          <path d="M46 60 L154 60 L147 130 L53 130 Z" fill="url(#laptopScreenGrad)" />
          
          {/* Web UI on Screen */}
          <circle cx="100" cy="90" r="16" fill="#10b981" opacity="0.3" />
          <path d="M92 90 L98 96 L108 84" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <rect x="75" y="112" width="50" height="4" rx="2" fill="#ecfdf5" opacity="0.7" />
          
          {/* Webcam dot */}
          <circle cx="100" cy="58" r="1.5" fill="#94a3b8" />

          {/* Laptop Base & Keyboard Chassis */}
          <polygon points="32,138 168,138 178,162 22,162" fill="#334155" stroke="#64748b" strokeWidth="1.5" />
          {/* Keyboard Deck */}
          <polygon points="46,140 154,140 158,150 42,150" fill="#0f172a" />
          {/* Trackpad */}
          <rect x="85" y="152" width="30" height="8" rx="1.5" fill="#475569" />

          {/* Modular USB-C Slot Cutouts on sides */}
          <rect x="25" y="148" width="5" height="2" rx="1" fill="#10b981" />
          <rect x="170" y="148" width="5" height="2" rx="1" fill="#10b981" />

          <defs>
            <linearGradient id="laptopScreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#064e3b" />
              <stop offset="100%" stopColor="#022c22" />
            </linearGradient>
          </defs>
        </svg>
      );
    }

    // 3. ECOSOLIX SOLAR POWER BANK
    if (id.includes('solar') || id.includes('power-bank') || name.includes('power bank') || name.includes('charger')) {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-md">
          {/* Studio Shadow */}
          <ellipse cx="100" cy="176" rx="58" ry="7" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
          
          {/* Outer Rugged Shell */}
          <rect x="52" y="38" width="96" height="132" rx="16" fill="#1e293b" stroke="#059669" strokeWidth="2" />
          
          {/* Corner Bumpers */}
          <rect x="49" y="35" width="12" height="12" rx="4" fill="#059669" />
          <rect x="139" y="35" width="12" height="12" rx="4" fill="#059669" />
          <rect x="49" y="155" width="12" height="12" rx="4" fill="#059669" />
          <rect x="139" y="155" width="12" height="12" rx="4" fill="#059669" />

          {/* Solar Monocrystalline Array */}
          <rect x="59" y="46" width="82" height="92" rx="6" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="1" />
          {/* Solar Grid Lines */}
          <line x1="86" y1="46" x2="86" y2="138" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" />
          <line x1="114" y1="46" x2="114" y2="138" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" />
          <line x1="59" y1="69" x2="141" y2="69" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" />
          <line x1="59" y1="92" x2="141" y2="92" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" />
          <line x1="59" y1="115" x2="141" y2="115" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" />

          {/* Status LEDs & USB-C Ports */}
          <circle cx="80" cy="152" r="2.5" fill="#10b981" />
          <circle cx="90" cy="152" r="2.5" fill="#10b981" />
          <circle cx="100" cy="152" r="2.5" fill="#10b981" />
          <circle cx="110" cy="152" r="2.5" fill="#10b981" />
          <circle cx="120" cy="152" r="2.5" fill="#38bdf8" />
        </svg>
      );
    }

    // 4. WATER BOTTLES / REUSABLE DRINKWARE
    if (id.includes('hydro') || id.includes('flask') || name.includes('bottle') || name.includes('cup') || name.includes('flask')) {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-md">
          {/* Studio Shadow */}
          <ellipse cx="100" cy="180" rx="36" ry="6" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
          
          {/* Bottle Body */}
          <rect x="74" y="60" width="52" height="114" rx="12" fill="url(#bottleMetalGrad)" stroke="#0d9488" strokeWidth="1.5" />
          {/* Neck */}
          <rect x="83" y="38" width="34" height="24" rx="4" fill="#0f766e" />
          {/* Cap Handle Loop */}
          <path d="M88 38 C88 22, 112 22, 112 38" fill="none" stroke="#042f2e" strokeWidth="5" strokeLinecap="round" />
          {/* Silicone Grip Ring */}
          <rect x="85" y="44" width="30" height="4" rx="2" fill="#14b8a6" />

          {/* Powder Coat Sheen Line */}
          <line x1="82" y1="68" x2="82" y2="164" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
          
          {/* Eco Embossed Icon */}
          <circle cx="100" cy="112" r="10" fill="#042f2e" opacity="0.3" />
          <path d="M100 106 C104 106, 106 110, 106 114 C106 117, 103 119, 100 119 C97 119, 94 117, 94 114 C94 110, 96 106, 100 106 Z" fill="#ccfbf1" />

          <defs>
            <linearGradient id="bottleMetalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0d9488" />
              <stop offset="35%" stopColor="#2dd4bf" />
              <stop offset="70%" stopColor="#0f766e" />
              <stop offset="100%" stopColor="#115e59" />
            </linearGradient>
          </defs>
        </svg>
      );
    }

    // 5. SHAMPOO BAR / SOAP / BARS
    if (id.includes('shampoo') || id.includes('soap') || name.includes('shampoo') || name.includes('bar')) {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-md">
          {/* Studio Shadow */}
          <ellipse cx="100" cy="172" rx="55" ry="8" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
          
          {/* Bamboo Dish Slats */}
          <rect x="52" y="152" width="96" height="8" rx="3" fill="#b45309" opacity="0.9" />
          <rect x="58" y="146" width="84" height="4" rx="2" fill="#d97706" />
          <rect x="68" y="146" width="3" height="12" fill="#78350f" />
          <rect x="88" y="146" width="3" height="12" fill="#78350f" />
          <rect x="108" y="146" width="3" height="12" fill="#78350f" />
          <rect x="128" y="146" width="3" height="12" fill="#78350f" />

          {/* Organic Solid Shampoo Bar Cake */}
          <rect x="64" y="68" width="72" height="74" rx="24" fill="url(#shampooCakeGrad)" stroke="#10b981" strokeWidth="1.5" />
          {/* Stamped Botanical Leaf Relief */}
          <path d="M100 86 C112 86, 118 96, 118 106 C118 116, 108 122, 100 122 C92 122, 82 116, 82 106 C82 96, 88 86, 100 86 Z" fill="#065f46" opacity="0.25" />
          <path d="M100 90 L100 118" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
          <path d="M100 98 Q108 94, 112 98" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M100 106 Q92 102, 88 106" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" fill="none" />

          {/* Micro lather bubble accents */}
          <circle cx="74" cy="74" r="5" fill="#ffffff" opacity="0.6" />
          <circle cx="122" cy="78" r="4" fill="#ffffff" opacity="0.5" />
          <circle cx="128" cy="70" r="2.5" fill="#ffffff" opacity="0.7" />

          <defs>
            <linearGradient id="shampooCakeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6ee7b7" />
              <stop offset="50%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
        </svg>
      );
    }

    // 6. TOOTHPASTE BITS / ORAL CARE (Glass Jar)
    if (id.includes('toothpaste') || id.includes('bite') || name.includes('toothpaste')) {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-md">
          {/* Studio Shadow */}
          <ellipse cx="100" cy="175" rx="42" ry="7" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
          
          {/* Glass Jar Body (Amber Glass) */}
          <rect x="68" y="66" width="64" height="102" rx="14" fill="url(#amberGlassGrad)" stroke="#78350f" strokeWidth="1.5" />
          
          {/* Aluminum Cap */}
          <rect x="64" y="50" width="72" height="18" rx="4" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="68" y1="58" x2="132" y2="58" stroke="#64748b" strokeWidth="1.5" />
          
          {/* Toothpaste Bits inside jar */}
          <circle cx="86" cy="142" r="5" fill="#ffffff" opacity="0.9" stroke="#cbd5e1" strokeWidth="0.5" />
          <circle cx="100" cy="146" r="5" fill="#ffffff" opacity="0.9" stroke="#cbd5e1" strokeWidth="0.5" />
          <circle cx="114" cy="142" r="5" fill="#ffffff" opacity="0.9" stroke="#cbd5e1" strokeWidth="0.5" />
          <circle cx="92" cy="132" r="5" fill="#ffffff" opacity="0.9" stroke="#cbd5e1" strokeWidth="0.5" />
          <circle cx="106" cy="134" r="5" fill="#ffffff" opacity="0.9" stroke="#cbd5e1" strokeWidth="0.5" />
          <circle cx="84" cy="120" r="5" fill="#ffffff" opacity="0.9" stroke="#cbd5e1" strokeWidth="0.5" />
          <circle cx="100" cy="122" r="5" fill="#ffffff" opacity="0.9" stroke="#cbd5e1" strokeWidth="0.5" />
          <circle cx="116" cy="120" r="5" fill="#ffffff" opacity="0.9" stroke="#cbd5e1" strokeWidth="0.5" />

          {/* Kraft Paper Label on Jar */}
          <rect x="74" y="82" width="52" height="28" rx="3" fill="#fef3c7" stroke="#d97706" strokeWidth="0.8" />
          <rect x="80" y="88" width="40" height="3" rx="1.5" fill="#b45309" />
          <rect x="84" y="95" width="32" height="2" rx="1" fill="#92400e" opacity="0.8" />
          <rect x="88" y="101" width="24" height="2" rx="1" fill="#15803d" />

          <defs>
            <linearGradient id="amberGlassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#78350f" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#b45309" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#451a03" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>
      );
    }

    // 7. REFILLABLE DEODORANT
    if (id.includes('deodorant') || id.includes('wild') || name.includes('deodorant')) {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-md">
          {/* Studio Shadow */}
          <ellipse cx="100" cy="178" rx="38" ry="6" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
          
          {/* Aluminum Outer Tube */}
          <rect x="74" y="54" width="52" height="118" rx="10" fill="url(#deodAlumGrad)" stroke="#0d9488" strokeWidth="1.5" />
          {/* Cap Seam */}
          <line x1="74" y1="96" x2="126" y2="96" stroke="#134e4a" strokeWidth="2" />
          
          {/* Refill Base Turn Mechanism */}
          <rect x="78" y="158" width="44" height="12" rx="4" fill="#115e59" />
          <line x1="84" y1="164" x2="116" y2="164" stroke="#2dd4bf" strokeWidth="1" />
          
          {/* Brand Minimalist Leaf Logo */}
          <circle cx="100" cy="126" r="10" fill="#042f2e" opacity="0.3" />
          <path d="M100 120 C105 120, 107 124, 107 127 C107 131, 104 133, 100 133 C96 133, 93 131, 93 127 C93 124, 95 120, 100 120 Z" fill="#ccfbf1" />

          <defs>
            <linearGradient id="deodAlumGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0f766e" />
              <stop offset="40%" stopColor="#14b8a6" />
              <stop offset="70%" stopColor="#2dd4bf" />
              <stop offset="100%" stopColor="#0f766e" />
            </linearGradient>
          </defs>
        </svg>
      );
    }

    // 8. LOMI SMART COMPOSTER / APPLIANCES
    if (id.includes('lomi') || id.includes('composter') || name.includes('compost')) {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-md">
          {/* Studio Shadow */}
          <ellipse cx="100" cy="174" rx="58" ry="8" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
          
          {/* Composter Cylinder Housing */}
          <rect x="54" y="56" width="92" height="110" rx="20" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          {/* Charcoal Lid Rim */}
          <rect x="52" y="46" width="96" height="18" rx="8" fill="#334155" />
          {/* Top Handle Slot */}
          <rect x="84" y="40" width="32" height="8" rx="4" fill="#1e293b" />

          {/* Front Illuminated LED Status Ring */}
          <circle cx="100" cy="112" r="22" fill="#0f172a" />
          <circle cx="100" cy="112" r="18" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="80 20" />
          <path d="M100 102 C105 102, 108 106, 108 111 C108 116, 104 119, 100 119 C96 119, 92 116, 92 111 C92 106, 95 102, 100 102 Z" fill="#34d399" />
          
          {/* Modern Vent Louvers */}
          <line x1="78" y1="148" x2="122" y2="148" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
          <line x1="84" y1="154" x2="116" y2="154" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }

    // 9. STASHER SILICONE STORAGE BAGS
    if (id.includes('stasher') || id.includes('silicone') || name.includes('storage') || name.includes('pouch')) {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-md">
          {/* Studio Shadow */}
          <ellipse cx="100" cy="175" rx="55" ry="7" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
          
          {/* Silicone Bag Body */}
          <path d="M54 54 C54 48, 146 48, 146 54 L142 162 C142 168, 58 168, 58 162 Z" fill="url(#stasherSiliconeGrad)" stroke="#059669" strokeWidth="2" opacity="0.85" />
          
          {/* Pinch-Loc Top Seal Ribs */}
          <rect x="52" y="44" width="96" height="12" rx="4" fill="#047857" />
          <line x1="56" y1="50" x2="144" y2="50" stroke="#a7f3d0" strokeWidth="2" strokeLinecap="round" />
          
          {/* Volume Markings */}
          <line x1="68" y1="84" x2="78" y2="84" stroke="#ffffff" strokeWidth="2" opacity="0.7" />
          <line x1="68" y1="104" x2="84" y2="104" stroke="#ffffff" strokeWidth="2" opacity="0.7" />
          <line x1="68" y1="124" x2="78" y2="124" stroke="#ffffff" strokeWidth="2" opacity="0.7" />
          <line x1="68" y1="144" x2="88" y2="144" stroke="#ffffff" strokeWidth="2" opacity="0.7" />

          {/* Platinum Silicone Leaf Seal */}
          <circle cx="112" cy="114" r="14" fill="#ffffff" opacity="0.3" />
          <path d="M112 105 C118 105, 122 109, 122 115 C122 120, 117 123, 112 123 C107 123, 102 120, 102 115 C102 109, 106 105, 112 105 Z" fill="#ffffff" opacity="0.8" />

          <defs>
            <linearGradient id="stasherSiliconeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#34d399" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.85" />
            </linearGradient>
          </defs>
        </svg>
      );
    }

    // 10. BLUELAND ECO CLEANING SPRAY KIT
    if (id.includes('blueland') || id.includes('cleaning') || name.includes('cleaning') || name.includes('spray') || cat === 'Cleaning & Household') {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-md">
          {/* Studio Shadow */}
          <ellipse cx="100" cy="180" rx="38" ry="6" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
          
          {/* Forever Spray Bottle Clear Body */}
          <path d="M78 86 L122 86 L126 168 C126 174, 74 174, 74 168 Z" fill="url(#bluelandWaterGrad)" stroke="#0284c7" strokeWidth="1.5" />
          
          {/* Bottle Neck & Trigger Spray Head */}
          <rect x="91" y="66" width="18" height="20" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
          <path d="M84 46 L118 46 L128 54 L128 66 L82 66 Z" fill="#0284c7" />
          {/* Spray Nozzle */}
          <rect x="72" y="52" width="12" height="8" rx="2" fill="#0369a1" />
          {/* Ergonomic Trigger Lever */}
          <path d="M86 66 Q80 82, 86 92" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* Effervescent Dissolving Cleaning Tablet at bottom */}
          <circle cx="100" cy="156" r="8" fill="#fde047" stroke="#eab308" strokeWidth="1.5" />
          {/* Fizz Bubbles rising */}
          <circle cx="96" cy="138" r="2.5" fill="#ffffff" opacity="0.8" />
          <circle cx="104" cy="128" r="2" fill="#ffffff" opacity="0.8" />
          <circle cx="98" cy="116" r="3" fill="#ffffff" opacity="0.7" />
          <circle cx="106" cy="104" r="2.5" fill="#ffffff" opacity="0.8" />

          <defs>
            <linearGradient id="bluelandWaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#bae6fd" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.85" />
            </linearGradient>
          </defs>
        </svg>
      );
    }

    // 11. REGENERATIVE OAT MILK / BEVERAGES
    if (id.includes('oat-milk') || id.includes('milk') || name.includes('oat') || name.includes('milk')) {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-md">
          {/* Studio Shadow */}
          <ellipse cx="100" cy="178" rx="42" ry="7" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
          
          {/* Beverage Carton Gable Top */}
          <polygon points="72,66 128,66 120,44 80,44" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Cap */}
          <rect x="92" y="38" width="16" height="8" rx="3" fill="#059669" />
          
          {/* Carton Rectangular Body */}
          <rect x="72" y="66" width="56" height="106" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
          
          {/* Modern Minimalist Oat Branding */}
          <rect x="72" y="82" width="56" height="38" fill="#ecfdf5" />
          <path d="M100 88 C94 92, 94 98, 100 102 C106 98, 106 92, 100 88 Z" fill="#10b981" />
          <path d="M100 94 C96 98, 96 104, 100 108 C104 104, 104 98, 100 94 Z" fill="#059669" />
          <line x1="100" y1="88" x2="100" y2="114" stroke="#047857" strokeWidth="1.5" />

          {/* Typography Graphic Lines */}
          <rect x="80" y="132" width="40" height="4" rx="2" fill="#0f172a" />
          <rect x="84" y="140" width="32" height="2.5" rx="1.25" fill="#64748b" />
          <rect x="88" y="148" width="24" height="2.5" rx="1.25" fill="#059669" />
        </svg>
      );
    }

    // 12. SPECIALTY ORGANIC COFFEE POUCH
    if (id.includes('coffee') || name.includes('coffee') || name.includes('tea')) {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-md">
          {/* Studio Shadow */}
          <ellipse cx="100" cy="178" rx="46" ry="7" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
          
          {/* Kraft Coffee Pouch Body */}
          <path d="M68 56 L132 56 L128 170 C128 172, 72 172, 72 170 Z" fill="#b45309" stroke="#78350f" strokeWidth="1.5" />
          {/* Heat Seal Top */}
          <rect x="66" y="46" width="68" height="12" rx="2" fill="#92400e" stroke="#78350f" strokeWidth="1" />
          <line x1="68" y1="52" x2="132" y2="52" stroke="#d97706" strokeWidth="1" strokeDasharray="3 2" />

          {/* Degassing Aroma Valve */}
          <circle cx="100" cy="74" r="4.5" fill="#78350f" />
          <circle cx="100" cy="74" r="2" fill="#d97706" />

          {/* Clean Roasted Coffee Bean Badge */}
          <rect x="76" y="92" width="48" height="52" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
          <circle cx="100" cy="112" r="12" fill="#78350f" />
          <path d="M96 104 Q100 112, 104 120" stroke="#fef3c7" strokeWidth="2" strokeLinecap="round" fill="none" />
          
          <rect x="82" y="132" width="36" height="3" rx="1.5" fill="#78350f" />
          <rect x="86" y="138" width="28" height="2" rx="1" fill="#15803d" />
        </svg>
      );
    }

    // 13. STONE PAPER JOURNAL / STATIONERY
    if (id.includes('journal') || id.includes('notebook') || name.includes('journal') || name.includes('book')) {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-md">
          {/* Studio Shadow */}
          <ellipse cx="100" cy="176" rx="55" ry="8" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
          
          {/* Hardcover Journal (Isometric Angle) */}
          <rect x="58" y="44" width="84" height="124" rx="8" fill="#334155" stroke="#1e293b" strokeWidth="2" />
          {/* Paper Pages Rim */}
          <rect x="62" y="46" width="6" height="120" fill="#f8fafc" />
          
          {/* Ribbon Bookmark */}
          <path d="M110 44 L110 178 L114 172 L118 178 L118 44 Z" fill="#10b981" />

          {/* Minimalist Blind Debossed Line Title */}
          <rect x="78" y="86" width="44" height="4" rx="2" fill="#64748b" />
          <rect x="84" y="96" width="32" height="3" rx="1.5" fill="#64748b" />
          <circle cx="100" cy="124" r="8" fill="none" stroke="#10b981" strokeWidth="1.5" />
        </svg>
      );
    }

    // 14. PLANTABLE SEED PENCILS
    if (id.includes('pencil') || name.includes('pencil')) {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-md">
          {/* Studio Shadow */}
          <ellipse cx="100" cy="178" rx="48" ry="6" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
          
          {/* Three Tilted Pencils */}
          {/* Center Pencil */}
          <polygon points="97,162 103,162 100,172" fill="#0f172a" />
          <polygon points="96,148 104,148 100,162" fill="#fde68a" />
          <rect x="96" y="52" width="8" height="96" fill="#d97706" stroke="#92400e" strokeWidth="0.5" />
          {/* Seed Capsule */}
          <rect x="95" y="38" width="10" height="16" rx="5" fill="#10b981" stroke="#059669" strokeWidth="1" />
          {/* Tiny Sprout Leaf */}
          <path d="M100 38 Q106 32, 108 26 Q100 28, 100 38" fill="#34d399" />

          {/* Left Pencil */}
          <rect x="80" y="58" width="8" height="90" fill="#0d9488" rx="1" />
          <rect x="79" y="44" width="10" height="16" rx="5" fill="#10b981" />

          {/* Right Pencil */}
          <rect x="112" y="58" width="8" height="90" fill="#0284c7" rx="1" />
          <rect x="111" y="44" width="10" height="16" rx="5" fill="#10b981" />
        </svg>
      );
    }

    // 15. COMMUTER BICYCLE / TRANSPORTATION
    if (id.includes('bicycle') || id.includes('bike') || name.includes('bicycle') || name.includes('bike')) {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-md">
          {/* Studio Shadow */}
          <ellipse cx="100" cy="174" rx="72" ry="7" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
          
          {/* Rear Wheel */}
          <circle cx="56" cy="136" r="28" fill="none" stroke="#334155" strokeWidth="4" />
          <circle cx="56" cy="136" r="24" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="56" cy="136" r="4" fill="#0f172a" />

          {/* Front Wheel */}
          <circle cx="144" cy="136" r="28" fill="none" stroke="#334155" strokeWidth="4" />
          <circle cx="144" cy="136" r="24" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="144" cy="136" r="4" fill="#0f172a" />

          {/* Diamond Frame Tubes (Emerald Anodized) */}
          {/* Bottom Bracket */}
          <circle cx="98" cy="136" r="6" fill="#047857" />
          {/* Chainstay */}
          <line x1="56" y1="136" x2="98" y2="136" stroke="#059669" strokeWidth="3.5" strokeLinecap="round" />
          {/* Seatstay */}
          <line x1="56" y1="136" x2="88" y2="88" stroke="#059669" strokeWidth="3.5" strokeLinecap="round" />
          {/* Seat Tube */}
          <line x1="98" y1="136" x2="88" y2="84" stroke="#059669" strokeWidth="4" strokeLinecap="round" />
          {/* Saddle */}
          <line x1="88" y1="84" x2="88" y2="76" stroke="#475569" strokeWidth="3" />
          <path d="M78 74 L98 74 C98 74, 94 80, 84 80 Z" fill="#0f172a" />
          {/* Down Tube */}
          <line x1="98" y1="136" x2="132" y2="92" stroke="#059669" strokeWidth="4.5" strokeLinecap="round" />
          {/* Top Tube */}
          <line x1="88" y1="88" x2="132" y2="92" stroke="#059669" strokeWidth="3.5" strokeLinecap="round" />
          {/* Fork */}
          <line x1="132" y1="92" x2="144" y2="136" stroke="#059669" strokeWidth="3.5" strokeLinecap="round" />
          {/* Handlebars Stem */}
          <line x1="132" y1="92" x2="128" y2="78" stroke="#475569" strokeWidth="3" />
          <path d="M122 76 Q128 72, 134 76" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" fill="none" />
          
          {/* Gates Carbon Belt Drive */}
          <ellipse cx="77" cy="136" rx="22" ry="7" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="3 2" />
        </svg>
      );
    }

    // 16. ATHER ELECTRIC SCOOTER / EV
    if (id.includes('ather') || id.includes('ev') || id.includes('scooter') || name.includes('scooter')) {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-md">
          {/* Studio Shadow */}
          <ellipse cx="100" cy="174" rx="72" ry="7" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
          
          {/* Rear Wheel */}
          <circle cx="58" cy="142" r="22" fill="#1e293b" stroke="#334155" strokeWidth="3" />
          <circle cx="58" cy="142" r="8" fill="#059669" />

          {/* Front Wheel */}
          <circle cx="144" cy="142" r="22" fill="#1e293b" stroke="#334155" strokeWidth="3" />
          <circle cx="144" cy="142" r="8" fill="#059669" />

          {/* Scooter Chassis & Floorboard */}
          <path d="M64 136 L116 136 L134 94 L138 68" stroke="#0f172a" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M60 120 C60 106, 88 106, 102 120 L64 120 Z" fill="#059669" />
          
          {/* Handlebar & Digital Dash */}
          <rect x="132" y="62" width="16" height="8" rx="3" fill="#10b981" />
          <line x1="126" y1="64" x2="152" y2="64" stroke="#334155" strokeWidth="4" strokeLinecap="round" />

          {/* LED Headlamp Glow */}
          <polygon points="144,78 178,70 178,92" fill="#10b981" opacity="0.25" />
          <circle cx="142" cy="80" r="4" fill="#34d399" />
        </svg>
      );
    }

    // 17. IFB ECO WASHING MACHINE / APPLIANCES
    if (id.includes('washing') || id.includes('ifb') || name.includes('washing machine')) {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-md">
          {/* Studio Shadow */}
          <ellipse cx="100" cy="176" rx="55" ry="7" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
          
          {/* Washing Machine Unibody */}
          <rect x="56" y="42" width="88" height="126" rx="12" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          
          {/* Control Panel Header */}
          <rect x="56" y="42" width="88" height="28" rx="8" fill="#e2e8f0" />
          <circle cx="100" cy="56" r="8" fill="#334155" stroke="#059669" strokeWidth="2" />
          <rect x="116" y="52" width="20" height="8" rx="2" fill="#0f172a" />
          <rect x="64" y="52" width="18" height="8" rx="2" fill="#cbd5e1" />

          {/* Circular Front Porthole Door */}
          <circle cx="100" cy="116" r="34" fill="#334155" stroke="#64748b" strokeWidth="3" />
          <circle cx="100" cy="116" r="26" fill="url(#washWaterGrad)" />
          {/* Inner Drum Chrome reflection */}
          <ellipse cx="94" cy="110" rx="14" ry="10" fill="#ffffff" opacity="0.3" />

          {/* 5-Star Energy Star Badge */}
          <rect x="120" y="78" width="18" height="14" rx="2" fill="#15803d" />
          <text x="129" y="88" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#ffffff">5★</text>

          <defs>
            <linearGradient id="washWaterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
          </defs>
        </svg>
      );
    }

    // 18. RECYCLED MAILERS / PACKAGING
    if (id.includes('mailer') || id.includes('ecoenclose') || cat === 'Packaging') {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-md">
          {/* Studio Shadow */}
          <ellipse cx="100" cy="176" rx="55" ry="7" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
          
          {/* Kraft Padded Mailer */}
          <rect x="54" y="50" width="92" height="118" rx="8" fill="#d97706" stroke="#b45309" strokeWidth="1.5" />
          {/* Perforated Tear Strip */}
          <line x1="54" y1="74" x2="146" y2="74" stroke="#78350f" strokeWidth="2" strokeDasharray="4 3" />
          {/* Flap Fold */}
          <polygon points="54,50 146,50 100,74" fill="#b45309" />

          {/* 100% Recycled Circular Seal */}
          <circle cx="100" cy="116" r="20" fill="none" stroke="#15803d" strokeWidth="2.5" strokeDasharray="30 8" />
          <path d="M94 116 L98 120 L106 110" stroke="#15803d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <rect x="80" y="142" width="40" height="4" rx="2" fill="#78350f" opacity="0.6" />
        </svg>
      );
    }

    // 19. CLOTHING / APPAREL (ORGANIC DENIM / COTTON / BIO-SNEAKERS)
    if (cat === 'Clothing') {
      if (name.includes('sneaker') || name.includes('shoe')) {
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-md">
            {/* Studio Shadow */}
            <ellipse cx="100" cy="174" rx="60" ry="7" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
            
            {/* Sugarcane Foam Midsole */}
            <path d="M46 142 Q100 138, 154 142 Q158 156, 148 160 Q100 158, 44 160 Q40 148, 46 142 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
            {/* Outsole green tread */}
            <rect x="44" y="158" width="108" height="4" rx="2" fill="#10b981" />

            {/* Knit Upper Body */}
            <path d="M52 142 C56 120, 78 116, 96 116 L124 126 C144 130, 154 136, 152 142 Z" fill="#0f766e" stroke="#115e59" strokeWidth="1.5" />
            {/* Collar Opening */}
            <ellipse cx="88" cy="116" rx="14" ry="6" fill="#042f2e" />
            {/* Natural Laces */}
            <line x1="96" y1="120" x2="114" y2="124" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
            <line x1="98" y1="126" x2="118" y2="130" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          </svg>
        );
      }

      // Folded Organic Denim / Apparel
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-md">
          {/* Studio Shadow */}
          <ellipse cx="100" cy="174" rx="55" ry="8" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
          
          {/* Neatly Folded Organic Denim */}
          <rect x="56" y="74" width="88" height="90" rx="12" fill="#1e3a8a" stroke="#172554" strokeWidth="2" />
          <rect x="52" y="64" width="96" height="24" rx="8" fill="#1e40af" stroke="#1e3a8a" strokeWidth="1.5" />
          
          {/* Golden Contrast Stitching */}
          <line x1="56" y1="84" x2="144" y2="84" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" />
          <line x1="100" y1="88" x2="100" y2="160" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" />
          
          {/* Copper Rivet */}
          <circle cx="62" cy="74" r="3" fill="#b45309" stroke="#d97706" strokeWidth="1" />
          <circle cx="138" cy="74" r="3" fill="#b45309" stroke="#d97706" strokeWidth="1" />

          {/* GOTS Organic Fabric Tag */}
          <rect x="114" y="104" width="32" height="22" rx="3" fill="#ffffff" stroke="#15803d" strokeWidth="1" />
          <circle cx="130" cy="115" r="5" fill="#15803d" />
          <path d="M130 112 L130 118" stroke="#ffffff" strokeWidth="1" />
        </svg>
      );
    }

    // DEFAULT CATEGORY FALLBACK (Clean, crisp eco studio icon)
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full p-6 drop-shadow-md">
        <ellipse cx="100" cy="174" rx="50" ry="7" fill="currentColor" className="text-slate-900/10 dark:text-black/30" />
        <rect x="60" y="56" width="80" height="106" rx="18" fill="url(#defaultBoxGrad)" stroke="#10b981" strokeWidth="1.5" />
        <circle cx="100" cy="106" r="24" fill="#ffffff" opacity="0.2" />
        <path d="M100 92 C110 92, 116 100, 116 108 C116 118, 106 122, 100 122 C94 122, 84 118, 84 108 C84 100, 90 92, 100 92 Z" fill="#ecfdf5" />
        <defs>
          <linearGradient id="defaultBoxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
        </defs>
      </svg>
    );
  };

  return (
    <div className={`relative w-full ${aspectClass} overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 via-slate-100/70 to-slate-200/50 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 flex items-center justify-center border border-slate-200/60 dark:border-slate-800 transition-all duration-300 group-hover:border-emerald-500/40 ${className}`}>
      
      {/* Studio Lighting Highlights */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 dark:from-white/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Ambient Eco Radial Glow */}
      <div className="absolute w-36 h-36 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 blur-2xl pointer-events-none transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-500/20" />
      
      {/* Product Category Watermark Mark */}
      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-white/70 dark:bg-slate-900/80 backdrop-blur-xs text-[10px] font-bold text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800 pointer-events-none select-none tracking-tight">
        {product.subcategory || product.category}
      </div>

      {/* Primary Bespoke Studio Vector Render */}
      <div className="relative z-10 w-full h-full flex items-center justify-center transform transition-transform duration-300 ease-out group-hover:scale-105">
        {renderProductGraphic()}
      </div>

      {/* Studio Floor Reflection Grounding Line */}
      <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-slate-300/20 dark:from-slate-950/40 to-transparent pointer-events-none" />
    </div>
  );
};
