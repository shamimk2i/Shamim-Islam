import { ArrowDownRight, ArrowUpRight, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../portfolioData';

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D8D7D2]/60"
    >
      {/* Main Hero Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-8 lg:py-12">
        {/* Left Column: Massive Editorial Typography & Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Micro stats banner above heading */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-8 mb-6 text-xs font-mono-meta text-[#6E6E6E]"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-light text-[#111111]">{personalInfo.stats[0].value}</span>
              <span className="uppercase tracking-wider text-[10px]">{personalInfo.stats[0].label}</span>
            </div>
            <div className="h-4 w-px bg-[#D8D7D2]" />
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-light text-[#68715F]">{personalInfo.stats[1].value}</span>
              <span className="uppercase tracking-wider text-[10px]">{personalInfo.stats[1].label}</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-[#D8D7D2]" />
            <div className="hidden sm:flex items-baseline gap-2">
              <span className="text-2xl font-light text-[#111111]">{personalInfo.stats[2].value}</span>
              <span className="uppercase tracking-wider text-[10px]">{personalInfo.stats[2].label}</span>
            </div>
          </motion.div>

          {/* Oversized Editorial Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[112px] font-light tracking-[-0.035em] text-[#111111] leading-[0.94] mb-8 select-none"
          >
            Hello,
            <br />
            <span className="text-[#111111]/90">I&apos;m Shamim.</span>
          </motion.h1>

          {/* Subtitle statement */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-[#6E6E6E] font-normal leading-relaxed max-w-xl mb-10"
          >
            {personalInfo.subheadline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <button
              id="hero-explore-btn"
              onClick={() => scrollToSection('work')}
              className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[#111111] text-[#F5F4F0] text-xs uppercase font-mono-meta tracking-widest hover:bg-[#68715F] transition-all duration-300 rounded-xs cursor-pointer shadow-sm"
            >
              <span>Explore my work</span>
              <ArrowDownRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>

            <button
              id="hero-talk-btn"
              onClick={() => scrollToSection('contact')}
              className="group inline-flex items-center gap-3 px-6 py-3.5 border border-[#D8D7D2] text-[#111111] text-xs uppercase font-mono-meta tracking-widest hover:border-[#111111] hover:bg-[#ECEBE7] transition-all duration-300 rounded-xs cursor-pointer"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>

        {/* Right Column: Monochrome Editorial Photo Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div
            data-cursor="project"
            className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-w-md mx-auto lg:ml-auto bg-[#ECEBE7] border border-[#D8D7D2] overflow-hidden group shadow-lg rounded-xs"
          >
            {/* Hero Image */}
            <img
              src={personalInfo.heroImage || personalInfo.profileImage}
              alt="Shamim Islam"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
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

          {/* Metadata caption below image */}
          <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono-meta uppercase tracking-wider text-[#6E6E6E] border-t border-[#D8D7D2] max-w-md mx-auto lg:ml-auto">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#68715F] animate-pulse" />
              <span className="text-[#111111] font-medium">{personalInfo.role}</span>
              <span className="text-[#D8D7D2]">•</span>
              <span>{personalInfo.secondaryRole}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{personalInfo.location}</span>
              <span className="text-[#D8D7D2]">•</span>
              <span>{personalInfo.gmtOffset}</span>
            </div>
          </div>

          {/* Background subtle offset geometric frame */}
          <div className="hidden lg:block absolute -bottom-4 -right-4 w-full h-full border border-[#D8D7D2] -z-10 pointer-events-none" />
        </motion.div>
      </div>

      {/* Hero Bottom Bar: Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="pt-6 flex items-center justify-between text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E]"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="inline-flex items-center gap-2 hover:text-[#111111] transition-colors group cursor-pointer"
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#68715F] group-hover:translate-y-0.5 transition-transform" />
          <span>Scroll down</span>
        </button>

        <div className="hidden sm:flex items-center gap-4">
          <span>{personalInfo.coordinates}</span>
          <span className="text-[#D8D7D2]">/</span>
          <span>CURIOUS EXPLORATION</span>
        </div>
      </motion.div>
    </section>
  );
}
