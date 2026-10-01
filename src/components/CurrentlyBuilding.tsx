import { ArrowUpRight, Github } from 'lucide-react';
import { currentlyBuildingData } from '../portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { TiltCard } from './TiltCard';
import { MagneticButton } from './MagneticButton';

export function CurrentlyBuilding() {
  const item = currentlyBuildingData;
  const { t } = useLanguage();

  return (
    <section id="building" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D8D7D2]/60 dark:border-[#2A2C32]">
      <TiltCard maxTilt={5} scale={1.012}>
        <div className="bg-[#ECEBE7] dark:bg-[#1A1B1E] border border-[#D8D7D2] dark:border-[#33363F] rounded-xs p-8 md:p-14 relative overflow-hidden shadow-xs">
          {/* Subtle background architectural marks */}
          <div className="absolute top-0 right-0 p-8 text-[#D8D7D2] dark:text-[#252830] font-mono-meta text-8xl font-thin select-none pointer-events-none opacity-40">
            WIP
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            {/* Eyebrow & Status */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono-meta uppercase tracking-widest text-[#68715F] dark:text-[#8FA183] font-semibold">
                {t.building.eyebrow}
              </span>
              <span className="text-[#D8D7D2] dark:text-[#33363F]">/</span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#111111]/5 dark:bg-white/10 border border-[#111111]/10 dark:border-white/10 rounded-full text-[11px] font-mono-meta text-[#111111] dark:text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#68715F] dark:bg-[#8FA183] animate-pulse" />
                <span>{t.building.status}</span>
              </div>
              <span className="text-xs font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E] ml-auto">
                Stack: {item.technology}
              </span>
            </div>

            {/* Heading & Subtitle */}
            <div>
              <div className="flex items-baseline gap-3 flex-wrap">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#111111] dark:text-[#EDEDEB] tracking-tight">
                  {t.building.title}
                </h3>
                <span className="text-xl sm:text-2xl text-[#68715F] dark:text-[#8FA183] font-light">
                  / {t.building.subtitle}
                </span>
              </div>
              <p className="mt-4 text-base md:text-lg text-[#6E6E6E] dark:text-[#A0A2A8] font-normal leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Authentic context note */}
            <div className="p-4 bg-[#F5F4F0] dark:bg-[#121315] border-l-2 border-[#68715F] dark:border-[#8FA183] text-xs font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E] leading-relaxed">
              <span className="text-[#111111] dark:text-white font-medium block mb-1">Ongoing Project Note:</span>
              {item.notes}
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <MagneticButton strength={0.2}>
                <a
                  href={item.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#111111] text-[#F5F4F0] dark:bg-[#EDEDEB] dark:text-[#111111] text-xs uppercase font-mono-meta tracking-wider hover:bg-[#68715F] dark:hover:bg-[#8FA183] dark:hover:text-white transition-colors rounded-xs shadow-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </MagneticButton>

              <span className="text-xs font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E]">
                Repository: github.com/shamimk2i/kizuna-study-tracker
              </span>
            </div>
          </div>
        </div>
      </TiltCard>
    </section>
  );
}
