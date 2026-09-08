import React from 'react';
import { Download } from 'lucide-react';
import { DOWNLOAD_URL } from '../config';

interface FooterProps {
  onOpenDownload?: () => void;
}

const logoUrl = new URL('../../photo_2026-09-08_15-19-52-removebg-preview.png', import.meta.url).href;

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="site-footer">
      {/* Main Footer Links */}
      <div className="container">
        <div className="footer-main">
          {/* Brand Col */}
          <div className="footer-brand">
            <a href="#" className="brand" aria-label="Karnali Technology home">
              <span className="brand-mark"><img src={logoUrl} alt="" loading="lazy" /></span>
              <span className="brand-name"><strong>Karnali</strong><small>TECHNOLOGY</small></span>
            </a>
            <p>Your Tech Partner.</p>
            <p>Tools for learning, analysis, and informed decisions. Explore the features in our Windows software.</p>
          </div>

          {/* Col 2: Key Features */}
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#features">Features</a>
            <a href="#why-karnali">Why Karnali</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQ</a>
          </nav>

          {/* Col 3: Downloads */}
          <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="button button-primary">
            <Download size={17} aria-hidden="true" />
            <span>Download</span>
          </a>
          {/* Col 4: Market Disclaimer */}
        </div>

        {/* Regulatory & Risk Disclaimer */}
        <p className="risk-note">
          <strong>Market risk notice:</strong> Stock investments and trading in the Nepal Stock Exchange (NEPSE) involve market risk.
          Past performance, copy trading, and algorithmic signals do not guarantee future returns.
          Karnali Technology software does not replace independent judgment. Consider your financial circumstances and consult a qualified financial advisor before trading with real money.
        </p>

        {/* Copyright */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Karnali Technology.</span>
          <span>Your Tech Partner.</span>
        </div>
      </div>
    </footer>
  );
};
