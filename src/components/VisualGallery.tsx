import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import { galleryPhotos } from '../portfolioData';

export function VisualGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="gallery"
      className="py-24 md:py-36 border-b border-[#D8D7D2]/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#68715F]" />
            <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E]">
              08 / VISUAL ARCHIVE
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
            Visual Studies
          </h2>
        </div>

        {/* Scroll Controls */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-block text-xs font-mono-meta text-[#6E6E6E]">
            Horizontal Archive
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 border border-[#D8D7D2] rounded-xs hover:bg-[#ECEBE7] text-[#111111] transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 border border-[#D8D7D2] rounded-xs hover:bg-[#ECEBE7] text-[#111111] transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollContainerRef}
        data-cursor="drag"
        className="flex gap-6 overflow-x-auto px-6 md:px-12 pb-6 pt-2 scrollbar-none scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {galleryPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className="shrink-0 snap-start w-[280px] sm:w-[340px] md:w-[420px] group"
          >
            <div className="relative aspect-[3/4] bg-[#ECEBE7] border border-[#D8D7D2] overflow-hidden rounded-xs">
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover editorial-img transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute top-4 left-4 bg-[#111111]/80 backdrop-blur-md px-2 py-0.5 text-[10px] font-mono-meta text-[#F5F4F0] border border-white/10">
                FRAME // 0{index + 1}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 text-[#F5F4F0]">
                <p className="text-xs font-mono-meta leading-tight">
                  {photo.caption}
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs font-mono-meta text-[#6E6E6E]">
              <span className="text-[#111111] font-medium">{photo.title}</span>
              <span>{photo.location} — {photo.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
