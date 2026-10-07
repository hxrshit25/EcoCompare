import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ComparisonHistoryEntry } from '../types';
import { INITIAL_PRODUCTS } from '../data/products';

export type ActiveView = 'home' | 'explore' | 'compare' | 'calculator' | 'dashboard' | 'education' | 'about';

interface AppContextType {
  products: Product[];
  compareIds: string[];
  savedIds: string[];
  comparisonHistory: ComparisonHistoryEntry[];
  activeView: ActiveView;
  selectedProduct: Product | null;
  searchModalOpen: boolean;
  searchQuery: string;
  
  // Actions
  setActiveView: (view: ActiveView) => void;
  setSelectedProduct: (product: Product | null) => void;
  setSearchModalOpen: (open: boolean) => void;
  setSearchQuery: (query: string) => void;
  toggleCompare: (productId: string) => void;
  addToCompare: (productId: string) => void;
  removeFromCompare: (productId: string) => void;
  clearCompare: () => void;
  toggleSaved: (productId: string) => void;
  isSaved: (productId: string) => boolean;
  isInCompare: (productId: string) => boolean;
  recordComparison: (productIds: string[], recommendedId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Compared IDs (2 to 4)
  const [compareIds, setCompareIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ecocompare_compare_ids') || localStorage.getItem('greencompare_compare_ids');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn(e);
    }
    return ['fairphone-5', 'framework-laptop-13'];
  });

  // Saved / Favorites
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ecocompare_saved_ids') || localStorage.getItem('greencompare_saved_ids');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn(e);
    }
    return ['ethique-shampoo-bar', 'fairphone-5', 'hydro-flask-trail'];
  });

  // History
  const [comparisonHistory, setComparisonHistory] = useState<ComparisonHistoryEntry[]>(() => {
    try {
      const saved = localStorage.getItem('ecocompare_history') || localStorage.getItem('greencompare_history');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn(e);
    }
    return [
      {
        id: 'hist-1',
        timestamp: 'Yesterday at 3:45 PM',
        productIds: ['fairphone-5', 'framework-laptop-13'],
        productNames: ['Fairphone 5 Modular 5G', 'Framework Laptop 13'],
        recommendedProductId: 'fairphone-5'
      },
      {
        id: 'hist-2',
        timestamp: '3 days ago',
        productIds: ['ethique-shampoo-bar', 'bite-toothpaste-bits'],
        productNames: ['Heali Kiwi Shampoo Bar', 'Bite Toothpaste Bits'],
        recommendedProductId: 'ethique-shampoo-bar'
      }
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem('ecocompare_compare_ids', JSON.stringify(compareIds));
    } catch (e) {
      console.warn(e);
    }
  }, [compareIds]);

  useEffect(() => {
    try {
      localStorage.setItem('ecocompare_saved_ids', JSON.stringify(savedIds));
    } catch (e) {
      console.warn(e);
    }
  }, [savedIds]);

  useEffect(() => {
    try {
      localStorage.setItem('ecocompare_history', JSON.stringify(comparisonHistory));
    } catch (e) {
      console.warn(e);
    }
  }, [comparisonHistory]);

  const toggleCompare = (id: string) => {
    if (compareIds.includes(id)) {
      setCompareIds(prev => prev.filter(item => item !== id));
    } else {
      if (compareIds.length >= 4) {
        alert('You can compare a maximum of 4 products side-by-side.');
        return;
      }
      setCompareIds(prev => [...prev, id]);
    }
  };

  const addToCompare = (id: string) => {
    if (!compareIds.includes(id) && compareIds.length < 4) {
      setCompareIds(prev => [...prev, id]);
    }
  };

  const removeFromCompare = (id: string) => {
    setCompareIds(prev => prev.filter(item => item !== id));
  };

  const clearCompare = () => {
    setCompareIds([]);
  };

  const toggleSaved = (id: string) => {
    setSavedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isSaved = (id: string) => savedIds.includes(id);
  const isInCompare = (id: string) => compareIds.includes(id);

  const recordComparison = (ids: string[], recommendedId: string) => {
    const matchedProducts = products.filter(p => ids.includes(p.id));
    const newEntry: ComparisonHistoryEntry = {
      id: `hist-${Date.now()}`,
      timestamp: 'Just now',
      productIds: ids,
      productNames: matchedProducts.map(p => p.name),
      recommendedProductId: recommendedId
    };
    setComparisonHistory(prev => [newEntry, ...prev.slice(0, 9)]);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        compareIds,
        savedIds,
        comparisonHistory,
        activeView,
        selectedProduct,
        searchModalOpen,
        searchQuery,
        setActiveView,
        setSelectedProduct,
        setSearchModalOpen,
        setSearchQuery,
        toggleCompare,
        addToCompare,
        removeFromCompare,
        clearCompare,
        toggleSaved,
        isSaved,
        isInCompare,
        recordComparison
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
