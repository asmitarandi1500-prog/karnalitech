import React from 'react';
import { 
  Download, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  GraduationCap, 
  Radio, 
  LineChart, 
  ArrowRight,
  Monitor,
  Apple,
  Smartphone,
  CheckCircle,
  Play
} from 'lucide-react';
import { InteractiveSoftwareMockup } from './InteractiveSoftwareMockup';

interface HeroProps {
  onOpenDownload: (os?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-slate-50 bg-editorial-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-editorial pointer-events-none -z-10" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 -left-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6 relative">
          
          {/* Editorial Category Eyebrow */}
          <div className="inline-flex items-center space-x-3">
            <span className="h-[1px] w-8 bg-emerald-500/80"></span>
            <span className="text-[11px] font-mono font-bold tracking-[0.3em] uppercase text-emerald-600">
              NEPAL TRADING SOFTWARE STANDARD
            </span>
            <span className="h-[1px] w-8 bg-emerald-500/80"></span>
          </div>

          {/* Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-slate-900 tracking-tight leading-[1.05]">
            Master Nepal's Stock Market. <br className="hidden sm:inline" />
            <span className="italic font-serif text-emerald-600 font-normal">
              Precision. Insight. Yield.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            Join daily <strong className="text-slate-900 font-medium">Live Classes</strong> with veteran Nepali traders, 
            automate portfolio allocation with <strong className="text-slate-900 font-medium">Copy Trading</strong>, 
            receive sub-second <strong className="text-slate-900 font-medium">Buy/Sell Signals</strong>, and simulate trades with 
            <strong className="text-slate-900 font-medium"> NPR 10 Lakh Virtual Capital</strong>.
          </p>

          {/* Editorial CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenDownload()}
              className="w-full sm:w-auto px-9 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-widest rounded-full shadow-xl shadow-emerald-500/20 transform hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2.5"
              id="hero-download-btn"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download Expert NEPSE</span>
            </button>

            <a
              href="#download"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 hover:text-emerald-700 font-bold text-xs uppercase tracking-widest rounded-full border border-slate-300 hover:border-emerald-500 transition-all flex items-center justify-center space-x-2 shadow-lg"
              id="hero-platforms-btn"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>See All Platforms</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>

          {/* Micro Trial Guarantee */}
          <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest pt-1">
            ✓ 15 Days Unrestricted Access • Zero Credit Card • Instant Activation
          </div>

          {/* Supported Platforms */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-500">
            <span className="flex items-center space-x-1.5">
              <Monitor className="w-3.5 h-3.5 text-emerald-600" />
              <span>Windows 10/11 Exclusive</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>SEBON & TMS Compatible</span>
            </span>
          </div>
        </div>

        {/* Feature quick highlight badges - Editorial Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 max-w-5xl mx-auto">
          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center space-x-3.5 hover:border-emerald-300 transition-all">
            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-serif font-bold text-slate-900">Live Masterclasses</h4>
              <p className="text-[11px] text-slate-500 font-sans">Pro CAs & NEPSE Veterans</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center space-x-3.5 hover:border-emerald-300 transition-all">
            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-serif font-bold text-slate-900">Copy Trading</h4>
              <p className="text-[11px] text-slate-500 font-sans">Mirror Top 1% Portfolios</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center space-x-3.5 hover:border-emerald-300 transition-all">
            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-serif font-bold text-slate-900">Buy/Sell Signals</h4>
              <p className="text-[11px] text-slate-500 font-sans">84.6% Verified Accuracy</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center space-x-3.5 hover:border-emerald-300 transition-all">
            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200">
              <LineChart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-serif font-bold text-slate-900">Paper Trading</h4>
              <p className="text-[11px] text-slate-500 font-sans">10 Lakh Virtual Capital</p>
            </div>
          </div>
        </div>

        {/* Interactive Live Software Terminal Interface */}
        <div className="mt-12 sm:mt-16 max-w-6xl mx-auto relative">
          <div className="text-center mb-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-emerald-600">
              • LIVE WORKSPACE SIMULATOR •
            </span>
          </div>
          <InteractiveSoftwareMockup 
            onOpenDownload={() => onOpenDownload()}
          />
        </div>

        {/* Live Social Proof Stats in Editorial Typography */}
        <div className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-slate-900 italic">48,500+</div>
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mt-1">Active Nepali Traders</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-emerald-600 italic">NPR 18.4B+</div>
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mt-1">Volume Tracked</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-slate-900 italic">84.6%</div>
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mt-1">Signal Accuracy</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-emerald-600 italic">58 / 58</div>
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mt-1">Brokers Integrated</div>
          </div>
        </div>
      </div>
    </section>
  );
};
