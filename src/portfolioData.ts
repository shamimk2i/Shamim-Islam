import { Project, SkillItem, CurrentlyItem, JourneyItem, NoteItem, ExploreTopic, GalleryPhoto, ExperimentItem, CurrentlyBuildingItem } from './types';

export const personalInfo = {
  name: "Shamim Islam",
  brandMark: "SHAMIM.",
  role: "Young Developer & Builder",
  secondaryRole: "Actively Learning & Experimenting",
  location: "Dhaka, Bangladesh",
  region: "Asia",
  coordinates: "23.8103° N, 90.4125° E",
  timezone: "Asia/Dhaka",
  gmtOffset: "GMT+6",
  email: "shcreativetv@gmail.com",
  github: "https://github.com/shamimk2i",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  headline: "Hello,\nI'm Shamim.",
  subheadline: "Chasing adrenaline, adventures & late night gaming sessions.",
  bio: [
    "I'm Shamim Islam, a young polymath and curious builder who loves exploring how things work and learning across different fields.",
    "I do not like limiting myself to a single box. You might find me writing code, tinkering with electronics, testing AI tools, practicing piano or guitar, deciphering Morse code, or diving into gaming, esports, and business ideas.",
    "For me, it is all about genuine curiosity, getting my hands dirty, and picking up new skills. I want to keep building, experimenting with whatever catches my interest, and seeing where curiosity takes me."
  ],
  quote: "I'm a young builder who keeps experimenting, learning, and turning ideas into working things.",
  stats: [
    { label: "Years Exploring", value: "16" },
    { label: "Curiosity", value: "∞" },
    { label: "Hardware & Web", value: "Active" },
    { label: "Timezone", value: "GMT+6" }
  ],
  // Shamim Islam portrait photo
  profileImage: "https://i.ibb.co.com/TqTsmjZ6/image.jpg",
  profileSecondaryImage: "https://i.ibb.co.com/TqTsmjZ6/image.jpg",
  photoCreditNote: "Shamim Islam, Dhaka, Bangladesh"
};

export const currentlyItems: CurrentlyItem[] = [
  {
    category: "Learning",
    focus: "Systems architecture & low-level web rendering",
    details: "Deep diving into WebGL pipelines, modern compiler theories, and memory-efficient UI patterns.",
    indicatorColor: "#68715F",
    year: "2026"
  },
  {
    category: "Building",
    focus: "Kizuna & focused micro-tools",
    details: "Crafting a minimalist study and cognitive productivity platform engineered for hyper-focus.",
    indicatorColor: "#111111",
    year: "Active"
  },
  {
    category: "Exploring",
    focus: "Japanese editorial aesthetics & Swiss typography",
    details: "Analyzing asymmetric grid layouts, generous negative space, and quiet digital interfaces.",
    indicatorColor: "#68715F",
    year: "Ongoing"
  },
  {
    category: "Reading",
    focus: "Cybernetics, mental models & design philosophies",
    details: "Currently exploring Dieter Rams' principles, Victor Papanek, and cognitive science essays.",
    indicatorColor: "#8E8D88",
    year: "Q1"
  },
  {
    category: "Experimenting",
    focus: "Local-first AI agents & generative creative coding",
    details: "Testing lightweight inference engines that run directly in modern browser sandboxes.",
    indicatorColor: "#68715F",
    year: "Lab"
  }
];

