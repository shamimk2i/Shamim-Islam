import { ArrowUpRight, Github, Clock, Sparkles } from 'lucide-react';
import { currentlyBuildingData } from '../portfolioData';

export function CurrentlyBuilding() {
  const item = currentlyBuildingData;

  return (
    <section id="currently-building" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D8D7D2]/60">
      <div className="bg-[#ECEBE7] border border-[#D8D7D2] rounded-xs p-8 md:p-14 relative overflow-hidden">
        {/* Subtle background architectural marks */}
        <div className="absolute top-0 right-0 p-8 text-[#D8D7D2] font-mono-meta text-8xl font-thin select-none pointer-events-none opacity-40">
          WIP
        </div>

        <div className="relative z-10 max-w-3xl space-y-6">
          {/* Eyebrow & Status */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono-meta uppercase tracking-widest text-[#68715F] font-semibold">
              {item.eyebrow}
            </span>
            <span className="text-[#D8D7D2]">/</span>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#111111]/5 border border-[#111111]/10 rounded-full text-[11px] font-mono-meta text-[#111111]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#68715F] animate-pulse" />
              <span>{item.status}</span>
            </div>
            <span className="text-xs font-mono-meta text-[#6E6E6E] ml-auto">
              Stack: {item.technology}
            </span>
          </div>

          {/* Heading & Subtitle */}
          <div>
            <div className="flex items-baseline gap-3 flex-wrap">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#111111] tracking-tight">
                {item.title}
              </h3>
              <span className="text-xl sm:text-2xl text-[#68715F] font-light">
                — {item.subtitle}
              </span>
            </div>
            <p className="mt-4 text-base md:text-lg text-[#6E6E6E] font-normal leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Authentic context note */}
          <div className="p-4 bg-[#F5F4F0] border-l-2 border-[#68715F] text-xs font-mono-meta text-[#6E6E6E] leading-relaxed">
            <span className="text-[#111111] font-medium block mb-1">Ongoing Project Note:</span>
            {item.notes}
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={item.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#111111] text-[#F5F4F0] text-xs uppercase font-mono-meta tracking-wider hover:bg-[#68715F] transition-colors rounded-xs shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <span className="text-xs font-mono-meta text-[#6E6E6E]">
              Repository: github.com/shamimk2i/kizuna-study-tracker
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
