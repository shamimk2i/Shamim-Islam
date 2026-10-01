import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { skillsData } from '../portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useSound } from '../context/SoundContext';

export function Expertise() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useLanguage();
  const { playPop } = useSound();

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    playPop();
  };

  return (
    <section
      id="expertise"
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D8D7D2]/60 dark:border-[#2A2C32]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#68715F] dark:bg-[#8FA183]" />
            <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E] dark:text-[#9A9B9E]">
              {t.expertise.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111] dark:text-[#EDEDEB]">
            {t.expertise.heading}
          </h2>
        </div>

        <p className="text-sm font-mono-meta text-[#6E6E6E] dark:text-[#A0A2A8] max-w-sm">
          {t.expertise.subheading}
        </p>
      </div>

      {/* Editorial Numbered List */}
      <div className="divide-y divide-[#D8D7D2] dark:divide-[#2E3138] border-y border-[#D8D7D2] dark:border-[#2E3138]">
        {skillsData.map((skill, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={skill.number}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group transition-all duration-300 px-4 md:px-8 py-7 md:py-9 ${
                isHovered
                  ? 'bg-[#ECEBE7] dark:bg-[#1A1B1E]'
                  : 'bg-transparent hover:bg-[#ECEBE7]/50 dark:hover:bg-[#1A1B1E]/40'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
                {/* Number & Category */}
                <div className="lg:col-span-3 flex items-center justify-between lg:justify-start gap-4">
                  <span className="font-mono-meta text-xs md:text-sm text-[#68715F] dark:text-[#8FA183] font-medium tracking-wider">
                    {skill.number}
                  </span>
                  <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E] dark:text-[#9A9B9E] px-2 py-0.5 border border-[#D8D7D2] dark:border-[#353842] rounded-xs bg-[#F5F4F0]/60 dark:bg-[#23252B]">
                    {skill.category}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h3 className="text-2xl sm:text-3xl font-light text-[#111111] dark:text-[#EDEDEB] group-hover:text-[#68715F] dark:group-hover:text-[#8FA183] transition-colors flex items-center gap-3">
                    {skill.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-4">
                  <p className="text-sm text-[#6E6E6E] dark:text-[#A0A2A8] leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="lg:col-span-1 flex justify-end">
                  <div
                    className={`w-8 h-8 rounded-full border border-[#D8D7D2] dark:border-[#353842] flex items-center justify-center transition-transform duration-300 ${
                      isHovered
                        ? 'bg-[#111111] dark:bg-[#EDEDEB] text-[#F5F4F0] dark:text-[#111111] border-[#111111] dark:border-[#EDEDEB] rotate-45'
                        : 'text-[#6E6E6E] dark:text-[#9A9B9E] group-hover:text-[#111111] dark:group-hover:text-white'
                    }`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Expandable technical tags */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isHovered ? 'max-h-24 opacity-100 mt-6 pt-5 border-t border-[#D8D7D2]/80 dark:border-[#2E3138]' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E] uppercase tracking-wider mr-2">
                    Core Technologies:
                  </span>
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono-meta px-2.5 py-1 bg-[#F5F4F0] dark:bg-[#121315] border border-[#D8D7D2] dark:border-[#353842] text-[#111111] dark:text-[#EDEDEB] rounded-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
