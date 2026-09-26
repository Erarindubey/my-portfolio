export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  contribution?: string;
  keyWork?: string[];
  category: string;
  tags: string[];
  featured: boolean;
  year: number;
  client?: string;
  role?: string;
  liveUrl?: string;
  githubUrl?: string;
  thumbnailUrl?: string;
  images?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  author: string;
  url: string;
  email: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
}
