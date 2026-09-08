import React from 'react';
import { Plus } from 'lucide-react';

interface FaqSectionProps {
  onOpenDownload?: () => void;
}

const faqs = [
  {
    question: 'Where can I access the software features?',
    answer: 'Live classes, copy trading, buy/sell signals, and paper trading are accessed in the Karnali Technology software after download. This website introduces those features; it does not offer browser-based trading demos.',
  },
  {
    question: 'Which operating systems are supported?',
    answer: 'The software is designed for Windows 10 and Windows 11. Use a compatible Windows computer to access the desktop features.',
  },
  {
    question: 'Does copy trading guarantee a return?',
    answer: 'No. Copy trading and buy/sell signals do not guarantee profits or prevent losses. Markets involve risk, and past performance is not a reliable indicator of future results. Make your own informed decisions.',
  },
  {
    question: 'Can I trade directly on this website?',
    answer: 'No. This is the Karnali Technology software information and download website, not a trading platform. The software features are available after download, not on this page.',
  },
  {
    question: 'What happens when I select Download?',
    answer: 'Download opens the external software download page in a new tab. The download is provided there rather than through an in-page trading platform or demo.',
  },
];

export const FaqSection: React.FC<FaqSectionProps> = () => {
  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-heading">
      <div className="container">
        <div className="faq-layout">
          {/* Header */}
          <div className="section-heading">
            <span className="eyebrow">A little clarity</span>
            <h2 id="faq-heading">Good questions.<br />Clear answers.</h2>
            <p className="section-description">What to know about Karnali Technology before you download.</p>
          </div>

          {/* Category Pills */}
          {/* Accordion List */}
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <Plus size={20} aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
          {/* Still have questions */}
        </div>
      </div>
    </section>
  );
};
