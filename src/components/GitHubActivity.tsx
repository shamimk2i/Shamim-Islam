import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Github, ArrowUpRight, Flame, GitCommit, Calendar, Activity, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSound } from '../context/SoundContext';
import { personalInfo } from '../portfolioData';
import { generateYearActivity, RECENT_COMMITS, ContributionDay } from '../data/githubActivityData';
import { MagneticButton } from './MagneticButton';
import { TiltCard } from './TiltCard';

export function GitHubActivity() {
  const { t } = useLanguage();
  const { playClick, playPop } = useSound();
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);
  const [selectedDay, setSelectedDay] = useState<ContributionDay | null>(null);

  // Memoize generated data for smooth instant tab switching
  const activity2026 = useMemo(() => generateYearActivity(2026), []);
  const activity2025 = useMemo(() => generateYearActivity(2025), []);

  const currentData = selectedYear === 2026 ? activity2026 : activity2025;

  const handleYearChange = (year: number) => {
    if (year !== selectedYear) {
      playClick();
      setSelectedYear(year);
      setHoveredDay(null);
      setSelectedDay(null);
    }
  };

  const handleCellClick = (day: ContributionDay) => {
    playPop();
    setSelectedDay((prev) => (prev?.date === day.date ? null : day));
  };

  const activeInspectorDay = hoveredDay || selectedDay;

  const formatDate = (dateStr: string) => {
    try {
      const [y, m, d] = dateStr.split('-').map(Number);
      const date = new Date(y, m - 1, d);
      return date.toLocaleDateString(undefined, {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  // Color mappings for each contribution level
  const getCellColorClass = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-[#C2CEB8] dark:bg-[#2F3C2C] hover:bg-[#B0BEA5] dark:hover:bg-[#3D4C3A]';
      case 2:
        return 'bg-[#98A78C] dark:bg-[#475A43] hover:bg-[#86957B] dark:hover:bg-[#576B52]';
      case 3:
        return 'bg-[#68715F] dark:bg-[#6A8164] hover:bg-[#58614F] dark:hover:bg-[#7D9577]';
      case 4:
        return 'bg-[#3E4D36] dark:bg-[#8FA183] hover:bg-[#313E2B] dark:hover:bg-[#A5C28F]';
      default:
        return 'bg-[#E3E2DD] dark:bg-[#1E2024] hover:bg-[#D5D4CE] dark:hover:bg-[#282B31]';
    }
  };

  const activeRatio = Math.round((currentData.activeDaysCount / currentData.totalDays) * 100);

  return (
    <section
      id="activity"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D8D7D2]/60 dark:border-[#2A2C32] overflow-hidden"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#68715F] dark:bg-[#8FA183]" />
              <span className="text-[11px] font-mono-meta uppercase tracking-widest text-[#6E6E6E] dark:text-[#9A9B9E]">
                {t.activity.eyebrow}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#111111] dark:text-[#EDEDEB] leading-[1.1]">
              {t.activity.heading}
            </h2>
            <p className="text-sm md:text-base font-normal text-[#6E6E6E] dark:text-[#A0A2A8] leading-relaxed">
              {t.activity.subheading}
            </p>
          </div>

          {/* Direct GitHub Profile Link */}
          <div className="shrink-0 flex items-center gap-3">
            <MagneticButton strength={0.2}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-[#D8D7D2] dark:border-[#3E4147] bg-[#ECEBE7]/60 dark:bg-[#1A1B1E] text-xs font-mono-meta tracking-wider text-[#111111] dark:text-[#EDEDEB] hover:border-[#111111] dark:hover:border-white transition-all cursor-pointer shadow-xs"
              >
                <Github className="w-4 h-4 text-[#111111] dark:text-white transition-transform group-hover:scale-110" />
                <span>{t.activity.viewProfile}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#68715F] dark:text-[#8FA183]" />
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* 4 Summary Metric Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          {/* 1: Total Contributions */}
          <div className="p-5 bg-[#ECEBE7]/40 dark:bg-[#1A1B1E]/40 border border-[#D8D7D2]/60 dark:border-[#2E3138] rounded-xs space-y-1.5 transition-all">
            <div className="flex items-center justify-between text-[#6E6E6E] dark:text-[#9A9B9E]">
              <span className="text-[11px] font-mono-meta uppercase tracking-wider">
                {t.activity.totalContributions}
              </span>
              <Activity className="w-3.5 h-3.5 text-[#68715F] dark:text-[#8FA183]" />
            </div>
            <p className="text-3xl md:text-4xl font-light text-[#111111] dark:text-[#EDEDEB] font-sans tracking-tight">
              {currentData.totalContributions.toLocaleString()}
            </p>
            <p className="text-[11px] font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E]">
              across {currentData.totalDays} tracked days
            </p>
          </div>

          {/* 2: Current Streak */}
          <div className="p-5 bg-[#ECEBE7]/40 dark:bg-[#1A1B1E]/40 border border-[#D8D7D2]/60 dark:border-[#2E3138] rounded-xs space-y-1.5 transition-all">
            <div className="flex items-center justify-between text-[#6E6E6E] dark:text-[#9A9B9E]">
              <span className="text-[11px] font-mono-meta uppercase tracking-wider">
                {t.activity.currentStreak}
              </span>
              <Flame className="w-3.5 h-3.5 text-[#68715F] dark:text-[#8FA183] animate-pulse" />
            </div>
            <p className="text-3xl md:text-4xl font-light text-[#111111] dark:text-[#EDEDEB] font-sans tracking-tight">
              {currentData.currentStreak} <span className="text-sm text-[#68715F] dark:text-[#8FA183] font-normal">days</span>
            </p>
            <p className="text-[11px] font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E]">
              active building streak
            </p>
          </div>

          {/* 3: Longest Streak */}
          <div className="p-5 bg-[#ECEBE7]/40 dark:bg-[#1A1B1E]/40 border border-[#D8D7D2]/60 dark:border-[#2E3138] rounded-xs space-y-1.5 transition-all">
            <div className="flex items-center justify-between text-[#6E6E6E] dark:text-[#9A9B9E]">
              <span className="text-[11px] font-mono-meta uppercase tracking-wider">
                {t.activity.longestStreak}
              </span>
              <Calendar className="w-3.5 h-3.5 text-[#68715F] dark:text-[#8FA183]" />
            </div>
            <p className="text-3xl md:text-4xl font-light text-[#111111] dark:text-[#EDEDEB] font-sans tracking-tight">
              {currentData.longestStreak} <span className="text-sm text-[#68715F] dark:text-[#8FA183] font-normal">days</span>
            </p>
            <p className="text-[11px] font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E]">
              continuous code commit run
            </p>
          </div>

          {/* 4: Active Days Ratio */}
          <div className="p-5 bg-[#ECEBE7]/40 dark:bg-[#1A1B1E]/40 border border-[#D8D7D2]/60 dark:border-[#2E3138] rounded-xs space-y-1.5 transition-all">
            <div className="flex items-center justify-between text-[#6E6E6E] dark:text-[#9A9B9E]">
              <span className="text-[11px] font-mono-meta uppercase tracking-wider">
                {t.activity.activeDays}
              </span>
              <GitCommit className="w-3.5 h-3.5 text-[#68715F] dark:text-[#8FA183]" />
            </div>
            <p className="text-3xl md:text-4xl font-light text-[#111111] dark:text-[#EDEDEB] font-sans tracking-tight">
              {activeRatio}%
            </p>
            <p className="text-[11px] font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E]">
              {currentData.activeDaysCount} of {currentData.totalDays} days committed
            </p>
          </div>
        </div>

        {/* Main Heatmap Card with 3D Tilt */}
        <TiltCard maxTilt={3} scale={1.005}>
          <div className="bg-[#ECEBE7] dark:bg-[#1A1B1E] border border-[#D8D7D2] dark:border-[#33363F] rounded-xs p-6 md:p-8 space-y-6 shadow-xs relative">
            {/* Top Toolbar: Filter Tabs & User Handle */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#D8D7D2]/60 dark:border-[#2A2C32]">
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-[#68715F] dark:text-[#8FA183]" />
                <span className="font-mono-meta text-xs text-[#111111] dark:text-[#EDEDEB] font-medium">
                  shamimk2i
                </span>
                <span className="text-xs text-[#6E6E6E] dark:text-[#9A9B9E]">·</span>
                <span className="text-xs font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E]">
                  {currentData.totalContributions} contributions in {selectedYear}
                </span>
              </div>

              {/* Segmented Year Controls */}
              <div className="flex items-center gap-1 p-1 bg-[#F5F4F0] dark:bg-[#121315] rounded-xs border border-[#D8D7D2]/80 dark:border-[#2F323A]">
                <button
                  onClick={() => handleYearChange(2026)}
                  className={`px-3 py-1 text-[11px] font-mono-meta uppercase tracking-wider transition-all cursor-pointer rounded-xs ${
                    selectedYear === 2026
                      ? 'bg-[#111111] text-white dark:bg-[#EDEDEB] dark:text-[#111111] font-semibold shadow-xs'
                      : 'text-[#6E6E6E] hover:text-[#111111] dark:text-[#9A9B9E] dark:hover:text-white'
                  }`}
                >
                  {t.activity.year2026}
                </button>
                <button
                  onClick={() => handleYearChange(2025)}
                  className={`px-3 py-1 text-[11px] font-mono-meta uppercase tracking-wider transition-all cursor-pointer rounded-xs ${
                    selectedYear === 2025
                      ? 'bg-[#111111] text-white dark:bg-[#EDEDEB] dark:text-[#111111] font-semibold shadow-xs'
                      : 'text-[#6E6E6E] hover:text-[#111111] dark:text-[#9A9B9E] dark:hover:text-white'
                  }`}
                >
                  {t.activity.year2025}
                </button>
              </div>
            </div>

            {/* Heatmap Grid Container with Horizontal Scroll */}
            <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#D8D7D2] dark:scrollbar-thumb-[#33363F]">
              <div className="min-w-[760px] select-none">
                {/* Month labels row */}
                <div className="flex ml-8 mb-2 text-[10px] font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E]">
                  {currentData.monthLabels.map((m, idx) => (
                    <span
                      key={`${m.label}-${idx}`}
                      style={{
                        position: 'relative',
                        left: `${m.weekIndex * 14}px`,
                        marginRight: '-10px'
                      }}
                    >
                      {m.label}
                    </span>
                  ))}
                </div>

                {/* Main 7x52 Contribution Matrix */}
                <div className="flex gap-1 items-start">
                  {/* Day of Week Labels (Mon, Wed, Fri) */}
                  <div className="flex flex-col justify-between h-[106px] text-[9px] font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E] pr-2 pt-1 shrink-0">
                    <span className="leading-none">{t.activity.mon}</span>
                    <span className="leading-none">{t.activity.wed}</span>
                    <span className="leading-none">{t.activity.fri}</span>
                  </div>

                  {/* 52 Columns of Weeks */}
                  <div className="flex gap-[3px]">
                    {currentData.weeks.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-[3px]">
                        {week.map((day) => {
                          const isSelected = selectedDay?.date === day.date;
                          const isHovered = hoveredDay?.date === day.date;

                          return (
                            <button
                              key={day.date}
                              onMouseEnter={() => setHoveredDay(day)}
                              onMouseLeave={() => setHoveredDay(null)}
                              onClick={() => handleCellClick(day)}
                              className={`w-[11.5px] h-[11.5px] rounded-[2px] transition-all cursor-pointer relative ${getCellColorClass(
                                day.level
                              )} ${
                                isSelected || isHovered
                                  ? 'ring-2 ring-[#111111] dark:ring-white scale-125 z-10'
                                  : ''
                              }`}
                              title={`${day.count} ${t.activity.contributionsOn} ${formatDate(day.date)}`}
                              aria-label={`${day.count} ${t.activity.contributionsOn} ${formatDate(day.date)}`}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Active Inspector Panel & Color Legend */}
            <div className="pt-3 border-t border-[#D8D7D2]/60 dark:border-[#2A2C32] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Active Inspector Display */}
              <div className="min-h-[28px] flex items-center text-xs font-mono-meta text-[#111111] dark:text-[#EDEDEB]">
                {activeInspectorDay ? (
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-[#68715F] dark:text-[#8FA183]">
                      {activeInspectorDay.count > 0
                        ? `${activeInspectorDay.count} ${t.activity.contributionsOn}`
                        : t.activity.noContributions}
                    </span>
                    <span>{formatDate(activeInspectorDay.date)}</span>
                    {activeInspectorDay.repoHighlight && (
                      <>
                        <span className="text-[#6E6E6E] dark:text-[#9A9B9E]">·</span>
                        <span className="text-[#6E6E6E] dark:text-[#9A9B9E] truncate max-w-xs">
                          {activeInspectorDay.repoHighlight}: {activeInspectorDay.commitSnippet}
                        </span>
                      </>
                    )}
                  </div>
                ) : (
                  <span className="text-[#6E6E6E] dark:text-[#9A9B9E] text-xs">
                    Hover or click any square to inspect commit details
                  </span>
                )}
              </div>

              {/* Color Legend (Less -> More) */}
              <div className="flex items-center gap-2 text-[10px] font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E] shrink-0">
                <span>{t.activity.less}</span>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-[#E3E2DD] dark:bg-[#1E2024]" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-[#C2CEB8] dark:bg-[#2F3C2C]" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-[#98A78C] dark:bg-[#475A43]" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-[#68715F] dark:bg-[#6A8164]" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-[#3E4D36] dark:bg-[#8FA183]" />
                </div>
                <span>{t.activity.more}</span>
              </div>
            </div>
          </div>
        </TiltCard>

        {/* Recent Commits Log Feed */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono-meta uppercase tracking-widest text-[#6E6E6E] dark:text-[#9A9B9E] font-medium">
              {t.activity.recentCommits}
            </h3>
            <span className="text-xs font-mono-meta text-[#68715F] dark:text-[#8FA183]">
              Active Branch: main
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {RECENT_COMMITS.map((event) => (
              <a
                key={event.id}
                href={event.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-[#ECEBE7]/50 dark:bg-[#1A1B1E]/50 border border-[#D8D7D2]/80 dark:border-[#2F323A] rounded-xs hover:border-[#111111] dark:hover:border-white transition-all flex flex-col justify-between gap-3 cursor-pointer"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono-meta">
                    <span className="text-[#68715F] dark:text-[#8FA183] font-medium group-hover:underline">
                      shamimk2i/{event.repo}
                    </span>
                    <span className="text-[#6E6E6E] dark:text-[#9A9B9E]">
                      {event.timeAgo}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-[#111111] dark:text-[#EDEDEB] line-clamp-2 leading-relaxed">
                    {event.message}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E] pt-2 border-t border-[#D8D7D2]/40 dark:border-[#2A2C32]">
                  <span>{event.dateStr}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono">
                      {event.changesCount}
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-[#68715F] dark:text-[#8FA183] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Context Notice Note */}
          <div className="flex items-center gap-2 pt-2 text-[11px] font-mono-meta text-[#6E6E6E] dark:text-[#9A9B9E]">
            <Info className="w-3.5 h-3.5 text-[#68715F] dark:text-[#8FA183] shrink-0" />
            <span>{t.activity.mockNotice}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