export const skillsData: SkillItem[] = [
  {
    number: "01",
    title: "Web Development",
    category: "Engineering",
    description: "Building resilient, fast, and scalable web applications with contemporary TypeScript, modular architectures, and clean API design.",
    tags: ["TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS"]
  },
  {
    number: "02",
    title: "Frontend Engineering",
    category: "Craft",
    description: "Obsessing over rendering performance, layout stability, zero-latency micro-interactions, and accessible semantic document models.",
    tags: ["State Machines", "Virtual DOM", "Browser Performance", "Fluid Type"]
  },
  {
    number: "03",
    title: "Creative Technology",
    category: "Exploration",
    description: "Merging experimental interface design with dynamic mathematics, Canvas rendering, and expressive motion choreography.",
    tags: ["WebGL Basics", "Motion/React", "Interactive Canvases", "Micro-Physics"]
  },
  {
    number: "04",
    title: "UI / UX Design",
    category: "Architecture",
    description: "Translating complex functional requirements into calm, restrained editorial interfaces rooted in mathematical grids and Swiss layouts.",
    tags: ["Design Systems", "Typography Hierarchy", "Information Architecture", "Figma"]
  },
  {
    number: "05",
    title: "AI & Prompt Engineering",
    category: "Emerging Tech",
    description: "Harnessing modern LLMs, reasoning models, and agent workflows to augment human capability rather than replacing original craft.",
    tags: ["Prompt Architecture", "Context Engineering", "Local Models", "Function Calling"]
  },
  {
    number: "06",
    title: "Digital Experiments",
    category: "Playground",
    description: "Creating rapid interactive prototypes to stress-test ideas before turning them into full products.",
    tags: ["Micro-apps", "Generative Art", "CLI Utilities", "Creative Coding"]
  },
  {
    number: "07",
    title: "Business & Ideas",
    category: "Strategy",
    description: "Thinking like a product founder: discovering real human problems, validating hypotheses, and understanding unit economics.",
    tags: ["Product Strategy", "Growth Loops", "First-Principles Thinking", "Lean Validation"]
  }
];

