import { ArrowUpRight, Github } from 'lucide-react';
import { Project } from '../types';
import { ProjectVisual } from './ProjectVisual';

interface FeaturedProjectProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export function FeaturedProject({ project, onOpenModal }: FeaturedProjectProps) {
  return (
    <section id="featured" className="py-12 md:py-16 max-w-7xl mx-auto px-6 md:px-12">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#68715F]" />
          <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E]">
            SPECIAL SHOWCASE / {project.number}
          </span>
        </div>
        <span className="text-[11px] font-mono-meta text-[#68715F] uppercase tracking-wider">
          PRIMARY ARTIFACT
        </span>
      </div>

      <div
        data-cursor="project"
        className="group relative w-full bg-[#ECEBE7] border border-[#D8D7D2] overflow-hidden rounded-xs p-6 md:p-10 shadow-sm"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div onClick={() => onOpenModal(project)} className="lg:col-span-7 cursor-pointer">
            <ProjectVisual project={project} aspectClass="aspect-[16/10]" />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono-meta uppercase tracking-widest text-[#68715F] font-semibold block">
                {project.number} / {project.category}
              </span>
              <h3
                onClick={() => onOpenModal(project)}
                className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#111111] transition-transform duration-300 group-hover:translate-x-1 cursor-pointer"
              >
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-[#6E6E6E] font-normal leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#D8D7D2]">
              <button
                onClick={() => onOpenModal(project)}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#111111] text-[#F5F4F0] text-xs uppercase font-mono-meta tracking-wider hover:bg-[#68715F] transition-colors rounded-xs shadow-sm cursor-pointer"
              >
                <span>View Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#ECEBE7] border border-[#D8D7D2] text-[#111111] text-xs uppercase font-mono-meta tracking-wider hover:border-[#111111] transition-colors rounded-xs"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
