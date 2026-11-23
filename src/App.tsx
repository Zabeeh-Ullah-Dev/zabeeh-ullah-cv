import { useCallback, useEffect, useState } from 'react';
import { AtsResumeDocument } from './components/AtsResumeDocument';
import { AtsResumeModal } from './components/AtsResumeModal';
import { MainContent } from './components/MainContent';
import { OgPreviewCard } from './components/OgPreviewCard';
import { Sidebar } from './components/Sidebar';
import { NAV_SECTIONS } from './data/cvData';
import {
  getActiveSectionId,
  isAtsResumeMode,
  isOgPreviewMode,
} from './utils/cvHelpers';

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState<string>(
    NAV_SECTIONS[0].id,
  );
  const [atsModalOpen, setAtsModalOpen] = useState(false);

  const search = typeof window !== 'undefined' ? window.location.search : '';
  const ogPreview = isOgPreviewMode(search);
  const atsResumeOnly = isAtsResumeMode(search);

  useEffect(() => {
    if (ogPreview || atsResumeOnly) return;

    const handleScroll = () => {
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>('main section[id]'),
      );
      const metrics = elements.map((el) => ({
        id: el.id,
        top: el.offsetTop,
        height: el.offsetHeight,
      }));
      const nextActive = getActiveSectionId(window.scrollY, metrics, 150);
      if (nextActive) {
        setActiveSectionId(nextActive);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ogPreview, atsResumeOnly]);

  const handlePrintResume = useCallback(() => {
    window.print();
  }, []);

  if (ogPreview) {
    return <OgPreviewCard />;
  }

  if (atsResumeOnly) {
    return <AtsResumeDocument />;
  }

  return (
    <>
      <div className="no-print mx-auto flex min-h-screen max-w-[1180px] flex-col bg-warm-white shadow-[0_0_35px_rgba(0,0,0,0.03)] md:flex-row">
        <Sidebar activeSectionId={activeSectionId} />
        <MainContent
          onPrintResume={handlePrintResume}
          onOpenAtsPreview={() => setAtsModalOpen(true)}
        />
      </div>

      {/* Dedicated single-column ATS resume rendered exclusively when printing */}
      <div className="print-only hidden">
        <AtsResumeDocument />
      </div>

      <AtsResumeModal
        open={atsModalOpen}
        onClose={() => setAtsModalOpen(false)}
        onPrint={handlePrintResume}
      />
    </>
  );
}
