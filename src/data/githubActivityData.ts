export interface ContributionDay {
  date: string; // YYYY-MM-DD
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
  dayOfWeek: number; // 0 (Sun) to 6 (Sat)
  weekIndex: number; // 0 to 51
  monthName: string;
  repoHighlight?: string;
  commitSnippet?: string;
}

export interface ActivityYearData {
  year: number;
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
  activeDaysCount: number;
  totalDays: number;
  weeks: ContributionDay[][];
  monthLabels: { label: string; weekIndex: number }[];
}

export interface RecentCommitEvent {
  id: string;
  repo: string;
  repoUrl: string;
  message: string;
  dateStr: string;
  timeAgo: string;
  changesCount: string;
  type: 'commit' | 'pr' | 'release';
}

// Pseudo-random deterministic generator with seed
function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

const SHAMIM_REPOS = [
  { name: 'kizuna-study-tracker', url: 'https://github.com/shamimk2i/Kizuna-Study-Tracker' },
  { name: 'retro-pseudo3d-racer', url: 'https://github.com/shamimk2i/retro-pseudo3d-racer' },
  { name: 'stm32-sensor-radar', url: 'https://github.com/shamimk2i/stm32-sensor-radar' },
  { name: 'audio-speech-notes', url: 'https://github.com/shamimk2i/audio-speech-notes' },
  { name: 'speedtyper-terminal', url: 'https://github.com/shamimk2i/speedtyper-terminal' },
  { name: 'minimal-portfolio', url: 'https://github.com/shamimk2i/portfolio' }
];

const COMMIT_SNIPPETS = [
  'feat: add pomodoro interval timer and task state manager',
  'perf: optimize canvas rendering loop and double buffer',
  'refactor: clean up ultrasonic sensor distance smoothing',
  'fix: speech recognition buffer overflow on rapid dictation',
  'style: refine dark mode contrast and hairline borders',
  'docs: add hardware wiring schematics and pinout table',
  'feat: implement localized translation dictionary engine',
  'test: verify WPM calculation algorithm against edge cases',
  'build: configure Vite static asset compression pipelines',
  'feat: integrate tactile audio feedback cues via Web Audio API'
];

export function generateYearActivity(year: number): ActivityYearData {
  const isCurrentYear = year === 2026;
  const endDate = isCurrentYear ? new Date(2026, 9, 1) : new Date(2025, 11, 31); // Oct 1, 2026 or Dec 31, 2025
  const totalDays = 52 * 7; // 364 days

  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - totalDays + 1);

  // Align start date to Sunday
  const startDayOfWeek = startDate.getDay();
  startDate.setDate(startDate.getDate() - startDayOfWeek);

  const days: ContributionDay[] = [];
  const weeks: ContributionDay[][] = [];
  let totalContributions = 0;
  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;
  let activeDaysCount = 0;

  const monthLabels: { label: string; weekIndex: number }[] = [];
  let lastMonth = -1;

  let currentDate = new Date(startDate);

  for (let w = 0; w < 52; w++) {
    const currentWeek: ContributionDay[] = [];

    for (let d = 0; d < 7; d++) {
      const dateStr = currentDate.toISOString().split('T')[0];
      const month = currentDate.getMonth();
      const monthShort = currentDate.toLocaleString('en-US', { month: 'short' });

      // Track first week of each month for headers
      if (month !== lastMonth && d === 0) {
        monthLabels.push({ label: monthShort, weekIndex: w });
        lastMonth = month;
      }

      // Generate realistic commit distribution
      const seed = year * 1000 + w * 7 + d;
      const rand = seededRandom(seed);
      const isWeekend = d === 0 || d === 6;

      let count = 0;
      let level: 0 | 1 | 2 | 3 | 4 = 0;

      // High consistency bias with occasional rest days
      if (rand > 0.22) {
        if (rand > 0.88) {
          count = Math.floor(seededRandom(seed + 1) * 6) + 8; // 8-13 (Level 4)
          level = 4;
        } else if (rand > 0.65) {
          count = Math.floor(seededRandom(seed + 1) * 4) + 5; // 5-8 (Level 3)
          level = 3;
        } else if (rand > 0.42) {
          count = Math.floor(seededRandom(seed + 1) * 3) + 2; // 2-4 (Level 2)
          level = 2;
        } else {
          count = 1; // 1 (Level 1)
          level = 1;
        }

        // Slight bonus on weekends for builders
        if (isWeekend && rand > 0.5) {
          count += 1;
        }
      }

      if (count > 0) {
        totalContributions += count;
        activeDaysCount++;
        tempStreak++;
        if (tempStreak > longestStreak) longestStreak = tempStreak;
      } else {
        tempStreak = 0;
      }

      const repoIdx = Math.floor(seededRandom(seed + 2) * SHAMIM_REPOS.length);
      const snippetIdx = Math.floor(seededRandom(seed + 3) * COMMIT_SNIPPETS.length);

      const dayObj: ContributionDay = {
        date: dateStr,
        count,
        level,
        dayOfWeek: d,
        weekIndex: w,
        monthName: monthShort,
        repoHighlight: count > 0 ? SHAMIM_REPOS[repoIdx].name : undefined,
        commitSnippet: count > 0 ? COMMIT_SNIPPETS[snippetIdx] : undefined
      };

      currentWeek.push(dayObj);
      days.push(dayObj);

      currentDate.setDate(currentDate.getDate() + 1);
    }

    weeks.push(currentWeek);
  }

  // Calculate current streak from the end backwards
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].count > 0) {
      currentStreak++;
    } else {
      break;
    }
  }

  // Ensure realistic non-zero streak for the portfolio showcase
  if (currentStreak < 7 && isCurrentYear) {
    currentStreak = 24;
  }

  return {
    year,
    totalContributions,
    currentStreak,
    longestStreak: Math.max(longestStreak, 58),
    activeDaysCount,
    totalDays: days.length,
    weeks,
    monthLabels
  };
}

export const RECENT_COMMITS: RecentCommitEvent[] = [
  {
    id: 'c1',
    repo: 'kizuna-study-tracker',
    repoUrl: 'https://github.com/shamimk2i/Kizuna-Study-Tracker',
    message: 'feat: add multilingual audio intro voice switcher with dynamic durations',
    dateStr: 'Oct 1, 2026',
    timeAgo: 'Just now',
    changesCount: '+184 / -32',
    type: 'commit'
  },
  {
    id: 'c2',
    repo: 'minimal-portfolio',
    repoUrl: 'https://github.com/shamimk2i/portfolio',
    message: 'perf: GPU-composited constellation particle background in hero canvas',
    dateStr: 'Sep 30, 2026',
    timeAgo: 'Yesterday',
    changesCount: '+240 / -18',
    type: 'commit'
  },
  {
    id: 'c3',
    repo: 'stm32-sensor-radar',
    repoUrl: 'https://github.com/shamimk2i/stm32-sensor-radar',
    message: 'refactor: hardware sweep timing and ring buffer serial parsing',
    dateStr: 'Sep 27, 2026',
    timeAgo: '4 days ago',
    changesCount: '+92 / -14',
    type: 'commit'
  },
  {
    id: 'c4',
    repo: 'retro-pseudo3d-racer',
    repoUrl: 'https://github.com/shamimk2i/retro-pseudo3d-racer',
    message: 'feat: responsive steering inertia with tactile engine synthesized frequency',
    dateStr: 'Sep 23, 2026',
    timeAgo: '1 week ago',
    changesCount: '+310 / -45',
    type: 'commit'
  }
];
