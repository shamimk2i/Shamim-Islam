import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../portfolioData';
import { Project } from '../types';
import { FeaturedProject } from './FeaturedProject';

interface SelectedWorkProps {
  onOpenModal: (project: Project) => void;
}

export function SelectedWork({ onOpenModal }: SelectedWorkProps) {
  const featured = projectsData.find((p) => p.featured) || projectsData[0];
  const otherProjects = projectsData.filter((p) => p.id !== featured.id);

  return (
    <section
      id="work"
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D8D7D2]/60"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#68715F]" />
            <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E]">
              04 / PORTFOLIO
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
            Selected Work
          </h2>
        </div>

        <p className="text-base text-[#6E6E6E] font-normal max-w-md leading-relaxed">
          Experiments, products, and things I&apos;ve built exploring the union of design, logic, and intelligence.
        </p>
      </div>

      {/* Featured Project Component (Breaks the visual rhythm) */}
      <div className="-mx-6 md:-mx-12 mb-16">
        <FeaturedProject project={featured} onOpenModal={onOpenModal} />
      </div>

      {/* Editorial Compositions Grid for Remaining Projects */}
      <div className="space-y-16 md:space-y-24">
        {otherProjects.map((project, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={project.id}
              data-cursor="project"
              onClick={() => onOpenModal(project)}
              className="group cursor-pointer border-t border-[#D8D7D2] pt-12 md:pt-16"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Area */}
                <div
                  className={`lg:col-span-7 relative overflow-hidden bg-[#ECEBE7] border border-[#D8D7D2] ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 editorial-img"
                      loading="lazy"
                    />
                  </div>

                  {/* Corner indicator */}
                  <div className="absolute top-4 left-4 bg-[#111111]/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono-meta text-[#F5F4F0] border border-white/10">
                    {project.number}
                  </div>
                </div>

                {/* Narrative & Details Area */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono-meta uppercase tracking-widest text-[#68715F] font-semibold">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono-meta text-[#6E6E6E]">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-light text-[#111111] group-hover:text-[#68715F] transition-all duration-300 group-hover:translate-x-1 flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#6E6E6E] group-hover:text-[#111111] group-hover:rotate-45 transition-all duration-300" />
                    </h3>
                  </div>

                  <p className="text-sm md:text-base text-[#6E6E6E] font-normal leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Stack */}
                  <div className="pt-2 border-t border-[#D8D7D2]/60 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono-meta px-2 py-0.5 bg-[#ECEBE7] border border-[#D8D7D2] text-[#111111] rounded-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <span className="text-xs font-mono-meta uppercase tracking-wider text-[#111111] underline underline-offset-4 group-hover:text-[#68715F] transition-colors inline-flex items-center gap-1.5">
                      Explore Case Study
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
