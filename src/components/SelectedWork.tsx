import { ArrowUpRight, Github, ExternalLink, Cpu, Code2, Radio } from 'lucide-react';
import { projectsData } from '../portfolioData';
import { Project } from '../types';
import { ProjectVisual } from './ProjectVisual';

interface SelectedWorkProps {
  onOpenModal: (project: Project) => void;
}

export function SelectedWork({ onOpenModal }: SelectedWorkProps) {
  const p1 = projectsData.find((p) => p.id === 'live-code-editor') || projectsData[0];
  const p2 = projectsData.find((p) => p.id === 'parking-distance-sensor') || projectsData[1];
  const p3 = projectsData.find((p) => p.id === 'speech-to-text') || projectsData[2];
  const p4 = projectsData.find((p) => p.id === '3d-racing-game') || projectsData[3];
  const p5 = projectsData.find((p) => p.id === 'image-resizer') || projectsData[4];
  const p6 = projectsData.find((p) => p.id === 'hardware-experiments') || projectsData[5];

  return (
    <section
      id="work"
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D8D7D2]/60"
    >
      {/* Section Eyebrow, Heading & Supporting text */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#68715F]" />
            <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E]">
              Selected Work
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
            Things I&apos;ve built.
          </h2>
        </div>

        <p className="text-base text-[#6E6E6E] font-normal max-w-md leading-relaxed">
          A collection of web projects, experiments, games, and hardware builds.
        </p>
      </div>

      <div className="space-y-24 md:space-y-32">
        {/* =======================================================
            01 — FEATURED #1 / LARGEST: Live Code Editor
        ======================================================= */}
        <div
          data-cursor="project"
          className="group border border-[#D8D7D2] bg-[#ECEBE7]/40 rounded-xs p-6 sm:p-8 md:p-12 transition-all duration-300 hover:border-[#111111]/40"
        >
          {/* Top Metadata Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-[#D8D7D2] pb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-mono-meta font-light text-[#111111]">
                {p1.number}
              </span>
              <span className="text-[#D8D7D2]">/</span>
              <span className="text-xs font-mono-meta uppercase tracking-widest text-[#68715F] font-semibold">
                {p1.category}
              </span>
              <span className="px-2 py-0.5 bg-[#68715F]/15 border border-[#68715F]/30 text-[10px] font-mono-meta text-[#68715F] uppercase rounded-xs">
                Flagship Project
              </span>
            </div>
            <span className="text-xs font-mono-meta text-[#6E6E6E]">
              Timeline: {p1.year}
            </span>
          </div>

          {/* Grid: Preview & Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Preview Area */}
            <div
              onClick={() => onOpenModal(p1)}
              className="lg:col-span-7 cursor-pointer"
            >
              <ProjectVisual project={p1} aspectClass="aspect-[16/10]" />
            </div>

            {/* Narrative & Two Actions */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <h3
                  onClick={() => onOpenModal(p1)}
                  className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111111] tracking-tight group-hover:text-[#68715F] transition-all duration-300 group-hover:translate-x-1 cursor-pointer"
                >
                  {p1.title}
                </h3>
                <p className="text-sm md:text-base text-[#6E6E6E] font-normal leading-relaxed">
                  {p1.shortDescription}
                </p>
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#D8D7D2]/80">
                {p1.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono-meta px-2.5 py-1 bg-[#ECEBE7] border border-[#D8D7D2] text-[#111111] rounded-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Two Mandatory Actions: View Project & GitHub */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenModal(p1)}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#111111] text-[#F5F4F0] text-xs uppercase font-mono-meta tracking-wider hover:bg-[#68715F] transition-colors rounded-xs shadow-sm cursor-pointer"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <a
                  href={p1.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#ECEBE7] border border-[#D8D7D2] text-[#111111] text-xs uppercase font-mono-meta tracking-wider hover:border-[#111111] transition-colors rounded-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {p1.demo && (
                  <a
                    href={p1.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-3 text-xs font-mono-meta text-[#6E6E6E] hover:text-[#111111] transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            02 — LARGE: Parking Distance Sensor (Hardware / Arduino)
        ======================================================= */}
        <div
          data-cursor="project"
          className="group border-t border-[#D8D7D2] pt-16 md:pt-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Visual Area (Abstract Arduino / Ultrasonic / OLED composition) */}
            <div
              onClick={() => onOpenModal(p2)}
              className="lg:col-span-7 order-1 lg:order-2 cursor-pointer"
            >
              <ProjectVisual project={p2} aspectClass="aspect-[16/10]" />
            </div>

            {/* Narrative Area */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-mono-meta text-[#8E8D88]">
                      {p2.number}
                    </span>
                    <span className="text-xs font-mono-meta uppercase tracking-widest text-[#68715F] font-semibold">
                      {p2.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono-meta text-[#6E6E6E]">{p2.year}</span>
                </div>

                <h3
                  onClick={() => onOpenModal(p2)}
                  className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight group-hover:text-[#68715F] transition-all duration-300 group-hover:translate-x-1 cursor-pointer flex items-center justify-between"
                >
                  <span>{p2.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#6E6E6E] group-hover:text-[#111111] group-hover:rotate-45 transition-all duration-300" />
                </h3>

                <p className="text-sm md:text-base text-[#6E6E6E] font-normal leading-relaxed">
                  {p2.shortDescription}
                </p>

                {/* Explicit Mention: Wokwi simulation available */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#68715F]/10 border border-[#68715F]/20 text-xs font-mono-meta text-[#68715F] rounded-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#68715F]" />
                  <span>Wokwi simulation available</span>
                </div>
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#D8D7D2]/80">
                {p2.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono-meta px-2.5 py-1 bg-[#ECEBE7] border border-[#D8D7D2] text-[#111111] rounded-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenModal(p2)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#111111] text-[#F5F4F0] text-xs uppercase font-mono-meta tracking-wider hover:bg-[#68715F] transition-colors rounded-xs cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={p2.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#ECEBE7] border border-[#D8D7D2] text-[#111111] text-xs uppercase font-mono-meta tracking-wider hover:border-[#111111] transition-colors rounded-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            03 & 04 — MEDIUM: Speech to Text & 3D Racing Game
        ======================================================= */}
        <div className="border-t border-[#D8D7D2] pt-16 md:pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {/* 03 — Speech to Text */}
            <div
              data-cursor="project"
              className="group space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div
                  onClick={() => onOpenModal(p3)}
                  className="cursor-pointer"
                >
                  <ProjectVisual project={p3} aspectClass="aspect-[16/10]" />
                </div>

                <div className="flex items-center justify-between text-xs font-mono-meta">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-mono-meta text-[#8E8D88]">{p3.number}</span>
                    <span className="text-[#68715F] font-semibold uppercase tracking-widest">
                      {p3.category}
                    </span>
                  </div>
                  <span className="text-[#6E6E6E]">{p3.year}</span>
                </div>

                <h3
                  onClick={() => onOpenModal(p3)}
                  className="text-2xl sm:text-3xl font-light text-[#111111] tracking-tight group-hover:text-[#68715F] transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>{p3.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#6E6E6E] group-hover:text-[#111111] group-hover:rotate-45 transition-all" />
                </h3>

                <p className="text-sm text-[#6E6E6E] font-normal leading-relaxed">
                  {p3.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {p3.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono-meta px-2 py-0.5 bg-[#ECEBE7] border border-[#D8D7D2] text-[#111111] rounded-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-[#D8D7D2]/60 flex flex-wrap items-center gap-3">
                {p3.demo && (
                  <a
                    href={p3.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#111111] text-[#F5F4F0] text-xs uppercase font-mono-meta tracking-wider hover:bg-[#68715F] transition-colors rounded-xs"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <a
                  href={p3.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#ECEBE7] border border-[#D8D7D2] text-[#111111] text-xs uppercase font-mono-meta tracking-wider hover:border-[#111111] transition-colors rounded-xs"
                >
                  <Github className="w-3 h-3" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <button
                  onClick={() => onOpenModal(p3)}
                  className="text-xs font-mono-meta text-[#6E6E6E] hover:text-[#111111] ml-auto cursor-pointer"
                >
                  Details ↗
                </button>
              </div>
            </div>

            {/* 04 — 3D Racing Game */}
            <div
              data-cursor="project"
              className="group space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div
                  onClick={() => onOpenModal(p4)}
                  className="cursor-pointer"
                >
                  <ProjectVisual project={p4} aspectClass="aspect-[16/10]" />
                </div>

                <div className="flex items-center justify-between text-xs font-mono-meta">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-mono-meta text-[#8E8D88]">{p4.number}</span>
                    <span className="text-[#68715F] font-semibold uppercase tracking-widest">
                      {p4.category}
                    </span>
                  </div>
                  <span className="text-[#6E6E6E]">{p4.year}</span>
                </div>

                <h3
                  onClick={() => onOpenModal(p4)}
                  className="text-2xl sm:text-3xl font-light text-[#111111] tracking-tight group-hover:text-[#68715F] transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>{p4.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#6E6E6E] group-hover:text-[#111111] group-hover:rotate-45 transition-all" />
                </h3>

                <p className="text-sm text-[#6E6E6E] font-normal leading-relaxed">
                  {p4.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {p4.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono-meta px-2 py-0.5 bg-[#ECEBE7] border border-[#D8D7D2] text-[#111111] rounded-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-[#D8D7D2]/60 flex flex-wrap items-center gap-3">
                <a
                  href={p4.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#111111] text-[#F5F4F0] text-xs uppercase font-mono-meta tracking-wider hover:bg-[#68715F] transition-colors rounded-xs"
                >
                  <Github className="w-3 h-3" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <button
                  onClick={() => onOpenModal(p4)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#ECEBE7] border border-[#D8D7D2] text-[#111111] text-xs uppercase font-mono-meta tracking-wider hover:border-[#111111] transition-colors rounded-xs cursor-pointer"
                >
                  <span>Overview</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
                <button
                  onClick={() => onOpenModal(p4)}
                  className="text-xs font-mono-meta text-[#6E6E6E] hover:text-[#111111] ml-auto cursor-pointer"
                >
                  Details ↗
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            05 & 06 — SMALLER & GROUPED: Image Resizer & Hardware Experiments
        ======================================================= */}
        <div className="border-t border-[#D8D7D2] pt-16 md:pt-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
            {/* 05 — Image Resizer (Smaller) */}
            <div
              data-cursor="project"
              className="md:col-span-5 group space-y-5"
            >
              <div
                onClick={() => onOpenModal(p5)}
                className="cursor-pointer"
              >
                <ProjectVisual project={p5} aspectClass="aspect-[16/10]" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono-meta">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-mono-meta text-[#8E8D88]">{p5.number}</span>
                    <span className="text-[#68715F] font-semibold uppercase tracking-widest">
                      {p5.category}
                    </span>
                  </div>
                  <span className="text-[#6E6E6E]">{p5.year}</span>
                </div>

                <h3
                  onClick={() => onOpenModal(p5)}
                  className="text-2xl font-light text-[#111111] tracking-tight group-hover:text-[#68715F] transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>{p5.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#6E6E6E] group-hover:text-[#111111] transition-transform" />
                </h3>

                <p className="text-sm text-[#6E6E6E] font-normal leading-relaxed">
                  {p5.shortDescription}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {p5.demo && (
                    <a
                      href={p5.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#111111] text-[#F5F4F0] text-xs uppercase font-mono-meta tracking-wider hover:bg-[#68715F] transition-colors rounded-xs"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <a
                    href={p5.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#ECEBE7] border border-[#D8D7D2] text-[#111111] text-xs uppercase font-mono-meta tracking-wider hover:border-[#111111] transition-colors rounded-xs"
                  >
                    <Github className="w-3 h-3" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* 06 — Hardware Experiments (Grouped Collection) */}
            <div
              data-cursor="project"
              className="md:col-span-7 group space-y-5 bg-[#ECEBE7]/50 border border-[#D8D7D2] rounded-xs p-6 md:p-8"
            >
              <div className="flex items-center justify-between text-xs font-mono-meta">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-mono-meta text-[#8E8D88]">{p6.number}</span>
                  <span className="text-[#68715F] font-semibold uppercase tracking-widest">
                    {p6.category}
                  </span>
                  <span className="px-2 py-0.5 bg-[#111111]/5 border border-[#111111]/10 text-[10px] text-[#111111] uppercase rounded-xs">
                    Grouped Series
                  </span>
                </div>
                <span className="text-[#6E6E6E]">{p6.year}</span>
              </div>

              <h3
                onClick={() => onOpenModal(p6)}
                className="text-2xl sm:text-3xl font-light text-[#111111] tracking-tight group-hover:text-[#68715F] transition-colors cursor-pointer flex items-center justify-between"
              >
                <span>{p6.title}</span>
                <ArrowUpRight className="w-5 h-5 text-[#6E6E6E] group-hover:text-[#111111] transition-transform" />
              </h3>

              <p className="text-sm text-[#6E6E6E] font-normal leading-relaxed">
                {p6.shortDescription}
              </p>

              {/* Sub-Repositories List */}
              <div className="pt-2 space-y-2">
                <span className="text-[11px] font-mono-meta uppercase tracking-wider text-[#6E6E6E] block">
                  Included Experiment Repositories:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {p6.subRepositories?.map((repo) => (
                    <a
                      key={repo.name}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-[#F5F4F0] border border-[#D8D7D2] hover:border-[#111111] rounded-xs transition-colors group/item flex items-center justify-between"
                    >
                      <span className="text-xs font-mono-meta text-[#111111] group-hover/item:text-[#68715F]">
                        {repo.name}
                      </span>
                      <ArrowUpRight className="w-3 h-3 text-[#6E6E6E] group-hover/item:text-[#111111]" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-[#D8D7D2] flex items-center justify-between">
                <button
                  onClick={() => onOpenModal(p6)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#111111] text-[#F5F4F0] text-xs uppercase font-mono-meta tracking-wider hover:bg-[#68715F] transition-colors rounded-xs cursor-pointer"
                >
                  <span>Explore Hardware Series</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={p6.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono-meta text-[#6E6E6E] hover:text-[#111111] inline-flex items-center gap-1"
                >
                  <span>All Repositories</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