export const projectsData: Project[] = [
  {
    id: "live-code-editor",
    number: "01",
    title: "Live Code Editor",
    category: "Web App",
    shortDescription: "A browser-based coding playground built with JavaScript for writing and testing code directly in the browser.",
    fullDescription: "A lightweight, in-browser code evaluation environment that allows developers to write HTML, CSS, and JavaScript in real-time with instant rendering inside an isolated document frame. Designed to make rapid interface prototyping and syntax testing frictionless without requiring local server setups.",
    year: "2025",
    technologies: ["JavaScript", "HTML", "CSS"],
    visualType: "code-editor",
    repository: "https://github.com/shamimk2i/livecodeeditor",
    demo: "https://shamim1911.github.io/livecodeeditor/",
    featured: true,
    hierarchy: "featured",
    status: "Completed",
    whatILearned: "Learned how to safely render user-generated markup inside an isolated iframe, debounce keyup listeners for real-time document rewriting, and build a clean split-editor interface using pure vanilla JavaScript."
  },
  {
    id: "parking-distance-sensor",
    number: "02",
    title: "Parking Distance Sensor",
    category: "Hardware / Arduino",
    shortDescription: "An Arduino-based parking sensor using ultrasonic sensors to measure distance and display readings on an OLED screen.",
    fullDescription: "A physical computing setup integrating an ultrasonic sensor (HC-SR04) with an Arduino microcontroller to calculate real-time clearance from approaching obstacles. The measured distance is formatted and drawn to a monochrome I2C OLED screen with dynamic distance threshold warnings.",
    year: "2025",
    technologies: ["Arduino UNO", "HC-SR04", "SSD1306 OLED", "Embedded C/C++"],
    visualType: "hardware-sensor",
    repository: "https://github.com/shamimk2i/Parking_Distance_sensor",
    note: "Wokwi simulation available",
    featured: false,
    hierarchy: "large",
    status: "Prototype Tested",
    whatILearned: "Mastered ultrasonic pulse-timing mathematics (speed of sound calculations in cm), I2C communication wiring, buffer management on the SSD1306 OLED, and testing embedded firmware using Wokwi virtual simulation."
  },
  {
    id: "speech-to-text",
    number: "03",
    title: "Speech to Text",
    category: "Web Experiment",
    shortDescription: "A browser-based speech recognition experiment that converts spoken words into text using JavaScript.",
    fullDescription: "An exploration into voice input in web browsers using the native Web Speech API. The application listens for audio streams, extracts speech tokens, manages interim versus final recognized transcripts, and displays formatted text with clipboard copying.",
    year: "2025",
    technologies: ["JavaScript", "Web Speech API"],
    visualType: "speech-to-text",
    repository: "https://github.com/shamimk2i/SpeechToText",
    demo: "https://shamim1911.github.io/SpeechToText/",
    featured: false,
    hierarchy: "medium",
    status: "Working Demo",
    whatILearned: "Gained direct experience with the browser's native SpeechRecognition interface, audio stream lifecycle events, error recovery when speech recognition times out, and handling browser microphone security permissions."
  },
  {
    id: "3d-racing-game",
    number: "04",
    title: "3D Racing Game",
    category: "Game / Interactive Experiment",
    shortDescription: "An experimental browser game exploring interactive 3D environments and gameplay.",
    fullDescription: "An experimental interactive 3D browser mini-game exploring camera perspective, pseudo-3D road rendering, vehicle velocity acceleration curves, and obstacle collisions. Created as a hands-on project to understand core game loop architecture in the browser.",
    year: "2025",
    technologies: ["JavaScript", "Interactive 3D", "Canvas / Render Loop"],
    visualType: "3d-game",
    repository: "https://github.com/shamimk2i/3d_racinggame",
    featured: false,
    hierarchy: "medium",
    status: "Experimental",
    whatILearned: "Explored frame-based game loops using requestAnimationFrame, delta time calculations for smooth movement regardless of monitor refresh rate, and pseudo-3D projection geometry."
  },
  {
    id: "image-resizer",
    number: "05",
    title: "Image Resizer",
    category: "Utility",
    shortDescription: "A lightweight browser tool for resizing images directly in the browser.",
    fullDescription: "A quick client-side image utility that allows users to upload an image, select custom pixel dimensions or scale percentages, maintain aspect ratio constraints, and export the processed file directly without sending images to any server.",
    year: "2025",
    technologies: ["JavaScript", "HTML5 Canvas", "File API"],
    visualType: "image-resizer",
    repository: "https://github.com/shamimk2i/image-resizer",
    demo: "https://shamim1911.github.io/image-resizer/",
    featured: false,
    hierarchy: "small",
    status: "Live Utility",
    whatILearned: "Learned client-side file reading with FileReader, drawing and scaling image bitmaps on an HTML5 canvas, and generating downloadable image files via Blob URLs."
  },
  {
    id: "hardware-experiments",
    number: "06",
    title: "Hardware Experiments",
    category: "Arduino / Electronics",
    shortDescription: "A collection of smaller experiments exploring sensors, displays, motors, joysticks, and embedded programming.",
    fullDescription: "A grouped collection of electronics builds and firmware experiments created during hands-on hardware exploration. Rather than treating each small circuit as an isolated project, this collection chronicles my experiments in interfacing sensors, controlling servos, rendering custom OLED animations, and measuring analog battery voltages.",
    year: "2024–2025",
    technologies: ["Arduino", "Sensors", "Servos & Steppers", "OLED", "Embedded C"],
    visualType: "hardware-experiments",
    repository: "https://github.com/shamimk2i",
    featured: false,
    hierarchy: "grouped",
    status: "Ongoing Series",
    whatILearned: "Understood analog-to-digital conversions, PWM motor drivers, frame-by-frame memory-efficient bitmap rendering, circuit breadboarding, and electrical safety fundamentals.",
    subRepositories: [
      { name: "joystick_mega.it", url: "https://github.com/shamimk2i/joystick_mega.it", description: "Analog 2-axis joystick input mapping on Arduino Mega" },
      { name: "oled_animations", url: "https://github.com/shamimk2i/oled_animations", description: "Frame-based bitmap sprite rendering on SSD1306" },
      { name: "servo_1.o", url: "https://github.com/shamimk2i/servo_1.o", description: "PWM precision angular positioning and sweep cycles" },
      { name: "Battery_Detector", url: "https://github.com/shamimk2i/Battery_Detector", description: "Analog voltage divider logic for battery health monitoring" },
      { name: "range_rover_1.o", url: "https://github.com/shamimk2i/range_rover_1.o", description: "Dual DC motor chassis direction & speed controller" }
    ]
  }
];

