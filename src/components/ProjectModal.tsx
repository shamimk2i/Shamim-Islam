import { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Layers, Cpu, Compass } from 'lucide-react';
import { Project } from '../types';

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
        <div className="sticky top-0 z-10 bg-[#F5F4F0]/90 backdrop-blur-md px-6 md:px-10 py-5 border-b border-[#D8D7D2] flex items-center justify-between">
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
            className="p-2 text-[#6E6E6E] hover:text-[#111111] hover:bg-[#ECEBE7] rounded-xs transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-10 space-y-8">
          {/* Main Visual */}
          <div className="relative aspect-[16/9] w-full bg-[#ECEBE7] border border-[#D8D7D2] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover editorial-img"
            />
            <div className="absolute top-4 right-4 bg-[#111111]/80 backdrop-blur-md px-3 py-1 text-[11px] font-mono-meta text-[#F5F4F0] border border-white/10">
              TIMELINE: {project.year}
            </div>
          </div>

          {/* Title & Short Summary */}
          <div>
            <h2
              id="project-modal-title"
              className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111111] tracking-tight mb-4"
            >
              {project.title}
            </h2>
            <p className="text-lg text-[#6E6E6E] font-normal leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Metrics strip if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-6 px-6 bg-[#ECEBE7] border border-[#D8D7D2] rounded-xs">
              {project.metrics.map((metric, i) => (
                <div key={i}>
                  <span className="text-[10px] font-mono-meta uppercase tracking-widest text-[#6E6E6E] block mb-1">
                    {metric.label}
                  </span>
                  <span className="text-xl font-light text-[#111111]">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Deep Case-Study Narrative */}
          <div className="space-y-4 text-[#111111]/90 text-base leading-relaxed border-t border-[#D8D7D2] pt-6">
            <h3 className="text-xs font-mono-meta uppercase tracking-widest text-[#68715F] font-semibold">
              Project Architecture & Vision
            </h3>
            <p>{project.fullDescription}</p>
          </div>

          {/* Technologies Used */}
          <div className="border-t border-[#D8D7D2] pt-6">
            <h3 className="text-xs font-mono-meta uppercase tracking-widest text-[#6E6E6E] mb-3">
              Stack & Architectural Components
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

          {/* Action links */}
          <div className="border-t border-[#D8D7D2] pt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono-meta text-[#6E6E6E]">
              Status: Prototype & Active Development (2026)
            </div>
            <button
              onClick={() => {
                onClose();
                const contactEl = document.getElementById('contact');
                if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-[#F5F4F0] text-xs uppercase font-mono-meta tracking-wider hover:bg-[#68715F] transition-colors rounded-xs"
            >
              <span>Discuss this project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
