import { useEffect, useState, useRef } from 'react';
import { useSound } from '../context/SoundContext';

export function ProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [springPercent, setSpringPercent] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const { playClick, playSuccess } = useSound();
  const reachedBottomRef = useRef(false);
  const hideTimerRef = useRef<number | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      const totalScroll = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrolled = Math.min(100, Math.max(0, (totalScroll / windowHeight) * 100));
        setScrollPercent(scrolled);
        setShowBadge(true);

        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        hideTimerRef.current = window.setTimeout(() => {
          setShowBadge(false);
        }, 1600);

        // Milestone audio when 100% reached
        if (scrolled >= 99 && !reachedBottomRef.current) {
          reachedBottomRef.current = true;
          playSuccess();
        } else if (scrolled < 95) {
          reachedBottomRef.current = false;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Smooth spring-damping loop
    const springUpdate = () => {
      setSpringPercent((prev) => {
        const diff = scrollPercent - prev;
        if (Math.abs(diff) < 0.05) return scrollPercent;
        return prev + diff * 0.22;
      });
      animationFrameId = requestAnimationFrame(springUpdate);
    };

    animationFrameId = requestAnimationFrame(springUpdate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [scrollPercent, playSuccess]);

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Fixed Spring Progress Track */}
      <div
        onClick={scrollToTop}
        className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-black/5 dark:bg-white/5 cursor-pointer group pointer-events-auto"
        title="Scroll Progress — Click to return to top"
      >
        <div
          className="h-full bg-gradient-to-r from-[#68715F] via-[#8FA183] to-[#A5C28F] shadow-[0_0_8px_rgba(104,113,95,0.4)] relative"
          style={{ width: `${springPercent}%` }}
          role="progressbar"
          aria-valuenow={Math.round(springPercent)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {/* Leading glow point */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_6px_#A5C28F] opacity-90 scale-75 group-hover:scale-125 transition-transform" />
        </div>
      </div>

      {/* Floating Micro Percentage Badge on Scroll */}
      <div
        className={`fixed top-4 right-6 md:right-10 z-40 pointer-events-none transition-all duration-300 transform ${
          showBadge && springPercent > 1
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-1'
        }`}
      >
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#111111]/85 text-[#F5F4F0] dark:bg-[#EDEDEB]/90 dark:text-[#111111] backdrop-blur-md border border-white/10 dark:border-black/10 text-[10px] font-mono-meta font-medium shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8FA183] animate-pulse" />
          <span>{Math.round(springPercent)}%</span>
        </div>
      </div>
    </>
  );
}
