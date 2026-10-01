import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, MoveHorizontal } from 'lucide-react';
import { galleryPhotos } from '../portfolioData';
import { GalleryPhoto } from '../types';
import { LightboxModal } from './LightboxModal';
import { TiltCard } from './TiltCard';
import { useSound } from '../context/SoundContext';
import { useLanguage } from '../context/LanguageContext';

export function VisualGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const { playClick, playPop } = useSound();
  const { t } = useLanguage();

  const filteredPhotos = selectedCategory === 'all'
    ? galleryPhotos
    : galleryPhotos.filter((p) => (p.category || 'all') === selectedCategory);

  const scroll = (direction: 'left' | 'right') => {
    playClick();
    if (scrollContainerRef.current) {
      const scrollAmount = 420;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Drag-to-scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.6; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const currentIdx = selectedPhoto ? galleryPhotos.findIndex((p) => p.id === selectedPhoto.id) : -1;
  const hasPrev = currentIdx > 0;
  const hasNext = currentIdx >= 0 && currentIdx < galleryPhotos.length - 1;

  const handlePrev = () => {
    if (hasPrev) setSelectedPhoto(galleryPhotos[currentIdx - 1]);
  };

  const handleNext = () => {
    if (hasNext) setSelectedPhoto(galleryPhotos[currentIdx + 1]);
  };

  return (
    <section
      id="gallery"
      className="py-24 md:py-36 border-b border-[#D8D7D2]/60 dark:border-[#2A2C32] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#68715F] dark:bg-[#8FA183]" />
            <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E] dark:text-[#9A9B9E]">
              {t.gallery.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111] dark:text-[#EDEDEB]">
            {t.gallery.heading}
          </h2>
          <p className="mt-4 text-sm font-mono-meta text-[#6E6E6E] dark:text-[#A0A2A8] max-w-xl">
            {t.gallery.subheading}
          </p>
        </div>

        {/* Scroll Controls & Drag Hint */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E]">
            <MoveHorizontal className="w-3.5 h-3.5 text-[#68715F] dark:text-[#8FA183]" />
            <span>{t.gallery.dragHint}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 border border-[#D8D7D2] dark:border-[#353842] rounded-xs hover:bg-[#ECEBE7] dark:hover:bg-[#1A1B1E] text-[#111111] dark:text-[#EDEDEB] transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 border border-[#D8D7D2] dark:border-[#353842] rounded-xs hover:bg-[#ECEBE7] dark:hover:bg-[#1A1B1E] text-[#111111] dark:text-[#EDEDEB] transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Track with Drag-to-Scroll */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
        className={`flex gap-6 overflow-x-auto px-6 md:px-12 pb-8 pt-2 scrollbar-none select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {galleryPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className="shrink-0 w-[280px] sm:w-[340px] md:w-[400px] group"
          >
            <TiltCard
              maxTilt={7}
              scale={1.02}
              onClick={() => {
                if (!isDragging) {
                  setSelectedPhoto(photo);
                }
              }}
              cursorType="zoom"
              className="cursor-pointer"
            >
              <div className="relative aspect-[3/4] bg-[#ECEBE7] dark:bg-[#1A1B1E] border border-[#D8D7D2] dark:border-[#33363F] overflow-hidden rounded-xs shadow-xs">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover editorial-img transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                  loading="lazy"
                />

                {/* Resting Frame Tag */}
                <div className="absolute top-4 left-4 bg-[#111111]/80 backdrop-blur-md px-2 py-0.5 text-[10px] font-mono-meta text-[#F5F4F0] border border-white/10 group-hover:opacity-0 transition-opacity duration-200">
                  {photo.frame || `FRAME // 0${index + 1}`}
                </div>

                {/* Expand Indicator Icon */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm p-1.5 rounded-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Hover Details Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-[#111111]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-[#F5F4F0]">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#111111]/85 backdrop-blur-md px-2 py-0.5 text-[10px] font-mono-meta text-[#8FA183] border border-white/10 uppercase tracking-widest font-semibold">
                      {photo.frame || `FRAME // 0${index + 1}`}
                    </span>
                    <span className="text-[10px] font-mono-meta text-[#F5F4F0]/70 uppercase tracking-wider">
                      {photo.location} / {photo.year}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xl font-light tracking-tight text-[#F5F4F0] block">
                      {photo.title}
                    </span>
                    <p className="text-xs font-mono-meta leading-relaxed text-[#F5F4F0]/90">
                      &ldquo;{photo.caption}&rdquo;
                    </p>
                    <span className="text-[10px] text-[#8FA183] underline underline-offset-2 block pt-1">
                      Click to view EXIF data & story
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>

            <div className="mt-3 flex items-center justify-between text-xs font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E]">
              <span className="text-[#111111] dark:text-white font-medium">{photo.title}</span>
              <span>{photo.location} / {photo.year}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={hasNext}
        hasPrev={hasPrev}
      />
    </section>
  );
}
