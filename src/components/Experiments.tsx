import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { exploreTopics } from '../portfolioData';
import { ExploreTopic } from '../types';

export function Experiments() {
  const [activeTopic, setActiveTopic] = useState<ExploreTopic>(exploreTopics[0]);

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
            Things I Like To Explore
          </h2>
        </div>

        <p className="text-sm font-mono-meta text-[#6E6E6E] max-w-md">
          Hover over any discipline to preview how these distinct fields inform my digital work.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Interactive Typography List */}
        <div className="lg:col-span-7 flex flex-wrap gap-x-4 gap-y-3 sm:gap-x-6 sm:gap-y-4">
          {exploreTopics.map((topic) => {
            const isCurrent = activeTopic.id === topic.id;

            return (
              <button
                key={topic.id}
                onMouseEnter={() => setActiveTopic(topic)}
                onClick={() => setActiveTopic(topic)}
                className={`group flex items-center gap-2 text-2xl sm:text-3xl md:text-4xl font-light tracking-tight px-3 py-1.5 rounded-xs transition-all duration-200 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#111111] text-[#F5F4F0]'
                    : 'text-[#111111]/70 hover:text-[#111111] hover:bg-[#ECEBE7]'
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

        {/* Right Column: Visual Preview Panel */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] bg-[#ECEBE7] border border-[#D8D7D2] overflow-hidden rounded-xs p-6 flex flex-col justify-between shadow-md">
            {/* Visual background image with transition */}
            <img
              key={activeTopic.id}
              src={activeTopic.image}
              alt={activeTopic.name}
              className="absolute inset-0 w-full h-full object-cover editorial-img opacity-90 transition-opacity duration-500"
            />

            {/* Gradient shield */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-transparent" />

            {/* Header info */}
            <div className="relative z-10 flex items-center justify-between text-[#F5F4F0] text-[11px] font-mono-meta">
              <span className="px-2.5 py-0.5 bg-[#111111]/80 backdrop-blur-md border border-white/10 uppercase tracking-widest">
                {activeTopic.category}
              </span>
              <span className="text-[#68715F] font-bold">
                REF // 0{exploreTopics.findIndex(t => t.id === activeTopic.id) + 1}
              </span>
            </div>

            {/* Bottom narrative */}
            <div className="relative z-10 text-[#F5F4F0] space-y-1">
              <span className="text-xl sm:text-2xl font-light tracking-tight block text-[#F5F4F0]">
                {activeTopic.name}
              </span>
              <p className="text-xs font-mono-meta text-[#F5F4F0]/80">
                {activeTopic.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
