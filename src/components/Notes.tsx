import { useState } from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { notesData } from '../portfolioData';
import { NoteItem } from '../types';
import { NoteModal } from './NoteModal';
import { TiltCard } from './TiltCard';
import { useLanguage } from '../context/LanguageContext';
import { useSound } from '../context/SoundContext';

export function Notes() {
  const [selectedNote, setSelectedNote] = useState<NoteItem | null>(null);
  const { t } = useLanguage();
  const { playClick } = useSound();

  const handleOpenNote = (note: NoteItem) => {
    playClick();
    setSelectedNote(note);
  };

  return (
    <section
      id="notes"
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D8D7D2]/60 dark:border-[#2A2C32]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#68715F] dark:bg-[#8FA183]" />
            <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E] dark:text-[#9A9B9E]">
              {t.notes.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111] dark:text-[#EDEDEB]">
            {t.notes.heading}
          </h2>
        </div>

        <p className="text-sm font-mono-meta text-[#6E6E6E] dark:text-[#A0A2A8] max-w-md">
          {t.notes.subheading}
        </p>
      </div>

      {/* Grid of 2x2 Editorial Publication Cards with 3D Tilt */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {notesData.map((note) => (
          <TiltCard
            key={note.id}
            maxTilt={6}
            scale={1.015}
            onClick={() => handleOpenNote(note)}
            cursorType="read"
            className="cursor-pointer"
          >
            <article className="h-full p-8 md:p-10 bg-[#ECEBE7]/40 dark:bg-[#1A1B1E]/60 hover:bg-[#ECEBE7] dark:hover:bg-[#202227] border border-[#D8D7D2] dark:border-[#33363F] rounded-xs transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xs">
              <div className="space-y-4">
                {/* Metadata row */}
                <div className="flex items-center justify-between text-[11px] font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E]">
                  <span className="px-2 py-0.5 bg-[#F5F4F0] dark:bg-[#23252B] border border-[#D8D7D2] dark:border-[#353842] uppercase tracking-wider text-[#111111] dark:text-white rounded-xs">
                    {note.category}
                  </span>
                  <span>{note.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-light text-[#111111] dark:text-[#EDEDEB] group-hover:text-[#68715F] dark:group-hover:text-[#8FA183] transition-colors leading-snug">
                  {note.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm md:text-base text-[#6E6E6E] dark:text-[#A0A2A8] leading-relaxed">
                  {note.excerpt}
                </p>
              </div>

              {/* Read CTA */}
              <div className="pt-4 border-t border-[#D8D7D2]/60 dark:border-[#2E3138] flex items-center justify-between text-xs font-mono-meta text-[#111111] dark:text-[#EDEDEB]">
                <span className="text-[#6E6E6E] dark:text-[#9A9B9E]">{note.readTime}</span>
                <span className="inline-flex items-center gap-1 hover:text-[#68715F] dark:hover:text-[#8FA183] transition-colors font-medium">
                  <span>{t.notes.readNote}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          </TiltCard>
        ))}
      </div>

      {/* Reader Modal */}
      <NoteModal note={selectedNote} onClose={() => setSelectedNote(null)} />
    </section>
  );
}
