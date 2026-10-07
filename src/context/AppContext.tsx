import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ProductCategory, ComparisonHistoryEntry } from '../types';
import { INITIAL_PRODUCTS } from '../data/products';

export type ActiveView = 'home' | 'explore' | 'compare' | 'calculator' | 'dashboard' | 'education' | 'about';

export interface ToastNotification {
  id: string;
  message: string;
  type: 'info' | 'success' | 'warning';
}

interface AppContextType {
  products: Product[];
  compareIds: string[];
  savedIds: string[];
  comparisonHistory: ComparisonHistoryEntry[];
  activeView: ActiveView;
  selectedCategory: ProductCategory | 'All';
  selectedProduct: Product | null;
  searchModalOpen: boolean;
  searchQuery: string;
  toast: ToastNotification | null;
  
  // Actions
  setActiveView: (view: ActiveView) => void;
  setSelectedCategory: (category: ProductCategory | 'All') => void;
  setSelectedProduct: (product: Product | null) => void;
  setSearchModalOpen: (open: boolean) => void;
  setSearchQuery: (query: string) => void;
  showToast: (message: string, type?: 'info' | 'success' | 'warning') => void;
  clearToast: () => void;
  toggleCompare: (productId: string) => void;
  addToCompare: (productId: string) => void;
  removeFromCompare: (productId: string) => void;
  clearCompare: () => void;
  toggleSaved: (productId: string) => void;
  isSaved: (productId: string) => boolean;
  isInCompare: (productId: string) => boolean;
  recordComparison: (productIds: string[], recommendedId: string) => void;
  removeHistoryEntry: (id: string) => void;
  clearComparisonHistory: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState<ToastNotification | null>(null);

  // Compared IDs (2 to 4)
  const [compareIds, setCompareIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ecocompare_compare_ids') || localStorage.getItem('greencompare_compare_ids');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to parse compare IDs from localStorage', e);
    }
    return ['fairphone-5', 'framework-laptop-13'];
  });

  // Saved / Favorites
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ecocompare_saved_ids') || localStorage.getItem('greencompare_saved_ids');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to parse saved IDs from localStorage', e);
    }
    return ['ethique-shampoo-bar', 'fairphone-5', 'hydro-flask-trail'];
  });

  // History
  const [comparisonHistory, setComparisonHistory] = useState<ComparisonHistoryEntry[]>(() => {
    try {
      const saved = localStorage.getItem('ecocompare_history') || localStorage.getItem('greencompare_history');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to parse comparison history from localStorage', e);
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
      console.warn('LocalStorage save error', e);
    }
  }, [compareIds]);

  useEffect(() => {
    try {
      localStorage.setItem('ecocompare_saved_ids', JSON.stringify(savedIds));
    } catch (e) {
      console.warn('LocalStorage save error', e);
    }
  }, [savedIds]);

  useEffect(() => {
    try {
      localStorage.setItem('ecocompare_history', JSON.stringify(comparisonHistory));
    } catch (e) {
      console.warn('LocalStorage save error', e);
    }
  }, [comparisonHistory]);

  const showToast = (message: string, type: 'info' | 'success' | 'warning' = 'info') => {
    const id = `toast-${Date.now()}`;
    setToast({ id, message, type });
  };

  const clearToast = () => {
    setToast(null);
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const toggleCompare = (id: string) => {
    if (compareIds.includes(id)) {
      setCompareIds(prev => prev.filter(item => item !== id));
      showToast('Removed from comparison matrix', 'info');
    } else {
      if (compareIds.length >= 4) {
        showToast('Maximum 4 products can be compared side-by-side. Remove one to add another.', 'warning');
        return;
      }
      setCompareIds(prev => [...prev, id]);
      showToast('Added to comparison matrix', 'success');
    }
  };

  const addToCompare = (id: string) => {
    if (compareIds.includes(id)) {
      showToast('Product is already in comparison matrix', 'info');
      return;
    }
    if (compareIds.length >= 4) {
      showToast('Maximum 4 products can be compared side-by-side. Remove one to add another.', 'warning');
      return;
    }
    setCompareIds(prev => [...prev, id]);
    showToast('Added to comparison matrix', 'success');
  };

  const removeFromCompare = (id: string) => {
    setCompareIds(prev => prev.filter(item => item !== id));
    showToast('Removed from comparison matrix', 'info');
  };

  const clearCompare = () => {
    setCompareIds([]);
    showToast('Comparison matrix cleared', 'info');
  };

  const toggleSaved = (id: string) => {
    const alreadySaved = savedIds.includes(id);
    setSavedIds(prev =>
      alreadySaved ? prev.filter(item => item !== id) : [...prev, id]
    );
    showToast(alreadySaved ? 'Removed from saved products' : 'Saved to your sustainable picks', alreadySaved ? 'info' : 'success');
  };

  const isSaved = (id: string) => savedIds.includes(id);
  const isInCompare = (id: string) => compareIds.includes(id);

  const recordComparison = (ids: string[], recommendedId: string) => {
    if (ids.length < 2) return;
    const sortedKey = [...ids].sort().join(',');
    setComparisonHistory(prev => {
      // Avoid duplicate consecutive entries with identical product IDs
      if (prev.length > 0 && [...prev[0].productIds].sort().join(',') === sortedKey) {
        return prev;
      }
      const matchedProducts = products.filter(p => ids.includes(p.id));
      const newEntry: ComparisonHistoryEntry = {
        id: `hist-${Date.now()}`,
        timestamp: 'Just now',
        productIds: ids,
        productNames: matchedProducts.map(p => p.name),
        recommendedProductId: recommendedId
      };
      return [newEntry, ...prev.slice(0, 19)];
    });
  };

  const removeHistoryEntry = (id: string) => {
    setComparisonHistory(prev => prev.filter(item => item.id !== id));
    showToast('Comparison history entry removed', 'info');
  };

  const clearComparisonHistory = () => {
    setComparisonHistory([]);
    showToast('Comparison history cleared', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        products,
        compareIds,
        savedIds,
        comparisonHistory,
        activeView,
        selectedCategory,
        selectedProduct,
        searchModalOpen,
        searchQuery,
        toast,
        setActiveView,
        setSelectedCategory,
        setSelectedProduct,
        setSearchModalOpen,
        setSearchQuery,
        showToast,
        clearToast,
        toggleCompare,
        addToCompare,
        removeFromCompare,
        clearCompare,
        toggleSaved,
        isSaved,
        isInCompare,
        recordComparison,
        removeHistoryEntry,
        clearComparisonHistory
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
