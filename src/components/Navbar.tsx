import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useTheme } from '../context/ThemeContext';
import { 
  Scale, 
  Search, 
  Bookmark, 
  Sun, 
  Moon, 
  Leaf, 
  Calculator, 
  BarChart3,
  Menu,
  X,
  User
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { activeView, setActiveView, compareIds, savedIds, setSearchModalOpen, setSearchQuery } = useApp();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navSearchInput, setNavSearchInput] = useState('');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'compare', label: 'Compare', badge: compareIds.length },
    { id: 'explore', label: 'Categories' },
    { id: 'education', label: 'Learn' },
    { id: 'about', label: 'About' },
  ] as const;

  const handleNavClick = (view: typeof activeView) => {
    setActiveView(view);
    setMobileMenuOpen(false);
  };

  const handleNavSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (navSearchInput.trim()) {
      setSearchQuery(navSearchInput.trim());
      setActiveView('explore');
    } else {
      setSearchModalOpen(true);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-950/95 border-b border-slate-200/80 dark:border-slate-800 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Brand (Leaf icon + EcoCompare exactly as in reference pic) */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 text-left group focus:outline-none cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-emerald-700 dark:text-emerald-400 group-hover:scale-105 transition-transform duration-200">
                <Leaf className="w-6 h-6 fill-emerald-600 dark:fill-emerald-500 text-emerald-700 dark:text-emerald-400 transform -rotate-12" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                EcoCompare
              </span>
            </button>
          </div>

          {/* Desktop Nav Links (Home, Compare, Categories, Learn, About) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeView === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 relative cursor-pointer ${
                    isActive
                      ? 'text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50/70 dark:bg-emerald-950/50'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                >
                  <span>{item.label}</span>
                  {'badge' in item && typeof item.badge === 'number' && item.badge > 0 && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full font-black bg-emerald-600 text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Quick Tools: Calculator & Dashboard */}
            <button
              onClick={() => handleNavClick('calculator')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeView === 'calculator'
                  ? 'text-emerald-700 font-bold'
                  : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
              title="Carbon Savings Calculator"
            >
              Calculator
            </button>
            <button
              onClick={() => handleNavClick('dashboard')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeView === 'dashboard'
                  ? 'text-emerald-700 font-bold'
                  : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
              title="Impact Dashboard"
            >
              Dashboard
            </button>
          </nav>

          {/* Right Action Bar (Search bar, User avatar, Theme & Saved) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Search Input Pill (Matching reference pic: "Search products, brands...") */}
            <form onSubmit={handleNavSearch} className="relative hidden sm:flex items-center">
              <input
                type="text"
                placeholder="Search products, brands..."
                value={navSearchInput}
                onChange={(e) => setNavSearchInput(e.target.value)}
                onClick={() => {
                  if (!navSearchInput) setSearchModalOpen(true);
                }}
                className="w-48 lg:w-60 pl-3.5 pr-8 py-1.5 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-950 transition-all"
              />
              <button 
                type="submit" 
                className="absolute right-2.5 text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Search button for small mobile */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="sm:hidden p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300"
              aria-label="Search products"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Saved Drawer Icon */}
            <button
              onClick={() => handleNavClick('dashboard')}
              title="Saved Products"
              className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 transition-all cursor-pointer"
              aria-label="Saved products"
            >
              <Bookmark className="w-4 h-4" />
              {savedIds.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-600 rounded-full" />
              )}
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* User Avatar Circle (matching reference pic) */}
            <button
              onClick={() => handleNavClick('dashboard')}
              title="Account & Impact Profile"
              className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-emerald-500 hover:text-emerald-600 transition-all cursor-pointer"
              aria-label="User profile"
            >
              <User className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-all cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-slate-950/98 backdrop-blur-md px-4 py-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 px-3 py-1">
            Menu
          </div>

          {navItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full px-3 py-2.5 rounded-xl text-left text-sm font-semibold flex items-center justify-between transition-colors ${
                  isActive
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                <span>{item.label}</span>
                {'badge' in item && typeof item.badge === 'number' && item.badge > 0 && (
                  <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-emerald-600 text-white">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2">
            <button
              onClick={() => handleNavClick('calculator')}
              className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 hover:bg-emerald-50 text-center"
            >
              Savings Calculator
            </button>
            <button
              onClick={() => handleNavClick('dashboard')}
              className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 hover:bg-emerald-50 text-center"
            >
              My Dashboard
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
