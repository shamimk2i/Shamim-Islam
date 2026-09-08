import { Project, SkillItem, CurrentlyItem, JourneyItem, NoteItem, ExploreTopic, GalleryPhoto } from './types';

export const personalInfo = {
  name: "Shamim Islam",
  brandMark: "SHAMIM.",
  role: "Creative Technologist",
  secondaryRole: "Digital Explorer & Builder",
  location: "Dhaka, Bangladesh",
  region: "Asia",
  coordinates: "23.8103° N, 90.4125° E",
  timezone: "Asia/Dhaka",
  gmtOffset: "GMT+6",
  email: "hello@shamimislam.dev", // Replace with your real contact email
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  headline: "Hello,\nI'm Shamim.",
  subheadline: "Developer, creator, learner and builder exploring technology, design and ideas.",
  bio: [
    "I'm Shamim Islam — a curious builder interested in technology, software, design, business, and the strange, fertile intersection between them.",
    "I enjoy learning across disciplines, building digital experiments, exploring modern web possibilities, and turning nebulous ideas into things people can actually touch and interact with.",
    "Rooted in continuous curiosity, I treat software engineering not merely as code syntax, but as modern craftsmanship — an editorial medium for human thought."
  ],
  quote: "I'm a young polymath who explores technology, design, creativity, business, and ideas.",
  stats: [
    { label: "Years Exploring", value: "16" },
    { label: "Curiosity", value: "∞" },
    { label: "Core Disciplines", value: "04+" },
    { label: "Timezone", value: "GMT+6" }
  ],
  // Place your own photo at /public/images/profile.jpg or update this path
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
  profileSecondaryImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  photoCreditNote: "Replace with your portrait at /public/images/profile.jpg"
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
    id: "kizuna",
    number: "01",
    title: "Kizuna",
    category: "Study & Productivity Platform",
    shortDescription: "A minimalist study and cognitive workflow platform built with Japanese editorial design principles.",
    fullDescription: "Kizuna is a calm, distraction-free study environment tailored for deep work. It combines pomodoro cadence tracking, modular note capture, and ambient acoustic isolation into an interface stripped of all superficial gamification. Built for learners who appreciate quiet digital tools.",
    year: "2026",
    technologies: ["React", "TypeScript", "Tailwind CSS", "IndexedDB", "Motion"],
    image: "https://images.unsplash.com/photo-1507842229451-79731c7e63b6?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    metrics: [
      { label: "Latency", value: "<16ms" },
      { label: "Focus Efficiency", value: "94%" },
      { label: "Design System", value: "Monochrome" }
    ]
  },
  {
    id: "personal-experiments",
    number: "02",
    title: "Personal Experiments",
    category: "Interactive Web Experiments",
    shortDescription: "A curated digital laboratory exploring creative computing, shaders, and reactive micro-interactions.",
    fullDescription: "A living repository of micro-prototypes where each experiment tests a single interaction thesis: from smooth spring physics and magnetic typography to procedural pattern generation using mathematical sinusoidal waves.",
    year: "2025–2026",
    technologies: ["TypeScript", "Canvas API", "Web Audio API", "Mathematical Vectors"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    featured: false,
    metrics: [
      { label: "Prototypes", value: "18+" },
      { label: "Frame Rate", value: "60 FPS" }
    ]
  },
  {
    id: "creative-web",
    number: "03",
    title: "Creative Web",
    category: "Experimental Interfaces & Visual Systems",
    shortDescription: "An exploration into editorial web design, Swiss typographic grids, and anti-cliché agency layouts.",
    fullDescription: "Challenging the monotony of modern web templates by treating the digital screen as an editorial publication. Featuring asymmetric columns, strict letterform kerning, subtle monochromatic photography, and tactile page pacing.",
    year: "2025",
    technologies: ["Modern CSS", "Editorial Grids", "Responsive Type", "Semantic HTML"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop",
    featured: false,
    metrics: [
      { label: "Lighthouse Score", value: "100" },
      { label: "Grid Columns", value: "12-Col" }
    ]
  },
  {
    id: "ai-projects",
    number: "04",
    title: "AI Projects & Prototypes",
    category: "Intelligent Tools & Prompt Systems",
    shortDescription: "Lightweight AI-powered developer utilities and contextual reasoning playgrounds.",
    fullDescription: "Prototypes leveraging modern multimodal intelligence to synthesize complex technical literature, generate context-aware code diffs, and orchestrate automated web workflows with human-in-the-loop oversight.",
    year: "2026",
    technologies: ["Node.js", "LLM APIs", "Structured Outputs", "Prompt Engineering"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    featured: false,
    metrics: [
      { label: "Reasoning Models", value: "v2" },
      { label: "Accuracy", value: "Production" }
    ]
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
