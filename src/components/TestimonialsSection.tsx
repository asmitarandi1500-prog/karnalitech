import { ArrowUpRight, MapPin, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection = () => (
  <section id="testimonials" className="testimonials-section">
    <div className="container">
      {/* Header */}
      <div className="section-heading section-heading-split">
        <div><span className="eyebrow">THE COMMUNITY PERSPECTIVE</span><h2>Different journeys.<br /><span>A shared ambition.</span></h2></div>
        <div><p className="section-description">Stories from our trading community, from Kathmandu to wherever life takes you.</p><a href="#download" className="text-link">Find your starting point <ArrowUpRight size={17} aria-hidden="true" /></a></div>
      </div>
      {/* Testimonials Grid */}
      <div className="testimonials-grid">
        {TESTIMONIALS.map((item, index) => (
          <article className={`testimonial-card ${index === 0 ? 'testimonial-featured' : ''}`} key={item.id}>
            {/* Rating & Verified Tag */}
            <div className="testimonial-top"><span className="testimonial-stars" aria-label={`${item.stars} out of 5 stars`}>{Array.from({ length: item.stars }, (_, i) => <Star key={i} size={13} fill="currentColor" aria-hidden="true" />)}</span><Quote size={28} strokeWidth={1.2} aria-hidden="true" /></div>
            {/* Quote */}
            <blockquote>“{item.quote.replaceAll('Expert NEPSE', 'Karnali Technology')}”</blockquote>
            {/* Author & Profit Highlight */}
            <div className="testimonial-author"><span className="author-avatar" aria-hidden="true">{item.name.split(' ').map(part => part[0]).slice(0, 2).join('')}</span><div><h3>{item.name}</h3><span>{item.role}</span></div></div>
            <div className="testimonial-location"><MapPin size={12} aria-hidden="true" />{item.location}</div>
          </article>
        ))}
      </div>
      <p className="testimonial-disclaimer">Individual experiences are not a guarantee of future results. Trading involves risk.</p>
    </div>
  </section>
);
