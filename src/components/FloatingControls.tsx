import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Headphones, ArrowUp, Sparkles } from 'lucide-react';
import { useSound } from '../context/SoundContext';
import { useReading } from '../context/ReadingContext';
import { useLanguage } from '../context/LanguageContext';
import { MagneticButton } from './MagneticButton';

export function FloatingControls() {
  const { isSoundEnabled, toggleSound, playClick } = useSound();
  const { isReading, startReading, stopReading, readPortfolioOverview } = useReading();
  const { t } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const pct = Math.min(100, Math.max(0, (totalScroll / windowHeight) * 100));
        setScrollProgress(Math.round(pct));
        setHasScrolled(totalScroll > 150);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReadClick = () => {
    if (isReading) {
      stopReading();
    } else {
      readPortfolioOverview();
    }
  };

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside
      aria-label="Interactive Controls"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 select-none"
    >
      <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#F5F4F0]/90 dark:bg-[#1A1B1E]/90 backdrop-blur-xl border border-[#D8D7D2] dark:border-[#33363F] shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
        {/* 1. Tactile Sound Toggle Button */}
        <MagneticButton
          onClick={toggleSound}
          strength={0.2}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono-meta tracking-wider transition-all duration-300 ${
            isSoundEnabled
              ? 'bg-[#111111] text-[#F5F4F0] dark:bg-[#EDEDEB] dark:text-[#111111] shadow-xs'
              : 'bg-transparent text-[#6E6E6E] hover:text-[#111111] dark:hover:text-[#EDEDEB]'
          }`}
          title={isSoundEnabled ? 'Audio Feedback Enabled (Click to Mute)' : 'Audio Feedback Muted (Click to Enable)'}
          aria-label={isSoundEnabled ? 'Mute Sound' : 'Enable Sound'}
        >
          {isSoundEnabled ? (
            <>
              <div className="flex items-center gap-0.5 h-3">
                <span className="w-0.5 h-2 bg-[#8FA183] animate-pulse" />
                <span className="w-0.5 h-3 bg-[#8FA183] animate-pulse delay-75" />
                <span className="w-0.5 h-1.5 bg-[#8FA183] animate-pulse delay-150" />
              </div>
              <span className="text-[10px] font-semibold hidden sm:inline">{t.nav.soundOn}</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5" />
              <span className="text-[10px] hidden sm:inline">{t.nav.soundOff}</span>
            </>
          )}
        </MagneticButton>

        {/* 2. Read Aloud Speech Button */}
        <MagneticButton
          onClick={handleReadClick}
          strength={0.2}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono-meta tracking-wider transition-all duration-300 ${
            isReading
              ? 'bg-[#68715F] text-white shadow-[0_0_12px_rgba(104,113,95,0.4)]'
              : 'bg-transparent text-[#6E6E6E] hover:text-[#111111] dark:hover:text-[#EDEDEB]'
          }`}
          title={isReading ? 'Stop Reading Aloud' : 'Listen to Portfolio Narration'}
          aria-label={isReading ? 'Stop Reading' : 'Listen to Portfolio'}
        >
          <Headphones className={`w-3.5 h-3.5 ${isReading ? 'animate-bounce' : ''}`} />
          <span className="text-[10px] font-semibold hidden sm:inline">
            {isReading ? t.nav.reading : t.nav.readAloud}
          </span>
          {isReading && (
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          )}
        </MagneticButton>

        {/* Divider */}
        <div className="w-px h-4 bg-[#D8D7D2] dark:bg-[#33363F] mx-0.5" />

        {/* 3. Real-Time Scroll Percentage Indicator */}
        <div
          onClick={scrollToTop}
          className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono-meta text-[#6E6E6E] hover:text-[#111111] dark:hover:text-white cursor-pointer transition-colors"
          title="Scroll Progress — Click to go to top"
        >
          <span className="font-semibold text-[#111111] dark:text-[#EDEDEB] tabular-nums">
            {scrollProgress}%
          </span>
          {hasScrolled ? (
            <ArrowUp className="w-3 h-3 text-[#68715F] dark:text-[#8FA183] transition-transform hover:-translate-y-0.5" />
          ) : (
            <Sparkles className="w-3 h-3 text-[#8FA183] opacity-60" />
          )}
        </div>
      </div>
    </aside>
  );
}
