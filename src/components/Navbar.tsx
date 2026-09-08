import React, { useEffect, useRef, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { DOWNLOAD_URL } from '../config';

interface NavbarProps {
  onOpenDownload?: (os?: string) => void;
}

const logoUrl = new URL('../../photo_2026-09-08_15-19-52-removebg-preview.png', import.meta.url).href;
const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Why Karnali', href: '#why-karnali' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top micro market status banner */}
      {/* Main sticky navigation */}
      <header className="site-header">
        <div className="container nav-inner">
          {/* Logo */}
          <a href="#" className="brand" aria-label="Karnali Technology home" onClick={closeMenu}>
            <span className="brand-mark"><img src={logoUrl} alt="" /></span>
            <span className="brand-name"><strong>Karnali</strong><small>TECHNOLOGY</small></span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>{link.name}</a>
            ))}
          </nav>

          {/* CTA Actions */}
          <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="button button-primary nav-download" id="nav-download-btn" onClick={closeMenu}>
            <Download size={17} aria-hidden="true" />
            <span>Download</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            ref={menuToggleRef}
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="menu-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            title={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation" hidden={!mobileMenuOpen}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.name}</a>
          ))}
          <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="button button-primary" onClick={closeMenu}>
            <Download size={17} aria-hidden="true" />
            <span>Download</span>
          </a>
        </nav>
      </header>
    </>
  );
};
