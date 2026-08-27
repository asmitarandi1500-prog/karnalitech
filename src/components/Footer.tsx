import React from 'react';
import { TrendingUp, ShieldAlert, Heart, Phone, Mail, MapPin, Download } from 'lucide-react';

interface FooterProps {
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload }) => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-500 text-xs">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full border border-emerald-300 bg-emerald-50 flex items-center justify-center text-emerald-600">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="flex items-baseline space-x-1.5">
                <span className="text-xl font-serif font-bold tracking-tight text-slate-900">EXPERT</span>
                <span className="text-xl font-serif italic text-emerald-600 font-normal">NEPSE</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 max-w-sm leading-relaxed font-light">
              Nepal's premier Windows desktop stock trading software. Empowering Nepali retail investors with 
              live classes, verified copy trading, breakout signals, and virtual paper trading.
            </p>

            <div className="space-y-2 text-xs text-slate-600 font-light">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>New Baneshwor, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-2 font-mono">
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>+977-1-4789020 / +977 9801234567</span>
              </div>
              <div className="flex items-center space-x-2 font-mono">
                <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>support@expertnepse.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Key Features */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-bold text-slate-900 uppercase tracking-widest">Capabilities</h4>
            <ul className="space-y-2 font-light">
              <li><a href="#live-classes" className="hover:text-emerald-600 transition-colors">Daily Live Classes</a></li>
              <li><a href="#copy-trading" className="hover:text-emerald-600 transition-colors">Copy Trading Portfolios</a></li>
              <li><a href="#signals" className="hover:text-emerald-600 transition-colors">Real-Time Buy/Sell Signals</a></li>
              <li><a href="#paper-trading" className="hover:text-emerald-600 transition-colors">Virtual Paper Trading (10L)</a></li>
              <li><a href="#features" className="hover:text-emerald-600 transition-colors">Top 58 Broker Floor Sheet</a></li>
              <li><a href="#features" className="hover:text-emerald-600 transition-colors">Circuit Alert Bot (+10%)</a></li>
            </ul>
          </div>

          {/* Col 3: Downloads */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-bold text-slate-900 uppercase tracking-widest">Distribution</h4>
            <ul className="space-y-2 font-light">
              <li>
                <button onClick={onOpenDownload} className="hover:text-emerald-600 transition-colors text-left">
                  Windows 10/11 (.zip)
                </button>
              </li>
              <li>
                <button onClick={onOpenDownload} className="text-emerald-600 hover:underline font-mono">
                  Download Free (15-Day Trial)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Market Disclaimer */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-bold text-slate-900 uppercase tracking-widest">Trading Hours</h4>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-1.5 text-xs font-mono">
              <div className="text-emerald-600 font-bold">Sun – Thu</div>
              <div className="text-slate-700">11:00 AM - 3:00 PM NPT</div>
              <div className="text-slate-500 text-[10px]">Pre-Open: 10:30 AM - 10:45 AM</div>
              <div className="text-slate-500 text-[10px]">Odd Lot: 2:00 PM - 3:00 PM (Fri)</div>
            </div>
          </div>
        </div>

        {/* Regulatory & Risk Disclaimer */}
        <div className="mt-12 pt-6 border-t border-slate-200 text-[11px] text-slate-500 leading-relaxed space-y-2 font-light">
          <div className="flex items-start space-x-2">
            <ShieldAlert className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-600 font-serif">Regulatory & Market Risk Notice:</strong> Stock investments and trading in the Nepal Stock Exchange (NEPSE) 
              involve market risk. Past performance of master traders or algorithmic signals does not guarantee future returns. 
              Expert NEPSE provides analytical tools, financial mentorship, and market depth software. Users should exercise independent 
              prudence or consult a certified financial advisor before executing trades with real money.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] font-mono gap-2">
          <div>
            © {new Date().getFullYear()} Expert NEPSE Technologies Pvt. Ltd. Kathmandu, Nepal.
          </div>
          <div className="flex items-center space-x-4">
            <a href="#faq" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#faq" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#faq" className="hover:text-slate-600 transition-colors">SEBON Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
