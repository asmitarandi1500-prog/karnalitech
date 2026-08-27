import React from 'react';
import { Star, Quote, CheckCircle2, MapPin, Building, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-3">
            <span className="h-[1px] w-6 bg-emerald-500"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-emerald-600">
              COMMUNITY VOICES
            </span>
            <span className="h-[1px] w-6 bg-emerald-500"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
            Trusted by 48,000+ Investors <br />
            <span className="italic font-serif text-emerald-600 font-normal">
              Across Nepal & The World
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            Read verified trading results from retail investors, full-time day traders, and Nepali diaspora members.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between shadow-xl relative group"
            >
              <div>
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-emerald-500 text-emerald-600" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-600 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    {item.verifiedBroker}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-slate-600 font-serif leading-relaxed mb-6 italic font-light">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Profit Highlight */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center space-x-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border border-slate-200 grayscale contrast-125"
                  />
                  <div>
                    <h4 className="text-sm font-serif font-bold text-slate-900">{item.name}</h4>
                    <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-600" />
                      {item.location} • {item.role}
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 text-right">
                  <div className="text-xs font-mono font-bold text-emerald-600">{item.profitPnl}</div>
                  <div className="text-[9px] font-mono text-slate-500">{item.experienceYears} Years in NEPSE</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
