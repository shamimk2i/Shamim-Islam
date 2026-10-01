import { ArrowUpRight, Github, ExternalLink, Play } from 'lucide-react';
import { projectsData } from '../portfolioData';
import { Project } from '../types';
import { ProjectVisual } from './ProjectVisual';
import { TiltCard } from './TiltCard';
import { MagneticButton } from './MagneticButton';
import { useLanguage } from '../context/LanguageContext';
import { useSound } from '../context/SoundContext';

interface SelectedWorkProps {
  onOpenModal: (project: Project) => void;
}

export function SelectedWork({ onOpenModal }: SelectedWorkProps) {
  const { t } = useLanguage();
  const { playClick } = useSound();

  const p1 = projectsData.find((p) => p.id === 'live-code-editor') || projectsData[0];
  const p2 = projectsData.find((p) => p.id === 'parking-distance-sensor') || projectsData[1];
  const p3 = projectsData.find((p) => p.id === 'speech-to-text') || projectsData[2];
  const p4 = projectsData.find((p) => p.id === '3d-racing-game') || projectsData[3];
  const p5 = projectsData.find((p) => p.id === 'image-resizer') || projectsData[4];
  const p6 = projectsData.find((p) => p.id === 'hardware-experiments') || projectsData[5];

  const handleCardClick = (project: Project) => {
    playClick();
    onOpenModal(project);
  };

  return (
    <section
      id="work"
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D8D7D2]/60 dark:border-[#2A2C32]"
    >
      {/* Section Eyebrow, Heading & Supporting text */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#68715F] dark:bg-[#8FA183]" />
            <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E] dark:text-[#9A9B9E]">
              {t.work.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111] dark:text-[#EDEDEB]">
            {t.work.heading}
          </h2>
        </div>

        <p className="text-base text-[#6E6E6E] dark:text-[#A0A2A8] font-normal max-w-md leading-relaxed">
          {t.work.subheading}
        </p>
      </div>

      <div className="space-y-24 md:space-y-32">
        {/* =======================================================
            01 / FEATURED #1 / LARGEST: Live Code Editor
        ======================================================= */}
        <div
          data-cursor="project"
          className="group border border-[#D8D7D2] dark:border-[#33363F] bg-[#ECEBE7]/40 dark:bg-[#1A1B1E]/60 rounded-xs p-6 sm:p-8 md:p-12 transition-all duration-300 hover:border-[#111111]/40 dark:hover:border-white/30"
        >
          {/* Top Metadata Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-[#D8D7D2] dark:border-[#2E3138] pb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-mono-meta font-light text-[#111111] dark:text-[#EDEDEB]">
                {p1.number}
              </span>
              <span className="text-[#D8D7D2] dark:text-[#3E4147]">/</span>
              <span className="text-xs font-mono-meta uppercase tracking-widest text-[#68715F] dark:text-[#8FA183] font-semibold">
                {p1.category}
              </span>
              <span className="px-2 py-0.5 bg-[#68715F]/15 border border-[#68715F]/30 text-[10px] font-mono-meta text-[#68715F] dark:text-[#8FA183] uppercase rounded-xs">
                {t.work.flagship}
              </span>
            </div>
            <span className="text-xs font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E]">
              {t.work.timeline}: {p1.year}
            </span>
          </div>

          {/* Grid: Preview & Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Preview Area with Tilt */}
            <div className="lg:col-span-7">
              <TiltCard maxTilt={6} scale={1.015}>
                <ProjectVisual project={p1} aspectClass="aspect-[16/10]" isInteractive />
              </TiltCard>
            </div>

            {/* Narrative & Actions */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <h3
                  onClick={() => handleCardClick(p1)}
                  className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111111] dark:text-[#EDEDEB] tracking-tight group-hover:text-[#68715F] dark:group-hover:text-[#8FA183] transition-all duration-300 group-hover:translate-x-1 cursor-pointer"
                >
                  {p1.title}
                </h3>
                <p className="text-sm md:text-base text-[#6E6E6E] dark:text-[#A0A2A8] font-normal leading-relaxed">
                  {p1.shortDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#D8D7D2]/80 dark:border-[#2E3138]">
                {p1.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono-meta px-2.5 py-1 bg-[#ECEBE7] dark:bg-[#23252B] border border-[#D8D7D2] dark:border-[#353842] text-[#111111] dark:text-[#EDEDEB] rounded-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <MagneticButton
                  onClick={() => handleCardClick(p1)}
                  strength={0.25}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#111111] text-[#F5F4F0] dark:bg-[#EDEDEB] dark:text-[#111111] text-xs uppercase font-mono-meta tracking-wider hover:bg-[#68715F] dark:hover:bg-[#8FA183] dark:hover:text-white transition-colors rounded-xs shadow-sm cursor-pointer"
                >
                  <span>View Project Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </MagneticButton>

                <a
                  href={p1.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 bg-[#ECEBE7] dark:bg-[#23252B] border border-[#D8D7D2] dark:border-[#353842] text-[#111111] dark:text-[#EDEDEB] text-xs uppercase font-mono-meta tracking-wider hover:border-[#111111] dark:hover:border-white transition-colors rounded-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{t.work.openRepo}</span>
                </a>

                {p1.demo && (
                  <a
                    href={p1.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-3 text-xs font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E] hover:text-[#111111] dark:hover:text-white transition-colors"
                  >
                    <span>{t.work.liveDemo}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            02 / Parking Distance Sensor (Hardware / Arduino)
        ======================================================= */}
        <div
          data-cursor="project"
          className="group border-t border-[#D8D7D2] dark:border-[#2E3138] pt-16 md:pt-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Visual Area with Tilt */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <TiltCard maxTilt={6} scale={1.015}>
                <ProjectVisual project={p2} aspectClass="aspect-[16/10]" isInteractive />
              </TiltCard>
            </div>

            {/* Narrative Area */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-mono-meta text-[#8E8D88]">
                      {p2.number}
                    </span>
                    <span className="text-xs font-mono-meta uppercase tracking-widest text-[#68715F] dark:text-[#8FA183] font-semibold">
                      {p2.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E]">{p2.year}</span>
                </div>

                <h3
                  onClick={() => handleCardClick(p2)}
                  className="text-3xl sm:text-4xl font-light text-[#111111] dark:text-[#EDEDEB] tracking-tight group-hover:text-[#68715F] dark:group-hover:text-[#8FA183] transition-all duration-300 group-hover:translate-x-1 cursor-pointer flex items-center justify-between"
                >
                  <span>{p2.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#6E6E6E] group-hover:text-[#111111] dark:group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
                </h3>

                <p className="text-sm md:text-base text-[#6E6E6E] dark:text-[#A0A2A8] font-normal leading-relaxed">
                  {p2.shortDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#D8D7D2]/80 dark:border-[#2E3138]">
                {p2.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono-meta px-2.5 py-1 bg-[#ECEBE7] dark:bg-[#23252B] border border-[#D8D7D2] dark:border-[#353842] text-[#111111] dark:text-[#EDEDEB] rounded-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <MagneticButton
                  onClick={() => handleCardClick(p2)}
                  strength={0.25}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#111111] text-[#F5F4F0] dark:bg-[#EDEDEB] dark:text-[#111111] text-xs uppercase font-mono-meta tracking-wider hover:bg-[#68715F] dark:hover:bg-[#8FA183] dark:hover:text-white transition-colors rounded-xs shadow-sm cursor-pointer"
                >
                  <span>Case Study & Circuits</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </MagneticButton>

                <a
                  href={p2.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 bg-[#ECEBE7] dark:bg-[#23252B] border border-[#D8D7D2] dark:border-[#353842] text-[#111111] dark:text-[#EDEDEB] text-xs uppercase font-mono-meta tracking-wider hover:border-[#111111] dark:hover:border-white transition-colors rounded-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{t.work.openRepo}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            Two-Column Medium Projects Grid: Speech-to-Text & 3D Racer
        ======================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-t border-[#D8D7D2] dark:border-[#2E3138] pt-16 md:pt-20">
          {/* 03 / Speech to Text */}
          <div data-cursor="project" className="group space-y-6">
            <TiltCard maxTilt={7} scale={1.02}>
              <ProjectVisual project={p3} aspectClass="aspect-[16/10]" isInteractive />
            </TiltCard>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono-meta">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-mono-meta text-[#8E8D88]">{p3.number}</span>
                  <span className="text-[#68715F] dark:text-[#8FA183] font-semibold uppercase tracking-widest">
                    {p3.category}
                  </span>
                </div>
                <span className="text-[#6E6E6E] dark:text-[#9A9B9E]">{p3.year}</span>
              </div>

              <h3
                onClick={() => handleCardClick(p3)}
                className="text-2xl sm:text-3xl font-light text-[#111111] dark:text-[#EDEDEB] tracking-tight group-hover:text-[#68715F] dark:group-hover:text-[#8FA183] transition-colors cursor-pointer flex items-center justify-between"
              >
                <span>{p3.title}</span>
                <ArrowUpRight className="w-5 h-5 text-[#6E6E6E] group-hover:text-[#111111] dark:group-hover:text-white transition-transform" />
              </h3>

              <p className="text-sm text-[#6E6E6E] dark:text-[#A0A2A8] font-normal leading-relaxed">
                {p3.shortDescription}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <MagneticButton
                  onClick={() => handleCardClick(p3)}
                  strength={0.2}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#111111] text-[#F5F4F0] dark:bg-[#EDEDEB] dark:text-[#111111] text-xs uppercase font-mono-meta tracking-wider hover:bg-[#68715F] transition-colors rounded-xs"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3 h-3" />
                </MagneticButton>

                <a
                  href={p3.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#ECEBE7] dark:bg-[#23252B] border border-[#D8D7D2] dark:border-[#353842] text-[#111111] dark:text-[#EDEDEB] text-xs uppercase font-mono-meta tracking-wider hover:border-[#111111] transition-colors rounded-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>

          {/* 04 / 3D Racing Game */}
          <div data-cursor="project" className="group space-y-6">
            <TiltCard maxTilt={7} scale={1.02}>
              <ProjectVisual project={p4} aspectClass="aspect-[16/10]" isInteractive />
            </TiltCard>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono-meta">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-mono-meta text-[#8E8D88]">{p4.number}</span>
                  <span className="text-[#68715F] dark:text-[#8FA183] font-semibold uppercase tracking-widest">
                    {p4.category}
                  </span>
                </div>
                <span className="text-[#6E6E6E] dark:text-[#9A9B9E]">{p4.year}</span>
              </div>

              <h3
                onClick={() => handleCardClick(p4)}
                className="text-2xl sm:text-3xl font-light text-[#111111] dark:text-[#EDEDEB] tracking-tight group-hover:text-[#68715F] dark:group-hover:text-[#8FA183] transition-colors cursor-pointer flex items-center justify-between"
              >
                <span>{p4.title}</span>
                <ArrowUpRight className="w-5 h-5 text-[#6E6E6E] group-hover:text-[#111111] dark:group-hover:text-white transition-transform" />
              </h3>

              <p className="text-sm text-[#6E6E6E] dark:text-[#A0A2A8] font-normal leading-relaxed">
                {p4.shortDescription}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <MagneticButton
                  onClick={() => handleCardClick(p4)}
                  strength={0.2}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#111111] text-[#F5F4F0] dark:bg-[#EDEDEB] dark:text-[#111111] text-xs uppercase font-mono-meta tracking-wider hover:bg-[#68715F] transition-colors rounded-xs"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3 h-3" />
                </MagneticButton>

                <a
                  href={p4.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#ECEBE7] dark:bg-[#23252B] border border-[#D8D7D2] dark:border-[#353842] text-[#111111] dark:text-[#EDEDEB] text-xs uppercase font-mono-meta tracking-wider hover:border-[#111111] transition-colors rounded-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            05 & 06: Image Resizer + Hardware Experiments Collection
        ======================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#D8D7D2] dark:border-[#2E3138] pt-16 md:pt-20 items-start">
          {/* 05 / Image Resizer */}
          <div data-cursor="project" className="md:col-span-5 group space-y-5">
            <TiltCard maxTilt={6} scale={1.015}>
              <div
                onClick={() => handleCardClick(p5)}
                className="cursor-pointer"
              >
                <ProjectVisual project={p5} aspectClass="aspect-[16/10]" />
              </div>
            </TiltCard>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono-meta">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-mono-meta text-[#8E8D88]">{p5.number}</span>
                  <span className="text-[#68715F] dark:text-[#8FA183] font-semibold uppercase tracking-widest">
                    {p5.category}
                  </span>
                </div>
                <span className="text-[#6E6E6E] dark:text-[#9A9B9E]">{p5.year}</span>
              </div>

              <h3
                onClick={() => handleCardClick(p5)}
                className="text-2xl font-light text-[#111111] dark:text-[#EDEDEB] tracking-tight group-hover:text-[#68715F] dark:group-hover:text-[#8FA183] transition-colors cursor-pointer flex items-center justify-between"
              >
                <span>{p5.title}</span>
                <ArrowUpRight className="w-4 h-4 text-[#6E6E6E] group-hover:text-[#111111] dark:group-hover:text-white transition-transform" />
              </h3>

              <p className="text-sm text-[#6E6E6E] dark:text-[#A0A2A8] font-normal leading-relaxed">
                {p5.shortDescription}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                {p5.demo && (
                  <a
                    href={p5.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#111111] text-[#F5F4F0] dark:bg-[#EDEDEB] dark:text-[#111111] text-xs uppercase font-mono-meta tracking-wider hover:bg-[#68715F] transition-colors rounded-xs"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <a
                  href={p5.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#ECEBE7] dark:bg-[#23252B] border border-[#D8D7D2] dark:border-[#353842] text-[#111111] dark:text-[#EDEDEB] text-xs uppercase font-mono-meta tracking-wider hover:border-[#111111] transition-colors rounded-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* 06 / Hardware Experiments (Grouped Collection) */}
          <div
            data-cursor="project"
            className="md:col-span-7 group space-y-5 bg-[#ECEBE7]/50 dark:bg-[#1A1B1E]/60 border border-[#D8D7D2] dark:border-[#33363F] rounded-xs p-6 md:p-8"
          >
            <div className="flex items-center justify-between text-xs font-mono-meta">
              <div className="flex items-center gap-2">
                <span className="text-xl font-mono-meta text-[#8E8D88]">{p6.number}</span>
                <span className="text-[#68715F] dark:text-[#8FA183] font-semibold uppercase tracking-widest">
                  {p6.category}
                </span>
                <span className="px-2 py-0.5 bg-[#111111]/5 dark:bg-white/10 border border-[#111111]/10 text-[10px] text-[#111111] dark:text-white uppercase rounded-xs">
                  Grouped Series
                </span>
              </div>
              <span className="text-[#6E6E6E] dark:text-[#9A9B9E]">{p6.year}</span>
            </div>

            <h3
              onClick={() => handleCardClick(p6)}
              className="text-2xl sm:text-3xl font-light text-[#111111] dark:text-[#EDEDEB] tracking-tight group-hover:text-[#68715F] dark:group-hover:text-[#8FA183] transition-colors cursor-pointer flex items-center justify-between"
            >
              <span>{p6.title}</span>
              <ArrowUpRight className="w-5 h-5 text-[#6E6E6E] group-hover:text-[#111111] dark:group-hover:text-white transition-transform" />
            </h3>

            <p className="text-sm text-[#6E6E6E] dark:text-[#A0A2A8] font-normal leading-relaxed">
              {p6.shortDescription}
            </p>

            {/* Sub-Repositories List */}
            <div className="pt-2 space-y-2">
              <span className="text-[11px] font-mono-meta uppercase tracking-wider text-[#6E6E6E] dark:text-[#9A9B9E] block">
                Included Hardware Modules:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {p6.subRepositories?.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-[#F5F4F0] dark:bg-[#121315] border border-[#D8D7D2] dark:border-[#33363F] hover:border-[#111111] dark:hover:border-white rounded-xs transition-colors group/item flex items-center justify-between"
                  >
                    <span className="text-xs font-mono-meta text-[#111111] dark:text-[#EDEDEB] group-hover/item:text-[#68715F] dark:group-hover/item:text-[#8FA183]">
                      {repo.name}
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-[#6E6E6E] group-hover/item:text-[#111111] dark:group-hover/item:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-[#D8D7D2] dark:border-[#2E3138] flex items-center justify-between">
              <button
                onClick={() => handleCardClick(p6)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#111111] text-[#F5F4F0] dark:bg-[#EDEDEB] dark:text-[#111111] text-xs uppercase font-mono-meta tracking-wider hover:bg-[#68715F] dark:hover:bg-[#8FA183] dark:hover:text-white transition-colors rounded-xs cursor-pointer"
              >
                <span>Explore Hardware Series</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={p6.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E] hover:text-[#111111] dark:hover:text-white inline-flex items-center gap-1"
              >
                <span>All Repositories</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
