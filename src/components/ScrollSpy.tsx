import { useState, useEffect } from 'react';
import { useSound } from '../context/SoundContext';

interface SectionInfo {
  id: string;
  number: string;
  name: string;
}

const SECTIONS: SectionInfo[] = [
  { id: 'top', number: '00', name: 'Start' },
  { id: 'about', number: '01', name: 'About' },
  { id: 'currently', number: '02', name: 'Now' },
  { id: 'expertise', number: '03', name: 'Skills' },
  { id: 'work', number: '04', name: 'Work' },
  { id: 'building', number: '05', name: 'Kizuna' },
  { id: 'journey', number: '06', name: 'Journey' },
  { id: 'notes', number: '07', name: 'Notes' },
  { id: 'gallery', number: '08', name: 'Archive' },
  { id: 'newsletter', number: '09', name: 'Dispatches' },
  { id: 'contact', number: '10', name: 'Contact' }
];

export function ScrollSpy() {
  const [activeSection, setActiveSection] = useState('top');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { playPop, playClick } = useSound();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);

      // Determine active section
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sec = SECTIONS[i];
        if (sec.id === 'top') {
          if (scrollY < 300) {
            setActiveSection('top');
            break;
          }
        } else {
          const el = document.getElementById(sec.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.45) {
              setActiveSection(sec.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    playClick();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <aside
      aria-label="Section Tracker"
      className={`fixed right-4 md:right-7 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-end gap-2.5 transition-all duration-500 pointer-events-auto select-none ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3 pointer-events-none'
      }`}
    >
      <div className="bg-[#F5F4F0]/85 dark:bg-[#1A1B1E]/85 backdrop-blur-md border border-[#D8D7D2] dark:border-[#2E3138] rounded-full p-2 py-3 flex flex-col items-center gap-2 shadow-xs">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          const isHovered = hoveredSection === sec.id;

          return (
            <div
              key={sec.id}
              className="relative flex items-center justify-end group"
              onMouseEnter={() => {
                setHoveredSection(sec.id);
                playPop();
              }}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Flyout Label on hover */}
              <div
                className={`absolute right-7 px-2 py-0.5 rounded-xs bg-[#111111] dark:bg-[#EDEDEB] text-[#F5F4F0] dark:text-[#111111] text-[10px] font-mono-meta tracking-wider whitespace-nowrap transition-all duration-200 pointer-events-none ${
                  isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-1.5'
                }`}
              >
                <span>{sec.number} · {sec.name}</span>
              </div>

              {/* Indicator Dot / Pill */}
              <button
                onClick={() => scrollTo(sec.id)}
                className={`group relative flex items-center justify-center p-1 rounded-full transition-all duration-200 cursor-pointer ${
                  isActive ? 'scale-110' : 'hover:scale-125'
                }`}
                aria-label={`Scroll to section ${sec.name}`}
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-2 h-4 bg-[#68715F] dark:bg-[#8FA183] shadow-[0_0_8px_rgba(104,113,95,0.6)]'
                      : 'w-1.5 h-1.5 bg-[#D8D7D2] dark:bg-[#3E4147] group-hover:bg-[#111111] dark:group-hover:bg-[#EDEDEB]'
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
