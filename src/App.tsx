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

function AppContent() {
  const { activeView } = useApp();

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
