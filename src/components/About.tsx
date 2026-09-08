import { useEffect, useState } from 'react';
import { Compass, Clock, MapPin, ArrowUpRight, Terminal } from 'lucide-react';
import { personalInfo } from '../portfolioData';

export function About() {
  const [dhakaTime, setDhakaTime] = useState('');

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

  return (
    <section
      id="about"
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D8D7D2]/60"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Sticky Section Marker & Large Title */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#68715F]" />
              <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E]">
                01 / ABOUT
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111] leading-[1.05] mb-6">
              A little
              <br />
              <span className="text-[#68715F]">about me.</span>
            </h2>

            <p className="text-sm font-mono-meta text-[#6E6E6E] leading-relaxed max-w-sm">
              Exploring the convergence of computer science, human interaction, and minimalist design.
            </p>
          </div>

          {/* Secondary Thumbnail & Coordinates System */}
          <div className="hidden lg:block pt-12">
            <div className="p-5 bg-[#ECEBE7] border border-[#D8D7D2] rounded-xs space-y-4 max-w-sm">
              <div className="flex items-center justify-between text-[11px] font-mono-meta text-[#6E6E6E]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#68715F]" />
                  {personalInfo.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#6E6E6E]" />
                  {dhakaTime || 'Active'}
                </span>
              </div>

              <div className="flex items-center gap-4 pt-1 border-t border-[#D8D7D2]/60">
                <div className="w-16 h-16 bg-[#F5F4F0] border border-[#D8D7D2] overflow-hidden shrink-0">
                  <img
                    src={personalInfo.profileSecondaryImage}
                    alt="Atmospheric study"
                    className="w-full h-full object-cover editorial-img"
                    loading="lazy"
                  />
                </div>
                <div className="text-xs text-[#6E6E6E] font-normal leading-tight">
                  <span className="text-[#111111] font-medium block mb-1">Polymath Mindset</span>
                  Synthesizing code, visual identity, and strategic product thinking.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Small Metrics */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
          <div className="space-y-6 text-[16px] sm:text-[18px] font-normal text-[#111111]/90 leading-[1.65]">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "text-xl sm:text-2xl font-light text-[#111111] leading-relaxed" : ""}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Editorial Details Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-[#D8D7D2]">
            <div>
              <span className="text-[10px] font-mono-meta uppercase tracking-widest text-[#6E6E6E] block mb-1.5">
                Current Role
              </span>
              <span className="text-sm font-medium text-[#111111] block">
                {personalInfo.role}
              </span>
              <span className="text-xs text-[#68715F] font-mono-meta">
                Self-directed
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono-meta uppercase tracking-widest text-[#6E6E6E] block mb-1.5">
                Coordinates
              </span>
              <span className="text-sm font-medium text-[#111111] font-mono-meta block">
                {personalInfo.coordinates}
              </span>
              <span className="text-xs text-[#6E6E6E] font-mono-meta">
                Dhaka, BD
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono-meta uppercase tracking-widest text-[#6E6E6E] block mb-1.5">
                Foundation
              </span>
              <span className="text-sm font-medium text-[#111111] block">
                Science & Logic
              </span>
              <span className="text-xs text-[#68715F] font-mono-meta">
                SSC 2026
              </span>
            </div>
          </div>

          {/* Interactive discovery bar */}
          <div className="p-4 bg-[#ECEBE7]/60 border border-[#D8D7D2] flex flex-wrap items-center justify-between gap-4 text-xs font-mono-meta text-[#6E6E6E]">
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#68715F]" />
              <span>Core conviction: Software as an editorial and tactile medium.</span>
            </div>
            <a
              href="#journey"
              className="inline-flex items-center gap-1 text-[#111111] hover:text-[#68715F] transition-colors"
            >
              <span>See my journey</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
