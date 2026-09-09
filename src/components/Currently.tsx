import { currentlyItems } from '../portfolioData';

export function Currently() {
  return (
    <section
      id="currently"
      className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D8D7D2]/60"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#68715F]" />
            <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E]">
              02 / NOW
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#111111]">
            Currently
          </h2>
        </div>

        <p className="text-xs font-mono-meta text-[#6E6E6E] uppercase tracking-wider max-w-xs">
          A living snapshot of what I am learning, building, practicing, and exploring.
        </p>
      </div>

      <div className="divide-y divide-[#D8D7D2] border-y border-[#D8D7D2]">
        {currentlyItems.map((item) => (
          <div
            key={item.category}
            className="group py-6 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start hover:bg-[#ECEBE7]/40 transition-colors px-2 md:px-4"
          >
            {/* Category with status indicator */}
            <div className="md:col-span-3 flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full shrink-0 transition-transform group-hover:scale-125"
                style={{ backgroundColor: item.indicatorColor || '#68715F' }}
              />
              <span className="text-sm md:text-base font-semibold text-[#111111] uppercase tracking-wider font-mono-meta">
                {item.category}
              </span>
            </div>

            {/* Current Focus */}
            <div className="md:col-span-5">
              <p className="text-base md:text-lg font-medium text-[#111111] group-hover:text-[#68715F] transition-colors leading-snug">
                {item.focus}
              </p>
            </div>

            {/* Context / Details */}
            <div className="md:col-span-3">
              <p className="text-xs md:text-sm text-[#6E6E6E] leading-relaxed">
                {item.details}
              </p>
            </div>

            {/* Period / Status */}
            <div className="md:col-span-1 text-left md:text-right">
              <span className="text-[11px] font-mono-meta text-[#6E6E6E] px-2 py-0.5 bg-[#ECEBE7] border border-[#D8D7D2] rounded-xs inline-block uppercase whitespace-nowrap">
                {item.status || item.year || 'Active'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
