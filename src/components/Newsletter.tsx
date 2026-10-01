import React, { useState, FormEvent } from 'react';
import { Mail, Check, ArrowRight, Sparkles, Send, RotateCcw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSound } from '../context/SoundContext';
import { MagneticButton } from './MagneticButton';
import { TiltCard } from './TiltCard';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { t } = useLanguage();
  const { playSuccess, playClick, playPop } = useSound();

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !validateEmail(email)) {
      setErrorMsg('Please enter a valid email address.');
      playPop();
      return;
    }

    setIsSubmitting(true);
    playClick();

    // Simulate reliable dispatch & persist to local storage
    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('portfolio_subscribers') || '[]');
        if (!existing.includes(email)) {
          existing.push(email);
          localStorage.setItem('portfolio_subscribers', JSON.stringify(existing));
        }
      } catch {}

      setIsSubmitting(false);
      setIsSubmitted(true);
      playSuccess();
    }, 450);
  };

  const handleReset = () => {
    playClick();
    setEmail('');
    setIsSubmitted(false);
    setErrorMsg('');
  };

  return (
    <section
      id="newsletter"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D8D7D2]/60 dark:border-[#2A2C32]"
    >
      <TiltCard maxTilt={5} scale={1.01} className="w-full">
        <div className="relative overflow-hidden bg-[#ECEBE7]/60 dark:bg-[#1A1B1E]/60 border border-[#D8D7D2] dark:border-[#33363F] rounded-xs p-8 sm:p-12 md:p-16 shadow-xs">
          {/* Subtle architectural grid backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(#999_1px,transparent_1px)] dark:bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

          {/* Glowing ambient sage-green gradient orb */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#68715F]/15 dark:bg-[#8FA183]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F4F0] dark:bg-[#121315] border border-[#D8D7D2] dark:border-[#33363F] rounded-full text-[10px] font-mono-meta uppercase tracking-widest text-[#68715F] dark:text-[#8FA183]">
              <Mail className="w-3 h-3" />
              <span>{t.newsletter.eyebrow}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#111111] dark:text-[#EDEDEB] leading-tight">
              {t.newsletter.heading}
            </h2>

            {/* Subheading */}
            <p className="text-sm md:text-base text-[#6E6E6E] dark:text-[#A0A2A8] font-normal leading-relaxed max-w-xl mx-auto">
              {t.newsletter.subheading}
            </p>

            {/* Form State or Success Animation State */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="pt-4 max-w-md mx-auto space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-[#F5F4F0] dark:bg-[#121315] p-1.5 border border-[#D8D7D2] dark:border-[#33363F] rounded-xs focus-within:border-[#111111] dark:focus-within:border-white transition-colors shadow-xs">
                  <div className="relative flex-1 flex items-center px-3 py-2 sm:py-0">
                    <Mail className="w-4 h-4 text-[#6E6E6E] dark:text-[#8FA183] mr-2.5 shrink-0" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMsg) setErrorMsg('');
                      }}
                      placeholder={t.newsletter.placeholder}
                      disabled={isSubmitting}
                      className="w-full bg-transparent text-sm text-[#111111] dark:text-[#EDEDEB] placeholder:text-[#6E6E6E] dark:placeholder:text-[#6E7075] outline-none font-mono-meta text-xs"
                      aria-label="Email address"
                    />
                  </div>

                  <MagneticButton
                    type="submit"
                    strength={0.2}
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-[#111111] text-[#F5F4F0] dark:bg-[#EDEDEB] dark:text-[#111111] text-xs uppercase font-mono-meta tracking-wider hover:bg-[#68715F] dark:hover:bg-[#8FA183] dark:hover:text-white transition-colors rounded-xs flex items-center justify-center gap-2 cursor-pointer shrink-0 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>{t.newsletter.subscribing}</span>
                      </span>
                    ) : (
                      <>
                        <span>{t.newsletter.button}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </MagneticButton>
                </div>

                {errorMsg && (
                  <p className="text-xs text-[#E55B5B] font-mono-meta animate-in fade-in duration-200">
                    {errorMsg}
                  </p>
                )}

                {/* Unboxed Metadata Note */}
                <div className="flex items-center justify-center gap-2 text-[11px] font-mono-meta text-[#6E6E6E] dark:text-[#8E9096] pt-1">
                  <Sparkles className="w-3 h-3 text-[#68715F] dark:text-[#8FA183]" />
                  <span>{t.newsletter.frequency}</span>
                </div>
              </form>
            ) : (
              /* Success Animation Container */
              <div
                role="status"
                aria-live="polite"
                className="pt-4 max-w-md mx-auto space-y-4 animate-in fade-in zoom-in-95 duration-400"
              >
                {/* Animated Concentric Checkmark Badge */}
                <div className="relative mx-auto w-16 h-16 flex items-center justify-center">
                  {/* Expanding ring */}
                  <div className="absolute inset-0 rounded-full bg-[#68715F]/20 dark:bg-[#8FA183]/25 animate-ping opacity-75 duration-1000" />
                  <div className="relative w-14 h-14 rounded-full bg-[#68715F] dark:bg-[#8FA183] text-white flex items-center justify-center shadow-lg transition-transform animate-in zoom-in duration-300">
                    <Check className="w-7 h-7 stroke-[2.5]" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-light text-[#111111] dark:text-[#EDEDEB] tracking-tight">
                    {t.newsletter.successTitle}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono-meta text-[#6E6E6E] dark:text-[#A0A2A8] leading-relaxed">
                    {t.newsletter.successDesc}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-center gap-3">
                  <span className="text-[11px] font-mono-meta text-[#68715F] dark:text-[#8FA183] px-3 py-1 bg-[#68715F]/10 dark:bg-[#8FA183]/15 border border-[#68715F]/30 rounded-full">
                    {email}
                  </span>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs font-mono-meta text-[#6E6E6E] hover:text-[#111111] dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{t.newsletter.resetButton}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </TiltCard>
    </section>
  );
}
