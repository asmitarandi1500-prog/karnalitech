import React, { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  Percent, 
  Calculator, 
  Zap,
  Sliders,
  DollarSign
} from 'lucide-react';
import { COPY_TRADERS } from '../data/mockData';
import { CopyTrader } from '../types';

interface CopyTradingSectionProps {
  onOpenDownload: () => void;
}

export const CopyTradingSection: React.FC<CopyTradingSectionProps> = ({ onOpenDownload }) => {
  const [selectedTrader, setSelectedTrader] = useState<CopyTrader>(COPY_TRADERS[0]);
  const [allocationAmount, setAllocationAmount] = useState<number>(200000); // 2 Lakhs NPR default

  // Calculate estimated returns
  const estimatedMonthlyGain = Math.round(allocationAmount * (selectedTrader.monthlyReturn / 100));
  const estimatedYearlyGain = Math.round(allocationAmount * (selectedTrader.yearlyReturn / 100));
  const projectedTotal = allocationAmount + estimatedYearlyGain;

  return (
    <section id="copy-trading" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-3">
            <span className="h-[1px] w-6 bg-emerald-500"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-emerald-600">
              PORTFOLIO MIRRORING
            </span>
            <span className="h-[1px] w-6 bg-emerald-500"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
            Copy Trade Verified <br />
            <span className="italic font-serif text-emerald-600 font-normal">
              Nepali Market Masters
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            No time to analyze charts all day? Connect your portfolio and automatically replicate 
            the exact buy and sell orders of verified top performers in NEPSE.
          </p>
        </div>

        {/* Master Traders Leaderboard & Interactive Copy Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Trader Selection List */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                Verified Master Traders
              </span>
              <span className="text-xs font-mono text-emerald-600">
                Audited Performance
              </span>
            </div>

            {COPY_TRADERS.map((trader) => {
              const isSelected = selectedTrader.id === trader.id;
              return (
                <div
                  key={trader.id}
                  onClick={() => setSelectedTrader(trader)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-emerald-500 shadow-2xl ring-1 ring-emerald-300'
                      : 'bg-white/60 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center space-x-3.5">
                      <div className="relative">
                        <img
                          src={trader.avatar}
                          alt={trader.name}
                          referrerPolicy="no-referrer"
                          className="w-12 h-12 rounded-full object-cover border border-slate-300"
                        />
                        {trader.verifiedBadge && (
                          <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-0.5 shadow">
                            <CheckCircle2 className="w-3.5 h-3.5 text-black stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="text-base font-serif font-bold text-slate-900">{trader.name}</h4>
                          <span className="text-xs text-slate-500 font-mono">{trader.username}</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 font-light">{trader.primaryStrategy}</p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-base sm:text-lg font-mono font-bold text-emerald-600">
                        +{trader.yearlyReturn}%
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">1-Yr Verified ROI</div>
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-200 text-center font-mono-num text-xs">
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <div className="text-slate-500 text-[10px] uppercase font-mono">Win Rate</div>
                      <div className="text-emerald-600 font-bold">{trader.winRate}%</div>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <div className="text-slate-500 text-[10px] uppercase font-mono">Copiers</div>
                      <div className="text-slate-700 font-bold">{trader.followers.toLocaleString()}</div>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <div className="text-slate-500 text-[10px] uppercase font-mono">AUM</div>
                      <div className="text-slate-900 font-bold">{trader.aum}</div>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <div className="text-slate-500 text-[10px] uppercase font-mono">Risk</div>
                      <div className="text-slate-600 font-semibold text-[11px]">{trader.riskScore.split(' ')[0]}</div>
                    </div>
                  </div>

                  {/* Top Holdings preview */}
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-1.5 text-slate-500 font-mono text-[11px]">
                      <span>Top Picks:</span>
                      <div className="flex space-x-1">
                        {trader.topHoldings.map((h, i) => (
                          <span key={i} className="px-1.5 py-0.5 rounded bg-slate-50 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                    {isSelected && (
                      <span className="text-emerald-600 text-[11px] font-mono font-bold flex items-center">
                        Active in Calculator <ArrowUpRight className="w-3 h-3 ml-0.5" />
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Interactive Copy Simulator Box */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xl sticky top-24">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center space-x-2">
                <Calculator className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base font-serif font-bold text-slate-900">Copy Trade Simulator</h3>
              </div>
              <span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200 font-mono">
                {selectedTrader.name}
              </span>
            </div>

            {/* Slider & Allocation Input */}
            <div className="mt-6 space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono text-slate-600 mb-2">
                  <span>Simulated Capital (NPR):</span>
                  <span className="font-bold text-slate-900 font-mono-num text-sm bg-slate-50 px-3 py-1 rounded border border-slate-200">
                    रु {allocationAmount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  aria-label="Investment Capital Slider"
                  min={25000}
                  max={2000000}
                  step={25000}
                  value={allocationAmount}
                  onChange={(e) => setAllocationAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-50 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono-num mt-1">
                  <span>रु 25,000</span>
                  <span>रु 10,00,000</span>
                  <span>रु 20,00,000</span>
                </div>
              </div>

              {/* Quick Select Preset Pills */}
              <div className="flex gap-2">
                {[50000, 100000, 250000, 500000].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setAllocationAmount(preset)}
                    className={`flex-1 py-1.5 text-xs rounded-full border font-mono-num transition-all ${
                      allocationAmount === preset
                        ? 'bg-emerald-500 text-black font-bold border-emerald-500'
                        : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    रु {preset / 1000}k
                  </button>
                ))}
              </div>

              {/* Calculation Result Cards */}
              <div className="pt-2 space-y-2.5">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
                  <div>
                    <span className="text-xs text-slate-500 font-mono">Projected 1-Month Gain:</span>
                    <div className="text-[11px] text-slate-500 font-light">Based on +{selectedTrader.monthlyReturn}% avg</div>
                  </div>
                  <div className="text-base font-bold text-emerald-600 font-mono-num">
                    +रु {estimatedMonthlyGain.toLocaleString()}
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
                  <div>
                    <span className="text-xs text-slate-500 font-mono">Projected 1-Year Gain:</span>
                    <div className="text-[11px] text-slate-500 font-light">Based on +{selectedTrader.yearlyReturn}% historical</div>
                  </div>
                  <div className="text-lg font-bold text-emerald-600 font-mono-num">
                    +रु {estimatedYearlyGain.toLocaleString()}
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-300 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-serif font-bold text-emerald-700">Total Projected Balance:</span>
                    <div className="text-[10px] text-emerald-600/70 font-mono">Capital + Projected Yield</div>
                  </div>
                  <div className="text-xl font-serif font-bold text-slate-900 font-mono-num italic">
                    रु {projectedTotal.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Safety bullet */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500 space-y-1 font-light">
                <div className="flex items-center space-x-1.5 text-slate-600 font-semibold font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Control in Your Broker TMS</span>
                </div>
                <p>
                  Funds never leave your demat/broker account. Set your own maximum stop-loss limits anytime.
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenDownload}
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-widest rounded-full shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center space-x-2"
                id="copy-trade-cta"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>Download to Copy {selectedTrader.name}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
