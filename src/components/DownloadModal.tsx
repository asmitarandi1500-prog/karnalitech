import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  CheckCircle2, 
  Lock, 
  Copy, 
  Check, 
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DownloadPlatform } from '../types';
import { DOWNLOAD_URL, DOWNLOAD_FILENAME } from '../config';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  platform?: DownloadPlatform | null;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ 
  isOpen, 
  onClose, 
  platform 
}) => {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);

  const defaultPlatform: DownloadPlatform = platform || {
    id: 'win',
    osName: 'Windows Desktop',
    version: 'v4.8.2 (64-bit)',
    fileFormat: '.zip Package',
    minReq: 'Windows 10 / 11, 4GB RAM',
    releaseDate: 'Updated Today',
  };

  const zipPassword = '123456';

  const startFileDownload = () => {
    const link = document.createElement('a');
    link.href = DOWNLOAD_URL;
    link.download = DOWNLOAD_FILENAME;
    // Open in a new tab so the browser navigates to the external file URL
    // instead of trying to serve it from the local site origin.
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (isOpen) {
      setDownloadProgress(0);
      setIsComplete(false);
      setCopiedKey(false);

      const interval = setInterval(() => {
        setDownloadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsComplete(true);
            startFileDownload();
            confetti({
              particleCount: 70,
              spread: 60,
              origin: { y: 0.6 },
            });
            return 100;
          }
          return prev + Math.floor(Math.random() * 25) + 15;
        });
      }, 350);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const copyPassword = () => {
    navigator.clipboard.writeText(zipPassword);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-500 hover:text-slate-900 bg-slate-50 rounded-full border border-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-emerald-600">
            <Download className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-serif font-bold text-slate-900">
              {isComplete ? 'Package Ready' : 'Downloading Expert NEPSE'}
            </h3>
            <p className="text-xs text-slate-500 font-mono">
              {defaultPlatform.osName} • {defaultPlatform.version}
            </p>
          </div>
        </div>

        {/* Progress Bar or Completion */}
        {!isComplete ? (
          <div className="space-y-4 py-4">
            <div className="flex justify-between text-xs text-slate-600 font-mono">
              <span>Fetching installer package...</span>
              <span className="font-bold text-emerald-600">{Math.min(100, downloadProgress)}%</span>
            </div>
            <div className="w-full bg-slate-50 h-2.5 rounded-full overflow-hidden border border-slate-200 p-0.5">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, downloadProgress)}%` }}
              />
            </div>
            <p className="text-[11px] font-mono text-slate-500 text-center">
              Direct high-speed mirror (Kathmandu / Cloudflare CDN)
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Success Box */}
            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl space-y-2">
              <div className="flex items-center space-x-2 text-emerald-700 font-serif font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Installer Download Initiated</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Your <strong className="text-slate-900 font-mono">NepseClassSoftware.zip</strong> is downloading. Check your downloads directory.
              </p>
              <button
                onClick={startFileDownload}
                className="text-[11px] font-mono text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
              >
                Download didn't start? Click here to retry
              </button>
            </div>

            {/* Zip Password */}
            <div className="p-4 bg-amber-50 rounded-2xl border-2 border-amber-300 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-amber-700 font-serif font-bold flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-amber-600" />
                  Zip Password (Required to Extract):
                </span>
                <span className="text-amber-600 font-mono text-[10px] uppercase">Keep it secret</span>
              </div>

              <div className="flex items-center justify-between bg-white px-3.5 py-2.5 rounded-xl border border-amber-300">
                <code className="text-sm font-mono font-bold text-slate-900 select-all tracking-widest">
                  {zipPassword}
                </code>
                <button
                  onClick={copyPassword}
                  className="flex items-center space-x-1 text-xs bg-amber-100 hover:bg-amber-200 text-amber-800 px-2.5 py-1 rounded-md border border-amber-300 font-mono transition-colors"
                >
                  {copiedKey ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Setup Instructions */}
            <div className="p-4 bg-slate-50 rounded-2xl border-2 border-emerald-300 space-y-3">
              <div className="font-mono font-bold text-emerald-700 text-[10px] uppercase tracking-wider">
                Setup Instructions:
              </div>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-start space-x-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-500 text-center text-white text-[10px] font-mono leading-4 shrink-0 mt-0.5">1</span>
                  <span>
                    Download <strong className="text-slate-900 font-mono">NepseClassSoftware.zip</strong>, then extract it using{' '}
                    <a href="https://www.win-rar.com/fileadmin/winrar-versions/winrar/winrar-x64-723.exe" className="text-emerald-600 font-semibold underline underline-offset-2 hover:text-emerald-700 inline-flex items-center gap-0.5" target="_blank" rel="noopener noreferrer">
                      WinRAR <ExternalLink className="w-3 h-3 inline" />
                    </a>{' '}
                    or{' '}
                    <a href="https://www.7-zip.org/a/7z2602-x64.exe" className="text-emerald-600 font-semibold underline underline-offset-2 hover:text-emerald-700 inline-flex items-center gap-0.5" target="_blank" rel="noopener noreferrer">
                      7-Zip <ExternalLink className="w-3 h-3 inline" />
                    </a>.
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-500 text-center text-white text-[10px] font-mono leading-4 shrink-0 mt-0.5">2</span>
                  <span>When asked, enter the password: <strong className="text-slate-900 font-mono">123456</strong></span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-500 text-center text-white text-[10px] font-mono leading-4 shrink-0 mt-0.5">3</span>
                  <span>Double-click <strong className="text-slate-900 font-mono">JoinNepseClassSoftware</strong> and click <strong className="text-slate-900">"Yes"</strong> on the prompt.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-500 text-center text-white text-[10px] font-mono leading-4 shrink-0 mt-0.5">4</span>
                  <span>Sign up and enjoy 15 days of live classes, copy trading & buy/sell signals.</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider font-mono rounded-full transition-all shadow-md shadow-emerald-500/20"
            >
              Start Trading Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
