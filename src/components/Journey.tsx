import { useState } from 'react';
import { MapPin, Milestone, Sparkles, ArrowRight } from 'lucide-react';
import { journeyData } from '../portfolioData';

export function Journey() {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  return (
    <section
      id="journey"
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D8D7D2]/60"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#68715F]" />
            <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E]">
              05 / MILESTONES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
            My Journey
          </h2>
        </div>

        <p className="text-sm font-mono-meta text-[#6E6E6E] max-w-md">
          A personal chronology from foundational science education toward global creative engineering.
        </p>
      </div>

      {/* Timeline Rows with Editorial Dividers */}
      <div className="divide-y divide-[#D8D7D2] border-y border-[#D8D7D2]">
        {journeyData.map((item, index) => {
          const isActive = activeRow === index;

          return (
            <div
              key={item.year + item.title}
              onMouseEnter={() => setActiveRow(index)}
              onMouseLeave={() => setActiveRow(null)}
              className={`group py-8 md:py-12 px-4 md:px-8 transition-all duration-300 ${
                isActive ? 'bg-[#ECEBE7]' : 'hover:bg-[#ECEBE7]/40'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                {/* Year Marker */}
                <div className="lg:col-span-3 flex items-center justify-between lg:block">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#68715F] shrink-0" />
                    <span className="text-2xl sm:text-3xl font-light text-[#111111] font-mono-meta tracking-tight">
                      {item.year}
                    </span>
                  </div>

                  {item.location && (
                    <div className="flex items-center gap-1.5 text-xs font-mono-meta text-[#6E6E6E] mt-1 lg:mt-2">
                      <MapPin className="w-3 h-3 text-[#68715F]" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>

                {/* Title & Status */}
                <div className="lg:col-span-4 space-y-1">
                  <h3 className="text-xl sm:text-2xl font-normal text-[#111111] group-hover:text-[#68715F] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono-meta text-[#6E6E6E] uppercase tracking-wider block">
                    {item.roleOrStatus}
                  </span>
                </div>

                {/* Description & Tags */}
                <div className="lg:col-span-5 space-y-4">
                  <p className="text-sm md:text-base text-[#6E6E6E] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono-meta px-2.5 py-0.5 bg-[#F5F4F0] border border-[#D8D7D2] text-[#111111] rounded-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
