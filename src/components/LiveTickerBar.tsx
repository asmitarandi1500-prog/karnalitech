import React from 'react';
import { TrendingUp, TrendingDown, ArrowUpRight } from 'lucide-react';
import { STOCKS_DATA } from '../data/mockData';

export const LiveTickerBar: React.FC = () => {
  return (
    <div className="bg-white border-y border-slate-200 py-2.5 overflow-hidden relative">
      {/* Subtle fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      <div className="flex items-center space-x-6 animate-marquee whitespace-nowrap">
        {/* Render twice for continuous scroll loop */}
        {[...STOCKS_DATA, ...STOCKS_DATA].map((stock, idx) => {
          const isUp = stock.change >= 0;
          return (
            <div
              key={`${stock.symbol}-${idx}`}
              className="inline-flex items-center space-x-2.5 px-3 py-1 bg-slate-100 rounded-full border border-slate-200 text-xs hover:border-emerald-400 transition-colors"
            >
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-slate-900 font-mono">{stock.symbol}</span>
                <span className="text-[10px] text-slate-500 font-mono">({stock.sector.substring(0, 4)})</span>
              </div>
              <span className="font-mono-num font-semibold text-slate-700">
                रु {stock.ltp.toLocaleString(undefined, { minimumFractionDigits: 1 })}
              </span>
              <span
                className={`font-mono-num font-semibold flex items-center ${
                  isUp ? 'text-emerald-600' : 'text-rose-600'
                }`}
              >
                {isUp ? (
                  <TrendingUp className="w-3 h-3 mr-0.5 inline" />
                ) : (
                  <TrendingDown className="w-3 h-3 mr-0.5 inline" />
                )}
                {isUp ? '+' : ''}
                {stock.changePercent}%
              </span>
              <span
                className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                  stock.signal.includes('BUY')
                    ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                    : stock.signal === 'HOLD'
                    ? 'bg-amber-100 text-amber-700 border border-amber-300'
                    : 'bg-rose-100 text-rose-700 border border-rose-300'
                }`}
              >
                {stock.signal}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
