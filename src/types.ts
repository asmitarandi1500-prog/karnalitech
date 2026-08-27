export interface StockTicker {
  symbol: string;
  name: string;
  sector: 'Banking' | 'Hydropower' | 'Microfinance' | 'Life Insurance' | 'Manufacturing' | 'Investment' | 'Hotels';
  ltp: number;
  change: number;
  changePercent: number;
  high52w: number;
  low52w: number;
  volume: number;
  turnover: string;
  rsi: number;
  signal: 'STRONG BUY' | 'BUY' | 'HOLD' | 'SELL';
  signalConfidence: number;
  sparkline: number[];
}

export interface LiveClass {
  id: string;
  title: string;
  instructor: {
    name: string;
    title: string;
    avatar: string;
    experience: string;
    verifiedPnl: string;
  };
  date: string;
  time: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Pro Traders';
  tags: string[];
  attendeesCount: number;
  maxSeats: number;
  isLiveToday?: boolean;
  language: string;
  description: string;
}

export interface CopyTrader {
  id: string;
  name: string;
  username: string;
  avatar: string;
  verifiedBadge: boolean;
  yearsInNepse: number;
  winRate: number;
  monthlyReturn: number;
  yearlyReturn: number;
  followers: number;
  aum: string;
  riskScore: 'Low (1/5)' | 'Medium (3/5)' | 'High (4/5)' | 'Aggressive (5/5)';
  topHoldings: string[];
  primaryStrategy: string;
  recentTradesCount: number;
}

export interface BuySellSignal {
  id: string;
  symbol: string;
  companyName: string;
  action: 'BUY' | 'SELL';
  entryPrice: number;
  target1: number;
  target2: number;
  stopLoss: number;
  riskReward: string;
  timeframe: string;
  timestamp: string;
  confidence: number;
  rationale: string;
  volumeSpike: string;
  brokerFlow: string;
  status: 'ACTIVE' | 'HIT TARGET 1' | 'HIT TARGET 2' | 'COMPLETED';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  avatar: string;
  quote: string;
  profitPnl: string;
  verifiedBroker: string;
  experienceYears: number;
  stars: number;
}

export interface FaqItem {
  id: string;
  category: 'Trial & Pricing' | 'Signals & Strategy' | 'Live Classes' | 'Copy Trading' | 'Technical / Installation';
  question: string;
  answer: string;
}

export interface DownloadPlatform {
  id: string;
  osName: string;
  version: string;
  fileFormat: string;
  minReq: string;
  releaseDate: string;
  badge?: string;
  isPopular?: boolean;
}
