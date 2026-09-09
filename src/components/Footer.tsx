import { useState, useEffect } from 'react';
import { ArrowUp, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../portfolioData';

interface FooterProps {
  onOpenCommand: () => void;
}

export function Footer({ onOpenCommand }: FooterProps) {
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171717] text-[#F5F4F0] pt-20 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Logo & Manifesto */}
          <div className="md:col-span-6 space-y-4">
            <button
              onClick={scrollToTop}
              className="text-2xl sm:text-3xl font-light tracking-tight hover:text-[#68715F] transition-colors inline-flex items-center gap-2"
            >
              <span>{personalInfo.brandMark}</span>
              <span className="w-2 h-2 rounded-full bg-[#68715F]" />
            </button>

            <p className="text-sm font-mono-meta text-[#F5F4F0]/60 max-w-sm leading-relaxed">
              {personalInfo.subheadline}
            </p>

            <div className="pt-2">
              <span className="text-xs font-mono-meta text-[#68715F] uppercase tracking-widest block">
                {personalInfo.location} • {personalInfo.coordinates}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#F5F4F0]/50 block">
              Index
            </span>
            <ul className="space-y-2 text-xs font-mono-meta tracking-wider text-[#F5F4F0]/80">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-[#F5F4F0] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('currently')}
                  className="hover:text-[#F5F4F0] transition-colors"
                >
                  Currently (Now)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('work')}
                  className="hover:text-[#F5F4F0] transition-colors"
                >
                  Selected Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('journey')}
                  className="hover:text-[#F5F4F0] transition-colors"
                >
                  Journey
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('notes')}
                  className="hover:text-[#F5F4F0] transition-colors"
                >
                  Writing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="hover:text-[#F5F4F0] transition-colors"
                >
                  Visual Archive
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Palette shortcut */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#F5F4F0]/50 block">
              Network
            </span>
            <ul className="space-y-1.5 text-xs font-mono-meta tracking-wider text-[#F5F4F0]/80">
              {[
                { label: 'YouTube ↗', href: personalInfo.youtube },
                { label: 'Instagram ↗', href: personalInfo.instagram },
                { label: 'GitHub ↗', href: personalInfo.github },
                { label: 'LinkedIn ↗', href: personalInfo.linkedin },
                { label: 'X / Twitter ↗', href: personalInfo.twitter },
                { label: 'Facebook ↗', href: personalInfo.facebook },
                { label: 'Twitch ↗', href: personalInfo.twitch },
                { label: 'TikTok ↗', href: personalInfo.tiktok },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F5F4F0] hover:translate-x-0.5 transition-all inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenCommand}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono-meta text-[#F5F4F0]/70 hover:text-[#F5F4F0] border border-white/20 rounded-xs bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Terminal className="w-3 h-3 text-[#68715F]" />
                <span>Command Menu [K]</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Easter Egg & Back to top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-meta text-[#F5F4F0]/50">
          <div className="flex items-center gap-4">
            <span>© {currentYear} Shamim Islam.</span>
            <span>•</span>
            <span className="text-[#F5F4F0]/80">Built with curiosity.</span>
          </div>

          {/* Easter egg trigger mark */}
          <div className="flex items-center gap-4">
            <div
              onMouseEnter={() => setEasterEggActive(true)}
              onMouseLeave={() => setEasterEggActive(false)}
              className="relative cursor-pointer py-1 px-2 border border-transparent hover:border-white/20 rounded-xs transition-colors"
            >
              <span className="text-[11px] text-[#68715F]">
                {easterEggActive ? 'Still exploring.' : '●'}
              </span>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#F5F4F0] hover:text-[#68715F] transition-colors py-1"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
