import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Calendar, Aperture, Layers } from 'lucide-react';
import { GalleryPhoto } from '../types';
import { useSound } from '../context/SoundContext';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export function LightboxModal({
  photo,
  onClose,
  onNext,
  onPrev,
  hasPrev,
  hasNext
}: LightboxModalProps) {
  const { playClick, playSwoosh } = useSound();

  useEffect(() => {
    if (!photo) return;
    playSwoosh();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        playClick();
        onClose();
      } else if (e.key === 'ArrowRight' && hasNext) {
        playClick();
        onNext();
      } else if (e.key === 'ArrowLeft' && hasPrev) {
        playClick();
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, hasNext, hasPrev, onClose, onNext, onPrev, playClick, playSwoosh]);

  if (!photo) return null;

  const defaultExif = {
    camera: "Fujifilm X-T4 Mirrorless",
    lens: "XF 35mm f/1.4 R Prime",
    aperture: "ƒ/1.8",
    shutter: "1/500s",
    iso: "ISO 160",
    focalLength: "35mm (53mm eq.)"
  };

  const exif = photo.exif || defaultExif;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Lightbox Container */}
      <div
        className="relative max-w-5xl w-full max-h-[92vh] bg-[#121316] text-[#EDEDEB] rounded-xs border border-white/15 overflow-hidden flex flex-col lg:flex-row shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playClick();
            onClose();
          }}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white border border-white/20 transition-all cursor-pointer"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Preview Column with Nav Arrows */}
        <div className="relative lg:w-3/5 bg-black flex items-center justify-center p-4 min-h-[300px] sm:min-h-[420px] select-none">
          <img
            src={photo.image}
            alt={photo.title}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-xs"
          />

          {/* Left Arrow */}
          {hasPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                playClick();
                onPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110 cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Right Arrow */}
          {hasNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                playClick();
                onNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110 cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Photo Metadata & Camera EXIF Column */}
        <div className="lg:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto border-t lg:border-t-0 lg:border-l border-white/10 space-y-6">
          <div className="space-y-4">
            {/* Frame & Location Header */}
            <div className="flex items-center justify-between text-xs font-mono-meta text-[#8FA183]">
              <span className="uppercase tracking-widest font-semibold">
                {photo.frame || 'ARCHIVE CAPTURE'}
              </span>
              <div className="flex items-center gap-1.5 text-white/60">
                <MapPin className="w-3.5 h-3.5" />
                <span>{photo.location}</span>
              </div>
            </div>

            {/* Title & Caption */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
                {photo.title}
              </h3>
              <p className="text-sm font-sans text-white/70 leading-relaxed font-light">
                &ldquo;{photo.caption}&rdquo;
              </p>
            </div>

            {/* EXIF Data Grid */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-meta uppercase tracking-wider text-white/60">
                <Camera className="w-4 h-4 text-[#8FA183]" />
                <span>Optical Telemetry (EXIF)</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono-meta bg-black/30 p-3 rounded-xs border border-white/5">
                <div>
                  <span className="text-white/40 block">Camera</span>
                  <span className="text-white/90 font-medium">{exif.camera}</span>
                </div>
                <div>
                  <span className="text-white/40 block">Lens</span>
                  <span className="text-white/90 font-medium">{exif.lens}</span>
                </div>
                <div>
                  <span className="text-white/40 block">Aperture</span>
                  <span className="text-[#8FA183] font-semibold">{exif.aperture}</span>
                </div>
                <div>
                  <span className="text-white/40 block">Shutter</span>
                  <span className="text-white/90">{exif.shutter}</span>
                </div>
                <div>
                  <span className="text-white/40 block">ISO Speed</span>
                  <span className="text-white/90">{exif.iso}</span>
                </div>
                <div>
                  <span className="text-white/40 block">Focal Length</span>
                  <span className="text-white/90">{exif.focalLength}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-meta text-white/50">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>Year: {photo.year}</span>
            </span>
            <span>Use ← → to navigate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
