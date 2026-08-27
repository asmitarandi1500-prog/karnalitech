import React, { useState } from 'react';
import { 
  Radio, 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  Bell, 
  Target, 
  ShieldAlert, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  Send, 
  Flame,
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { BUY_SELL_SIGNALS } from '../data/mockData';
import { BuySellSignal } from '../types';

interface BuySellSignalsSectionProps {
  onOpenDownload: () => void;
}

export const BuySellSignalsSection: React.FC<BuySellSignalsSectionProps> = ({ onOpenDownload }) => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'BUY' | 'SELL'>('ALL');
  const [selectedSignal, setSelectedSignal] = useState<BuySellSignal>(BUY_SELL_SIGNALS[0]);

  const filteredSignals = activeFilter === 'ALL'
    ? BUY_SELL_SIGNALS
    : BUY_SELL_SIGNALS.filter(s => s.action === activeFilter);

  return (
    <section id="signals" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center space-x-3">
              <span className="h-[1px] w-6 bg-emerald-500"></span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-emerald-600">
                QUANTITATIVE INTELLIGENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
              High-Probability <br />
              <span className="italic font-serif text-emerald-600 font-normal">
                NEPSE Buy & Sell Signals
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              Stop chasing stocks near +10% upper circuits. Our quantitative models scan all 240+ NEPSE 
              stocks every second, analyzing Floor Sheet clusters and breakout volume before the crowd enters.
            </p>
          </div>

          {/* Action Filter Pills */}
          <div className="flex items-center space-x-1.5 bg-white p-1.5 rounded-full border border-slate-200 self-start md:self-auto">
            {(['ALL', 'BUY', 'SELL'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all ${
                  activeFilter === filter
                    ? 'bg-emerald-500 text-black font-bold'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {filter === 'ALL' ? 'All Signals' : `${filter} Only`}
              </button>
            ))}
          </div>
        </div>

        {/* Signals Grid & Signal Detail Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Signal Feed Cards */}
          <div className="lg:col-span-7 space-y-4">
            {filteredSignals.map((signal) => {
              const isBuy = signal.action === 'BUY';
              const isSelected = selectedSignal.id === signal.id;
              return (
                <div
                  key={signal.id}
                  onClick={() => setSelectedSignal(signal)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-emerald-500 shadow-2xl ring-1 ring-emerald-300'
                      : 'bg-white/60 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center space-x-3.5">
                      <div className={`p-2.5 rounded-xl border ${
                        isBuy 
                          ? 'bg-emerald-50 text-emerald-600 border-emerald-300' 
                          : 'bg-rose-50 text-rose-600 border-rose-300'
                      }`}>
                        {isBuy ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="text-base font-serif font-bold text-slate-900">{signal.symbol}</h4>
                          <span className="text-xs text-slate-500 font-mono">{signal.companyName}</span>
                          <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                            isBuy ? 'bg-emerald-100 text-emerald-700 border border-emerald-300' : 'bg-rose-100 text-rose-700 border border-rose-300'
                          }`}>
                            {signal.action}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 text-xs text-slate-500 mt-1 font-mono-num">
                          <span className="font-mono">{signal.timeframe}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-slate-500 font-mono">
                            <Clock className="w-3 h-3 text-slate-500" />
                            {signal.timestamp}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                        {signal.confidence}% Confidence
                      </span>
                    </div>
                  </div>

                  {/* Pricing and Levels Grid */}
                  <div className="grid grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-200 font-mono-num text-xs text-center">
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <div className="text-slate-500 text-[10px] font-mono uppercase">Entry</div>
                      <div className="text-slate-900 font-bold">रु {signal.entryPrice}</div>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <div className="text-slate-500 text-[10px] font-mono uppercase">Target 1</div>
                      <div className="text-emerald-600 font-bold">रु {signal.target1}</div>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <div className="text-slate-500 text-[10px] font-mono uppercase">Target 2</div>
                      <div className="text-emerald-700 font-bold">रु {signal.target2}</div>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <div className="text-slate-500 text-[10px] font-mono uppercase">Stop Loss</div>
                      <div className="text-rose-600 font-bold">रु {signal.stopLoss}</div>
                    </div>
                  </div>

                  {/* Broker insight tag */}
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                    <div className="text-[11px] truncate text-slate-600 font-light">
                      <strong className="text-slate-900 font-mono">Smart Flow:</strong> {signal.brokerFlow}
                    </div>
                    {isSelected && (
                      <span className="text-emerald-600 font-mono text-[11px] font-bold shrink-0 ml-2">Selected</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Signal Deep Inspector & Multi-Channel Delivery Mockup */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center space-x-2">
                  <Flame className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-base font-serif font-bold text-slate-900">Signal Breakdown: {selectedSignal.symbol}</h3>
                </div>
                <span className="text-xs bg-emerald-50 text-emerald-600 px-2.5 py-0.5 rounded-full font-mono font-bold border border-emerald-200">
                  R:R {selectedSignal.riskReward}
                </span>
              </div>

              {/* Rationale explanation */}
              <div className="mt-4 space-y-3">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs leading-relaxed text-slate-600 font-light">
                  <div className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5 font-serif text-sm">
                    <Zap className="w-3.5 h-3.5 text-emerald-600" />
                    Algorithmic Trigger Rationale
                  </div>
                  {selectedSignal.rationale}
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2 font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Volume Surge:</span>
                    <span className="text-emerald-600 font-bold font-mono-num">{selectedSignal.volumeSpike}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Target 1 Upside:</span>
                    <span className="text-emerald-600 font-bold font-mono-num">
                      +{Math.round(((selectedSignal.target1 - selectedSignal.entryPrice) / selectedSignal.entryPrice) * 100)}% Potential
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Stop Loss Risk:</span>
                    <span className="text-rose-600 font-bold font-mono-num">
                      -{Math.round(((selectedSignal.entryPrice - selectedSignal.stopLoss) / selectedSignal.entryPrice) * 100)}% Max Drawdown
                    </span>
                  </div>
                </div>
              </div>

              {/* Alert delivery options */}
              <div className="mt-5 pt-4 border-t border-slate-200">
                <div className="text-xs font-mono text-slate-600 mb-3 flex items-center justify-between">
                  <span>Delivered Instantly:</span>
                  <span className="text-emerald-600 text-[11px]">Sub-Second Speed</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex flex-col items-center">
                    <Send className="w-4 h-4 text-emerald-600 mb-1" />
                    <span className="text-[11px] font-mono">Telegram</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex flex-col items-center">
                    <Smartphone className="w-4 h-4 text-emerald-600 mb-1" />
                    <span className="text-[11px] font-mono">Mobile App</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex flex-col items-center">
                    <Bell className="w-4 h-4 text-emerald-600 mb-1" />
                    <span className="text-[11px] font-mono">Desktop</span>
                  </div>
                </div>

                <button
                  onClick={onOpenDownload}
                  className="w-full mt-4 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-widest rounded-full shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center space-x-2"
                >
                  <Radio className="w-4 h-4" />
                  <span>Download to Receive All Live Signals</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
