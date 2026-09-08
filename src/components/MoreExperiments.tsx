import { useState } from 'react';
import { ArrowUpRight, Github, ChevronDown, ChevronUp, Sparkles, Terminal } from 'lucide-react';
import { moreExperimentsData } from '../portfolioData';

export function MoreExperiments() {
  const [expanded, setExpanded] = useState(false);
  const initialCount = 6;
  const displayedExperiments = expanded ? moreExperimentsData : moreExperimentsData.slice(0, initialCount);

  return (
    <section id="experiments-archive" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D8D7D2]/60">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#68715F]" />
            <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E]">
              LAB & EXPERIMENTS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#111111]">
            More Experiments
          </h2>
        </div>

        <p className="text-sm font-mono-meta text-[#6E6E6E] max-w-md">
          Compact utilities, algorithms, games, and UI tests built while actively practicing and learning.
        </p>
      </div>

      {/* Compact Rows Table */}
      <div className="border-t border-[#D8D7D2] divide-y divide-[#D8D7D2]">
        {displayedExperiments.map((item, idx) => (
          <a
            key={item.id}
            href={item.repository || "https://github.com/shamimk2i"}
            target="_blank"
            rel="noopener noreferrer"
            className="group py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 hover:bg-[#ECEBE7]/60 px-2 sm:px-4 -mx-2 sm:-mx-4 transition-colors rounded-xs"
          >
            {/* Left: Index & Name */}
            <div className="flex items-baseline gap-3 sm:gap-5 min-w-[240px]">
              <span className="text-[11px] font-mono-meta text-[#8E8D88] w-6">
                {(idx + 1).toString().padStart(2, '0')}
              </span>
              <span className="text-base sm:text-lg font-normal text-[#111111] group-hover:text-[#68715F] transition-colors group-hover:translate-x-1 inline-flex items-center gap-1.5">
                {item.name}
              </span>
            </div>

            {/* Middle: One-line description */}
            <div className="flex-1 text-xs sm:text-sm text-[#6E6E6E] font-normal leading-normal">
              {item.description}
            </div>

            {/* Right: Category/Tech tag & Arrow */}
            <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 shrink-0">
              <span className="text-[11px] font-mono-meta px-2.5 py-0.5 bg-[#ECEBE7] border border-[#D8D7D2] text-[#111111] rounded-xs">
                {item.tech}
              </span>
              <div className="flex items-center gap-1 text-xs font-mono-meta text-[#6E6E6E] group-hover:text-[#111111] transition-colors">
                <span className="hidden md:inline text-[11px]">GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Expand / Collapse Button */}
      <div className="mt-8 pt-4 flex items-center justify-between border-t border-[#D8D7D2]/60">
        <span className="text-xs font-mono-meta text-[#6E6E6E]">
          Showing {displayedExperiments.length} of {moreExperimentsData.length} experiments
        </span>

        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="inline-flex items-center gap-2 px-4 py-2 border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#F5F4F0] text-xs uppercase font-mono-meta tracking-wider transition-colors rounded-xs cursor-pointer"
        >
          <span>{expanded ? 'Show fewer experiments' : 'View all experiments'}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>
    </section>
  );
}
