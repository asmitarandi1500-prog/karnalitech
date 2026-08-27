import React, { useState } from 'react';
import { 
  LineChart, 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  RotateCcw, 
  CheckCircle2, 
  ShieldCheck, 
  ShoppingBag, 
  ArrowRight,
  Info,
  Sparkles
} from 'lucide-react';
import { STOCKS_DATA } from '../data/mockData';
import { StockTicker } from '../types';

interface PaperTradePosition {
  symbol: string;
  name: string;
  qty: number;
  avgBuyPrice: number;
  currentPrice: number;
  investedAmount: number;
  currentValue: number;
  pnl: number;
  pnlPercent: number;
}

interface PaperTradingSectionProps {
  onOpenDownload: () => void;
}

export const PaperTradingSection: React.FC<PaperTradingSectionProps> = ({ 
  onOpenDownload 
}) => {
  const INITIAL_BALANCE = 1000000; // NPR 10 Lakhs
  const [cashBalance, setCashBalance] = useState<number>(845000);
  const [selectedStock, setSelectedStock] = useState<StockTicker>(STOCKS_DATA[0]); // NABIL
  const [orderQty, setOrderQty] = useState<number>(100);
  const [orderType, setOrderType] = useState<'BUY' | 'SELL'>('BUY');
  const [orderSuccessMsg, setOrderSuccessMsg] = useState<string | null>(null);

  // Active simulated positions
  const [positions, setPositions] = useState<PaperTradePosition[]>([
    {
      symbol: 'SHIVM',
      name: 'Shivam Cements Ltd.',
      qty: 200,
      avgBuyPrice: 512,
      currentPrice: 548,
      investedAmount: 102400,
      currentValue: 109600,
      pnl: +7200,
      pnlPercent: +7.03,
    },
    {
      symbol: 'HDL',
      name: 'Himalayan Distillery Ltd.',
      qty: 30,
      avgBuyPrice: 1750,
      currentPrice: 1840,
      investedAmount: 52500,
      currentValue: 55200,
      pnl: +2700,
      pnlPercent: +5.14,
    },
  ]);

  // Compute total portfolio value
  const totalStockValue = positions.reduce((acc, pos) => acc + pos.currentValue, 0);
  const totalNetWorth = cashBalance + totalStockValue;
  const totalPnL = totalNetWorth - INITIAL_BALANCE;
  const totalPnLPercent = ((totalPnL / INITIAL_BALANCE) * 100).toFixed(2);

  // Order costs
  const grossAmount = orderQty * selectedStock.ltp;
  const brokerCommission = grossAmount * 0.0038; // 0.38% broker fee
  const sebonFee = grossAmount * 0.00015; // 0.015% SEBON fee
  const dpCharge = 25; // NPR 25 DP fee
  const netOrderCost = grossAmount + brokerCommission + sebonFee + dpCharge;

  const handleExecuteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderQty <= 0) return;

    if (orderType === 'BUY') {
      if (cashBalance < netOrderCost) {
        alert('Insufficient virtual cash balance for this order.');
        return;
      }

      setCashBalance((prev) => prev - netOrderCost);

      // Add to positions
      const existing = positions.find((p) => p.symbol === selectedStock.symbol);
      if (existing) {
        const totalNewQty = existing.qty + orderQty;
        const totalInvested = existing.investedAmount + grossAmount;
        const newAvg = totalInvested / totalNewQty;
        const newCurrentVal = totalNewQty * selectedStock.ltp;
        const newPnl = newCurrentVal - totalInvested;

        setPositions(
          positions.map((p) =>
            p.symbol === selectedStock.symbol
              ? {
                  ...p,
                  qty: totalNewQty,
                  avgBuyPrice: Math.round(newAvg),
                  investedAmount: Math.round(totalInvested),
                  currentValue: newCurrentVal,
                  pnl: newPnl,
                  pnlPercent: parseFloat(((newPnl / totalInvested) * 100).toFixed(2)),
                }
              : p
          )
        );
      } else {
        const newPos: PaperTradePosition = {
          symbol: selectedStock.symbol,
          name: selectedStock.name,
          qty: orderQty,
          avgBuyPrice: selectedStock.ltp,
          currentPrice: selectedStock.ltp,
          investedAmount: grossAmount,
          currentValue: grossAmount,
          pnl: 0,
          pnlPercent: 0,
        };
        setPositions([...positions, newPos]);
      }

      setOrderSuccessMsg(`Simulated BUY order executed: ${orderQty} shares of ${selectedStock.symbol} at रु ${selectedStock.ltp}`);
      setTimeout(() => setOrderSuccessMsg(null), 4000);
    } else {
      // SELL order
      const existing = positions.find((p) => p.symbol === selectedStock.symbol);
      if (!existing || existing.qty < orderQty) {
        alert(`You only hold ${existing ? existing.qty : 0} shares of ${selectedStock.symbol} in your paper portfolio.`);
        return;
      }

      const netSellProceeds = grossAmount - brokerCommission - sebonFee - dpCharge;
      setCashBalance((prev) => prev + netSellProceeds);

      if (existing.qty === orderQty) {
        setPositions(positions.filter((p) => p.symbol !== selectedStock.symbol));
      } else {
        const remainingQty = existing.qty - orderQty;
        const remainingInvested = (existing.investedAmount / existing.qty) * remainingQty;
        const newCurrentVal = remainingQty * selectedStock.ltp;
        const newPnl = newCurrentVal - remainingInvested;

        setPositions(
          positions.map((p) =>
            p.symbol === selectedStock.symbol
              ? {
                  ...p,
                  qty: remainingQty,
                  investedAmount: Math.round(remainingInvested),
                  currentValue: newCurrentVal,
                  pnl: newPnl,
                  pnlPercent: parseFloat(((newPnl / remainingInvested) * 100).toFixed(2)),
                }
              : p
          )
        );
      }

      setOrderSuccessMsg(`Simulated SELL order executed: ${orderQty} shares of ${selectedStock.symbol} at रु ${selectedStock.ltp}`);
      setTimeout(() => setOrderSuccessMsg(null), 4000);
    }
  };

  const handleReset = () => {
    setCashBalance(INITIAL_BALANCE);
    setPositions([]);
    setOrderSuccessMsg('Paper trading balance reset to NPR 10,00,000');
    setTimeout(() => setOrderSuccessMsg(null), 3000);
  };

  return (
    <section id="paper-trading" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-3">
            <span className="h-[1px] w-6 bg-emerald-500"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-emerald-600">
              SIMULATED EXECUTION
            </span>
            <span className="h-[1px] w-6 bg-emerald-500"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
            Risk-Free Paper Trading with <br />
            <span className="italic font-serif text-emerald-600 font-normal">
              NPR 10,00,000 Virtual Capital
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            Test trading strategies, indicator setups, and signal accuracy without risking a single Rupee. 
            Real NEPSE market depth, brokerage commission calculation, and zero financial risk.
          </p>
        </div>

        {/* Paper Trading Sandbox Dashboard */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xl">
          {/* Top Virtual Account Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-6 border-b border-slate-200">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="text-xs text-slate-500 flex items-center gap-1 font-mono uppercase text-[10px]">
                <Wallet className="w-3.5 h-3.5 text-emerald-600" />
                Virtual Cash Balance
              </div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-slate-900 font-mono-num mt-1">
                रु {Math.round(cashBalance).toLocaleString()}
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="text-xs text-slate-500 font-mono uppercase text-[10px]">Stock Holdings Value</div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-slate-700 font-mono-num mt-1">
                रु {Math.round(totalStockValue).toLocaleString()}
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="text-xs text-slate-500 font-mono uppercase text-[10px]">Total Net Portfolio</div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-slate-900 font-mono-num mt-1">
                रु {Math.round(totalNetWorth).toLocaleString()}
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500 font-mono uppercase text-[10px]">Virtual P&L</div>
                <div className={`text-xl sm:text-2xl font-serif font-bold font-mono-num mt-1 flex items-center ${
                  totalPnL >= 0 ? 'text-emerald-600' : 'text-rose-600'
                }`}>
                  {totalPnL >= 0 ? '+' : ''}रु {Math.round(totalPnL).toLocaleString()}
                  <span className="text-xs font-mono font-semibold ml-1.5">({totalPnLPercent}%)</span>
                </div>
              </div>
              <button
                onClick={handleReset}
                title="Reset sandbox to 10 Lakhs"
                className="p-2 bg-white hover:bg-slate-200 text-slate-500 hover:text-slate-900 rounded-lg border border-slate-200 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Success Notification Alert */}
          {orderSuccessMsg && (
            <div className="my-4 p-3.5 bg-emerald-100 border border-emerald-300 rounded-xl text-xs text-emerald-700 font-mono flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{orderSuccessMsg}</span>
            </div>
          )}

          {/* Order Placement Form & Positions List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            {/* Left: Quick Order Terminal */}
            <div className="lg:col-span-5 bg-slate-50 p-5 sm:p-6 rounded-xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                  <ShoppingBag className="w-4 h-4 text-emerald-600" />
                  Instant Order Terminal
                </span>
                <span className="text-[10px] bg-white text-emerald-700 px-2.5 py-0.5 rounded border border-slate-200 font-mono">
                  TMS Real-Time
                </span>
              </div>

              <form onSubmit={handleExecuteOrder} className="space-y-4">
                {/* Stock Selector */}
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1.5 uppercase text-[10px]">Select Stock</label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {STOCKS_DATA.slice(0, 6).map((stk) => (
                      <button
                        type="button"
                        key={stk.symbol}
                        onClick={() => setSelectedStock(stk)}
                        className={`p-2 rounded-lg text-xs font-semibold text-center border transition-all ${
                          selectedStock.symbol === stk.symbol
                            ? 'bg-emerald-500 text-black font-bold border-emerald-500'
                            : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                        }`}
                      >
                        <div className="font-mono">{stk.symbol}</div>
                        <div className={`text-[10px] font-mono-num ${selectedStock.symbol === stk.symbol ? 'text-black/80' : 'text-slate-500'}`}>रु {stk.ltp}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* BUY / SELL Switch */}
                <div className="grid grid-cols-2 gap-2 bg-white p-1 rounded-full border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setOrderType('BUY')}
                    className={`py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                      orderType === 'BUY'
                        ? 'bg-emerald-500 text-black'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    SIMULATE BUY
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('SELL')}
                    className={`py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                      orderType === 'SELL'
                        ? 'bg-rose-500 text-white'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    SIMULATE SELL
                  </button>
                </div>

                {/* Quantity Input */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-500 mb-1">
                    <span>Number of Shares (Kitta):</span>
                    <span className="font-mono-num font-bold text-slate-900">{orderQty} Kitta</span>
                  </div>
                  <input
                    type="number"
                    min={10}
                    max={5000}
                    step={10}
                    value={orderQty}
                    onChange={(e) => setOrderQty(Math.max(1, Number(e.target.value)))}
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 font-mono-num focus:border-emerald-500 focus:outline-hidden"
                  />
                  {/* Preset buttons */}
                  <div className="flex gap-1.5 mt-2">
                    {[50, 100, 250, 500].map((qty) => (
                      <button
                        type="button"
                        key={qty}
                        onClick={() => setOrderQty(qty)}
                        className="flex-1 py-1 text-[11px] bg-white border border-slate-200 text-slate-500 hover:text-slate-900 rounded-md font-mono-num"
                      >
                        {qty} Shs
                      </button>
                    ))}
                  </div>
                </div>

                {/* NEPSE Fee Breakdown Calculation */}
                <div className="p-3 bg-white rounded-lg border border-slate-200 text-[11px] space-y-1 font-mono-num">
                  <div className="flex justify-between text-slate-500 font-mono">
                    <span>Gross Value:</span>
                    <span className="text-slate-700">रु {grossAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-500 font-mono">
                    <span>Brokerage + SEBON:</span>
                    <span className="text-slate-500">रु {Math.round(brokerCommission + sebonFee)}</span>
                  </div>
                  <div className="flex justify-between text-slate-500 font-mono">
                    <span>DP Fee:</span>
                    <span className="text-slate-500">रु {dpCharge}</span>
                  </div>
                  <div className="flex justify-between text-slate-900 font-bold pt-1.5 border-t border-slate-200 text-xs font-mono">
                    <span>Total Required:</span>
                    <span className="text-emerald-600">रु {Math.round(netOrderCost).toLocaleString()}</span>
                  </div>
                </div>

                {/* Submit Order Button */}
                <button
                  type="submit"
                  className={`w-full py-3.5 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all ${
                    orderType === 'BUY'
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/20'
                      : 'bg-rose-500 hover:bg-rose-400 text-white shadow-lg shadow-rose-500/20'
                  }`}
                >
                  Execute Virtual {orderType} Order
                </button>
              </form>
            </div>

            {/* Right: Active Paper Portfolio Holdings */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider">
                  Open Paper Portfolio Positions ({positions.length})
                </span>
                <span className="text-[11px] font-mono text-emerald-600">
                  Live NEPSE Feed
                </span>
              </div>

              {positions.length === 0 ? (
                <div className="p-10 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mx-auto text-slate-500">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <h5 className="text-sm font-serif font-bold text-slate-600">Your Paper Portfolio is Empty</h5>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto font-light">
                    Use the order simulator on the left to buy your first virtual shares of NABIL, SHIVM, or HDL.
                  </p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {positions.map((pos) => {
                    const isProfit = pos.pnl >= 0;
                    return (
                      <div
                        key={pos.symbol}
                        className="p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-all font-mono-num text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                      >
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-serif font-bold text-slate-900">{pos.symbol}</span>
                            <span className="text-slate-500 text-[11px] font-light">({pos.name})</span>
                          </div>
                          <div className="text-slate-500 text-[11px] mt-0.5 font-mono">
                            {pos.qty} Shares @ Avg रु {pos.avgBuyPrice} • LTP: रु {pos.currentPrice}
                          </div>
                        </div>

                        <div className="text-right sm:text-right w-full sm:w-auto flex sm:flex-col justify-between items-center sm:items-end">
                          <div className="text-xs font-bold text-slate-900 font-mono">
                            रु {pos.currentValue.toLocaleString()}
                          </div>
                          <div className={`text-xs font-bold flex items-center font-mono ${isProfit ? 'text-emerald-600' : 'text-rose-600'}`}>
                            {isProfit ? <TrendingUp className="w-3 h-3 mr-0.5 inline" /> : <TrendingDown className="w-3 h-3 mr-0.5 inline" />}
                            {isProfit ? '+' : ''}रु {pos.pnl.toLocaleString()} ({pos.pnlPercent}%)
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Pro Feature Teaser Card */}
              <div className="p-4 sm:p-5 bg-gradient-to-r from-emerald-50 to-slate-50 rounded-xl border border-emerald-300 flex items-center justify-between flex-wrap gap-3">
                <div className="space-y-0.5">
                  <div className="text-xs font-serif font-bold text-emerald-700 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    Want full multi-strategy backtesting in Nepal?
                  </div>
                  <div className="text-[11px] text-slate-500 font-light">
                    Download software for 10-year historical backtesting, stop-loss trailing, and automated paper bots.
                  </div>
                </div>
                <button
                  onClick={onOpenDownload}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-full transition-all shadow"
                >
                  Download Software
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
