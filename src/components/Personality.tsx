import { personalityStatement } from '../portfolioData';

export function Personality() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D8D7D2]/60">
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#68715F]" />
          <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E]">
            09 / PERSPECTIVE
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111111] mb-8">
          {personalityStatement.title}
        </h2>

        <p className="text-xl sm:text-2xl text-[#6E6E6E] font-light mb-8">
          {personalityStatement.lead}
        </p>

        {/* Large Typographic Words Cloud / Grid */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-3xl sm:text-4xl md:text-6xl font-light text-[#111111] tracking-tight mb-12">
          {personalityStatement.disciplines.map((item, i) => (
            <span
              key={item}
              className={`hover:text-[#68715F] transition-colors cursor-default ${
                i % 2 === 1 ? 'text-[#111111]/70' : 'text-[#111111]'
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Closing thesis statement */}
        <div className="p-6 md:p-8 bg-[#ECEBE7] border border-[#D8D7D2] rounded-xs max-w-2xl">
          <p className="text-base sm:text-lg text-[#111111] font-normal leading-relaxed">
            &ldquo;{personalityStatement.closing}&rdquo;
          </p>
          <span className="text-xs font-mono-meta uppercase tracking-widest text-[#68715F] mt-3 block">
            — Polymath Philosophy
          </span>
        </div>
      </div>
    </section>
  );
}
