import { ArrowUpRight, Download, Monitor } from 'lucide-react';
import { DOWNLOAD_URL } from '../config';

export const DownloadSection = () => (
  <section id="download" className="download-section">
    <div className="container">
      <div className="download-panel">
        <div className="download-orbit" aria-hidden="true" />
        {/* Section Header */}
        <div className="download-content">
          <span className="eyebrow">YOUR NEXT MOVE STARTS HERE</span>
          <h2>A world of insight.<br />One download away.</h2>
          <p>Bring learning, market insights, and trading tools to your desktop with Karnali Technology.</p>
          <div className="download-actions"><a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="button button-white"><Download size={19} aria-hidden="true" />Download<ArrowUpRight size={17} aria-hidden="true" /></a><span><Monitor size={17} aria-hidden="true" />Windows 10 & 11</span></div>
          <small className="download-external-note">Opens our download page in a new tab.</small>
        </div>
        {/* Windows Download Card */}
        <div className="download-symbol" aria-hidden="true">
          {/* Popular Pill */}
          <div className="download-symbol-inner"><Download strokeWidth={1.2} /></div>
          {/* Specs */}
          <span>KARNALI TECHNOLOGY</span>
          <small>YOUR TECH PARTNER</small>
        </div>
        {/* Security & Zero Payment Guarantee Bar */}
      </div>
    </div>
  </section>
);
