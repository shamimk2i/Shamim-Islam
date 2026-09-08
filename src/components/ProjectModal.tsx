import { useEffect } from 'react';
import { X, ArrowUpRight, Github, ExternalLink, BookOpen, Layers, CheckCircle } from 'lucide-react';
import { Project } from '../types';
import { ProjectVisual } from './ProjectVisual';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#111111]/70 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] bg-[#F5F4F0] border border-[#D8D7D2] rounded-xs overflow-y-auto shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-[#F5F4F0]/95 backdrop-blur-md px-6 md:px-10 py-5 border-b border-[#D8D7D2] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono-meta text-xs text-[#68715F] font-bold">
              {project.number}
            </span>
            <span className="text-[#D8D7D2]">/</span>
            <span className="text-xs font-mono-meta uppercase tracking-widest text-[#6E6E6E]">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#6E6E6E] hover:text-[#111111] hover:bg-[#ECEBE7] rounded-xs transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-10 space-y-8">
          {/* Main Visual Treatment */}
          <div className="relative w-full overflow-hidden shadow-sm">
            <ProjectVisual project={project} aspectClass="aspect-[16/9]" />
          </div>

          {/* Title & Short Summary */}
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
              <h2
                id="project-modal-title"
                className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111111] tracking-tight"
              >
                {project.title}
              </h2>
              {project.status && (
                <span className="px-3 py-1 bg-[#ECEBE7] border border-[#D8D7D2] text-xs font-mono-meta text-[#68715F] rounded-xs">
                  Status: {project.status}
                </span>
              )}
            </div>
            <p className="text-base sm:text-lg text-[#6E6E6E] font-normal leading-relaxed">
              {project.shortDescription}
            </p>
            {project.note && (
              <div className="mt-3 inline-block px-3 py-1 bg-[#68715F]/10 border border-[#68715F]/30 text-xs font-mono-meta text-[#68715F] rounded-xs">
                ℹ {project.note}
              </div>
            )}
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-4 text-[#111111]/90 text-sm sm:text-base leading-relaxed border-t border-[#D8D7D2] pt-6">
            <h3 className="text-xs font-mono-meta uppercase tracking-widest text-[#68715F] font-semibold">
              About This Project
            </h3>
            <p>{project.fullDescription}</p>
          </div>

          {/* What I Learned (Authentic Reflection) */}
          <div className="p-5 bg-[#ECEBE7] border-l-2 border-[#68715F] rounded-xs space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono-meta uppercase tracking-widest text-[#111111] font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-[#68715F]" />
              <span>What I Learned & Explored</span>
            </div>
            <p className="text-sm text-[#111111]/80 leading-relaxed font-normal">
              {project.whatILearned}
            </p>
          </div>

          {/* Sub-Repositories if Grouped Project */}
          {project.subRepositories && project.subRepositories.length > 0 && (
            <div className="border-t border-[#D8D7D2] pt-6 space-y-3">
              <h3 className="text-xs font-mono-meta uppercase tracking-widest text-[#68715F] font-semibold">
                Included Experiment Repositories ({project.subRepositories.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.subRepositories.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#ECEBE7] border border-[#D8D7D2] hover:border-[#111111] rounded-xs transition-colors group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono-meta font-medium text-[#111111] group-hover:text-[#68715F]">
                        {repo.name}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#6E6E6E] group-hover:text-[#111111] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    {repo.description && (
                      <span className="text-[11px] text-[#6E6E6E] font-normal">
                        {repo.description}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div className="border-t border-[#D8D7D2] pt-6">
            <h3 className="text-xs font-mono-meta uppercase tracking-widest text-[#6E6E6E] mb-3">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#ECEBE7] border border-[#D8D7D2] text-xs font-mono-meta text-[#111111] rounded-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="border-t border-[#D8D7D2] pt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] text-[#F5F4F0] text-xs uppercase font-mono-meta tracking-wider hover:bg-[#68715F] transition-colors rounded-xs shadow-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ECEBE7] border border-[#D8D7D2] text-[#111111] text-xs uppercase font-mono-meta tracking-wider hover:border-[#111111] transition-colors rounded-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono-meta text-[#6E6E6E] hover:text-[#111111] underline underline-offset-4 cursor-pointer"
            >
              Close overlay (Esc)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
