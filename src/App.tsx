import { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ProgressBar } from './components/ProgressBar';
import { CommandMenu } from './components/CommandMenu';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Currently } from './components/Currently';
import { Expertise } from './components/Expertise';
import { SelectedWork } from './components/SelectedWork';
import { CurrentlyBuilding } from './components/CurrentlyBuilding';
import { MoreExperiments } from './components/MoreExperiments';
import { Journey } from './components/Journey';
import { Experiments } from './components/Experiments';
import { Notes } from './components/Notes';
import { VisualGallery } from './components/VisualGallery';
import { Personality } from './components/Personality';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';
import { projectsData } from './portfolioData';

export default function App() {
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  // Global K hotkey listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'k' || e.key === 'K') && !e.metaKey && !e.ctrlKey) {
        const activeTag = document.activeElement?.tagName.toLowerCase();
        if (activeTag !== 'input' && activeTag !== 'textarea') {
          e.preventDefault();
          setCommandMenuOpen((prev) => !prev);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectProjectFromCommand = (projectId: string) => {
    const proj = projectsData.find((p) => p.id === projectId);
    if (proj) {
      setActiveProjectModal(proj);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F5F4F0] text-[#111111] font-sans selection:bg-[#68715F]/20 selection:text-[#111111]">
        {/* Scroll Progress Bar */}
        <ProgressBar />

        {/* Desktop Custom Cursor */}
        <CustomCursor />

        {/* Keyboard-accessible Command Menu (Shortcut: K) */}
        <CommandMenu
          isOpen={commandMenuOpen}
          onClose={() => setCommandMenuOpen(false)}
          onSelectProject={handleSelectProjectFromCommand}
        />

        {/* Minimal Sticky Navigation */}
        <Navbar onOpenCommand={() => setCommandMenuOpen(true)} />

        {/* Main Portfolio Flow */}
        <main>
          {/* 01: Hero Section */}
          <Hero />

          {/* 02: About Me Section */}
          <About />

          {/* 03: Currently (Now) Section */}
          <Currently />

          {/* 04: Capabilities & Expertise */}
          <Expertise />

          {/* 05: Selected Work & Things I've built */}
          <SelectedWork onOpenModal={(project) => setActiveProjectModal(project)} />

          {/* 06: Currently Building (Kizuna Study Tracker) */}
          <CurrentlyBuilding />

          {/* 07: More Experiments (Compact Archive) */}
          <MoreExperiments />

          {/* 08: Journey & Milestones Timeline */}
          <Journey />

          {/* 07: Things I Like To Explore (Interactive Typography) */}
          <Experiments />

          {/* 08: Digital Garden & Notes */}
          <Notes />

          {/* 09: Visual Gallery & Studies */}
          <VisualGallery />

          {/* 10: Personality & Perspective Statement */}
          <Personality />

          {/* 11: Contact & Collaboration */}
          <Contact />
        </main>

        {/* 12: Dark Footer with Easter Egg */}
        <Footer onOpenCommand={() => setCommandMenuOpen(true)} />

        {/* Project Case Study Reader Modal */}
        <ProjectModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      </div>
  );
}

