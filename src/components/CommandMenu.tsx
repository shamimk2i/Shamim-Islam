import { useEffect, useState, useMemo } from 'react';
import { Search, ArrowRight, Copy, Check, CornerDownLeft, Sparkles, X, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../portfolioData';
import { useTheme } from '../context/ThemeContext';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isDark, toggleTheme } = useTheme();

  const commandItems = useMemo(() => [
    { id: 'home', title: 'Home / Top', category: 'Navigation', icon: '↗', action: () => scrollToSection('hero') },
    { id: 'about', title: 'About Shamim', category: 'Navigation', icon: '↗', action: () => scrollToSection('about') },
    { id: 'currently', title: 'Currently (Now)', category: 'Navigation', icon: '↗', action: () => scrollToSection('currently') },
    { id: 'expertise', title: 'Skills & Curiosity', category: 'Navigation', icon: '↗', action: () => scrollToSection('expertise') },
    { id: 'work', title: 'Selected Work (Things I’ve Built)', category: 'Navigation', icon: '↗', action: () => scrollToSection('work') },
    { id: 'currently-building', title: 'Currently Building (Kizuna)', category: 'Navigation', icon: '↗', action: () => scrollToSection('currently-building') },
    { id: 'experiments-archive', title: 'More Experiments', category: 'Navigation', icon: '↗', action: () => scrollToSection('experiments-archive') },
    { id: 'journey', title: 'My Journey / Milestones', category: 'Navigation', icon: '↗', action: () => scrollToSection('journey') },
    { id: 'explore', title: "Things I'm Into (Curiosities)", category: 'Navigation', icon: '↗', action: () => scrollToSection('explore') },
    { id: 'notes', title: 'Notes & Digital Garden', category: 'Navigation', icon: '↗', action: () => scrollToSection('notes') },
    { id: 'gallery', title: 'Visual Archive', category: 'Navigation', icon: '↗', action: () => scrollToSection('gallery') },
    { id: 'contact', title: 'Start a Conversation', category: 'Navigation', icon: '↗', action: () => scrollToSection('contact') },
    {
      id: 'toggle-theme',
      title: isDark ? 'Switch to Light Theme' : 'Switch to Dark Charcoal Theme',
      category: 'Preferences',
      icon: isDark ? '☀' : '☾',
      action: () => {
        toggleTheme();
        onClose();
      }
    },
    {
      id: 'copy-email',
      title: `Copy Email (${personalInfo.email})`,
      category: 'Actions',
      icon: '✉',
      action: () => copyEmail()
    }
  ], [isDark, toggleTheme]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return commandItems;
    const lower = query.toLowerCase();
    return commandItems.filter(item =>
      item.title.toLowerCase().includes(lower) ||
      item.category.toLowerCase().includes(lower)
    );
  }, [commandItems, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const scrollToSection = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }

      if (!isOpen) {
        if (e.key === 'k' || e.key === 'K') {
          // Only if not typing in an input/textarea
          const activeTag = document.activeElement?.tagName.toLowerCase();
          if (activeTag !== 'input' && activeTag !== 'textarea') {
            e.preventDefault();
            setQuery('');
            // Trigger opening from parent if parent listener exists
          }
        }
        return;
      }

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-[#111111]/40 backdrop-blur-sm transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="w-full max-w-xl bg-[#F5F4F0] border border-[#D8D7D2] shadow-2xl rounded-sm overflow-hidden transform transition-all text-[#111111]"
        onClick={e => e.stopPropagation()}
      >
        {/* Search header */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#D8D7D2] gap-3">
          <Search className="w-4 h-4 text-[#6E6E6E]" />
          <input
            autoFocus
            type="text"
            placeholder="Type a command or navigate..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-[15px] outline-none placeholder:text-[#6E6E6E]/60 text-[#111111]"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#6E6E6E] hover:text-[#111111] p-1 text-xs"
              aria-label="Clear query"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="text-[#6E6E6E] hover:text-[#111111] p-1"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results list */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-transparent">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-sm text-[#6E6E6E]">
              No matching commands found.
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xs text-left transition-colors ${
                    isSelected ? 'bg-[#ECEBE7] text-[#111111]' : 'text-[#111111]/80 hover:bg-[#ECEBE7]/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono-meta text-xs text-[#68715F] w-4">{item.icon}</span>
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono-meta text-[#6E6E6E] uppercase tracking-wider">
                      {item.category}
                    </span>
                    {isSelected && (
                      <CornerDownLeft className="w-3.5 h-3.5 text-[#68715F]" />
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#ECEBE7] border-t border-[#D8D7D2] flex items-center justify-between text-[11px] font-mono-meta text-[#6E6E6E]">
          <div className="flex items-center gap-2">
            <span>Use <kbd className="px-1.5 py-0.5 bg-[#F5F4F0] border border-[#D8D7D2] rounded text-[10px]">↑</kbd> <kbd className="px-1.5 py-0.5 bg-[#F5F4F0] border border-[#D8D7D2] rounded text-[10px]">↓</kbd> to navigate</span>
            <span>•</span>
            <span><kbd className="px-1.5 py-0.5 bg-[#F5F4F0] border border-[#D8D7D2] rounded text-[10px]">↵</kbd> to select</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#68715F]">
            <Sparkles className="w-3 h-3" />
            <span>ESC to close</span>
          </div>
        </div>

        {copied && (
          <div className="absolute top-3 right-12 bg-[#111111] text-[#F5F4F0] text-xs px-3 py-1 rounded flex items-center gap-1.5 shadow-md">
            <Check className="w-3 h-3 text-[#68715F]" />
            <span>Email copied!</span>
          </div>
        )}
      </div>
    </div>
  );
}
