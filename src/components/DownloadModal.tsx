import { useEffect, useRef } from 'react';
import { Download, X } from 'lucide-react';
import { DownloadPlatform } from '../types';
import { DOWNLOAD_URL } from '../config';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  platform?: DownloadPlatform | null;
}

export const DownloadModal = ({ isOpen, onClose }: DownloadModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && !dialog?.open) dialog?.showModal();
    if (!isOpen && dialog?.open) dialog.close();
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} className="download-dialog" aria-labelledby="download-dialog-title" onClose={onClose}>
      {/* Close Button */}
      <button type="button" className="dialog-close" onClick={onClose} aria-label="Close download dialog"><X size={20} aria-hidden="true" /></button>
      {/* Modal Header */}
      <h2 id="download-dialog-title">Karnali Technology</h2>
      {/* Progress Bar or Completion */}
      <p>Explore learning, analysis, and trading tools in the Windows desktop software.</p>
      {/* Success Box */}
      <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="button button-primary" onClick={onClose}>
        {/* Open in a new tab so the browser navigates to the external file URL */}
        {/* instead of trying to serve it from the local site origin. */}
        <Download size={18} aria-hidden="true" />Download
      </a>
    </dialog>
  );
};
