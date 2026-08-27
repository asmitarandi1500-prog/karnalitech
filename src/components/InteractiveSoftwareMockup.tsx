import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Sliders, 
  Zap, 
  Bell, 
  Shield, 
  Layers, 
  Maximize2, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight,
  Sparkles,
  BarChart3,
  Flame
} from 'lucide-react';
import { STOCKS_DATA } from '../data/mockData';

interface InteractiveSoftwareMockupProps {
  onOpenDownload: () => void;
}

export const InteractiveSoftwareMockup: React.FC<InteractiveSoftwareMockupProps> = ({ 
  onOpenDownload 
}) => {
  const [selectedStock, setSelectedStock] = useState(STOCKS_DATA[2]); // SHIVM default
  const [timeframe, setTimeframe] = useState<'1D' | '1W' | '1M'>('1D');
  const [activeIndicators, setActiveIndicators] = useState<string[]>(['Supertrend', 'RSI', 'Volume', 'Broker 58 Flow']);
  const [activeTab, setActiveTab] = useState<'chart' | 'floorsheet' | 'depth'>('chart');

  const toggleIndicator = (ind: string) => {
    if (activeIndicators.includes(ind)) {
      setActiveIndicators(activeIndicators.filter(i => i !== ind));
    } else {
      setActiveIndicators([...activeIndicators, ind]);
    }
  };

  // Sample floor sheet rows for the active stock
  const floorSheetData = [
    { id: 'TX-9482', buyer: 'Broker 58', seller: 'Broker 49', qty: 1500, rate: selectedStock.ltp, time: '14:28:12', tag: 'Smart Accumulation' },
    { id: 'TX-9481', buyer: 'Broker 58', seller: 'Broker 34', qty: 3200, rate: selectedStock.ltp, time: '14:27:55', tag: 'Block Order' },
    { id: 'TX-9480', buyer: 'Broker 45', seller: 'Broker 19', qty: 850, rate: selectedStock.ltp - 1, time: '14:26:40', tag: 'Retail Buy' },
    { id: 'TX-9479', buyer: 'Broker 38', seller: 'Broker 58', qty: 500, rate: selectedStock.ltp - 1, time: '14:25:10', tag: 'Profit Booking' },
    { id: 'TX-9478', buyer: 'Broker 58', seller: 'Broker 28', qty: 4500, rate: selectedStock.ltp - 2, time: '14:24:02', tag: 'Circuit Driver' },
  ];

  // Market depth
  const marketDepth = {
    buyers: [
      { orders: 8, qty: 14200, price: selectedStock.ltp },
      { orders: 12, qty: 28500, price: selectedStock.ltp - 1 },
      { orders: 19, qty: 41000, price: selectedStock.ltp - 2 },
      { orders: 25, qty: 62000, price: selectedStock.ltp - 3 },
      { orders: 31, qty: 89000, price: selectedStock.ltp - 4 },
    ],
    sellers: [
      { orders: 4, qty: 6500, price: selectedStock.ltp + 1 },
      { orders: 7, qty: 11200, price: selectedStock.ltp + 2 },
      { orders: 15, qty: 24000, price: selectedStock.ltp + 3 },
      { orders: 22, qty: 38000, price: selectedStock.ltp + 4 },
      { orders: 29, qty: 51000, price: selectedStock.ltp + 5 },
    ]
  };

  return (
    <div className="w-full rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden backdrop-blur-xl transition-all">
      {/* Terminal Title Bar */}
      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-mono font-semibold text-slate-500 flex items-center gap-2">
            <span className="text-emerald-600 font-bold uppercase tracking-wider">EXPERT NEPSE v4.8</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-600 font-mono text-[11px]">Kathmandu Market Node</span>
          </span>
        </div>

        {/* Live Signal Toast inside Terminal */}
        <div className="flex items-center space-x-2">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-full text-xs font-mono text-emerald-600">
            <Zap className="w-3 h-3 text-emerald-600" />
            <span>ALGO SIGNAL: {selectedStock.signal} ({selectedStock.signalConfidence}%)</span>
          </div>
          <button 
            onClick={onOpenDownload}
            className="hidden md:flex items-center space-x-1 text-xs font-mono bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1 rounded-full transition-colors border border-slate-200"
          >
            <Sparkles className="w-3 h-3 text-emerald-600" />
            <span>Get the App</span>
          </button>
        </div>
      </div>

      {/* Stock Ticker Tab Selector */}
      <div className="bg-slate-50/80 px-4 py-2 border-b border-slate-200 flex items-center space-x-2 overflow-x-auto">
        {STOCKS_DATA.slice(0, 6).map((stk) => {
          const isSelected = selectedStock.symbol === stk.symbol;
          const isUp = stk.change >= 0;
          return (
            <button
              key={stk.symbol}
              onClick={() => setSelectedStock(stk)}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap ${
                isSelected
                  ? 'bg-emerald-100 text-emerald-700 border border-emerald-400 shadow-sm font-bold'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100 border border-transparent'
              }`}
            >
              <span className="font-bold">{stk.symbol}</span>
              <span className="font-mono-num text-slate-600">
                रु {stk.ltp}
              </span>
              <span className={`text-[11px] font-mono-num ${isUp ? 'text-emerald-600' : 'text-rose-600'}`}>
                {isUp ? '+' : ''}{stk.changePercent}%
              </span>
            </button>
          );
        })}
      </div>

      {/* Stock Details & Indicator Toolbar */}
      <div className="p-4 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center space-x-2.5">
            <h4 className="text-lg font-serif font-bold text-slate-900">{selectedStock.name}</h4>
            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono border border-slate-200">
              {selectedStock.symbol}
            </span>
            <span className="text-xs bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-0.5 rounded font-mono">
              {selectedStock.sector}
            </span>
          </div>
          <div className="flex items-center space-x-4 mt-1 text-xs text-slate-500 font-mono-num">
            <span>LTP: <strong className="text-slate-900 text-sm">रु {selectedStock.ltp.toLocaleString()}</strong></span>
            <span>Day Range: <strong>रु {selectedStock.ltp - 14} - रु {selectedStock.ltp + 12}</strong></span>
            <span>Turnover: <strong className="text-slate-700">{selectedStock.turnover}</strong></span>
            <span>RSI (14): <strong className="text-emerald-600">{selectedStock.rsi}</strong></span>
          </div>
        </div>

        {/* Timeframe & Indicators */}
        <div className="flex items-center space-x-2">
          <div className="flex bg-slate-50 p-0.5 rounded-full border border-slate-200">
            {(['1D', '1W', '1M'] as const).map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-3 py-1 text-xs font-mono font-bold rounded-full transition-colors ${
                  timeframe === tf
                    ? 'bg-emerald-500 text-black'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center space-x-1">
            {['Supertrend', 'Broker 58 Flow', 'RSI'].map((ind) => (
              <button
                key={ind}
                onClick={() => toggleIndicator(ind)}
                className={`px-2.5 py-1 text-[11px] font-mono rounded-full border transition-all ${
                  activeIndicators.includes(ind)
                    ? 'bg-emerald-100 border-emerald-300 text-emerald-700 font-semibold'
                    : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-700'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Terminal View Tabs: Chart vs Floor Sheet vs Depth */}
      <div className="px-4 pt-2 border-b border-slate-200 flex space-x-6 text-xs font-mono uppercase tracking-wider">
        <button
          onClick={() => setActiveTab('chart')}
          className={`pb-2 border-b-2 flex items-center space-x-1.5 transition-colors ${
            activeTab === 'chart'
              ? 'border-emerald-500 text-emerald-600 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Candlestick Chart</span>
        </button>
        <button
          onClick={() => setActiveTab('floorsheet')}
          className={`pb-2 border-b-2 flex items-center space-x-1.5 transition-colors ${
            activeTab === 'floorsheet'
              ? 'border-emerald-500 text-emerald-600 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          <span>Floor Sheet Tape</span>
        </button>
        <button
          onClick={() => setActiveTab('depth')}
          className={`pb-2 border-b-2 flex items-center space-x-1.5 transition-colors ${
            activeTab === 'depth'
              ? 'border-emerald-500 text-emerald-600 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>5-Level Market Depth</span>
        </button>
      </div>

      {/* Main Interactive Screen Content */}
      <div className="p-4 min-h-[340px] bg-slate-50/60">
        {activeTab === 'chart' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Chart Canvas Area */}
            <div className="lg:col-span-3 bg-slate-50 rounded-xl p-4 border border-slate-200 relative flex flex-col justify-between">
              {/* Buy Signal Indicator Badge Overlay */}
              <div className="absolute top-4 left-4 bg-white/95 border border-emerald-300 rounded-lg p-2.5 shadow-lg backdrop-blur-md z-10 max-w-xs">
                <div className="flex items-center space-x-2 text-emerald-600 font-mono font-bold text-xs">
                  <Flame className="w-4 h-4 text-emerald-600 animate-bounce" />
                  <span>ALGO BUY TRIGGER: {selectedStock.symbol}</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-1">
                  Entry: <strong className="text-slate-900 font-mono-num">रु {selectedStock.ltp - 5}</strong> • Target: <strong className="text-emerald-700 font-mono-num">रु {Math.round(selectedStock.ltp * 1.15)}</strong>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5 font-mono">
                  Stop Loss: रु {Math.round(selectedStock.ltp * 0.94)} (R:R 1:2.8)
                </div>
              </div>

              {/* Dynamic Candlestick Simulation graphic */}
              <div className="h-48 w-full flex items-end justify-between px-2 pt-12 pb-2">
                {[
                  { o: 80, c: 95, h: 105, l: 75, up: true, time: '11:15' },
                  { o: 95, c: 90, h: 100, l: 85, up: false, time: '11:45' },
                  { o: 90, c: 110, h: 118, l: 88, up: true, time: '12:15' },
                  { o: 110, c: 130, h: 135, l: 105, up: true, time: '12:45' },
                  { o: 130, c: 125, h: 132, l: 120, up: false, time: '13:15' },
                  { o: 125, c: 145, h: 150, l: 122, up: true, time: '13:45' },
                  { o: 145, c: 170, h: 178, l: 140, up: true, time: '14:15' },
                  { o: 170, c: 195, h: 200, l: 165, up: true, time: '14:45' },
                ].map((candle, i) => (
                  <div key={i} className="flex flex-col items-center group relative cursor-pointer">
                    {/* Tooltip on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-slate-100 text-[10px] text-slate-700 px-2 py-0.5 rounded shadow border border-slate-200 whitespace-nowrap pointer-events-none z-20 font-mono-num">
                      {candle.time} • रु {selectedStock.ltp - (7 - i) * 6}
                    </div>
                    {/* Candle wick */}
                    <div 
                      className={`w-0.5 ${candle.up ? 'bg-emerald-400' : 'bg-rose-400'}`}
                      style={{ height: `${(candle.h - candle.l) * 0.9}px` }}
                    />
                    {/* Candle body */}
                    <div
                      className={`w-4 sm:w-6 rounded-xs transition-all ${
                        candle.up 
                          ? 'bg-emerald-500 shadow-sm shadow-emerald-500/40' 
                          : 'bg-rose-500 shadow-sm shadow-rose-500/40'
                      }`}
                      style={{ height: `${Math.max(12, Math.abs(candle.c - candle.o) * 1.1)}px` }}
                    />
                    <span className="text-[9px] text-slate-500 mt-1 font-mono-num">{candle.time}</span>
                  </div>
                ))}
              </div>

              {/* Volume bars below chart */}
              <div className="border-t border-slate-200 pt-2 flex items-end justify-between px-2 h-14">
                {[45, 30, 65, 90, 50, 85, 120, 145].map((vol, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div 
                      className={`w-3 sm:w-5 rounded-t-xs ${
                        i >= 5 ? 'bg-emerald-500/70 animate-pulse' : 'bg-slate-300'
                      }`}
                      style={{ height: `${vol * 0.3}px` }}
                    />
                  </div>
                ))}
              </div>
              <div className="text-[10px] text-slate-500 font-mono-num flex justify-between px-2 mt-1">
                <span>Volume: 3,12,000 Shs (+340% Breakout)</span>
                <span>Supertrend: Bullish (Active)</span>
              </div>
            </div>

            {/* Right Signal Breakdown Card */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono uppercase">Signal Confidence</span>
                  <span className="text-xs font-bold text-emerald-600 font-mono-num">{selectedStock.signalConfidence}%</span>
                </div>
                {/* Confidence bar */}
                <div className="w-full bg-slate-100 h-2 rounded-full mt-1.5 overflow-hidden">
                  <div 
                    className="bg-emerald-500 h-full rounded-full transition-all"
                    style={{ width: `${selectedStock.signalConfidence}%` }}
                  />
                </div>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Broker 58 Flow:</span>
                    <span className="text-emerald-600 font-semibold font-mono-num">+1.8L Shares</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Concentration:</span>
                    <span className="text-slate-700 font-semibold font-mono-num">74.2% Buyer Dominance</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Circuit Proximity:</span>
                    <span className="text-amber-600 font-semibold font-mono-num">+6.31% to Circuit</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 space-y-2">
                <button
                  onClick={onOpenDownload}
                  className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold uppercase tracking-wider text-xs rounded-lg transition-all shadow-md shadow-emerald-500/20"
                >
                  Download for Live Signals
                </button>
                <p className="text-[10px] text-center text-slate-500 font-mono">
                  Instant webhook sync to your phone & TMS
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Floor Sheet Tab View */}
        {activeTab === 'floorsheet' && (
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="text-slate-500 border-b border-slate-200 pb-2 font-mono uppercase text-[10px]">
                  <th className="py-2 px-3 font-medium">Tx ID</th>
                  <th className="py-2 px-3 font-medium">Buyer</th>
                  <th className="py-2 px-3 font-medium">Seller</th>
                  <th className="py-2 px-3 font-medium">Qty (Shares)</th>
                  <th className="py-2 px-3 font-medium">Rate (रु)</th>
                  <th className="py-2 px-3 font-medium">Time (NPT)</th>
                  <th className="py-2 px-3 font-medium">Smart Money Tag</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono-num">
                {floorSheetData.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-100 transition-colors">
                    <td className="py-2.5 px-3 text-slate-500 font-mono">{row.id}</td>
                    <td className="py-2.5 px-3 font-semibold text-emerald-600">{row.buyer}</td>
                    <td className="py-2.5 px-3 text-slate-500">{row.seller}</td>
                    <td className="py-2.5 px-3 font-bold text-slate-900">{row.qty.toLocaleString()}</td>
                    <td className="py-2.5 px-3 text-slate-700">रु {row.rate}</td>
                    <td className="py-2.5 px-3 text-slate-500">{row.time}</td>
                    <td className="py-2.5 px-3">
                      <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-mono font-bold">
                        {row.tag}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* 5-Level Market Depth Tab View */}
        {activeTab === 'depth' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Top 5 Buyers */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <div className="flex items-center justify-between pb-2 border-b border-emerald-200 text-xs font-mono font-bold text-emerald-600">
                <span>BUY ORDERS (DEMAND)</span>
                <span>TOTAL: 2,34,700 SHS</span>
              </div>
              <div className="mt-2 space-y-1 text-xs font-mono-num">
                {marketDepth.buyers.map((b, i) => (
                  <div key={i} className="flex justify-between py-1 px-2 rounded bg-slate-50 hover:bg-emerald-100">
                    <span className="text-slate-500">{b.orders} Orders</span>
                    <span className="text-slate-700 font-semibold">{b.qty.toLocaleString()} Shs</span>
                    <span className="text-emerald-600 font-bold">रु {b.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top 5 Sellers */}
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
              <div className="flex items-center justify-between pb-2 border-b border-rose-200 text-xs font-mono font-bold text-rose-600">
                <span>SELL ORDERS (SUPPLY)</span>
                <span>TOTAL: 1,30,700 SHS</span>
              </div>
              <div className="mt-2 space-y-1 text-xs font-mono-num">
                {marketDepth.sellers.map((s, i) => (
                  <div key={i} className="flex justify-between py-1 px-2 rounded bg-slate-50 hover:bg-rose-100">
                    <span className="text-rose-600 font-bold">रु {s.price}</span>
                    <span className="text-slate-700 font-semibold">{s.qty.toLocaleString()} Shs</span>
                    <span className="text-slate-500">{s.orders} Orders</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer bar with direct quick actions */}
      <div className="bg-slate-50 px-4 py-3 border-t border-slate-200 flex items-center justify-between flex-wrap gap-2 text-xs">
        <div className="flex items-center space-x-2 text-slate-500 font-mono text-[11px]">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Real-time NEPSE broker floor feed synchronized</span>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenDownload}
            className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full font-mono text-xs transition-colors border border-slate-200"
          >
            Download Desktop App
          </button>
        </div>
      </div>
    </div>
  );
};
