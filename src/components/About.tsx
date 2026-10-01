import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Clock, MapPin, ArrowUpRight, Headphones } from 'lucide-react';
import { personalInfo } from '../portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useReading } from '../context/ReadingContext';
import { TiltCard } from './TiltCard';

export function About() {
  const [dhakaTime, setDhakaTime] = useState('');
  const { t, language } = useLanguage();
  const { playShamimVoiceIntro } = useReading();

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Dhaka',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(now);
        setDhakaTime(formatted);
      } catch {
        setDhakaTime('GMT+6:00');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleReadAbout = () => {
    playShamimVoiceIntro();
  };

  return (
    <section
      id="about"
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D8D7D2]/60 dark:border-[#2A2C32] overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Framer Motion Observer Fade-In & Slide-Up */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#68715F] dark:bg-[#8FA183]" />
              <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E] dark:text-[#9A9B9E]">
                {t.about.eyebrow}
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111] dark:text-[#EDEDEB] leading-[1.05] mb-6">
              A little
              <br />
              <span className="text-[#68715F] dark:text-[#8FA183]">about me.</span>
            </h2>

            <p className="text-sm font-mono-meta text-[#6E6E6E] dark:text-[#A0A2A8] leading-relaxed max-w-sm">
              {t.about.subheading}
            </p>

            <button
              onClick={handleReadAbout}
              className="mt-6 inline-flex items-center gap-2 text-xs font-mono-meta uppercase tracking-wider text-[#68715F] dark:text-[#8FA183] hover:underline cursor-pointer group"
              title={`Play Shamim's voice intro in ${language.toUpperCase()}`}
            >
              <Headphones className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              <span>{t.hero.voiceIntro}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#68715F]/15 dark:bg-[#8FA183]/20 text-[#68715F] dark:text-[#8FA183] font-mono">
                {language.toUpperCase()}
              </span>
            </button>
          </div>

          {/* Secondary Thumbnail & Coordinates System with Tilt */}
          <div className="hidden lg:block pt-10">
            <TiltCard maxTilt={8} scale={1.02}>
              <div className="p-5 bg-[#ECEBE7] dark:bg-[#1A1B1E] border border-[#D8D7D2] dark:border-[#33363F] rounded-xs space-y-4 max-w-sm shadow-xs">
                <div className="flex items-center justify-between text-[11px] font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E]">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#68715F] dark:text-[#8FA183]" />
                    {personalInfo.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#6E6E6E]" />
                    {dhakaTime || 'Active'}
                  </span>
                </div>

                <div className="flex items-center gap-4 pt-1 border-t border-[#D8D7D2]/60 dark:border-[#2D3037]">
                  <div className="w-16 h-16 bg-[#F5F4F0] dark:bg-[#121315] border border-[#D8D7D2] dark:border-[#33363F] overflow-hidden shrink-0 rounded-xs">
                    <img
                      src={personalInfo.profileImage}
                      alt="Shamim Islam"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-xs text-[#6E6E6E] dark:text-[#A0A2A8] font-normal leading-tight">
                    <span className="text-[#111111] dark:text-[#EDEDEB] font-medium block mb-1">Polymath Mindset</span>
                    &ldquo;Jack of all trades is a master of none, but oftentimes better than a master of one&rdquo;
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </motion.div>

        {/* Right Column: Framer Motion Observer Fade-In & Slide-Up */}
        <motion.div
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-between space-y-8"
        >
          <div className="space-y-6 text-[16px] sm:text-[18px] font-normal text-[#111111]/90 dark:text-[#EDEDEB]/90 leading-[1.65]">
            <p className="text-xl sm:text-2xl font-light text-[#111111] dark:text-white leading-relaxed">
              {t.hero.bio1}
            </p>
            <p>
              {t.hero.bio2}
            </p>
            <p>
              {t.hero.bio3}
            </p>
          </div>

          {/* Three Core Pillars with Staggered Viewport Reveal */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#D8D7D2] dark:border-[#2E3138]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-4 bg-[#ECEBE7]/40 dark:bg-[#1A1B1E]/40 border border-[#D8D7D2]/60 dark:border-[#2E3138] rounded-xs space-y-1"
            >
              <span className="text-[10px] font-mono-meta uppercase tracking-wider text-[#68715F] dark:text-[#8FA183] block">
                Pillar 01
              </span>
              <h4 className="text-sm font-semibold text-[#111111] dark:text-[#EDEDEB]">
                {t.about.trait1Title}
              </h4>
              <p className="text-xs text-[#6E6E6E] dark:text-[#9A9B9E] leading-relaxed">
                {t.about.trait1Desc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-4 bg-[#ECEBE7]/40 dark:bg-[#1A1B1E]/40 border border-[#D8D7D2]/60 dark:border-[#2E3138] rounded-xs space-y-1"
            >
              <span className="text-[10px] font-mono-meta uppercase tracking-wider text-[#68715F] dark:text-[#8FA183] block">
                Pillar 02
              </span>
              <h4 className="text-sm font-semibold text-[#111111] dark:text-[#EDEDEB]">
                {t.about.trait2Title}
              </h4>
              <p className="text-xs text-[#6E6E6E] dark:text-[#9A9B9E] leading-relaxed">
                {t.about.trait2Desc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-4 bg-[#ECEBE7]/40 dark:bg-[#1A1B1E]/40 border border-[#D8D7D2]/60 dark:border-[#2E3138] rounded-xs space-y-1"
            >
              <span className="text-[10px] font-mono-meta uppercase tracking-wider text-[#68715F] dark:text-[#8FA183] block">
                Pillar 03
              </span>
              <h4 className="text-sm font-semibold text-[#111111] dark:text-[#EDEDEB]">
                {t.about.trait3Title}
              </h4>
              <p className="text-xs text-[#6E6E6E] dark:text-[#9A9B9E] leading-relaxed">
                {t.about.trait3Desc}
              </p>
            </motion.div>
          </div>

          {/* Interactive conviction bar */}
          <div className="p-4 bg-[#ECEBE7]/60 dark:bg-[#1A1B1E]/60 border border-[#D8D7D2] dark:border-[#2E3138] flex flex-wrap items-center justify-between gap-4 text-xs font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E]">
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#68715F] dark:text-[#8FA183]" />
              <span>Core conviction: Software as an editorial and tactile medium.</span>
            </div>
            <a
              href="#journey"
              className="inline-flex items-center gap-1 text-[#111111] dark:text-white hover:text-[#68715F] dark:hover:text-[#8FA183] transition-colors"
            >
              <span>See my journey</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
