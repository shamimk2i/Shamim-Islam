import { useState } from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { notesData } from '../portfolioData';
import { NoteItem } from '../types';
import { NoteModal } from './NoteModal';

export function Notes() {
  const [selectedNote, setSelectedNote] = useState<NoteItem | null>(null);

  return (
    <section
      id="notes"
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D8D7D2]/60"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#68715F]" />
            <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E]">
              07 / WRITING & GARDEN
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
            Notes & Ideas
          </h2>
        </div>

        <p className="text-sm font-mono-meta text-[#6E6E6E] max-w-md">
          Field notes on digital craft, cognitive systems, and the practice of deliberate creation.
        </p>
      </div>

      {/* Grid of 2x2 Editorial Publication Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {notesData.map((note) => (
          <article
            key={note.id}
            data-cursor="read"
            onClick={() => setSelectedNote(note)}
            className="group p-8 md:p-10 bg-[#ECEBE7]/40 hover:bg-[#ECEBE7] border border-[#D8D7D2] rounded-xs transition-all duration-300 flex flex-col justify-between cursor-pointer space-y-6 shadow-xs hover:shadow-md"
          >
            <div className="space-y-4">
              {/* Metadata row */}
              <div className="flex items-center justify-between text-[11px] font-mono-meta text-[#6E6E6E]">
                <span className="px-2 py-0.5 bg-[#F5F4F0] border border-[#D8D7D2] uppercase tracking-wider text-[#111111] rounded-xs">
                  {note.category}
                </span>
                <span>{note.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-light text-[#111111] group-hover:text-[#68715F] transition-colors leading-snug">
                {note.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm md:text-base text-[#6E6E6E] leading-relaxed">
                {note.excerpt}
              </p>
            </div>

            {/* Read CTA */}
            <div className="pt-4 border-t border-[#D8D7D2]/60 flex items-center justify-between text-xs font-mono-meta text-[#111111]">
              <span className="text-[#6E6E6E]">{note.readTime}</span>
              <span className="inline-flex items-center gap-1 group-hover:text-[#68715F] transition-colors font-medium">
                <span>Read Note</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Reader Modal */}
      <NoteModal note={selectedNote} onClose={() => setSelectedNote(null)} />
    </section>
  );
}
