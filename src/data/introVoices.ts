import { SupportedLanguage } from '../types';

export interface IntroVoiceItem {
  language: SupportedLanguage;
  label: string;
  nativeLabel: string;
  code: string;
  flag: string;
  title: string;
  audioSrc: string;
  wavFallback: string;
  transcript: string;
  durationSeconds: number;
}

export const INTRO_VOICES: Record<SupportedLanguage, IntroVoiceItem> = {
  en: {
    language: 'en',
    label: 'English',
    nativeLabel: 'English',
    code: 'EN',
    flag: '🇬🇧',
    title: 'Shamim Islam — Voice Intro (English)',
    audioSrc: '/shamim-intro.mp3',
    wavFallback: '/shamim-intro.wav',
    transcript:
      "Hey there, I'm Shamim. I'm a student, tech enthusiast, and builder from Bangladesh. I love creating things, learning new stuff, and exploring whatever sparks my curiosity. And thanks for visiting my portfolio.",
    durationSeconds: 12.6
  },
  ja: {
    language: 'ja',
    label: 'Japanese',
    nativeLabel: '日本語',
    code: 'JA',
    flag: '🇯🇵',
    title: 'シャミム・イスラム — 音声イントロ（日本語）',
    audioSrc: '/shamim-intro-ja.mp3',
    wavFallback: '/shamim-intro-ja.wav',
    transcript:
      'こんにちは、シャミムです。バングラデシュ出身の学生で、テクノロジー愛好家、そしてビルダーです。モノづくりや新しいことの学習、好奇心を刺激するあらゆる探求が大好きです。ポートフォリオをご覧いただき、ありがとうございます。',
    durationSeconds: 14.8
  },
  es: {
    language: 'es',
    label: 'Spanish',
    nativeLabel: 'Español',
    code: 'ES',
    flag: '🇪🇸',
    title: 'Shamim Islam — Introducción de Voz (Español)',
    audioSrc: '/shamim-intro-es.mp3',
    wavFallback: '/shamim-intro-es.wav',
    transcript:
      '¡Hola! Soy Shamim. Soy un estudiante, entusiasta de la tecnología y creador de Bangladesh. Me encanta crear cosas, aprender constantemente y explorar todo lo que despierte mi curiosidad. Muchas gracias por visitar mi portafolio.',
    durationSeconds: 16.2
  },
  bn: {
    language: 'bn',
    label: 'Bengali',
    nativeLabel: 'বাংলা',
    code: 'BN',
    flag: '🇧🇩',
    title: 'শামিম ইসলাম — ভয়েস পরিচিতি (বাংলা)',
    audioSrc: '/shamim-intro-bn.mp3',
    wavFallback: '/shamim-intro-bn.wav',
    transcript:
      'হ্যালো! আমি শামিম। আমি একজন শিক্ষার্থী, প্রযুক্তিপ্রেমী এবং বাংলাদেশ থেকে একজন নির্মাতা। আমি নতুন কিছু তৈরি করতে, নতুন বিষয় শিখতে এবং যা কিছু আমার কৌতূহল জাগায় তা অন্বেষণ করতে ভালোবাসি। আমার পোর্টফোলিও দেখার জন্য আপনাকে অনেক ধন্যবাদ।',
    durationSeconds: 17.7
  }
};

export const INTRO_VOICE_LIST: IntroVoiceItem[] = [
  INTRO_VOICES.en,
  INTRO_VOICES.ja,
  INTRO_VOICES.es,
  INTRO_VOICES.bn
];
