import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import { SupportedLanguage } from '../types';
import { useLanguage } from './LanguageContext';
import { INTRO_VOICES, IntroVoiceItem } from '../data/introVoices';

interface ReadingContextType {
  isReading: boolean;
  isPaused: boolean;
  isPlayingVoiceFile: boolean;
  currentVoiceLang: SupportedLanguage;
  voiceDuration: number;
  voiceCurrentTime: number;
  currentTitle: string;
  currentText: string;
  speed: number;
  progress: number;
  startReading: (text: string, title?: string) => void;
  playShamimVoiceIntro: (targetLang?: SupportedLanguage) => void;
  changeVoiceLanguage: (targetLang: SupportedLanguage) => void;
  pauseReading: () => void;
  resumeReading: () => void;
  stopReading: () => void;
  toggleSpeed: () => void;
  readPortfolioOverview: () => void;
  getCurrentVoiceItem: () => IntroVoiceItem;
}

const ReadingContext = createContext<ReadingContextType | undefined>(undefined);

export function ReadingProvider({ children }: { children: ReactNode }) {
  const { language } = useLanguage();
  const [isReading, setIsReading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlayingVoiceFile, setIsPlayingVoiceFile] = useState(false);
  const [currentVoiceLang, setCurrentVoiceLang] = useState<SupportedLanguage>(language);
  const [voiceDuration, setVoiceDuration] = useState(12.6);
  const [voiceCurrentTime, setVoiceCurrentTime] = useState(0);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentText, setCurrentText] = useState('');
  const [speed, setSpeed] = useState(1);
  const [progress, setProgress] = useState(0);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const progressTimerRef = useRef<number | null>(null);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const audioPreloadsRef = useRef<Record<string, HTMLAudioElement>>({});

  // Sync voice language when user changes website language (if not currently playing another explicitly)
  useEffect(() => {
    if (!isReading) {
      setCurrentVoiceLang(language);
    }
  }, [language, isReading]);

  // Preload intro audio elements for all supported languages
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const langs: SupportedLanguage[] = ['en', 'ja', 'es', 'bn'];
      langs.forEach((lang) => {
        const item = INTRO_VOICES[lang];
        if (item) {
          const audio = new Audio(item.audioSrc);
          audio.preload = 'auto';
          audioPreloadsRef.current[lang] = audio;
        }
      });
    }

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      if (audioPlayerRef.current) {
        audioPlayerRef.current.pause();
        audioPlayerRef.current = null;
      }
    };
  }, []);

  const stopReading = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
      audioPlayerRef.current.currentTime = 0;
    }
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    setIsReading(false);
    setIsPaused(false);
    setIsPlayingVoiceFile(false);
    setProgress(0);
    setVoiceCurrentTime(0);
    setCurrentText('');
    setCurrentTitle('');
  };

  const getCurrentVoiceItem = (): IntroVoiceItem => {
    return INTRO_VOICES[currentVoiceLang] || INTRO_VOICES.en;
  };

  // Play Shamim's authentic audio file in requested language
  const playShamimVoiceIntro = (targetLang?: SupportedLanguage) => {
    const selectedLang = targetLang || language || 'en';
    const voiceItem = INTRO_VOICES[selectedLang] || INTRO_VOICES.en;

    stopReading();

    setCurrentVoiceLang(selectedLang);
    setVoiceDuration(voiceItem.durationSeconds);
    setVoiceCurrentTime(0);

    // Reuse preloaded audio or create a new instance
    let audio = audioPreloadsRef.current[selectedLang];
    if (!audio) {
      audio = new Audio(voiceItem.audioSrc);
      audioPreloadsRef.current[selectedLang] = audio;
    }
    audioPlayerRef.current = audio;

    setCurrentTitle(voiceItem.title);
    setCurrentText(voiceItem.transcript);
    setIsReading(true);
    setIsPaused(false);
    setIsPlayingVoiceFile(true);
    setProgress(0);

    audio.currentTime = 0;
    audio.playbackRate = speed;

    audio.ontimeupdate = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setVoiceDuration(audio.duration);
        setVoiceCurrentTime(audio.currentTime);
        const pct = (audio.currentTime / audio.duration) * 100;
        setProgress(pct);
      } else {
        setVoiceCurrentTime(audio.currentTime);
        const pct = (audio.currentTime / voiceItem.durationSeconds) * 100;
        setProgress(Math.min(pct, 100));
      }
    };

    audio.onended = () => {
      setProgress(100);
      setVoiceCurrentTime(audio.duration || voiceItem.durationSeconds);
      setTimeout(() => {
        setIsReading(false);
        setIsPaused(false);
        setIsPlayingVoiceFile(false);
      }, 500);
    };

    audio.onerror = () => {
      // Try wav fallback if mp3 fails
      if (audio.src !== voiceItem.wavFallback) {
        audio.src = voiceItem.wavFallback;
        audio.play().catch(() => {
          startReading(voiceItem.transcript, voiceItem.title);
        });
      } else {
        startReading(voiceItem.transcript, voiceItem.title);
      }
    };

    audio.play().catch(() => {
      startReading(voiceItem.transcript, voiceItem.title);
    });
  };

  const changeVoiceLanguage = (targetLang: SupportedLanguage) => {
    if (isPlayingVoiceFile) {
      playShamimVoiceIntro(targetLang);
    } else {
      setCurrentVoiceLang(targetLang);
      const voiceItem = INTRO_VOICES[targetLang] || INTRO_VOICES.en;
      setVoiceDuration(voiceItem.durationSeconds);
      setCurrentText(voiceItem.transcript);
      setCurrentTitle(voiceItem.title);
    }
  };

  const startReading = (text: string, title = 'Audio Narration') => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    stopReading();

    const cleanText = text.replace(/<[^>]*>/g, '').trim();
    if (!cleanText) return;

    setCurrentTitle(title);
    setCurrentText(cleanText);
    setIsReading(true);
    setIsPaused(false);
    setIsPlayingVoiceFile(false);
    setProgress(0);

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = speed;
    utterance.pitch = 1.0;

    // Set voice language if possible
    if (language === 'ja') utterance.lang = 'ja-JP';
    else if (language === 'es') utterance.lang = 'es-ES';
    else if (language === 'bn') utterance.lang = 'bn-BD';
    else utterance.lang = 'en-US';

    const wordsCount = cleanText.split(/\s+/).length;
    const estimatedSeconds = Math.max(3, (wordsCount / (150 * speed)) * 60);
    const intervalMs = 100;
    const increment = (intervalMs / (estimatedSeconds * 1000)) * 100;

    progressTimerRef.current = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 98) return prev;
        return Math.min(prev + increment, 98);
      });
    }, intervalMs);

    utterance.onend = () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      setProgress(100);
      setTimeout(() => {
        setIsReading(false);
        setIsPaused(false);
      }, 500);
    };

    utterance.onerror = () => {
      stopReading();
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const pauseReading = () => {
    if (isPlayingVoiceFile && audioPlayerRef.current) {
      audioPlayerRef.current.pause();
      setIsPaused(true);
    } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const resumeReading = () => {
    if (isPlayingVoiceFile && audioPlayerRef.current) {
      audioPlayerRef.current.play().catch(() => {});
      setIsPaused(false);
    } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  };

  const toggleSpeed = () => {
    const nextSpeed = speed === 1 ? 1.25 : speed === 1.25 ? 1.5 : 1;
    setSpeed(nextSpeed);
    if (isPlayingVoiceFile && audioPlayerRef.current) {
      audioPlayerRef.current.playbackRate = nextSpeed;
    } else if (isReading && currentText) {
      startReading(currentText, currentTitle);
    }
  };

  const readPortfolioOverview = () => {
    // Play Shamim's intro audio in the user's selected language
    playShamimVoiceIntro(language);
  };

  return (
    <ReadingContext.Provider
      value={{
        isReading,
        isPaused,
        isPlayingVoiceFile,
        currentVoiceLang,
        voiceDuration,
        voiceCurrentTime,
        currentTitle,
        currentText,
        speed,
        progress,
        startReading,
        playShamimVoiceIntro,
        changeVoiceLanguage,
        pauseReading,
        resumeReading,
        stopReading,
        toggleSpeed,
        readPortfolioOverview,
        getCurrentVoiceItem
      }}
    >
      {children}
    </ReadingContext.Provider>
  );
}

export function useReading() {
  const context = useContext(ReadingContext);
  if (!context) {
    throw new Error('useReading must be used within a ReadingProvider');
  }
  return context;
}
