import { createContext, useContext, useState, ReactNode } from 'react';
import { SupportedLanguage } from '../types';
import { translations, TranslationDictionary } from '../translations';
import { useSound } from './SoundContext';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: TranslationDictionary;
  languageNames: { code: SupportedLanguage; label: string; flag: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_LIST: { code: SupportedLanguage; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: 'EN' },
  { code: 'ja', label: '日本語', flag: 'JA' },
  { code: 'es', label: 'Español', flag: 'ES' },
  { code: 'bn', label: 'বাংলা', flag: 'BN' }
];

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    try {
      const stored = localStorage.getItem('portfolio_language') as SupportedLanguage | null;
      if (stored && ['en', 'ja', 'es', 'bn'].includes(stored)) {
        return stored;
      }
    } catch {}
    return 'en';
  });

  const { playPop } = useSound();

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('portfolio_language', lang);
    } catch {}
    playPop();
  };

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        languageNames: LANGUAGE_LIST
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
