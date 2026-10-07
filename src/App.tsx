import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { ProductDetailView } from './views/ProductDetailView';
import { LandingPage } from './views/LandingPage';
import { ExploreView } from './views/ExploreView';
import { CompareView } from './views/CompareView';
import { CalculatorView } from './views/CalculatorView';
import { DashboardView } from './views/DashboardView';
import { EducationView } from './views/EducationView';
import { AboutView } from './views/AboutView';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

function AppContent() {
  const { activeView, toast, clearToast } = useApp();

  return (
    <div className="min-h-screen bg-gray-50/60 dark:bg-slate-950 text-gray-900 dark:text-gray-100 flex flex-col font-sans transition-colors duration-200">
      
      {/* Sticky Top SaaS Navigation */}
      <Navbar />

      {/* Main View Container */}
      <main className="flex-1">
        {activeView === 'home' && <LandingPage />}
        {activeView === 'explore' && <ExploreView />}
        {activeView === 'compare' && <CompareView />}
        {activeView === 'calculator' && <CalculatorView />}
        {activeView === 'dashboard' && <DashboardView />}
        {activeView === 'education' && <EducationView />}
        {activeView === 'about' && <AboutView />}
      </main>

      {/* Global Command/Search Modal */}
      <SearchModal />

      {/* Deep-Dive Product Detail LCA Modal */}
      <ProductDetailView />

      {/* Toast Notification Banner */}
      {toast && (
        <div 
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-in slide-in-from-bottom-4 duration-200"
        >
          <div className={`p-4 rounded-2xl shadow-xl border flex items-start gap-3 backdrop-blur-md ${
            toast.type === 'success'
              ? 'bg-emerald-900/95 text-white border-emerald-700'
              : toast.type === 'warning'
              ? 'bg-amber-900/95 text-white border-amber-700'
              : 'bg-slate-900/95 text-white border-slate-700'
          }`}>
            <div className="shrink-0 mt-0.5">
              {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
              {toast.type === 'warning' && <AlertCircle className="w-5 h-5 text-amber-400" />}
              {toast.type === 'info' && <Info className="w-5 h-5 text-sky-400" />}
            </div>
            <div className="flex-1 text-xs font-semibold leading-relaxed">
              {toast.message}
            </div>
            <button
              onClick={clearToast}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer p-0.5"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ThemeProvider>
  );
}
