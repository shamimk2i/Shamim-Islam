import { SupportedLanguage } from '../types';

export interface TranslationDictionary {
  nav: {
    about: string;
    work: string;
    journey: string;
    writing: string;
    gallery: string;
    contact: string;
    letsTalk: string;
    soundOn: string;
    soundOff: string;
    readAloud: string;
    reading: string;
    lightTheme: string;
    darkTheme: string;
    command: string;
  };
  hero: {
    badge: string;
    greeting: string;
    subheadline: string;
    bio1: string;
    bio2: string;
    bio3: string;
    ctaWork: string;
    ctaContact: string;
    ctaSandbox: string;
    yearsExploring: string;
    curiosity: string;
    hardwareWeb: string;
    timezone: string;
    scrollHint: string;
    voiceIntro: string;
    playingVoiceIntro: string;
    voiceInLanguage: string;
    changeVoiceLanguage: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    subheading: string;
    quote: string;
    trait1Title: string;
    trait1Desc: string;
    trait2Title: string;
    trait2Desc: string;
    trait3Title: string;
    trait3Desc: string;
  };
  currently: {
    eyebrow: string;
    heading: string;
    subheading: string;
    learning: string;
    building: string;
    exploring: string;
    practicing: string;
    obsessing: string;
    aiming: string;
  };
  expertise: {
    eyebrow: string;
    heading: string;
    subheading: string;
  };
  work: {
    eyebrow: string;
    heading: string;
    subheading: string;
    flagship: string;
    timeline: string;
    whatILearned: string;
    openRepo: string;
    liveDemo: string;
    interactiveSandbox: string;
    closeSandbox: string;
  };
  sandboxes: {
    codeEditorTitle: string;
    codeEditorSubtitle: string;
    runCode: string;
    resetCode: string;
    radarTitle: string;
    radarSubtitle: string;
    radarDistance: string;
    radarSafe: string;
    radarWarning: string;
    radarDanger: string;
    radarPing: string;
    speechTitle: string;
    speechSubtitle: string;
    startDictation: string;
    stopDictation: string;
    simulateVoice: string;
    transcribing: string;
    copyTranscript: string;
    copied: string;
    racerTitle: string;
    racerSubtitle: string;
    racerSpeed: string;
    racerDistance: string;
    racerSteer: string;
    startDrive: string;
    pauseDrive: string;
  };
  building: {
    eyebrow: string;
    title: string;
    subtitle: string;
    status: string;
  };
  activity: {
    eyebrow: string;
    heading: string;
    subheading: string;
    totalContributions: string;
    currentStreak: string;
    longestStreak: string;
    activeDays: string;
    less: string;
    more: string;
    viewProfile: string;
    mockNotice: string;
    year2026: string;
    year2025: string;
    recentCommits: string;
    contributionsOn: string;
    noContributions: string;
    mon: string;
    wed: string;
    fri: string;
  };
  journey: {
    eyebrow: string;
    heading: string;
    subheading: string;
  };
  notes: {
    eyebrow: string;
    heading: string;
    subheading: string;
    readNote: string;
  };
  gallery: {
    eyebrow: string;
    heading: string;
    subheading: string;
    dragHint: string;
    all: string;
    hardware: string;
    street: string;
    workspace: string;
    openLightbox: string;
    exifData: string;
  };
  newsletter: {
    eyebrow: string;
    heading: string;
    subheading: string;
    placeholder: string;
    button: string;
    subscribing: string;
    successTitle: string;
    successDesc: string;
    frequency: string;
    resetButton: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    subheading: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendMessage: string;
    sending: string;
    messageSent: string;
  };
  footer: {
    tagline: string;
    timezone: string;
    pressK: string;
    backToTop: string;
  };
}

