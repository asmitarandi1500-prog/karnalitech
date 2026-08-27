import React from 'react';
import { 
  Building2, 
  Layers, 
  Coins, 
  Workflow, 
  CalendarDays, 
  Cpu, 
  Sparkles, 
  ShieldAlert, 
  PieChart, 
  Zap,
  ArrowRight
} from 'lucide-react';

interface MoreFeaturesSectionProps {
  onOpenDownload: () => void;
}

export const MoreFeaturesSection: React.FC<MoreFeaturesSectionProps> = ({ 
  onOpenDownload 
}) => {
  const extraFeatures = [
    {
      icon: Building2,
      tag: 'Broker Tracker',
      title: 'Top 58 Broker Flow & Accumulation Intelligence',
      description: 'Track exactly which brokers (Broker 58, 45, 34, 49) are quietly accumulating shares before breakout. Discover who is buying, who is selling, and average buying rates in real time.',
      color: 'from-emerald-500/20 to-teal-500/10',
      border: 'hover:border-emerald-400',
    },
    {
      icon: Workflow,
      tag: 'TMS Automation',
      title: 'Direct TMS Webhook & 1-Click Order Dispatch',
      description: 'Zero manual typing errors. Connect our software webhook with your NEPSE TMS login (Brokers 1 through 58) to execute pre-configured bracket orders and trailing stop-losses instantly.',
      color: 'from-blue-500/20 to-indigo-500/10',
      border: 'hover:border-blue-500/50',
    },
    {
      icon: Coins,
      tag: 'Dividends & Rights',
      title: 'Bonus Share, Right Share & Book Closure Tracker',
      description: 'Stay ahead of AGM declarations. Automated dividend yield calculators, historical payout ratios, and instant calendar alerts for book closures in Bikram Sambat (BS) & AD.',
      color: 'from-amber-500/20 to-yellow-500/10',
      border: 'hover:border-amber-500/50',
    },
    {
      icon: PieChart,
      tag: 'Sector Heatmap',
      title: 'Live NEPSE Sector Rotation Matrix',
      description: 'Visualize where institutional money is flowing in seconds: Hydropower super-cycle, Commercial Banks value surge, Microfinance, Life Insurance, or Manufacturing & Hotels.',
      color: 'from-purple-500/20 to-pink-500/10',
      border: 'hover:border-purple-500/50',
    },
    {
      icon: Cpu,
      tag: 'AI Liquidity Gauge',
      title: 'NRB Monetary Policy & Interbank Rate Impact',
      description: 'Macro analytics built for Nepal. Track CD ratio fluctuations, banking liquidity surplus, remittance inflows, and interest rate cycle forecasts correlated directly with NEPSE index moves.',
      color: 'from-cyan-500/20 to-teal-500/10',
      border: 'hover:border-cyan-500/50',
    },
    {
      icon: ShieldAlert,
      tag: 'Circuit Sentinel',
      title: '+10% & -10% Upper/Lower Circuit Prediction Bot',
      description: 'Detect impending circuit locks 5 to 15 minutes before they happen by analyzing order book velocity, pending ask ratios, and block transaction clusters on the floor sheet.',
      color: 'from-rose-500/20 to-orange-500/10',
      border: 'hover:border-rose-500/50',
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-3">
            <span className="h-[1px] w-6 bg-emerald-500"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-emerald-600">
              COMPLETE ECOSYSTEM
            </span>
            <span className="h-[1px] w-6 bg-emerald-500"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
            Engineered Exclusively for the <br />
            <span className="italic font-serif text-emerald-600 font-normal">
              Nepal Stock Exchange
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            Generic international trading platforms don't understand NEPSE's 58-broker floor sheet, T+2 settlement, 
            or circuit dynamics. Expert NEPSE is tailored from the ground up for Nepali investors.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extraFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-emerald-600 group-hover:border-emerald-300 transition-colors">
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-wider bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono text-[11px]">Included in Download</span>
                  <button
                    onClick={onOpenDownload}
                    className="text-emerald-600 hover:text-emerald-700 font-mono text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform uppercase tracking-wider"
                  >
                    Get Feature <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
