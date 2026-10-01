import { ArrowDownRight, ArrowUpRight, ArrowDown, Headphones, Volume2 } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useReading } from '../context/ReadingContext';
import { useSound } from '../context/SoundContext';
import { MagneticButton } from './MagneticButton';
import { TiltCard } from './TiltCard';
import { HeroConstellation } from './HeroConstellation';
import { INTRO_VOICE_LIST } from '../data/introVoices';
import { SupportedLanguage } from '../types';

export function Hero() {
  const { t, language } = useLanguage();
  const { playShamimVoiceIntro, isReading, isPlayingVoiceFile, currentVoiceLang } = useReading();
  const { playClick } = useSound();

  const scrollToSection = (id: string) => {
    playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleListenBio = (targetLang?: SupportedLanguage) => {
    playShamimVoiceIntro(targetLang || language);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-between pt-24 md:pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D8D7D2]/60 dark:border-[#2A2C32] overflow-hidden"
    >
      {/* Lightweight Interactive Canvas Constellation Background */}
      <HeroConstellation />

      {/* Main Hero Split Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-6 lg:py-10">
        {/* Left Column: Massive Editorial Typography & Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Micro stats banner above heading */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6 sm:gap-8 mb-6 text-xs font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E]"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-light text-[#111111] dark:text-[#EDEDEB]">{personalInfo.stats[0].value}</span>
              <span className="uppercase tracking-wider text-[10px]">{t.hero.yearsExploring}</span>
            </div>
            <div className="h-4 w-px bg-[#D8D7D2] dark:bg-[#33363F]" />
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-light text-[#68715F] dark:text-[#8FA183]">{personalInfo.stats[1].value}</span>
              <span className="uppercase tracking-wider text-[10px]">{t.hero.curiosity}</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-[#D8D7D2] dark:bg-[#33363F]" />
            <div className="hidden sm:flex items-baseline gap-2">
              <span className="text-2xl font-light text-[#111111] dark:text-[#EDEDEB]">{personalInfo.stats[2].value}</span>
              <span className="uppercase tracking-wider text-[10px]">{t.hero.hardwareWeb}</span>
            </div>
          </motion.div>

          {/* Oversized Editorial Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[108px] font-light tracking-[-0.035em] text-[#111111] dark:text-[#EDEDEB] leading-[0.94] mb-8 select-none whitespace-pre-line"
          >
            {t.hero.greeting}
          </motion.h1>

          {/* Subtitle statement */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-[#6E6E6E] dark:text-[#A0A2A8] font-normal leading-relaxed mb-6 max-w-xl"
          >
            {t.hero.subheadline}
          </motion.p>

          {/* Compact Narrative Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm text-[#6E6E6E] dark:text-[#9A9B9E] font-mono-meta leading-relaxed mb-10 max-w-xl space-y-3"
          >
            <p>{t.hero.bio1}</p>
            <p>{t.hero.bio2}</p>
          </motion.div>

          {/* Action CTAs with Magnetic Effect */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <MagneticButton
              id="hero-explore-btn"
              onClick={() => scrollToSection('work')}
              strength={0.25}
              className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[#111111] text-[#F5F4F0] dark:bg-[#EDEDEB] dark:text-[#111111] text-xs uppercase font-mono-meta tracking-widest hover:bg-[#68715F] dark:hover:bg-[#8FA183] dark:hover:text-white transition-all duration-300 rounded-xs cursor-pointer shadow-sm"
            >
              <span>{t.hero.ctaWork}</span>
              <ArrowDownRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </MagneticButton>

            <MagneticButton
              id="hero-talk-btn"
              onClick={() => scrollToSection('contact')}
              strength={0.25}
              className="group inline-flex items-center gap-3 px-6 py-3.5 border border-[#D8D7D2] dark:border-[#3E4147] text-[#111111] dark:text-[#EDEDEB] text-xs uppercase font-mono-meta tracking-widest hover:border-[#111111] dark:hover:border-white hover:bg-[#ECEBE7] dark:hover:bg-[#232529] transition-all duration-300 rounded-xs cursor-pointer"
            >
              <span>{t.hero.ctaContact}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>

            {/* Authentic Multilingual Shamim Voice Note Player Widget */}
            <div className="inline-flex flex-wrap items-center gap-1.5 p-1 bg-[#ECEBE7]/60 dark:bg-[#1A1B1E] border border-[#D8D7D2] dark:border-[#33363F] rounded-full">
              <MagneticButton
                onClick={() => handleListenBio(language)}
                strength={0.15}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-mono-meta tracking-wider transition-all cursor-pointer ${
                  isPlayingVoiceFile && isReading
                    ? 'bg-[#68715F] text-white border-[#68715F] shadow-[0_0_12px_rgba(104,113,95,0.4)]'
                    : 'bg-transparent border-transparent text-[#111111] dark:text-[#EDEDEB] hover:text-[#68715F]'
                }`}
                title={`Listen to Shamim's authentic audio intro greeting in ${language.toUpperCase()}`}
              >
                {isPlayingVoiceFile && isReading ? (
                  <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#A5C28F]" />
                ) : (
                  <Headphones className="w-3.5 h-3.5 text-[#68715F] dark:text-[#8FA183]" />
                )}
                <span className="font-semibold uppercase text-[11px]">
                  {isPlayingVoiceFile && isReading ? t.hero.playingVoiceIntro : t.hero.voiceIntro}
                </span>
                {isPlayingVoiceFile && isReading && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                )}
              </MagneticButton>

              <div className="hidden sm:block h-4 w-px bg-[#D8D7D2] dark:bg-[#33363F] mx-0.5" />

              {/* Multilingual Voice Direct Switcher: EN, JA, ES, BN */}
              <div className="flex items-center gap-1 pr-1">
                {INTRO_VOICE_LIST.map((voice) => {
                  const isPlayingThis = isPlayingVoiceFile && isReading && currentVoiceLang === voice.language;
                  const isCurrentSiteLang = language === voice.language;
                  return (
                    <button
                      key={voice.language}
                      onClick={() => handleListenBio(voice.language)}
                      className={`px-2 py-1 rounded-full text-[10px] font-mono-meta transition-all cursor-pointer flex items-center gap-1 ${
                        isPlayingThis
                          ? 'bg-[#68715F] text-white font-bold ring-1 ring-emerald-400 shadow-xs'
                          : isCurrentSiteLang
                          ? 'bg-[#111111]/10 dark:bg-white/10 text-[#111111] dark:text-white font-medium hover:bg-[#68715F]/20'
                          : 'text-[#6E6E6E] dark:text-[#9A9B9E] hover:text-[#111111] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                      title={`Play intro in ${voice.label} (${voice.nativeLabel})`}
                    >
                      <span>{voice.flag}</span>
                      <span className="uppercase font-semibold text-[10px]">{voice.code}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Monochrome Editorial Photo Component with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <TiltCard
            maxTilt={9}
            scale={1.018}
            className="w-full max-w-md mx-auto lg:ml-auto"
            cursorType="project"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] bg-[#ECEBE7] dark:bg-[#1A1B1E] border border-[#D8D7D2] dark:border-[#33363F] overflow-hidden group shadow-lg rounded-xs">
              {/* Hero Image */}
              <img
                src={personalInfo.heroImage || personalInfo.profileImage}
                alt="Shamim Islam"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                loading="eager"
              />

              {/* Subtle photographic framing lines */}
              <div className="absolute inset-0 pointer-events-none border border-white/20 m-3 rounded-xs" />

              {/* Top right location badge */}
              <div className="absolute top-5 right-5 z-10 pointer-events-none">
                <div className="flex items-center gap-2 px-2.5 py-1 bg-[#111111]/85 backdrop-blur-md text-[#F5F4F0] text-[10px] font-mono-meta tracking-wider rounded-xs border border-white/10 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#68715F] animate-pulse" />
                  <span>DHAKA, BD</span>
                </div>
              </div>

              {/* Bottom metadata stamp */}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#111111]/90 via-[#111111]/50 to-transparent flex items-end justify-between text-[#F5F4F0]">
                <div>
                  <span className="text-[10px] font-mono-meta uppercase tracking-widest text-[#F5F4F0]/70 block">
                    Subject Ref
                  </span>
                  <span className="text-xs font-mono-meta tracking-wider">
                    01 / SHAMIM ISLAM
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono-meta tracking-widest text-[#68715F] font-semibold">
                    EST. 2026
                  </span>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Metadata caption below image */}
          <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono-meta uppercase tracking-wider text-[#6E6E6E] dark:text-[#9A9B9E] border-t border-[#D8D7D2] dark:border-[#2A2C32] max-w-md mx-auto lg:ml-auto">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#68715F] dark:bg-[#8FA183] animate-pulse" />
              <span className="text-[#111111] dark:text-white font-medium">{personalInfo.role}</span>
              <span className="text-[#D8D7D2] dark:text-[#33363F]">•</span>
              <span>{personalInfo.secondaryRole}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{personalInfo.location}</span>
              <span className="text-[#D8D7D2] dark:text-[#33363F]">•</span>
              <span>{personalInfo.gmtOffset}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom Bar: Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="relative z-10 pt-6 flex items-center justify-between text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E] dark:text-[#9A9B9E]"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="inline-flex items-center gap-2 hover:text-[#111111] dark:hover:text-white transition-colors group cursor-pointer"
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#68715F] dark:text-[#8FA183] group-hover:translate-y-0.5 transition-transform" />
          <span>{t.hero.scrollHint}</span>
        </button>

        <div className="hidden sm:flex items-center gap-4">
          <span>{personalInfo.coordinates}</span>
          <span className="text-[#D8D7D2] dark:text-[#33363F]">/</span>
          <span>CURIOUS EXPLORATION</span>
        </div>
      </motion.div>
    </section>
  );
}
