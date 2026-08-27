import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'Real-Time Tick-by-Tick NEPSE Feed',
      expert: 'Instant (0-sec delay via direct server sync)',
      generic: '15-20 min delayed',
      tms: 'Frequent freeze during circuit surges',
    },
    {
      feature: 'Live Classes with Expert Nepali Traders',
      expert: 'Daily interactive Q&A + Live trading floor',
      generic: 'None (Only static articles)',
      tms: 'None',
    },
    {
      feature: 'Automated 1-Click Copy Trading',
      expert: 'Verified master trader leaderboard + TMS hook',
      generic: 'No copy trading',
      tms: 'Manual order entry only',
    },
    {
      feature: 'Algorithmic Buy & Sell Signals',
      expert: '84.6% win rate with Stop-Loss & 2 Targets',
      generic: 'Basic delayed RSI indicators',
      tms: 'None',
    },
    {
      feature: 'NPR 10 Lakh Virtual Paper Trading',
      expert: 'Full live market depth simulator included',
      generic: 'No paper trading',
      tms: 'No simulation mode',
    },
    {
      feature: 'Top 58 Broker Flow & Floor Sheet Analyzer',
      expert: 'Real-time Broker 58, 45, 34 cluster detection',
      generic: 'Delayed end-of-day PDF tables',
      tms: 'Raw unformatted text table',
    },
    {
      feature: '15-Day Free Trial without Payment',
      expert: '100% Free with zero credit card needed',
      generic: 'Free with excessive spam ads',
      tms: 'Broker fee on every transaction',
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-3">
            <span className="h-[1px] w-6 bg-emerald-500"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-emerald-600">
              BENCHMARK
            </span>
            <span className="h-[1px] w-6 bg-emerald-500"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
            How Expert NEPSE Compares to <br />
            <span className="italic font-serif text-emerald-600 font-normal">
              Traditional Portals & Broker TMS
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            See why over 48,000 retail traders and institutional fund managers upgraded to Expert NEPSE software.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-4 sm:p-5 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider w-2/5">Capabilities</th>
                <th className="p-4 sm:p-5 text-xs font-mono font-bold text-emerald-600 bg-emerald-50 border-x border-emerald-200 w-1/4">
                  <div className="flex items-center space-x-2">
                    <span className="font-serif text-slate-900 text-sm">Expert NEPSE</span>
                    <span className="text-[9px] bg-emerald-500 text-black px-2 py-0.5 rounded-full font-bold font-mono tracking-wider">#1 CHOICE</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 text-xs font-mono font-medium text-slate-500 uppercase tracking-wider w-1/5">Free Portals</th>
                <th className="p-4 sm:p-5 text-xs font-mono font-medium text-slate-500 uppercase tracking-wider w-1/5">Broker TMS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm font-light">
              {comparisonRows.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-slate-900 font-serif">{row.feature}</td>
                  <td className="p-4 sm:p-5 font-normal text-emerald-700 bg-emerald-50/60 border-x border-emerald-200 flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{row.expert}</span>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500">
                    <div className="flex items-center space-x-1.5">
                      <X className="w-4 h-4 text-slate-600 shrink-0" />
                      <span>{row.generic}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500">
                    <div className="flex items-center space-x-1.5">
                      <X className="w-4 h-4 text-slate-600 shrink-0" />
                      <span>{row.tms}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
