import { useEffect } from 'react';
import { X, Clock, Calendar, Bookmark, ArrowLeft } from 'lucide-react';
import { NoteItem } from '../types';

interface NoteModalProps {
  note: NoteItem | null;
  onClose: () => void;
}

export function NoteModal({ note, onClose }: NoteModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (note) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [note, onClose]);

  if (!note) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#111111]/70 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="note-modal-title"
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] bg-[#F5F4F0] border border-[#D8D7D2] rounded-xs overflow-y-auto shadow-2xl p-6 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between pb-6 border-b border-[#D8D7D2] text-xs font-mono-meta text-[#6E6E6E]">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-[#ECEBE7] border border-[#D8D7D2] text-[#111111] uppercase tracking-wider rounded-xs">
              {note.category}
            </span>
            <span>{note.date}</span>
            <span>•</span>
            <span>{note.readTime}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#6E6E6E] hover:text-[#111111] hover:bg-[#ECEBE7] rounded-xs transition-colors"
            aria-label="Close note"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Note Heading */}
        <div className="py-8 space-y-4">
          <h2
            id="note-modal-title"
            className="text-2xl sm:text-3xl md:text-4xl font-light text-[#111111] leading-tight"
          >
            {note.title}
          </h2>
          <p className="text-sm font-mono-meta text-[#68715F] italic">
            &ldquo;{note.excerpt}&rdquo;
          </p>
        </div>

        {/* Article Content */}
        <div className="space-y-5 text-base sm:text-lg text-[#111111]/90 leading-[1.75] whitespace-pre-line border-t border-[#D8D7D2] pt-8">
          {note.content}
        </div>

        {/* Note Footer */}
        <div className="mt-12 pt-6 border-t border-[#D8D7D2] flex items-center justify-between text-xs font-mono-meta text-[#6E6E6E]">
          <span>Author: Shamim Islam</span>
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-[#111111] hover:text-[#68715F] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Digital Garden</span>
          </button>
        </div>
      </div>
    </div>
  );
}