export const currentlyBuildingData: CurrentlyBuildingItem = {
  eyebrow: "Currently Building",
  title: "Kizuna",
  subtitle: "Study Tracker",
  description: "A study-focused web project I'm developing to experiment with organizing subjects, progress, research, and productivity.",
  repository: "https://github.com/shamimk2i/kizuna-study-tracker",
  technology: "Next.js",
  status: "In progress",
  notes: "An ongoing personal project and work-in-progress exploring modern web architecture, local persistence, and distraction-free study workflows."
};

export const moreExperimentsData: ExperimentItem[] = [
  {
    id: "exp-calc",
    name: "Calculator",
    description: "Interactive arithmetic calculator with keyboard input and clean visual states.",
    category: "Utility",
    tech: "JavaScript",
    repository: "https://github.com/shamimk2i/Calculator"
  },
  {
    id: "exp-xo",
    name: "XO Game",
    description: "Classic Tic-Tac-Toe with win detection logic and turn tracking.",
    category: "Game",
    tech: "JavaScript",
    repository: "https://github.com/shamimk2i/XO_Game"
  },
  {
    id: "exp-qr",
    name: "QR Code Generator",
    description: "Instant QR code synthesizer with client-side canvas generation and downloading.",
    category: "Utility",
    tech: "JavaScript / Canvas",
    repository: "https://github.com/shamimk2i/QRCode-Generator"
  },
  {
    id: "exp-theme-clock",
    name: "Theme Clock",
    description: "Analog and digital clock with smooth rotational degree math and theme toggles.",
    category: "UI Experiment",
    tech: "JavaScript / CSS",
    repository: "https://github.com/shamimk2i/Theme_Clock"
  },
  {
    id: "exp-live-editor",
    name: "Live Code Editor (Core)",
    description: "The core sandbox engine behind the in-browser HTML/CSS/JS compiler.",
    category: "Web App",
    tech: "JavaScript",
    repository: "https://github.com/shamimk2i/livecodeeditor"
  },
  {
    id: "exp-battery",
    name: "Battery Detector",
    description: "Arduino analog voltage monitoring circuit with battery status LEDs.",
    category: "Hardware",
    tech: "Arduino / C++",
    repository: "https://github.com/shamimk2i/Battery_Detector"
  },
  {
    id: "exp-github-api",
    name: "GitHub API experiment",
    description: "Fetching and presenting public developer repositories and activity telemetry.",
    category: "Web / API",
    tech: "REST API / JS",
    repository: "https://github.com/shamimk2i"
  },
  {
    id: "exp-pixel-art",
    name: "Pixel Art Generator",
    description: "Interactive dynamic grid canvas for drawing 8-bit sprites and exporting PNGs.",
    category: "Creative Tool",
    tech: "JavaScript",
    repository: "https://github.com/shamimk2i"
  },
  {
    id: "exp-text-editor",
    name: "Online Text Editor",
    description: "In-browser rich markdown and text scratchpad with instant local caching.",
    category: "Productivity",
    tech: "JavaScript",
    repository: "https://github.com/shamimk2i"
  },
  {
    id: "exp-captcha",
    name: "Captcha Practice App",
    description: "Simulated visual challenge generator testing alphanumeric validation logic.",
    category: "Experiment",
    tech: "JavaScript",
    repository: "https://github.com/shamimk2i"
  },
  {
    id: "exp-donut",
    name: "Donut Animation",
    description: "Mathematical 3D spinning ASCII donut ported to a browser console and canvas.",
    category: "Math / Creative Code",
    tech: "JavaScript",
    repository: "https://github.com/shamimk2i"
  },
  {
    id: "exp-box-shadow",
    name: "Box Shadow Maker",
    description: "Visual CSS generator with sliders for blur, spread, color, and inset shadows.",
    category: "CSS Tool",
    tech: "JavaScript",
    repository: "https://github.com/shamimk2i"
  },
  {
    id: "exp-dino",
    name: "No Internet Dino experiment",
    description: "Recreation of the offline runner with jump gravity, speed ramps, and collision bounds.",
    category: "Game Experiment",
    tech: "Canvas / JS",
    repository: "https://github.com/shamimk2i"
  }
];

