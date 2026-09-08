import { ArrowDown, ArrowUpRight, Download, GraduationCap, Layers3, Monitor, Radio, Users } from 'lucide-react';
import { DOWNLOAD_URL } from '../config';

const logo = new URL('../../photo_2026-09-08_15-19-52-removebg-preview.png', import.meta.url).href;

export const Hero = () => (
  <>
    <section className="hero-section" aria-labelledby="hero-title">
      {/* Background ambient lighting */}
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-layout">
        {/* Main Hero Header */}
        <div className="hero-content">
          {/* Editorial Category Eyebrow */}
          <div className="eyebrow"><span className="eyebrow-line" /> YOUR TECH PARTNER</div>
          {/* Editorial Headline */}
          <h1 id="hero-title">A clearer view.<br />A smarter <span>next move.</span></h1>
          {/* Subtitle */}
          <p className="hero-description">Meet Karnali Technology. Your space to learn, explore the Nepal stock market, and build your trading knowledge—all in one desktop app.</p>
          {/* Editorial CTA Buttons */}
          <div className="hero-actions">
            <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="button button-primary" id="hero-download-btn"><Download size={18} aria-hidden="true" />Download</a>
            <a href="#features" className="text-link">Explore the features <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          {/* Micro Trial Guarantee */}
          {/* Supported Platforms */}
          <div className="platform-note"><Monitor size={15} aria-hidden="true" /><span>Built for Windows 10 & 11</span><span className="note-divider" /><span>Made for Nepal</span></div>
        </div>
        <div className="hero-art" aria-label="Karnali Technology brings learning, market insights, and trading tools together in one desktop app">
          <div className="art-grid" aria-hidden="true" />
          <div className="art-topline"><span className="art-dot" /> ONE APP. MORE POSSIBILITIES.<ArrowUpRight size={18} aria-hidden="true" /></div>
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="orbit-node node-one" aria-hidden="true" />
          <div className="orbit-node node-two" aria-hidden="true" />
          <div className="brand-tile"><img src={logo} alt="Karnali Technology — Your Tech Partner" width="500" height="500" fetchPriority="high" /></div>
          <div className="orbit-label label-learn"><span><GraduationCap size={20} aria-hidden="true" /></span><div><small>GROW YOUR KNOWLEDGE</small><strong>Learn from experts</strong></div></div>
          <div className="orbit-label label-insight"><span><Radio size={20} aria-hidden="true" /></span><div><small>FIND YOUR PERSPECTIVE</small><strong>Market insights</strong></div></div>
          <div className="art-bottomline"><span>DESIGNED FOR YOUR DESKTOP</span><span className="art-pixels" aria-hidden="true"><i /><i /><i /></span></div>
        </div>
      </div>
      <div className="container hero-bottom"><a href="#features"><ArrowDown size={15} aria-hidden="true" /> A better way to explore the market</a><span>LOCAL KNOWLEDGE. CONNECTED TECHNOLOGY.</span></div>
    </section>
    {/* Feature quick highlight badges - Editorial Layout */}
    <div className="capability-strip">
      <div className="container capability-inner">
        <span className="capability-intro">YOUR NEXT CHAPTER,<br /><strong>ALL IN ONE PLACE.</strong></span>
        <span><GraduationCap aria-hidden="true" />Live classes</span>
        <span><Users aria-hidden="true" />Copy trading</span>
        <span><Radio aria-hidden="true" />Market signals</span>
        <span><Layers3 aria-hidden="true" />Practice & analysis</span>
      </div>
    </div>
    {/* Live Social Proof Stats in Editorial Typography */}
  </>
);
