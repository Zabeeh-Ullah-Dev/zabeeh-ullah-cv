import { useEffect } from 'react';
import { Download, Printer, X } from 'lucide-react';
import { PROFILE } from '../data/cvData';
import { AtsResumeDocument } from './AtsResumeDocument';

interface AtsResumeModalProps {
  open: boolean;
  onClose: () => void;
  onPrint: () => void;
}

export function AtsResumeModal({ open, onClose, onPrint }: AtsResumeModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="ATS-Friendly Resume Preview"
      className="no-print fixed inset-0 z-50 flex flex-col bg-deep-slate/70 backdrop-blur-[2px]"
    >
      <div className="flex items-center justify-between gap-4 border-b border-sand-border bg-warm-white px-5 py-3.5 shadow-sm">
        <div>
          <h2 className="font-heading text-lg font-bold text-deep-slate">
            ATS-Friendly Resume Preview
          </h2>
          <p className="text-xs text-muted-slate">
            Single-column A4 format optimized for Applicant Tracking Systems
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onPrint}
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded border border-steel-blue bg-steel-blue px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-steel-blue-dark"
          >
            <Printer className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Print / Save PDF
          </button>

          <a
            href={PROFILE.atsResumePdfUrl}
            download="Zabeeh-Ullah-ATS-Resume.pdf"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded border border-hairline bg-white px-3.5 py-2 text-xs font-medium text-deep-slate transition-colors hover:border-steel-blue hover:text-steel-blue"
          >
            <Download className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Download PDF
          </a>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close ATS resume preview"
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-hairline bg-white text-deep-slate transition-colors hover:border-steel-blue hover:text-steel-blue"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <div className="mx-auto w-fit overflow-hidden rounded border border-hairline shadow-2xl">
          <AtsResumeDocument />
        </div>
      </div>
    </div>
  );
}
