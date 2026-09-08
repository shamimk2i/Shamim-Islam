import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { personalInfo } from '../portfolioData';

interface NavbarProps {
  onOpenCommand: () => void;
}

export function Navbar({ onOpenCommand }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F5F4F0]/85 backdrop-blur-md border-b border-[#D8D7D2]/80 py-3.5 shadow-xs'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Mark */}
          <button
            id="nav-logo-btn"
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#111111]"
            aria-label="Shamim Islam - Return to top"
          >
            <span className="text-[17px] md:text-[18px] font-semibold tracking-tight text-[#111111] transition-transform duration-200 group-hover:-translate-y-px">
              {personalInfo.brandMark}
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#68715F] opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[12px] uppercase font-mono-meta tracking-widest text-[#6E6E6E]" aria-label="Main Navigation">
            <button
              id="nav-link-about"
              onClick={() => scrollToSection('about')}
              className="hover:text-[#111111] transition-colors py-1 cursor-pointer"
            >
              About
            </button>
            <button
              id="nav-link-work"
              onClick={() => scrollToSection('work')}
              className="hover:text-[#111111] transition-colors py-1 cursor-pointer"
            >
              Work
            </button>
            <button
              id="nav-link-journey"
              onClick={() => scrollToSection('journey')}
              className="hover:text-[#111111] transition-colors py-1 cursor-pointer"
            >
              Journey
            </button>
            <button
              id="nav-link-notes"
              onClick={() => scrollToSection('notes')}
              className="hover:text-[#111111] transition-colors py-1 cursor-pointer"
            >
              Writing
            </button>
            <button
              id="nav-link-gallery"
              onClick={() => scrollToSection('gallery')}
              className="hover:text-[#111111] transition-colors py-1 cursor-pointer"
            >
              Gallery
            </button>
          </nav>

          {/* Right Action: Command shortcut & CTA */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* Quick Command shortcut trigger */}
            <button
              id="nav-command-btn"
              onClick={onOpenCommand}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono-meta text-[#6E6E6E] hover:text-[#111111] border border-[#D8D7D2] rounded-xs bg-[#ECEBE7]/40 hover:bg-[#ECEBE7] transition-all cursor-pointer"
              title="Open Command Menu (Press K)"
              aria-label="Open Command Menu"
            >
              <Terminal className="w-3 h-3 text-[#68715F]" />
              <span className="tracking-wider">CMD</span>
              <kbd className="text-[10px] text-[#111111] font-semibold">K</kbd>
            </button>

            {/* Let's Talk CTA */}
            <button
              id="nav-contact-btn"
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 text-[12px] uppercase font-mono-meta tracking-wider text-[#111111] hover:text-[#68715F] transition-colors font-medium cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="nav-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#111111] hover:bg-[#ECEBE7] rounded-xs transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Editorial Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-30 bg-[#F5F4F0] flex flex-col justify-between px-8 pt-28 pb-12 md:hidden"
        >
          <div className="space-y-6">
            <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E]">
              Navigation Index
            </span>
            <div className="flex flex-col space-y-4">
              {[
                { label: '01 — About', id: 'about' },
                { label: '02 — Currently', id: 'currently' },
                { label: '03 — Selected Work', id: 'work' },
                { label: '04 — My Journey', id: 'journey' },
                { label: '05 — Notes & Ideas', id: 'notes' },
                { label: '06 — Visual Gallery', id: 'gallery' },
                { label: '07 — Contact', id: 'contact' }
              ].map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-2xl font-light tracking-tight text-[#111111] hover:text-[#68715F] transition-colors py-1 flex items-center justify-between border-b border-[#D8D7D2]/40"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#6E6E6E]" />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-[#D8D7D2] space-y-3">
            <div className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E]">
              Direct Inquiries
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm font-medium text-[#111111] block hover:text-[#68715F] transition-colors"
            >
              {personalInfo.email}
            </a>
            <div className="flex items-center gap-4 text-xs font-mono-meta text-[#6E6E6E] pt-1">
              <span>Dhaka (GMT+6)</span>
              <span>•</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommand();
                }}
                className="underline underline-offset-4 text-[#111111]"
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
