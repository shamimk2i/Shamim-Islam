import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { exploreTopics } from '../portfolioData';
import { ExploreTopic } from '../types';

export function Experiments() {
  const [activeTopic, setActiveTopic] = useState<ExploreTopic>(exploreTopics[0]);

  const coreTopics = exploreTopics.filter((t) => t.isCore);
  const otherTopics = exploreTopics.filter((t) => !t.isCore);

  return (
    <section
      id="explore"
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D8D7D2]/60"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#68715F]" />
            <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E]">
              06 / CURIOSITIES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
            Things I&apos;m Into
          </h2>
        </div>

        <p className="text-sm font-mono-meta text-[#6E6E6E] max-w-md">
          A glimpse into the things that keep me curious, from technology and business to games, music, and whatever I discover next.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Interactive Typography List */}
        <div className="lg:col-span-7 space-y-8">
          {/* Core Interests */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
              <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#111111] font-semibold">
                Core Interests
              </span>
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-2.5 sm:gap-x-4 sm:gap-y-3">
              {coreTopics.map((topic) => {
                const isCurrent = activeTopic.id === topic.id;

                return (
                  <button
                    key={topic.id}
                    onMouseEnter={() => setActiveTopic(topic)}
                    onClick={() => setActiveTopic(topic)}
                    className={`group flex items-center gap-2 text-2xl sm:text-3xl md:text-4xl font-light tracking-tight px-3.5 py-1.5 rounded-xs transition-all duration-200 cursor-pointer ${
                      isCurrent
                        ? 'bg-[#111111] text-[#F5F4F0] shadow-sm'
                        : 'text-[#111111] hover:text-[#111111] hover:bg-[#ECEBE7]'
                    }`}
                  >
                    <span>{topic.name}</span>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isCurrent ? 'text-[#68715F] rotate-45' : 'opacity-0 group-hover:opacity-60'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Other Curiosities */}
          <div className="pt-6 border-t border-[#D8D7D2]/60">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#68715F]" />
              <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E] font-medium">
                Other Curiosities
              </span>
            </div>
            <div className="flex flex-wrap gap-x-2.5 gap-y-2 sm:gap-x-3 sm:gap-y-2.5">
              {otherTopics.map((topic) => {
                const isCurrent = activeTopic.id === topic.id;

                return (
                  <button
                    key={topic.id}
                    onMouseEnter={() => setActiveTopic(topic)}
                    onClick={() => setActiveTopic(topic)}
                    className={`group flex items-center gap-1.5 text-base sm:text-lg md:text-xl font-light tracking-tight px-3 py-1 rounded-xs transition-all duration-200 cursor-pointer ${
                      isCurrent
                        ? 'bg-[#111111] text-[#F5F4F0]'
                        : 'text-[#6E6E6E] hover:text-[#111111] hover:bg-[#ECEBE7] bg-[#ECEBE7]/40 border border-[#D8D7D2]/60'
                    }`}
                  >
                    <span>{topic.name}</span>
                    <ArrowUpRight
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isCurrent ? 'text-[#68715F] rotate-45' : 'opacity-0 group-hover:opacity-50'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Visual Preview Panel */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="relative aspect-[4/3] bg-[#ECEBE7] border border-[#D8D7D2] overflow-hidden rounded-xs p-6 sm:p-7 flex flex-col justify-between shadow-md">
            {/* Visual background image with transition */}
            <img
              key={activeTopic.id}
              src={activeTopic.image}
              alt={activeTopic.name}
              className="absolute inset-0 w-full h-full object-cover editorial-img opacity-85 transition-opacity duration-500"
            />

            {/* Gradient shield */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/95 via-[#111111]/50 to-[#111111]/20" />

            {/* Header info */}
            <div className="relative z-10 flex items-center justify-between text-[#F5F4F0] text-[11px] font-mono-meta">
              <span className="px-2.5 py-1 bg-[#111111]/85 backdrop-blur-md border border-white/10 uppercase tracking-widest text-[#F5F4F0]">
                {activeTopic.isCore ? 'CORE FOCUS' : 'CURIOSITY'} / {activeTopic.category}
              </span>
              <span className="text-[#68715F] font-bold tracking-widest">
                REF // {String(exploreTopics.findIndex((t) => t.id === activeTopic.id) + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Bottom narrative */}
            <div className="relative z-10 text-[#F5F4F0] space-y-2">
              <span className="text-2xl sm:text-3xl font-light tracking-tight block text-[#F5F4F0]">
                {activeTopic.name}
              </span>
              <p className="text-xs sm:text-sm font-mono-meta text-[#F5F4F0]/90 leading-relaxed">
                &ldquo;{activeTopic.subtitle}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
