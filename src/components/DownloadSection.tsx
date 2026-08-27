import React from 'react';
import { 
  Download, 
  Monitor, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Clock
} from 'lucide-react';
import { DOWNLOAD_PLATFORMS } from '../data/mockData';
import { DownloadPlatform } from '../types';

interface DownloadSectionProps {
  onSelectPlatform: (platform: DownloadPlatform) => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ 
  onSelectPlatform 
}) => {
  return (
    <section id="download" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-3">
            <span className="h-[1px] w-6 bg-emerald-500"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-emerald-600">
              SOFTWARE DISTRIBUTION
            </span>
            <span className="h-[1px] w-6 bg-emerald-500"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
            Download Expert NEPSE Software <br />
            <span className="italic font-serif text-emerald-600 font-normal">
              Start Your 15-Day Free Trial Today
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            Available exclusively for Windows 10 / 11. Installs in under 30 seconds. Comes with 15 days of 
            full VIP features unlocked automatically — no payment, credit card, or commitment required.
          </p>
        </div>

        {/* Windows Download Card */}
        <div className="max-w-md mx-auto">
          {DOWNLOAD_PLATFORMS.map((platform) => {
            const Icon = Monitor;
            const isPopular = platform.isPopular;
            return (
              <div
                key={platform.id}
                className={`p-6 sm:p-7 rounded-2xl border flex flex-col justify-between transition-all duration-300 relative group shadow-2xl ${
                  isPopular
                    ? 'bg-white border-emerald-500 ring-1 ring-emerald-300'
                    : 'bg-white/60 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                {/* Popular Pill */}
                {platform.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-black font-extrabold text-[9px] uppercase tracking-widest px-3 py-0.5 rounded-full shadow-md font-mono">
                    {platform.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                      isPopular 
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-300' 
                        : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-600 bg-slate-50 px-2.5 py-0.5 rounded-full border border-slate-200">
                      {platform.fileFormat}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-1">
                    {platform.osName}
                  </h3>
                  <div className="text-xs text-emerald-600 font-mono mb-4">
                    {platform.version}
                  </div>

                  {/* Specs */}
                  <div className="space-y-2 text-xs text-slate-500 font-mono mb-5">
                    <div className="flex items-center space-x-2">
                      <Cpu className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span className="truncate text-[11px]">Req: {platform.minReq}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span className="text-[11px]">{platform.releaseDate}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-slate-200">
                  <button
                    onClick={() => onSelectPlatform(platform)}
                    className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md ${
                      isPopular
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-emerald-500/20'
                        : 'bg-slate-50 hover:bg-slate-200 text-slate-900 border border-slate-200'
                    }`}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download {platform.fileFormat.split(' ')[0]}</span>
                  </button>

                  <div className="text-[10px] font-mono text-center text-slate-500 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>SHA-256 Verified Safe</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Zero Payment Guarantee Bar */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center space-x-3 text-slate-600 text-xs sm:text-sm font-light">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              <strong className="text-slate-900 font-serif">Zero Payment Guarantee:</strong> Downloading the software provides 15 full days of unmetered VIP live signals, live classes, copy trading, and paper trading without asking for payment credentials.
            </span>
          </div>

          <button
            onClick={() => onSelectPlatform(DOWNLOAD_PLATFORMS[0])}
            className="shrink-0 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-colors"
          >
            Download Now
          </button>
        </div>
      </div>
    </section>
  );
};