export const journeyData: JourneyItem[] = [
  {
    year: "2026",
    title: "SSC Completed",
    roleOrStatus: "Secondary School Certificate",
    description: "Finished formal secondary education with a rigorous Science curriculum background. Immediately pivoted into independent explorations across software engineering, digital design, and interdisciplinary problem solving.",
    location: "Dhaka, Bangladesh",
    tags: ["Science Background", "Mathematics", "Foundational Milestone"],
    highlight: true
  },
  {
    year: "2026 →",
    title: "Learning & Building",
    roleOrStatus: "Independent Builder & Technologist",
    description: "Dedication to full-time self-directed mastery: authoring software prototypes, studying creative agency design systems, exploring commercial ideas, and building Kizuna.",
    location: "Global / Remote",
    tags: ["Full-Stack", "Design Craft", "Idea Validation"],
    highlight: true
  },
  {
    year: "Future",
    title: "University & Global Impact",
    roleOrStatus: "Undergraduate Studies & Software Engineering",
    description: "Preparing for higher academic pursuits in computer science and software systems while building digital products with real-world global utility.",
    location: "Worldwide Opportunities",
    tags: ["Higher Education", "Product Engineering", "Global Reach"]
  }
];

export const exploreTopics: ExploreTopic[] = [
  { id: "code", name: "Code", subtitle: "Clean, functional architecture", category: "Craft", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop" },
  { id: "design", name: "Design", subtitle: "Swiss typography & whitespace", category: "Aesthetic", image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=600&auto=format&fit=crop" },
  { id: "ai", name: "AI", subtitle: "Augmenting human cognition", category: "Technology", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop" },
  { id: "business", name: "Business", subtitle: "Sustainable unit economics", category: "Strategy", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop" },
  { id: "japanese-culture", name: "Japanese Culture", subtitle: "Ma (間) & wabi-sabi precision", category: "Philosophy", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=600&auto=format&fit=crop" },
  { id: "writing", name: "Writing", subtitle: "Clarifying thought through prose", category: "Reflection", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop" },
  { id: "photography", name: "Photography", subtitle: "Monochrome shadows & geometry", category: "Visual", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop" },
  { id: "cybersecurity", name: "Cybersecurity", subtitle: "Trust, cryptography & systems", category: "Systems", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop" },
  { id: "learning", name: "Learning", subtitle: "First-principles mental models", category: "Growth", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop" },
  { id: "ideas", name: "Ideas", subtitle: "Connecting the seemingly unrelated", category: "Mindset", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop" }
];

export const notesData: NoteItem[] = [
  {
    id: "building-before-understanding",
    date: "Aug 2026",
    readTime: "4 min read",
    category: "Engineering Philosophy",
    title: "Why I like building things before I fully understand them",
    excerpt: "Passive reading creates the illusion of competence. Active tactile implementation destroys that illusion immediately — exposing the actual ground truths.",
    content: "When you read a book or tutorial on software architecture, your mind nods along in passive agreement. Everything looks simple in linear prose. But the moment you fire up an empty editor and try to connect two decoupled modules, you collide against the genuine constraints of the machine.\n\nBuilding before understanding isn't recklessness; it is accelerated feedback. By failing immediately on step three rather than memorizing ten theoretical chapters, you calibrate your questions to reality.\n\nThe real joy of development is that the machine is an unforgiving teacher: it doesn't care about your good intentions, only whether your logic actually holds."
  },
  {
    id: "learning-about-ai",
    date: "Jul 2026",
    readTime: "5 min read",
    category: "Emerging Tech",
    title: "What I'm learning about AI and agentic systems",
    excerpt: "The most interesting frontier is not bigger models, but small, fast models bound to deterministic toolsets and tight feedback loops.",
    content: "We spent the last few years admiring large language models as conversational oracles. But conversation is only the user interface of an intelligence layer.\n\nThe real revolution happens when models are treated as reasoning engines inside deterministic loops: executing commands, validating compile steps, adjusting based on error traces, and producing concrete artifacts.\n\nAs a young builder, mastering prompt architecture and tool schemas feels like learning Unix pipelines in the 1980s: a fundamental paradigm shift."
  },
  {
    id: "designing-study-system",
    date: "Jun 2026",
    readTime: "3 min read",
    category: "Cognition & Productivity",
    title: "Designing my own study system for deep work",
    excerpt: "Modern productivity software is bloated with notifications and gamified badges. What we need is stillness, clear constraints, and rhythmic focus.",
    content: "Most study tools try to addict you to their interface. Streaks, animated confetti, social leaderboards, and push reminders fragment the very focus you are trying to cultivate.\n\nWhen designing Kizuna, I wanted the exact opposite: an interface that feels like an empty wooden table in a quiet library on a rainy morning.\n\nYour environment should disappear when you are doing serious thinking."
  },
  {
    id: "things-discovered-recently",
    date: "May 2026",
    readTime: "4 min read",
    category: "Field Notes",
    title: "Things I discovered this month",
    excerpt: "A collection of small observations on typography, memory efficiency in JavaScript, and the beauty of architectural brutalism.",
    content: "1. Negative space is not empty space; it is active gravitational silence that gives meaning to adjacent typography.\n2. In high-performance web applications, measuring frame budgets (16.6ms) forces you to rethink unnecessary re-renders more than any linter rule.\n3. The best ideas come when stepping away from the glowing screen — walking, observing physical structures, and allowing subconscious synthesis to take place."
  }
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "g1",
    title: "Tokyo Shadows",
    location: "Tokyo, Japan",
    year: "2026",
    aspect: "aspect-[4/5]",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop",
    caption: "Geometric precision and quiet morning mist."
  },
  {
    id: "g2",
    title: "Monochrome Concrete",
    location: "Kyoto",
    year: "2026",
    aspect: "aspect-[1/1]",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    caption: "Minimalist concrete surfaces and soft daylight gradients."
  },
  {
    id: "g3",
    title: "Tactile Typography",
    location: "Studio",
    year: "2025",
    aspect: "aspect-[3/4]",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop",
    caption: "Editorial layouts and balanced letterforms."
  },
  {
    id: "g4",
    title: "Ceramic & Ma",
    location: "Atelier",
    year: "2026",
    aspect: "aspect-[4/5]",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    caption: "Wabi-sabi textures in quiet interior spaces."
  },
  {
    id: "g5",
    title: "Night Reflections",
    location: "Shibuya",
    year: "2026",
    aspect: "aspect-[16/10]",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1000&auto=format&fit=crop",
    caption: "Desaturated street light reflections and silent city rhythm."
  }
];

export const personalityStatement = {
  title: "Beyond the screen.",
  lead: "I'm curious about a lot of things.",
  disciplines: [
    "Technology.",
    "Business.",
    "Design.",
    "Languages.",
    "Games.",
    "Mountains.",
    "Ideas."
  ],
  closing: "I'm interested in becoming good at things that initially seem unrelated."
};
