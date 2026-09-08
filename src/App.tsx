/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MoreFeaturesSection } from './components/MoreFeaturesSection';
import { DownloadSection } from './components/DownloadSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  // Modal states

  // Handlers

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      {/* Top sticky navigation bar */}
      <Navbar />
      <main id="main-content">
        <Hero />
        {/* Feature 1: Live Classes with Expert Nepali Traders */}
        {/* Feature 2: Copy Trading Expert Nepali Traders */}
        {/* Feature 3: Real-Time Buy & Sell Signals */}
        {/* Feature 4: Virtual Paper Trading Simulator with NPR 10,00,000 */}
        {/* Feature 5: And Much More (Broker 58 flow, TMS webhooks, Sector rotation, Dividend tracker) */}
        <MoreFeaturesSection />
        {/* Real Testimonials from Nepali retail and pro investors */}
        <TestimonialsSection />
        {/* Software Download Section */}
        <DownloadSection />
        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>
      {/* Footer & SEBON Regulatory Disclaimers */}
      <Footer />
    </div>
  );
}
