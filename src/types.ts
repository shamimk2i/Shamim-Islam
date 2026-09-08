export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  year: string;
  technologies: string[];
  image: string;
  aspectRatio?: string;
  featured?: boolean;
  link?: string;
  metrics?: { label: string; value: string }[];
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