export const translations: Record<SupportedLanguage, TranslationDictionary> = {
  en: {
    nav: {
      about: "About",
      work: "Work",
      journey: "Journey",
      writing: "Writing",
      gallery: "Gallery",
      contact: "Contact",
      letsTalk: "Let's Talk",
      soundOn: "SOUND ON",
      soundOff: "MUTED",
      readAloud: "LISTEN",
      reading: "READING",
      lightTheme: "LIGHT",
      darkTheme: "DARK",
      command: "CMD"
    },
    hero: {
      badge: "DEVELOPER & HARDWARE EXPLORER",
      greeting: "Hello,\nI'm Shamim.",
      subheadline: "Chasing adrenaline, adventures & late night gaming sessions.",
      bio1: "I'm Shamim Islam, a young polymath and curious builder who loves exploring how things work and learning across different fields.",
      bio2: "I don't like limiting myself to one box. My interests span technology, electronics, web engineering, competitive gaming, and business ideas.",
      bio3: "For me, it's about staying curious, getting my hands dirty, and seeing where that curiosity takes me.",
      ctaWork: "Explore Work",
      ctaContact: "Get in Touch",
      ctaSandbox: "Try Sandboxes",
      yearsExploring: "Years Exploring",
      curiosity: "Curiosity",
      hardwareWeb: "Hardware & Web",
      timezone: "Timezone",
      scrollHint: "Scroll to explore",
      voiceIntro: "Voice Intro (Audio)",
      playingVoiceIntro: "Playing Voice Note",
      voiceInLanguage: "Voice Note in English",
      changeVoiceLanguage: "Change Voice Language"
    },
    about: {
      eyebrow: "01 / IDENTITY & PHILOSOPHY",
      heading: "A builder guided by relentless curiosity.",
      subheading: "From hardware circuits to browser applications, I build to understand how things work.",
      quote: "I'm a young builder who keeps experimenting, learning, and turning ideas into working things.",
      trait1Title: "Hands-On Builder",
      trait1Desc: "Writing code, wiring microcontrollers, and crafting real prototypes rather than staying in theoretical theory.",
      trait2Title: "Fast Independent Learner",
      trait2Desc: "Diving deep into documentation, testing limits, and figuring out modern technology stack by stack.",
      trait3Title: "Competitive Spirit",
      trait3Desc: "Bringing the precision, reflexes, and strategic discipline from esports into software development."
    },
    currently: {
      eyebrow: "02 / REAL-TIME PULSE",
      heading: "What I'm focused on right now.",
      subheading: "An active snapshot of ongoing studies, experiments, and creative obsessions.",
      learning: "Python & Programming Fundamentals",
      building: "Robotics, Arduino & Physical Circuits",
      exploring: "Startup Ideas & Product Development",
      practicing: "Music, Keyboards & Hand-eye Coordination",
      obsessing: "Modern Web Interactivity & AI Tools",
      aiming: "Building higher-impact independent systems"
    },
    expertise: {
      eyebrow: "03 / CAPABILITIES",
      heading: "Technical foundations & skills.",
      subheading: "A wide toolkit across software development, physical computing, and rapid prototyping."
    },
    work: {
      eyebrow: "04 / SELECTED WORK",
      heading: "Things I've built.",
      subheading: "A collection of web projects, experiments, games, and hardware builds.",
      flagship: "Flagship Project",
      timeline: "Timeline",
      whatILearned: "What I Learned",
      openRepo: "Source Code",
      liveDemo: "Live Demo",
      interactiveSandbox: "Launch Interactive Sandbox",
      closeSandbox: "Minimize Sandbox"
    },
    sandboxes: {
      codeEditorTitle: "JavaScript & DOM Live Evaluator",
      codeEditorSubtitle: "Real-time sandbox with execution timer & isolated frame",
      runCode: "Run Code",
      resetCode: "Reset Script",
      radarTitle: "Ultrasonic Proximity Radar",
      radarSubtitle: "Simulated HC-SR04 sonar with sweep scan & distance metric",
      radarDistance: "Distance",
      radarSafe: "Safe Clearance",
      radarWarning: "Approaching Obstacle",
      radarDanger: "CRITICAL PROXIMITY",
      radarPing: "Radar Ping",
      speechTitle: "Speech Recognition Waveform",
      speechSubtitle: "Voice token processor with live waveform visualization",
      startDictation: "Start Dictating",
      stopDictation: "Stop Audio",
      simulateVoice: "Simulate Speech Stream",
      transcribing: "Listening & Transcribing...",
      copyTranscript: "Copy Transcript",
      copied: "Copied!",
      racerTitle: "Interactive 3D Road Racer",
      racerSubtitle: "Mouse or arrow-guided canvas renderer with speed physics",
      racerSpeed: "Velocity",
      racerDistance: "Traveled",
      racerSteer: "Use Arrow Keys or Cursor to Steer",
      startDrive: "Start Engine",
      pauseDrive: "Brake / Pause"
    },
    building: {
      eyebrow: "05 / IN ACTIVE DEVELOPMENT",
      title: "Kizuna — Study Tracker",
      subtitle: "A minimal, intentional study & habit tracker for builders.",
      status: "In Development"
    },
    activity: {
      eyebrow: "06 / CONSISTENCY & CODE CADENCE",
      heading: "Building every day, one commit at a time.",
      subheading: "A visualization of daily commits, hardware sketches, and web experiments across the past 52 weeks.",
      totalContributions: "Total Contributions",
      currentStreak: "Current Streak",
      longestStreak: "Longest Streak",
      activeDays: "Active Days",
      less: "Less",
      more: "More",
      viewProfile: "View GitHub Profile",
      mockNotice: "Curated visualization based on active project commits and public repository activity.",
      year2026: "2026 (Recent)",
      year2025: "2025 (Archive)",
      recentCommits: "Recent Repository Activity",
      contributionsOn: "contributions on",
      noContributions: "No commits recorded on",
      mon: "Mon",
      wed: "Wed",
      fri: "Fri"
    },
    journey: {
      eyebrow: "06 / MILESTONES",
      heading: "My Journey so far.",
      subheading: "From the first line of code to hardware breadboards and interactive experiments."
    },
    notes: {
      eyebrow: "07 / DIGITAL GARDEN",
      heading: "Notes & Perspectives.",
      subheading: "Reflections on self-directed learning, hardware vs software, and creative endurance.",
      readNote: "Read Note"
    },
    gallery: {
      eyebrow: "08 / VISUAL ARCHIVE",
      heading: "Visual Archive.",
      subheading: "A collection of things I build, capture, discover, experience, and keep coming back to.",
      dragHint: "Drag or scroll horizontally",
      all: "All Frames",
      hardware: "Hardware & Tech",
      street: "Dhaka & Street",
      workspace: "Workspace",
      openLightbox: "Expand View",
      exifData: "Camera EXIF Data"
    },
    newsletter: {
      eyebrow: "FIELD DISPATCHES / NEWSLETTER",
      heading: "Dispatches on building, systems & curiosity.",
      subheading: "Occasional notes on hardware experiments, web engineering, and lessons from building things hands-on. Zero spam, unsubscribe anytime.",
      placeholder: "your.email@domain.com",
      button: "Subscribe",
      subscribing: "Confirming...",
      successTitle: "You're on the list!",
      successDesc: "Thank you for subscribing. The next field dispatch will arrive directly in your inbox.",
      frequency: "Dispatched monthly · Zero spam · Unsubscribe anytime",
      resetButton: "Subscribe another email"
    },
    contact: {
      eyebrow: "09 / GET IN TOUCH",
      heading: "Let's build something remarkable.",
      subheading: "Got an interesting project, question, or just want to discuss tech, hardware, or games? My inbox is always open.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "your.email@domain.com",
      messagePlaceholder: "Tell me about your project, idea, or inquiry...",
      sendMessage: "Send Message",
      sending: "Dispatching...",
      messageSent: "Message sent! I'll reply shortly."
    },
    footer: {
      tagline: "Young developer & hardware explorer building at the intersection of curiosity and craft.",
      timezone: "Dhaka, Bangladesh (GMT+6)",
      pressK: "Press K for palette",
      backToTop: "Back to top"
    }
  },

  ja: {
    nav: {
      about: "概要",
      work: "作品",
      journey: "軌跡",
      writing: "思考録",
      gallery: "アーカイブ",
      contact: "連絡先",
      letsTalk: "お話ししましょう",
      soundOn: "サウンドON",
      soundOff: "ミュート",
      readAloud: "音声読上",
      reading: "読上中",
      lightTheme: "ライト",
      darkTheme: "ダーク",
      command: "コマンド"
    },
    hero: {
      badge: "開発者 & ハードウェア探求者",
      greeting: "こんにちは、\nシャミムです。",
      subheadline: "知的好奇心とアドレナリン、そして深夜のゲームセッション。",
      bio1: "シャミム・イスラム（Shamim Islam）です。モノの仕組みを探究し、分野を超えて学び続ける若きビルダーです。",
      bio2: "ひとつの枠に自分を縛りません。テクノロジー、エレクトロニクス、ウェブ工学、eスポーツ、ビジネス構想まで広く探求しています。",
      bio3: "好奇心を持ち続け、実際に手を動かし、その先にある新しい発見を楽しむことを大切にしています。",
      ctaWork: "作品を見る",
      ctaContact: "連絡を取る",
      ctaSandbox: "サンドボックスを試す",
      yearsExploring: "探求歴（年）",
      curiosity: "好奇心",
      hardwareWeb: "ハード＆Web",
      timezone: "タイムゾーン",
      scrollHint: "スクロールして探索",
      voiceIntro: "音声イントロ（音声）",
      playingVoiceIntro: "音声メモ再生中",
      voiceInLanguage: "日本語の音声メモ",
      changeVoiceLanguage: "音声の言語を変更"
    },
    about: {
      eyebrow: "01 / アイデンティティと哲学",
      heading: "尽きない好奇心に導かれるビルダー。",
      subheading: "ハードウェア回路からブラウザアプリまで、仕組みを深く理解するために自ら創り出します。",
      quote: "実験を重ね、学びを深め、アイデアを動く形にし続ける若きエンジニアです。",
      trait1Title: "実践的なモノづくり",
      trait1Desc: "理論にとどまらず、コードを書き、マイコンを配線し、実物のプロトタイプを形作ります。",
      trait2Title: "迅速な独学力",
      trait2Desc: "技術仕様書を深く読み解き、限界を試し、最新スタックをひとつずつ自力で習得します。",
      trait3Title: "競い合う精神",
      trait3Desc: "eスポーツで培った正確さ、反射神経、戦略的思考をソフトウェア開発に注ぎ込みます。"
    },
    currently: {
      eyebrow: "02 / 現在の焦点",
      heading: "今取り組んでいること。",
      subheading: "現在進行中の研究、ハードウェア実験、クリエイティブな関心のスナップショット。",
      learning: "Pythonとアルゴリズムの基礎",
      building: "ロボティクス・Arduino・電子工作",
      exploring: "スタートアップ構想とプロダクト設計",
      practicing: "音楽、ギター、キーボード演奏",
      obsessing: "先進的Webインタラクション & AIツール",
      aiming: "より影響力のある独立したシステムの構築"
    },
    expertise: {
      eyebrow: "03 / スキル & 領域",
      heading: "技術基盤とスキルセット。",
      subheading: "ソフトウェア開発、フィジカルコンピューティング、迅速なプロトタイピングのツール群。"
    },
    work: {
      eyebrow: "04 / 主な作品",
      heading: "制作実績・実験プロジェクト。",
      subheading: "Webアプリケーション、実験室、ブラウザゲーム、ハードウェア制作のコレクション。",
      flagship: "主要プロジェクト",
      timeline: "制作年",
      whatILearned: "得られた知見",
      openRepo: "ソースコード",
      liveDemo: "デモを体験",
      interactiveSandbox: "インタラクティブ・サンドボックス起動",
      closeSandbox: "サンドボックスを閉じる"
    },
    sandboxes: {
      codeEditorTitle: "JavaScript & DOM リアルタイム評価環境",
      codeEditorSubtitle: "実行時間カウンター付き独立フレームサンドボックス",
      runCode: "コード実行",
      resetCode: "リセット",
      radarTitle: "超音波近接レーダー",
      radarSubtitle: "HC-SR04ソナー走査とリアルタイム距離測定シミュレーション",
      radarDistance: "障害物距離",
      radarSafe: "安全圏内",
      radarWarning: "接近警告",
      radarDanger: "危険・最接近",
      radarPing: "レーダー音",
      speechTitle: "音声認識波形ビジュアライザー",
      speechSubtitle: "波形アニメーション付きブラウザ音声認識プロセッサ",
      startDictation: "音声入力を開始",
      stopDictation: "録音停止",
      simulateVoice: "音声ストリームを模倣",
      transcribing: "音声解析中...",
      copyTranscript: "文字起こしをコピー",
      copied: "コピー完了！",
      racerTitle: "3D ロードレーサー",
      racerSubtitle: "マウス/矢印キーで操作する擬似3Dキャンバスエンジン",
      racerSpeed: "速度",
      racerDistance: "走行距離",
      racerSteer: "カーソルまたは矢印キーで操縦",
      startDrive: "エンジン始動",
      pauseDrive: "ブレーキ / 一時停止"
    },
    building: {
      eyebrow: "05 / 開発中プロジェクト",
      title: "Kizuna (絆) — 学習トラッカー",
      subtitle: "ビルダーのためのミニマルで目的志向の学習記録ツール。",
      status: "アクティブ開発中"
    },
    activity: {
      eyebrow: "06 / 開発の一貫性とコミット記録",
      heading: "毎日の積み重ね、コードで紡ぐ習慣。",
      subheading: "過去52週間にわたる日々のコミット、ハードウェア実験、Web開発の活動状況を可視化。",
      totalContributions: "総コントリビューション",
      currentStreak: "現在の連続コミット",
      longestStreak: "最長連続記録",
      activeDays: "活動日数比率",
      less: "少",
      more: "多",
      viewProfile: "GitHubプロフィールを見る",
      mockNotice: "公開リポジトリおよびローカル開発ログに基づいた再現ビジュアライゼーション。",
      year2026: "2026年（直近）",
      year2025: "2025年（アーカイブ）",
      recentCommits: "最近のリポジトリ活動",
      contributionsOn: "件のコミット（日付：",
      noContributions: "この日の記録はありません（日付：",
      mon: "月",
      wed: "水",
      fri: "金"
    },
    journey: {
      eyebrow: "06 / 成長の軌跡",
      heading: "これまでの歩み。",
      subheading: "最初のコード行からハードウェアブレッドボード、高度な対話型実験まで。"
    },
    notes: {
      eyebrow: "07 / 思考ノート",
      heading: "学びと考察。",
      subheading: "独学の方法論、ハードウェアとソフトウェアの対比、制作への情熱についての記録。",
      readNote: "ノートを読む"
    },
    gallery: {
      eyebrow: "08 / ビジュアルアーカイブ",
      heading: "記憶と視覚の記録。",
      subheading: "制作物、街の風景、発見、日常の中で立ち止まり捉えた光景。",
      dragHint: "ドラッグまたは横スクロール",
      all: "すべて",
      hardware: "ハードウェア",
      street: "ダッカの風景",
      workspace: "ワークスペース",
      openLightbox: "拡大表示",
      exifData: "カメラEXIF情報"
    },
    newsletter: {
      eyebrow: "制作日誌 / ニュースレター",
      heading: "モノづくりと探求のフィールド便り。",
      subheading: "ハードウェア実験、Web開発、独学の試行錯誤から得た知見を定期的にお届けします。スパムなし・いつでも解除可能。",
      placeholder: "メールアドレスを入力...",
      button: "購読する",
      subscribing: "処理中...",
      successTitle: "登録が完了しました！",
      successDesc: "ご購読ありがとうございます。次号の制作日誌があなたの受信箱に届きます。",
      frequency: "月1回配信 · スパムゼロ · いつでも解除可能",
      resetButton: "別のアドレスを登録"
    },
    contact: {
      eyebrow: "09 / お問い合わせ",
      heading: "一緒に新しいものを創りましょう。",
      subheading: "興味深いプロジェクト、技術談義、ゲームの話題など、気軽にご連絡ください。",
      namePlaceholder: "お名前",
      emailPlaceholder: "メールアドレス",
      messagePlaceholder: "メッセージやアイデアをご記入ください...",
      sendMessage: "メッセージを送信",
      sending: "送信中...",
      messageSent: "送信完了しました。折り返しご連絡いたします。"
    },
    footer: {
      tagline: "好奇心と職人技の交差点で開発を続ける若きビルダー。",
      timezone: "バングラデシュ・ダッカ (GMT+6)",
      pressK: "Kキーでパレット表示",
      backToTop: "トップへ戻る"
    }
  },

  es: {
    nav: {
      about: "Sobre mí",
      work: "Proyectos",
      journey: "Trayectoria",
      writing: "Escritos",
      gallery: "Galería",
      contact: "Contacto",
      letsTalk: "Hablemos",
      soundOn: "SONIDO ON",
      soundOff: "MUTE",
      readAloud: "ESCUCHAR",
      reading: "LEYENDO",
      lightTheme: "CLARO",
      darkTheme: "OSCURO",
      command: "CMD"
    },
    hero: {
      badge: "DESARROLLADOR & EXPLORADOR DE HARDWARE",
      greeting: "Hola,\nSoy Shamim.",
      subheadline: "Persiguiendo adrenalina, aventuras y sesiones de videojuegos hasta tarde.",
      bio1: "Soy Shamim Islam, un joven polímata y creador curioso apasionado por entender cómo funcionan las cosas y aprender en diversas disciplinas.",
      bio2: "No me gusta encasillarme en una sola categoría. Mis intereses abarcan tecnología, electrónica, desarrollo web, gaming competitivo y emprendimiento.",
      bio3: "Para mí, se trata de mantener la curiosidad viva, ensuciarse las manos construyendo y ver a dónde me lleva esa pasión.",
      ctaWork: "Ver Proyectos",
      ctaContact: "Contactar",
      ctaSandbox: "Probar Sandboxes",
      yearsExploring: "Años Explorando",
      curiosity: "Curiosidad",
      hardwareWeb: "Hardware & Web",
      timezone: "Zona Horaria",
      scrollHint: "Desplaza para explorar",
      voiceIntro: "Intro de Voz (Audio)",
      playingVoiceIntro: "Reproduciendo Voz",
      voiceInLanguage: "Nota de voz en Español",
      changeVoiceLanguage: "Cambiar idioma de voz"
    },
    about: {
      eyebrow: "01 / IDENTIDAD Y FILOSOFÍA",
      heading: "Un creador guiado por una curiosidad incesante.",
      subheading: "Desde circuitos de hardware hasta aplicaciones de navegador, construyo para comprender a fondo.",
      quote: "Soy un joven creador que sigue experimentando, aprendiendo y convirtiendo ideas en cosas reales que funcionan.",
      trait1Title: "Constructor Práctico",
      trait1Desc: "Escribo código, conecto microcontroladores y construyo prototipos reales en vez de quedarme en la teoría abstracta.",
      trait2Title: "Aprendiz Rápido y Autónomo",
      trait2Desc: "Profundizo en documentación técnica, pongo a prueba límites y domino tecnologías modernas paso a paso.",
      trait3Title: "Espíritu Competitivo",
      trait3Desc: "Aporto la precisión, reflejos y disciplina estratégica de los esports al desarrollo de software."
    },
    currently: {
      eyebrow: "02 / PULSO EN TIEMPO REAL",
      heading: "En lo que me enfoco ahora mismo.",
      subheading: "Una instantánea activa de estudios en curso, experimentos y proyectos actuales.",
      learning: "Fundamentos de Python y Programación",
      building: "Robótica, Arduino y Circuitos Físicos",
      exploring: "Modelos de Negocio e Ideas de Productos",
      practicing: "Música, Teclados y Nuevas Habilidades",
      obsessing: "Interactividad Web Avanzada y Herramientas IA",
      aiming: "Construir sistemas independientes de mayor impacto"
    },
    expertise: {
      eyebrow: "03 / CAPACIDADES",
      heading: "Fundamentos técnicos y habilidades.",
      subheading: "Un amplio conjunto de herramientas en desarrollo web, computación física y prototipado rápido."
    },
    work: {
      eyebrow: "04 / TRABAJOS SELECCIONADOS",
      heading: "Cosas que he construido.",
      subheading: "Una colección de proyectos web, experimentos, juegos y montajes de hardware.",
      flagship: "Proyecto Destacado",
      timeline: "Cronograma",
      whatILearned: "Lo que aprendí",
      openRepo: "Código Fuente",
      liveDemo: "Ver Demo",
      interactiveSandbox: "Abrir Sandbox Interactivo",
      closeSandbox: "Cerrar Sandbox"
    },
    sandboxes: {
      codeEditorTitle: "Evaluador en Vivo de JavaScript y DOM",
      codeEditorSubtitle: "Sandbox en tiempo real con contador de render y frame aislado",
      runCode: "Ejecutar Código",
      resetCode: "Restablecer",
      radarTitle: "Radar de Proximidad Ultrasónico",
      radarSubtitle: "Simulación de sonar HC-SR04 con barrido y métrica de distancia",
      radarDistance: "Distancia",
      radarSafe: "Distancia Segura",
      radarWarning: "Obstáculo Cercano",
      radarDanger: "PROXIMIDAD CRÍTICA",
      radarPing: "Sonido Radar",
      speechTitle: "Reconocimiento de Voz y Forma de Onda",
      speechSubtitle: "Procesador de voz en navegador con visualización de audio en vivo",
      startDictation: "Iniciar Dictado",
      stopDictation: "Detener Audio",
      simulateVoice: "Simular Entrada de Voz",
      transcribing: "Escuchando y Transcribiendo...",
      copyTranscript: "Copiar Texto",
      copied: "¡Copiado!",
      racerTitle: "Juego de Carreras 3D Interactivo",
      racerSubtitle: "Motor de canvas guiado por ratón o teclado con física de aceleración",
      racerSpeed: "Velocidad",
      racerDistance: "Recorrido",
      racerSteer: "Usa las flechas o el cursor para conducir",
      startDrive: "Arrancar Motor",
      pauseDrive: "Frenar / Pausar"
    },
    building: {
      eyebrow: "05 / EN DESARROLLO ACTIVO",
      title: "Kizuna — Study Tracker",
      subtitle: "Un rastreador de estudio y hábitos minimalista y enfocado para creadores.",
      status: "En Desarrollo"
    },
    activity: {
      eyebrow: "06 / CONSTANCIA Y CADENCIA DE CÓDIGO",
      heading: "Construyendo a diario, un commit a la vez.",
      subheading: "Visualización de commits diarios, prototipos de hardware y experimentos web durante las últimas 52 semanas.",
      totalContributions: "Contribuciones Totales",
      currentStreak: "Racha Actual",
      longestStreak: "Racha Más Larga",
      activeDays: "Días Activos",
      less: "Menos",
      more: "Más",
      viewProfile: "Ver Perfil de GitHub",
      mockNotice: "Visualización basada en repositorios públicos y registros de desarrollo de proyectos.",
      year2026: "2026 (Reciente)",
      year2025: "2025 (Archivo)",
      recentCommits: "Actividad Reciente en Repositorios",
      contributionsOn: "contribuciones el",
      noContributions: "Sin contribuciones el",
      mon: "Lun",
      wed: "Mié",
      fri: "Vie"
    },
    journey: {
      eyebrow: "06 / HITOS Y TRAYECTORIA",
      heading: "Mi viaje hasta ahora.",
      subheading: "Desde mi primera línea de código hasta placas de prueba de hardware y experimentos avanzados."
    },
    notes: {
      eyebrow: "07 / JARDÍN DIGITAL",
      heading: "Notas y Perspectivas.",
      subheading: "Reflexiones sobre el aprendizaje autodidacta, hardware vs software y resistencia creativa.",
      readNote: "Leer Nota"
    },
    gallery: {
      eyebrow: "08 / ARCHIVO VISUAL",
      heading: "Archivo Visual.",
      subheading: "Una colección de momentos que construyo, capturo, descubro y vuelvo a revivir.",
      dragHint: "Arrastra o desplaza horizontalmente",
      all: "Todas",
      hardware: "Hardware & Tech",
      street: "Daca & Calles",
      workspace: "Espacio de Trabajo",
      openLightbox: "Ampliar Imagen",
      exifData: "Datos EXIF de Cámara"
    },
    newsletter: {
      eyebrow: "BOLETÍN / NOTAS DE CAMPO",
      heading: "Crónicas sobre software, hardware y curiosidad.",
      subheading: "Reflexiones periódicas sobre experimentos de hardware, ingeniería web y lecciones prácticas. Cero spam, cancela cuando quieras.",
      placeholder: "tu.correo@dominio.com",
      button: "Suscribirse",
      subscribing: "Confirmando...",
      successTitle: "¡Estás en la lista!",
      successDesc: "Gracias por suscribirte. La próxima entrega llegará directamente a tu bandeja de entrada.",
      frequency: "Envío mensual · Cero spam · Cancela en cualquier momento",
      resetButton: "Suscribir otro correo"
    },
    contact: {
      eyebrow: "09 / CONTACTO",
      heading: "Construyamos algo extraordinario.",
      subheading: "¿Tienes un proyecto interesante, alguna pregunta o solo quieres hablar sobre tecnología, hardware o juegos? Mi bandeja de entrada siempre está abierta.",
      namePlaceholder: "Tu Nombre",
      emailPlaceholder: "tu.correo@dominio.com",
      messagePlaceholder: "Cuéntame sobre tu proyecto, idea o consulta...",
      sendMessage: "Enviar Mensaje",
      sending: "Enviando...",
      messageSent: "¡Mensaje enviado! Te responderé pronto."
    },
    footer: {
      tagline: "Joven desarrollador y explorador de hardware construyendo en la intersección de la curiosidad y la artesanía digital.",
      timezone: "Daca, Bangladés (GMT+6)",
      pressK: "Pulsa K para la paleta de comandos",
      backToTop: "Volver arriba"
    }
  },

  bn: {
    nav: {
      about: "পরিচিতি",
      work: "কাজসমূহ",
      journey: "অভিযাত্রা",
      writing: "চিন্তা ও লেখা",
      gallery: "গ্যালারি",
      contact: "যোগাযোগ",
      letsTalk: "কথা বলুন",
      soundOn: "শব্দ চালু",
      soundOff: "শব্দ বন্ধ",
      readAloud: "শুনুন",
      reading: "পড়া হচ্ছে",
      lightTheme: "লাইট",
      darkTheme: "ডার্ক",
      command: "কমান্ড"
    },
    hero: {
      badge: "ডেভেলপার ও হার্ডওয়্যার অভিযাত্রী",
      greeting: "হ্যালো,\nআমি শামীম।",
      subheadline: "অ্যাডভেঞ্চার, নতুন প্রযুক্তি এবং গভীর রাতের গেমিং সেশন আমার প্রিয়।",
      bio1: "আমি শামীম ইসলাম—একজন তরুণ প্রযুক্তিপ্রেমী ও কৌতূহলী নির্মাতা। যে কোনো জিনিস কীভাবে কাজ করে তা অনুসন্ধান করা এবং বিভিন্ন বিষয়ে নতুন কিছু শেখা আমার নেশা।",
      bio2: "নিজেকে কোনো একটি নির্দিষ্ট গণ্ডিতে সীমাবদ্ধ রাখতে ভালো লাগে না। টেকনোলজি, ইলেকট্রনিক্স, ওয়েব ডেভেলপমেন্ট, ইস্পোর্টস এবং বিজনেস আইডিয়া—সবকিছুতেই আমার আগ্রহ।",
      bio3: "আমার কাছে সবচেয়ে গুরুত্বপূর্ণ হলো কৌতূহল বজায় রাখা, নিজে হাতে তৈরি করা এবং নতুন সম্ভাবনার পেছনে ছুটে চলা।",
      ctaWork: "কাজ দেখুন",
      ctaContact: "যোগাযোগ করুন",
      ctaSandbox: "স্যান্ডবক্স চালান",
      yearsExploring: "অনুসন্ধানের বয়স",
      curiosity: "কৌতূহল",
      hardwareWeb: "হার্ডওয়্যার ও ওয়েব",
      timezone: "টাইমজোন",
      scrollHint: "স্ক্রোল করে দেখুন",
      voiceIntro: "ভয়েস পরিচিতি (অডিও)",
      playingVoiceIntro: "ভয়েস চলছে",
      voiceInLanguage: "বাংলায় ভয়েস বার্তা",
      changeVoiceLanguage: "ভয়েসের ভাষা পরিবর্তন"
    },
    about: {
      eyebrow: "০১ / দর্শন ও পরিচয়",
      heading: "অদম্য কৌতূহল দ্বারা পরিচালিত একজন তরুণ নির্মাতা।",
      subheading: "হার্ডওয়্যার সার্কিট থেকে শুরু করে ব্রাউজার অ্যাপ্লিকেশন পর্যন্ত—সবকিছু নিজে বানিয়ে শেখাই আমার মূল লক্ষ্য।",
      quote: "আমি সবসময় নতুন কিছু উদ্ভাবন, পরীক্ষা-নিরীক্ষা ও ধারণাকে বাস্তবে রূপান্তরে বিশ্বাসী।",
      trait1Title: "হাতে-কলমে কাজ করা",
      trait1Desc: "শুধু তাত্ত্বিক পড়াশোনায় না থেকে সরাসরি কোড লেখা, মাইক্রোকন্ট্রোলার কানেক্ট করা এবং কার্যক্ষম প্রোটোটাইপ তৈরি করা।",
      trait2Title: "দ্রুত স্ব-উদ্যোগে শেখা",
      trait2Desc: "টেকনিক্যাল ডকুমেন্টেশন নিজে নিজে পড়ে আধুনিক প্রযুক্তি ও ফ্রেমওয়ার্ক দ্রুত আয়ত্ত করার ক্ষমতা।",
      trait3Title: "প্রতিযোগিতামূলক মানসিকতা",
      trait3Desc: "প্রতিযোগিতামূলক ইস্পোর্টসের ক্ষিপ্রতা, ধৈর্য এবং কৌশলগত শৃঙ্খলা সফটওয়্যার তৈরিতে প্রয়োগ করা।"
    },
    currently: {
      eyebrow: "০২ / বর্তমান ফোকাস",
      heading: "এখন যা নিয়ে কাজ করছি।",
      subheading: "আমার সাম্প্রতিক গবেষণা, পড়াশোনা এবং বাস্তব প্রজেক্টের সংক্ষিপ্ত চিত্র।",
      learning: "পাইথন ও প্রোগ্রামিংয়ের ভিত্তি",
      building: "রোবোটিক্স, আর্দুইনো ও ইলেকট্রনিক্স সার্কিট",
      exploring: "বিজনেস আইডিয়া ও প্রোডাক্ট তৈরি",
      practicing: "সঙ্গীত, গিটার ও নতুন দক্ষতা",
      obsessing: "আধুনিক ইন্টার‍্যাক্টিভ ওয়েব ও এআই প্রযুক্তি",
      aiming: "আরও বড় ও অর্থবহ প্রযুক্তি সমাধান তৈরি"
    },
    expertise: {
      eyebrow: "০৩ / দক্ষতা ও কারিগরি জ্ঞান",
      heading: "প্রযুক্তিগত ভিত্তি ও স্কিলসেট।",
      subheading: "সফটওয়্যার ডেভেলপমেন্ট, ফিজিক্যাল কম্পিউটিং এবং দ্রুত প্রোটোটাইপ তৈরির সমন্বিত দক্ষতা।"
    },
    work: {
      eyebrow: "০৪ / বাছাইকৃত কাজ",
      heading: "যা আমি তৈরি করেছি।",
      subheading: "ওয়েব প্রজেক্ট, এক্সপেরিমেন্ট, গেম এবং হার্ডওয়্যার বিল্ডের একটি সংকলন।",
      flagship: "মূল প্রজেক্ট",
      timeline: "সময়কাল",
      whatILearned: "যা শিখেছি",
      openRepo: "সোর্স কোড",
      liveDemo: "লাইভ ডেমো",
      interactiveSandbox: "ইন্টারেক্টিভ স্যান্ডবক্স চালু করুন",
      closeSandbox: "স্যান্ডবক্স বন্ধ করুন"
    },
    sandboxes: {
      codeEditorTitle: "জাভাস্ক্রিপ্ট ও ডম লাইভ ইভালুয়েটর",
      codeEditorSubtitle: "এক্সিকিউশন টাইমারসহ রিয়েল-টাইম আইসোলেটেড ফ্রেম স্যান্ডবক্স",
      runCode: "কোড চালান",
      resetCode: "রিসেট",
      radarTitle: "আল্ট্রাসনিক প্রক্সিমিটি রাডার",
      radarSubtitle: "HC-SR04 সোনার সুইপ স্ক্যান এবং রিয়েল-টাইম দূরত্ব পরিমাপক",
      radarDistance: "দূরত্ব",
      radarSafe: "নিরাপদ দূরত্ব",
      radarWarning: "কাছে আসছে",
      radarDanger: "অতি সন্নিকটে",
      radarPing: "রাডার শব্দ",
      speechTitle: "স্পিচ রেকগনিশন ও ওয়েভফর্ম",
      speechSubtitle: "ব্রাউজার ভয়েস ইনপুট প্রসেসর এবং লাইভ ওয়েভফর্ম ভিজ্যুয়ালাইজার",
      startDictation: "কথা বলা শুরু করুন",
      stopDictation: "রেকর্ড বন্ধ",
      simulateVoice: "ভয়েস সিমুলেশন করুন",
      transcribing: "শোনা হচ্ছে ও টেক্সটে রূপান্তর চলছে...",
      copyTranscript: "টেক্সট কপি করুন",
      copied: "কপি সম্পন্ন!",
      racerTitle: "ইন্টারেক্টিভ ৩ডি রোড রেসার গেম",
      racerSubtitle: "মাউস অথবা অ্যারো কি দিয়ে পরিচালিত ক্যানভাস ৩ডি ইঞ্জিন",
      racerSpeed: "গতি",
      racerDistance: "অতিক্রান্ত দূরত্ব",
      racerSteer: "চালানোর জন্য অ্যারো কি অথবা মাউস ব্যবহার করুন",
      startDrive: "ইঞ্জিন স্টার্ট",
      pauseDrive: "ব্রেক / বিরতি"
    },
    building: {
      eyebrow: "০৫ / নির্মাণাধীন প্রজেক্ট",
      title: "কিজুনা — স্টাডি ট্র্যাকার",
      subtitle: "নির্মাতা ও শিক্ষার্থীদের জন্য একটি মার্জিত স্টাডি ও হ্যাবিট ট্র্যাকার।",
      status: "চলমান উন্নয়ন"
    },
    activity: {
      eyebrow: "০৬ / ধারাবাহিকতা ও কোডিং গতিবিধি",
      heading: "প্রতিদিন নির্মাণ, এক একটি কমিটের মাধ্যমে।",
      subheading: "বিগত ৫২ সপ্তাহে হার্ডওয়্যার প্রোটোটাইপ ও ওয়েব প্রজেক্টে দৈনিক কমিট এবং সক্রিয়তার ভিজ্যুয়ালাইজেশন।",
      totalContributions: "মোট কন্ট্রিবিউশন",
      currentStreak: "চলমান স্ট্রিক",
      longestStreak: "সর্বোচ্চ স্ট্রিক",
      activeDays: "সক্রিয় দিনের হার",
      less: "কম",
      more: "বেশি",
      viewProfile: "গিটহাব প্রোফাইল দেখুন",
      mockNotice: "পাবলিক রিপোজিটরি ও লোকাল প্রজেক্টের রেকর্ডের ওপর ভিত্তি করে উপস্থাপিত ভিজ্যুয়ালাইজেশন।",
      year2026: "২০২৬ (সাম্প্রতিক)",
      year2025: "২০২৫ (সংরক্ষণ)",
      recentCommits: "সাম্প্রতিক রিপোজিটরি আপডেট",
      contributionsOn: "টি কন্ট্রিবিউশন ছিল",
      noContributions: "কোনো কন্ট্রিবিউশন নেই —",
      mon: "সোম",
      wed: "বুধ",
      fri: "শুক্র"
    },
    journey: {
      eyebrow: "০৬ / অভিযাত্রা ও মাইলফলক",
      heading: "আমার যাত্রাপথ।",
      subheading: "প্রথম কোডের লাইন থেকে হার্ডওয়্যার ব্রেডবোর্ড এবং অ্যাডভান্সড ওয়েব এক্সপেরিমেন্ট পর্যন্ত।"
    },
    notes: {
      eyebrow: "০৭ / ডিজিটাল গার্ডেন ও নোটবুক",
      heading: "নোট ও ভাবনা।",
      subheading: "স্ব-উদ্যোগে শেখা, হার্ডওয়্যার বনাম সফটওয়্যার এবং সৃজনশীল অধ্যবসায় সংক্রান্ত নিবন্ধ।",
      readNote: "নোটটি পড়ুন"
    },
    gallery: {
      eyebrow: "০৮ / ভিজ্যুয়াল আর্কাইভ",
      heading: "ভিজ্যুয়াল আর্কাইভ।",
      subheading: "আমার তৈরি প্রজেক্ট, ফটোগ্রাফি, ঢাকার স্মৃতি এবং জীবনের নানা মুহূর্তের সংগ্রহ।",
      dragHint: "টেনে বা অনুভূমিকভাবে স্ক্রোল করুন",
      all: "সব ছবি",
      hardware: "হার্ডওয়্যার ও টেক",
      street: "ঢাকা ও রাজপথ",
      workspace: "ওয়ার্কস্পেস",
      openLightbox: "বড় করে দেখুন",
      exifData: "ক্যামেরা EXIF তথ্য"
    },
    newsletter: {
      eyebrow: "ফিল্ড ডেসপ্যাচ / নিউজলেটার",
      heading: "প্রযুক্তি, হার্ডওয়্যার ও নতুন আবিষ্কারের বার্তা।",
      subheading: "হার্ডওয়্যার পরীক্ষা-নিরীক্ষা, ওয়েব ইঞ্জিনিয়ারিং এবং সরাসরি কাজ করে শেখার অভিজ্ঞতা নিয়ে তৈরি বার্তা। কোনো স্প্যাম নেই, যে কোনো সময় আনসাবস্ক্রাইব করতে পারবেন।",
      placeholder: "আপনার ইমেইল ঠিকানা লিখুন...",
      button: "সাবস্ক্রাইব করুন",
      subscribing: "নিশ্চিত করা হচ্ছে...",
      successTitle: "স্বাগতম! আপনি তালিকায় যুক্ত হয়েছেন।",
      successDesc: "সাবস্ক্রাইব করার জন্য ধন্যবাদ। পরবর্তী সংখ্যা খুব শীঘ্রই সরাসরি আপনার ইনবক্সে পৌঁছাবে।",
      frequency: "প্রতি মাসে একবার প্রেরিত · শূন্য স্প্যাম · যে কোনো সময় বাতিলযোগ্য",
      resetButton: "অন্য ইমেইল যুক্ত করুন"
    },
    contact: {
      eyebrow: "০৯ / যোগাযোগ",
      heading: "চলুন অসাধারণ কিছু তৈরি করি।",
      subheading: "কোনো প্রজেক্টের পরিকল্পনা, প্রশ্ন বা প্রযুক্তি, হার্ডওয়্যার ও গেমিং নিয়ে আলোচনা করতে চান? নির্দ্বিধায় মেসেজ পাঠাতে পারেন।",
      namePlaceholder: "আপনার নাম",
      emailPlaceholder: "আপনার ইমেইল",
      messagePlaceholder: "আপনার ভাবনা বা মেসেজ এখানে লিখুন...",
      sendMessage: "মেসেজ পাঠান",
      sending: "পাঠানো হচ্ছে...",
      messageSent: "মেসেজ পাঠানো হয়েছে! শীঘ্রই উত্তর দেওয়া হবে।"
    },
    footer: {
      tagline: "কৌতূহল ও নিষ্ঠার সংমিশ্রণে প্রতিনিয়ত নতুন প্রযুক্তি তৈরি করে চলা একজন তরুণ নির্মাতা।",
      timezone: "ঢাকা, বাংলাদেশ (GMT+6)",
      pressK: "কমান্ড মেনুর জন্য K চাপুন",
      backToTop: "উপরে ফিরে যান"
    }
  }
};
