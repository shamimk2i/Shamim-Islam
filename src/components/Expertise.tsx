import { useState } from 'react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { skillsData } from '../portfolioData';

export function Expertise() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="expertise"
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D8D7D2]/60"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#68715F]" />
            <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E]">
              03 / CAPABILITIES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
            Expertise & Craft
          </h2>
        </div>

        <p className="text-sm font-mono-meta text-[#6E6E6E] max-w-sm">
          Disciplines developed through active implementation, rigorous curiosity, and deliberate practice.
        </p>
      </div>

      {/* Editorial Numbered List */}
      <div className="divide-y divide-[#D8D7D2] border-y border-[#D8D7D2]">
        {skillsData.map((skill, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={skill.number}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group transition-all duration-300 px-4 md:px-8 py-7 md:py-9 ${
                isHovered ? 'bg-[#ECEBE7]' : 'bg-transparent hover:bg-[#ECEBE7]/50'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
                {/* Number & Category */}
                <div className="lg:col-span-3 flex items-center justify-between lg:justify-start gap-4">
                  <span className="font-mono-meta text-xs md:text-sm text-[#68715F] font-medium tracking-wider">
                    {skill.number}
                  </span>
                  <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E] px-2 py-0.5 border border-[#D8D7D2] rounded-xs bg-[#F5F4F0]/60">
                    {skill.category}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h3 className="text-2xl sm:text-3xl font-light text-[#111111] group-hover:text-[#68715F] transition-colors flex items-center gap-3">
                    {skill.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-4">
                  <p className="text-sm text-[#6E6E6E] leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Arrow / Expand indicator */}
                <div className="lg:col-span-1 flex justify-end">
                  <div
                    className={`w-8 h-8 rounded-full border border-[#D8D7D2] flex items-center justify-center transition-transform duration-300 ${
                      isHovered
                        ? 'bg-[#111111] text-[#F5F4F0] border-[#111111] rotate-45'
                        : 'text-[#6E6E6E] group-hover:text-[#111111]'
                    }`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Expandable technical tags */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isHovered ? 'max-h-24 opacity-100 mt-6 pt-5 border-t border-[#D8D7D2]/80' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono-meta text-[#6E6E6E] uppercase tracking-wider mr-2">
                    Core Technologies:
                  </span>
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono-meta px-2.5 py-1 bg-[#F5F4F0] border border-[#D8D7D2] text-[#111111] rounded-xs"
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
