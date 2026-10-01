import { useReading } from '../context/ReadingContext';
import { useSound } from '../context/SoundContext';
import { Volume2, Pause, Play, Square, FastForward, Mic, Globe } from 'lucide-react';
import { INTRO_VOICE_LIST } from '../data/introVoices';
import { SupportedLanguage } from '../types';

export function ReadingPlayer() {
  const {
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
    pauseReading,
    resumeReading,
    stopReading,
    toggleSpeed,
    playShamimVoiceIntro
  } = useReading();
  const { playClick } = useSound();

  if (!isReading) return null;

  const currentVoiceItem = INTRO_VOICE_LIST.find((v) => v.language === currentVoiceLang) || INTRO_VOICE_LIST[0];

  const handleSwitchLanguage = (lang: SupportedLanguage) => {
    playClick();
    playShamimVoiceIntro(lang);
  };

  const formattedTime = (seconds: number) => {
    const s = Math.max(0, Math.floor(seconds));
    const tenths = Math.floor((seconds % 1) * 10);
    return `${s}.${tenths}s`;
  };

  return (
    <div
      role="region"
      aria-label="Audio Reader"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-lg bg-[#111111]/95 dark:bg-[#1A1B1E]/95 text-[#F5F4F0] backdrop-blur-xl border border-white/15 dark:border-[#383B44] rounded-2xl p-4 shadow-[0_12px_40px_rgba(0,0,0,0.4)] animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      {/* Top row: Status, Waveform, Close */}
      <div className="flex items-center justify-between gap-3 mb-2.5">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-full bg-[#68715F]/30 flex items-center justify-center shrink-0 border border-[#68715F]/50">
            {isPlayingVoiceFile ? (
              <Mic className="w-4 h-4 text-[#A5C28F] animate-pulse" />
            ) : (
              <Volume2 className="w-4 h-4 text-[#A5C28F] animate-pulse" />
            )}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] font-mono-meta uppercase tracking-widest text-[#A5C28F] font-semibold block">
                {isPlayingVoiceFile ? "Shamim's Voice Intro" : isPaused ? 'Narration Paused' : 'Reading Aloud'}
              </span>
              {isPlayingVoiceFile && (
                <span className="px-1.5 py-0.5 bg-[#8FA183]/20 text-[9px] text-[#A5C28F] font-mono rounded-xs border border-[#8FA183]/40 flex items-center gap-1">
                  <span>{currentVoiceItem.flag}</span>
                  <span>{currentVoiceItem.code}</span>
                </span>
              )}
            </div>
            <p className="text-xs font-medium truncate text-white/90">
              {currentTitle}
            </p>
          </div>
        </div>

        {/* Animated Speech Waveform */}
        <div className="hidden sm:flex items-center gap-1 h-4 shrink-0 px-2">
          {[0.6, 1, 0.4, 0.8, 0.3, 0.9, 0.5].map((scale, i) => (
            <span
              key={i}
              className={`w-0.5 bg-[#8FA183] rounded-full transition-all duration-150 ${
                isPaused ? 'h-1.5 opacity-40' : 'animate-pulse'
              }`}
              style={{
                height: isPaused ? '4px' : `${scale * 16}px`,
                animationDelay: `${i * 120}ms`
              }}
            />
          ))}
        </div>

        {/* Speed toggle & Stop */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => {
              playClick();
              toggleSpeed();
            }}
            className="px-2 py-1 text-[10px] font-mono-meta bg-white/10 hover:bg-white/20 rounded-xs transition-colors cursor-pointer"
            title="Toggle playback speed"
          >
            {speed}x
          </button>
          <button
            onClick={() => {
              playClick();
              stopReading();
            }}
            className="p-1.5 hover:bg-white/10 rounded-xs text-white/70 hover:text-white transition-colors cursor-pointer"
            title="Stop narration"
          >
            <Square className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Multilingual Voice Quick-Switcher (Only for intro voice audio) */}
      {isPlayingVoiceFile && (
        <div className="flex items-center gap-1 mb-2.5 py-1 px-2 bg-white/5 rounded-lg border border-white/5 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1 text-[10px] text-white/50 font-mono shrink-0 mr-1">
            <Globe className="w-3 h-3 text-[#A5C28F]" />
            <span>Voice Language:</span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            {INTRO_VOICE_LIST.map((voice) => {
              const isSelected = currentVoiceLang === voice.language;
              return (
                <button
                  key={voice.language}
                  onClick={() => handleSwitchLanguage(voice.language)}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono-meta transition-all cursor-pointer flex items-center gap-1 ${
                    isSelected
                      ? 'bg-[#68715F] text-white font-semibold shadow-sm border border-[#8FA183]'
                      : 'bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-transparent'
                  }`}
                  title={`Listen in ${voice.label} (${voice.nativeLabel})`}
                >
                  <span>{voice.flag}</span>
                  <span>{voice.nativeLabel}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Progress Line */}
      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-2.5">
        <div
          className="bg-gradient-to-r from-[#68715F] via-[#8FA183] to-[#A5C28F] h-full transition-all duration-150"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Spoken Transcript Preview */}
      {currentText && (
        <p className="text-[11px] font-sans text-white/80 line-clamp-2 mb-2.5 italic bg-black/20 p-2 rounded border border-white/5">
          &ldquo;{currentText}&rdquo;
        </p>
      )}

      {/* Controls row */}
      <div className="flex items-center justify-between pt-1 border-t border-white/10 text-xs">
        <span className="text-[10px] font-mono-meta text-white/60">
          {isPlayingVoiceFile
            ? `${formattedTime(voiceCurrentTime)} / ${formattedTime(voiceDuration)}`
            : `${Math.round(progress)}% completed`}
        </span>

        <div className="flex items-center gap-2">
          {isPaused ? (
            <button
              onClick={() => {
                playClick();
                resumeReading();
              }}
              className="flex items-center gap-1.5 px-3 py-1 bg-white text-black text-[11px] font-medium rounded-full hover:bg-[#8FA183] hover:text-white transition-colors cursor-pointer"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Resume</span>
            </button>
          ) : (
            <button
              onClick={() => {
                playClick();
                pauseReading();
              }}
              className="flex items-center gap-1.5 px-3 py-1 bg-white/15 hover:bg-white/25 text-white text-[11px] font-medium rounded-full transition-colors cursor-pointer"
            >
              <Pause className="w-3 h-3" />
              <span>Pause</span>
            </button>
          )}

          <button
            onClick={() => {
              playClick();
              toggleSpeed();
            }}
            className="hidden sm:inline-flex items-center gap-1 text-[11px] text-white/70 hover:text-white transition-colors"
          >
            <FastForward className="w-3 h-3" />
            <span>Speed ({speed}x)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
