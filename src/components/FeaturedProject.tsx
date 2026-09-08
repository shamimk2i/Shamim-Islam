import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface FeaturedProjectProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export function FeaturedProject({ project, onOpenModal }: FeaturedProjectProps) {
  return (
    <section id="featured" className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#68715F]" />
          <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E]">
            SPECIAL SHOWCASE / 01
          </span>
        </div>
        <span className="text-[11px] font-mono-meta text-[#68715F] uppercase tracking-wider">
          PRIMARY ARTIFACT
        </span>
      </div>

      <div
        data-cursor="project"
        onClick={() => onOpenModal(project)}
        className="group relative w-full aspect-[16/10] md:aspect-[21/9] bg-[#ECEBE7] border border-[#D8D7D2] overflow-hidden cursor-pointer shadow-xl"
      >
        {/* Photographic background with editorial zoom */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 editorial-img"
          loading="lazy"
        />

        {/* Ambient film gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/45 to-transparent transition-opacity duration-300 group-hover:via-[#111111]/55" />

        {/* Framing border */}
        <div className="absolute inset-0 border border-white/20 m-4 md:m-8 pointer-events-none transition-all duration-300 group-hover:m-3 md:group-hover:m-6" />

        {/* Content Overlay */}
        <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between text-[#F5F4F0]">
          {/* Top metadata tag */}
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#111111]/80 backdrop-blur-md text-[11px] font-mono-meta uppercase tracking-widest text-[#F5F4F0] border border-white/10 rounded-xs">
              {project.category}
            </span>
            <span className="text-xs font-mono-meta tracking-wider text-[#F5F4F0]/80">
              {project.year}
            </span>
          </div>

          {/* Bottom title & CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono-meta uppercase tracking-widest text-[#68715F] font-semibold block">
                {project.number} — Flagship Project
              </span>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F5F4F0] transition-transform duration-300 group-hover:translate-x-1">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-[#F5F4F0]/80 max-w-xl font-normal leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#F5F4F0] text-[#111111] text-xs uppercase font-mono-meta tracking-widest rounded-xs group-hover:bg-[#68715F] group-hover:text-[#F5F4F0] transition-colors shadow-lg">
                <span>View case study</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
