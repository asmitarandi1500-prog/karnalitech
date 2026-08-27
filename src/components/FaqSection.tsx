import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/mockData';

interface FaqSectionProps {
  onOpenDownload: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenDownload }) => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Trial & Pricing', 'Signals & Strategy', 'Live Classes', 'Copy Trading', 'Technical / Installation'];

  const filteredFaqs = selectedCategory === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-3">
            <span className="h-[1px] w-6 bg-emerald-500"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-emerald-600">
              CLARIFICATIONS
            </span>
            <span className="h-[1px] w-6 bg-emerald-500"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
            Frequently Asked <span className="italic font-serif text-emerald-600 font-normal">Questions</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Everything you need to know about our 15-day free trial, software installation, and live signals.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-black font-bold uppercase tracking-wider'
                  : 'bg-white text-slate-500 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all shadow-lg"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-serif font-bold text-slate-900 flex items-center gap-3">
                    <span className="text-emerald-600 text-xs font-mono uppercase tracking-wider">{faq.category.split(' ')[0]}</span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-4 bg-slate-50 font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-14 text-center p-8 bg-white rounded-3xl border border-slate-200 max-w-lg mx-auto flex flex-col items-center space-y-4 shadow-xl">
          <MessageCircle className="w-8 h-8 text-emerald-600" />
          <h4 className="text-base font-serif font-bold text-slate-900">Have a specific question about your Broker TMS?</h4>
          <p className="text-xs text-slate-500 font-light">
            Our Kathmandu support desk is available Sunday–Thursday (10:00 AM – 6:00 PM NPT).
          </p>
          <button
            onClick={onOpenDownload}
            className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider font-mono rounded-full transition-all"
          >
            Download Expert NEPSE Free
          </button>
        </div>
      </div>
    </section>
  );
};
