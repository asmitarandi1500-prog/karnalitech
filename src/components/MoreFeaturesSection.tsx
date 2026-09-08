import { ArrowUpRight, BellRing, BookOpen, ChartNoAxesCombined, Check, Compass, GraduationCap, Layers3, Monitor, Radio, Users } from 'lucide-react';
import { DOWNLOAD_URL } from '../config';

const features = [
  { number: '01', icon: GraduationCap, title: 'Live classes. Real understanding.', description: 'Build your market knowledge with guided sessions on trading concepts, chart reading, and the Nepal stock market.', tag: 'LEARN', className: 'feature-card-learning', detail: 'Learn the why behind every decision.' },
  { number: '02', icon: Users, title: 'Explore copy trading', description: 'Discover trading approaches and explore copy trading tools inside the software. Review strategies and risks before making your own decisions.', tag: 'CONNECT', className: '', detail: 'A different perspective on the market.' },
  { number: '03', icon: Radio, title: 'Signals, not the noise', description: 'Find buy and sell signals together with market context, so you can research potential opportunities in your desktop workspace.', tag: 'DISCOVER', className: '', detail: 'Information to support your research.' },
  { number: '04', icon: Compass, title: 'Practice with purpose', description: 'Explore paper trading in the app. Test ideas with virtual funds and build familiarity before considering real-money trades.', tag: 'PRACTICE', className: '', detail: 'Space to learn at your own pace.' },
  { number: '05', icon: ChartNoAxesCombined, title: 'See the bigger picture', description: 'Bring market analysis, broker activity, and sector insights into one place instead of switching between scattered sources.', tag: 'UNDERSTAND', className: '', detail: 'More context. A clearer perspective.' },
  { number: '06', icon: BellRing, title: 'Keep what matters close', description: 'Explore watchlists, market alerts, and dividend tracking tools designed to help you follow the companies that interest you.', tag: 'FOLLOW', className: 'feature-card-follow', detail: 'Your market interests, organized.' },
];

export const MoreFeaturesSection = () => (
  <>
    <section id="features" className="features-section">
      <div className="container">
        {/* Header */}
        <div className="section-heading section-heading-split">
          <div><span className="eyebrow">THE SOFTWARE, SIMPLIFIED</span><h2>Everything you need.<br /><span>One place to begin.</span></h2></div>
          <p className="section-description">Less switching. More understanding. Discover the tools waiting for you inside Karnali Technology.</p>
        </div>
        <div className="section-note"><Monitor size={15} aria-hidden="true" />All features are available inside the downloaded software—not on this website.</div>
        {/* Feature Cards Grid */}
        <div className="feature-grid">
          {features.map(({ number, icon: Icon, title, description, tag, className, detail }) => (
            <article className={`feature-card ${className}`} key={number}>
              <div className="feature-card-top"><span className="feature-icon"><Icon size={24} strokeWidth={1.6} aria-hidden="true" /></span><span className="feature-number">/{number}</span></div>
              <span className="feature-tag">{tag}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="feature-detail"><span>{detail}</span><ArrowUpRight size={17} aria-hidden="true" /></div>
            </article>
          ))}
        </div>
        <div className="features-bottom"><span><Layers3 size={18} aria-hidden="true" />Your complete toolkit lives in the app.</span><a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="text-link">Download <ArrowUpRight size={17} aria-hidden="true" /></a></div>
      </div>
    </section>
    <section id="why-karnali" className="why-section">
      <div className="container why-layout">
        <div className="why-visual" aria-hidden="true">
          <span className="why-visual-label">A MORE CONNECTED WORKFLOW</span>
          <div className="workflow-row"><span className="workflow-icon"><BookOpen size={24} /></span><div><small>01 / BUILD A FOUNDATION</small><strong>Learn something new.</strong></div><Check size={18} /></div>
          <div className="workflow-connector" />
          <div className="workflow-row"><span className="workflow-icon"><ChartNoAxesCombined size={24} /></span><div><small>02 / FIND YOUR PERSPECTIVE</small><strong>Understand the market.</strong></div><Check size={18} /></div>
          <div className="workflow-connector" />
          <div className="workflow-row"><span className="workflow-icon"><Compass size={24} /></span><div><small>03 / EXPLORE YOUR APPROACH</small><strong>Put ideas into practice.</strong></div><Check size={18} /></div>
          <div className="workflow-caption"><span className="art-dot" /> Connected in Karnali Technology</div>
        </div>
        <div className="why-content section-heading">
          <span className="eyebrow">BUILT AROUND YOU</span>
          <h2>Your market.<br />Your pace.<br /><span>Your tech partner.</span></h2>
          <p className="section-description">Whether you're taking your first steps or refining your approach, bring learning and market exploration into a single, focused workspace.</p>
          <ul className="benefit-list"><li><Check size={17} aria-hidden="true" />Focused on Nepal's stock market</li><li><Check size={17} aria-hidden="true" />Learning and analysis, together</li><li><Check size={17} aria-hidden="true" />A dedicated Windows desktop experience</li></ul>
          <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="button button-navy">Download <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  </>
);
