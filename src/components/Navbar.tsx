import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Download, 
  Sparkles, 
  Menu, 
  X, 
  GraduationCap, 
  Users, 
  Radio, 
  LineChart, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { NEPSE_METRICS } from '../data/mockData';

interface NavbarProps {
  onOpenDownload: (os?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Live Classes', href: '#live-classes', icon: GraduationCap },
    { name: 'Copy Trading', href: '#copy-trading', icon: Users },
    { name: 'Buy/Sell Signals', href: '#signals', icon: Radio },
    { name: 'Paper Trading', href: '#paper-trading', icon: LineChart },
    { name: 'Download', href: '#download', icon: Download },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top micro market status banner */}
      <div className="bg-white border-b border-slate-200 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-600 font-bold">{NEPSE_METRICS.marketStatus}</span>
            </div>
            <span className="text-slate-600">|</span>
            <div className="flex items-center space-x-2 font-mono-num text-[11px]">
              <span className="text-slate-500 tracking-wider">NEPSE INDEX:</span>
              <span className="font-bold text-slate-900">{NEPSE_METRICS.index.toLocaleString()}</span>
              <span className="text-emerald-600 font-semibold flex items-center">
                <TrendingUp className="w-3 h-3 mr-0.5 inline" />
                +{NEPSE_METRICS.change} ({NEPSE_METRICS.changePercent}%)
              </span>
            </div>
            <span className="text-slate-600">|</span>
            <div className="text-slate-500 font-mono-num text-[11px]">
              Turnover: <span className="text-slate-700 font-semibold">NPR {NEPSE_METRICS.turnoverNpr}</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 border border-emerald-300 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              15-Day Trial Active • No Card Required
            </span>
            <span className="text-slate-500 text-[11px] font-mono">Kathmandu, NP</span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-50/95 backdrop-blur-md border-b border-slate-200 shadow-2xl py-3.5' 
            : 'bg-slate-50/80 backdrop-blur-sm border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 p-0.5 flex items-center justify-center group-hover:border-emerald-400 transition-all">
              <TrendingUp className="w-4 h-4 text-emerald-600 transform group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5 leading-none">
                <span className="text-lg font-serif font-black tracking-tight text-slate-900">EXPERT</span>
                <span className="text-lg font-serif italic text-emerald-600">NEPSE</span>
              </div>
              <span className="text-[9px] tracking-[0.25em] text-slate-500 font-mono uppercase mt-1">Terminal Edition</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs uppercase tracking-[0.15em] font-semibold text-slate-600 hover:text-emerald-600 hover:bg-slate-100 rounded-full transition-all"
              >
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* CTA Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => onOpenDownload()}
              className="px-6 py-2.5 text-xs font-black uppercase tracking-wider text-black bg-emerald-500 hover:bg-emerald-400 rounded-full shadow-lg shadow-emerald-500/20 transition-all flex items-center space-x-1.5"
              id="nav-download-btn"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-500 hover:text-slate-900 rounded-lg lg:hidden hover:bg-slate-200"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-slate-50/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-emerald-600 hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="w-full py-2.5 text-center text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 rounded-lg flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Download Expert NEPSE</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
