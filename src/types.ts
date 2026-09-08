export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  year: string;
  technologies: string[];
  visualType: 'code-editor' | 'hardware-sensor' | 'speech-to-text' | '3d-game' | 'image-resizer' | 'hardware-experiments';
  repository: string;
  demo?: string;
  status?: string;
  featured?: boolean;
  hierarchy: 'featured' | 'large' | 'medium' | 'small' | 'grouped';
  note?: string;
  whatILearned: string;
  subRepositories?: { name: string; url: string; description?: string }[];
}

export interface ExperimentItem {
  id: string;
  name: string;
  description: string;
  category: string;
  tech: string;
  repository?: string;
  demo?: string;
}

export interface CurrentlyBuildingItem {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  repository: string;
  technology: string;
  status: string;
  notes?: string;
}

export interface SkillItem {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export interface CurrentlyItem {
  category: string;
  focus: string;
  details: string;
  indicatorColor?: string;
  year?: string;
}

export interface JourneyItem {
  year: string;
  title: string;
  roleOrStatus: string;
  description: string;
  location?: string;
  tags: string[];
  highlight?: boolean;
}

export interface NoteItem {
  id: string;
  date: string;
  readTime: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
}

export interface ExploreTopic {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  location: string;
  year: string;
  aspect: string;
  image: string;
  caption: string;
}
