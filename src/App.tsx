/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LiveTickerBar } from './components/LiveTickerBar';
import { Hero } from './components/Hero';
import { LiveClassesSection } from './components/LiveClassesSection';
import { CopyTradingSection } from './components/CopyTradingSection';
import { BuySellSignalsSection } from './components/BuySellSignalsSection';
import { PaperTradingSection } from './components/PaperTradingSection';
import { MoreFeaturesSection } from './components/MoreFeaturesSection';
import { ComparisonSection } from './components/ComparisonSection';
import { DownloadSection } from './components/DownloadSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { DownloadPlatform } from './types';
import { DOWNLOAD_PLATFORMS } from './data/mockData';
import { Download, ArrowUp } from 'lucide-react';

export default function App() {
  // Modal states
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<DownloadPlatform | null>(null);

  // Handlers
  const handleOpenDownload = (osId?: string) => {
    if (osId) {
      const match = DOWNLOAD_PLATFORMS.find(p => p.id === osId);
      setSelectedPlatform(match || DOWNLOAD_PLATFORMS[0]);
    } else {
      setSelectedPlatform(DOWNLOAD_PLATFORMS[0]);
    }
    setDownloadModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-slate-950 relative">
      {/* Top sticky navigation bar */}
      <Navbar
        onOpenDownload={() => handleOpenDownload()}
      />

      {/* Real-time NEPSE live stock ticker ribbon */}
      <LiveTickerBar />

      <main>
        {/* Hero Section with Interactive Live Software Simulator */}
        <Hero
          onOpenDownload={(os) => handleOpenDownload(os)}
        />

        {/* Feature 1: Live Classes with Expert Nepali Traders */}
        <LiveClassesSection
          onOpenDownload={() => handleOpenDownload()}
        />

        {/* Feature 2: Copy Trading Expert Nepali Traders */}
        <CopyTradingSection
          onOpenDownload={() => handleOpenDownload()}
        />

        {/* Feature 3: Real-Time Buy & Sell Signals */}
        <BuySellSignalsSection
          onOpenDownload={() => handleOpenDownload()}
        />

        {/* Feature 4: Virtual Paper Trading Simulator with NPR 10,00,000 */}
        <PaperTradingSection
          onOpenDownload={() => handleOpenDownload()}
        />

        {/* Feature 5: And Much More (Broker 58 flow, TMS webhooks, Sector rotation, Dividend tracker) */}
        <MoreFeaturesSection
          onOpenDownload={() => handleOpenDownload()}
        />

        {/* Comparison Table: Expert NEPSE vs Free Portals vs Standard TMS */}
        <ComparisonSection />

        {/* Software Download Section */}
        <DownloadSection
          onSelectPlatform={(platform) => {
            setSelectedPlatform(platform);
            setDownloadModalOpen(true);
          }}
        />

        {/* Real Testimonials from Nepali retail and pro investors */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection
          onOpenDownload={() => handleOpenDownload()}
        />
      </main>

      {/* Footer & SEBON Regulatory Disclaimers */}
      <Footer
        onOpenDownload={() => handleOpenDownload()}
      />

      {/* Floating Bottom-Right Quick Action Bar */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center space-x-2">
        <button
          onClick={() => handleOpenDownload()}
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs px-4 py-2.5 rounded-full shadow-xl shadow-emerald-500/30 flex items-center space-x-1.5 transform hover:scale-105 transition-all"
          id="floating-download-pill"
        >
          <Download className="w-4 h-4 text-slate-950" />
          <span>Free Download</span>
        </button>

        <button
          onClick={scrollToTop}
          className="p-2.5 bg-white/90 hover:bg-slate-200 text-slate-600 hover:text-slate-900 rounded-full border border-slate-300 shadow-lg backdrop-blur-md transition-colors"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Interactive Modals */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        platform={selectedPlatform}
      />
    </div>
  );
}
