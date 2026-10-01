import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Terminal, Sun, Moon, Volume2, VolumeX, Headphones, Globe, Check, ChevronDown } from 'lucide-react';
import { personalInfo } from '../portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useSound } from '../context/SoundContext';
import { useReading } from '../context/ReadingContext';
import { useLanguage } from '../context/LanguageContext';
import { MagneticButton } from './MagneticButton';
import { SupportedLanguage } from '../types';

interface NavbarProps {
  onOpenCommand: () => void;
}

export function Navbar({ onOpenCommand }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const { isDark, toggleTheme } = useTheme();
  const { isSoundEnabled, toggleSound, playClick, playPop } = useSound();
  const { isReading, readPortfolioOverview, stopReading } = useReading();
  const { language, setLanguage, t, languageNames } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (id: string) => {
    playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReadToggle = () => {
    if (isReading) {
      stopReading();
    } else {
      readPortfolioOverview();
    }
  };

  const handleLanguageSelect = (code: SupportedLanguage) => {
    setLanguage(code);
    setLangMenuOpen(false);
  };

  const activeLangItem = languageNames.find((l) => l.code === language) || languageNames[0];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F5F4F0]/85 dark:bg-[#121315]/85 backdrop-blur-md border-b border-[#D8D7D2]/80 dark:border-[#2A2C32] py-3 shadow-xs'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Mark */}
          <button
            id="nav-logo-btn"
            onClick={scrollToTop}
            className="group flex items-center gap-2.5 text-left focus:outline-none cursor-pointer"
            aria-label="Shamim Islam - Return to top"
          >
            <img
              src={personalInfo.heroImage}
              alt="Logo"
              className="w-5 h-5 rounded-xs object-cover border border-[#D8D7D2]/80 dark:border-white/20 bg-black shrink-0"
            />
            <span className="text-[17px] md:text-[18px] font-semibold tracking-tight text-[#111111] dark:text-[#EDEDEB] transition-transform duration-200 group-hover:-translate-y-px">
              {personalInfo.brandMark}
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#68715F] dark:bg-[#8FA183] opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-[12px] uppercase font-mono-meta tracking-widest text-[#6E6E6E] dark:text-[#9A9B9E]" aria-label="Main Navigation">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-[#111111] dark:hover:text-white transition-colors py-1 cursor-pointer"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="hover:text-[#111111] dark:hover:text-white transition-colors py-1 cursor-pointer"
            >
              {t.nav.work}
            </button>
            <button
              onClick={() => scrollToSection('journey')}
              className="hover:text-[#111111] dark:hover:text-white transition-colors py-1 cursor-pointer"
            >
              {t.nav.journey}
            </button>
            <button
              onClick={() => scrollToSection('notes')}
              className="hover:text-[#111111] dark:hover:text-white transition-colors py-1 cursor-pointer"
            >
              {t.nav.writing}
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="hover:text-[#111111] dark:hover:text-white transition-colors py-1 cursor-pointer"
            >
              {t.nav.gallery}
            </button>
          </nav>

          {/* Right Action Cluster: Language, Sound, Read, Theme, Command, CTA */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* 1. Language Toggle Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => {
                  playPop();
                  setLangMenuOpen(!langMenuOpen)}
                }
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-[#D8D7D2] dark:border-[#31333A] bg-[#ECEBE7]/60 dark:bg-[#1C1D21] text-[11px] font-mono-meta text-[#111111] dark:text-[#EDEDEB] hover:border-[#111111]/40 dark:hover:border-white/30 transition-all cursor-pointer shadow-xs"
                title="Select language (English, Japanese, Spanish, Bangla)"
                aria-expanded={langMenuOpen}
              >
                <Globe className="w-3.5 h-3.5 text-[#68715F] dark:text-[#8FA183]" />
                <span className="font-semibold uppercase">{activeLangItem.flag}</span>
                <ChevronDown className={`w-3 h-3 text-[#6E6E6E] transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Language Dropdown Menu */}
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#F5F4F0] dark:bg-[#1A1B1E] border border-[#D8D7D2] dark:border-[#33363F] rounded-xs shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1 text-[10px] font-mono-meta uppercase tracking-wider text-[#6E6E6E] dark:text-[#8E9096] border-b border-[#D8D7D2]/60 dark:border-[#2D3037] mb-1">
                    Select Language
                  </div>
                  {languageNames.map((item) => {
                    const isSelected = item.code === language;
                    return (
                      <button
                        key={item.code}
                        onClick={() => handleLanguageSelect(item.code)}
                        className={`w-full flex items-center justify-between px-3 py-1.5 text-xs font-mono-meta text-left transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#68715F]/15 dark:bg-[#8FA183]/20 text-[#111111] dark:text-white font-semibold'
                            : 'text-[#6E6E6E] dark:text-[#A0A2A8] hover:bg-[#ECEBE7] dark:hover:bg-[#25272D] hover:text-[#111111] dark:hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono px-1 bg-black/5 dark:bg-white/10 rounded-xs">
                            {item.flag}
                          </span>
                          <span>{item.label}</span>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#68715F] dark:text-[#8FA183]" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 2. Tactile Sound Toggle */}
            <button
              onClick={toggleSound}
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border transition-all cursor-pointer shadow-xs ${
                isSoundEnabled
                  ? 'border-[#68715F]/40 bg-[#68715F]/10 text-[#111111] dark:text-[#EDEDEB]'
                  : 'border-[#D8D7D2] dark:border-[#31333A] bg-[#ECEBE7]/60 dark:bg-[#1C1D21] text-[#6E6E6E]'
              }`}
              title={isSoundEnabled ? 'Mute Sound' : 'Enable Audio Feedback'}
              aria-label={isSoundEnabled ? 'Mute Sound' : 'Enable Audio Feedback'}
            >
              {isSoundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#68715F] dark:text-[#8FA183]" />
                  <span className="text-[10px] font-mono-meta font-medium tracking-wider uppercase hidden md:inline">
                    {t.nav.soundOn}
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#6E6E6E]" />
                  <span className="text-[10px] font-mono-meta tracking-wider uppercase hidden md:inline">
                    {t.nav.soundOff}
                  </span>
                </>
              )}
            </button>

            {/* 3. Read Aloud Speech Button */}
            <button
              onClick={handleReadToggle}
              className={`hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border transition-all cursor-pointer shadow-xs ${
                isReading
                  ? 'border-[#68715F] bg-[#68715F] text-white'
                  : 'border-[#D8D7D2] dark:border-[#31333A] bg-[#ECEBE7]/60 dark:bg-[#1C1D21] text-[#111111] dark:text-[#EDEDEB]'
              }`}
              title={isReading ? 'Stop Narration' : 'Listen to Portfolio Narration'}
              aria-label={isReading ? 'Stop Narration' : 'Listen to Portfolio Narration'}
            >
              <Headphones className={`w-3.5 h-3.5 ${isReading ? 'animate-bounce' : ''}`} />
              <span className="text-[10px] font-mono-meta font-medium tracking-wider uppercase">
                {isReading ? t.nav.reading : t.nav.readAloud}
              </span>
            </button>

            {/* 4. Theme Appearance Toggle */}
            <button
              id="nav-theme-toggle-btn"
              onClick={toggleTheme}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border transition-all cursor-pointer shadow-xs ${
                isDark
                  ? 'bg-[#1C1D21] border-[#31333A] text-[#EDEDEB] hover:bg-[#25272D]'
                  : 'bg-[#ECEBE7]/60 border-[#D8D7D2] text-[#111111] hover:bg-[#ECEBE7]'
              }`}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDark ? (
                <Sun className="w-3.5 h-3.5 text-[#E5C158]" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-[#68715F]" />
              )}
              <span className="text-[10px] font-mono-meta tracking-wider uppercase hidden lg:inline">
                {isDark ? t.nav.lightTheme : t.nav.darkTheme}
              </span>
            </button>

            {/* 5. Command Menu Shortcut Trigger */}
            <button
              id="nav-command-btn"
              onClick={onOpenCommand}
              className="hidden lg:flex items-center gap-1.5 px-2 py-1.5 text-[11px] font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E] hover:text-[#111111] dark:hover:text-white border border-[#D8D7D2] dark:border-[#31333A] rounded-full bg-[#ECEBE7]/40 dark:bg-[#1C1D21] transition-all cursor-pointer"
              title="Open Command Menu (Press K)"
              aria-label="Open Command Menu"
            >
              <Terminal className="w-3 h-3 text-[#68715F] dark:text-[#8FA183]" />
              <kbd className="text-[10px] text-[#111111] dark:text-[#EDEDEB] font-semibold">K</kbd>
            </button>

            {/* 6. Magnetic CTA: Let's Talk */}
            <MagneticButton
              onClick={() => scrollToSection('contact')}
              strength={0.25}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] uppercase font-mono-meta tracking-wider text-[#111111] dark:text-[#EDEDEB] hover:text-[#68715F] dark:hover:text-[#8FA183] border border-[#111111]/20 dark:border-white/20 rounded-full hover:border-[#68715F] transition-all cursor-pointer font-medium"
            >
              <span>{t.nav.letsTalk}</span>
              <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>

            {/* Mobile Menu Hamburger */}
            <button
              id="nav-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#111111] dark:text-[#EDEDEB] hover:bg-[#ECEBE7] dark:hover:bg-[#1C1D21] rounded-xs transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-30 bg-[#F5F4F0] dark:bg-[#121315] text-[#111111] dark:text-[#EDEDEB] flex flex-col justify-between px-8 pt-24 pb-8 xl:hidden overflow-y-auto"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#D8D7D2] dark:border-[#292B30] pb-3">
              <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E] dark:text-[#8E9096]">
                Navigation Index
              </span>
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-1">
                {languageNames.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => handleLanguageSelect(item.code)}
                    className={`px-2 py-1 text-[10px] font-mono rounded-xs ${
                      language === item.code
                        ? 'bg-[#111111] text-white dark:bg-white dark:text-black font-bold'
                        : 'text-[#6E6E6E] hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {item.flag}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              {[
                { label: `01 / ${t.nav.about}`, id: 'about' },
                { label: '02 / Currently', id: 'currently' },
                { label: `03 / ${t.nav.work}`, id: 'work' },
                { label: `04 / ${t.nav.journey}`, id: 'journey' },
                { label: `05 / ${t.nav.writing}`, id: 'notes' },
                { label: `06 / ${t.nav.gallery}`, id: 'gallery' },
                { label: `07 / ${t.nav.contact}`, id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-2xl font-light tracking-tight text-[#111111] dark:text-[#EDEDEB] hover:text-[#68715F] dark:hover:text-[#8FA183] transition-colors py-1.5 flex items-center justify-between border-b border-[#D8D7D2]/40 dark:border-[#292B30]/40"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#6E6E6E]" />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#D8D7D2] dark:border-[#292B30] space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {/* Sound Toggle */}
              <button
                onClick={toggleSound}
                className="flex items-center justify-center gap-2 p-2.5 rounded-xs border border-[#D8D7D2] dark:border-[#292B30] text-xs font-mono-meta"
              >
                {isSoundEnabled ? <Volume2 className="w-4 h-4 text-[#8FA183]" /> : <VolumeX className="w-4 h-4" />}
                <span>{isSoundEnabled ? 'Sound: ON' : 'Sound: OFF'}</span>
              </button>

              {/* Read Aloud */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleReadToggle();
                }}
                className="flex items-center justify-center gap-2 p-2.5 rounded-xs border border-[#D8D7D2] dark:border-[#292B30] text-xs font-mono-meta"
              >
                <Headphones className="w-4 h-4 text-[#8FA183]" />
                <span>{isReading ? 'Stop Audio' : 'Listen Now'}</span>
              </button>
            </div>

            <div className="flex items-center justify-between text-xs font-mono-meta text-[#6E6E6E] dark:text-[#8E9096] pt-1">
              <span>{personalInfo.location}</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommand();
                }}
                className="underline underline-offset-4 text-[#111111] dark:text-white"
              >
                Press K for palette
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
