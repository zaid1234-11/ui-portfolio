export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'UI/UX' | 'Web App' | 'Branding' | 'E-Commerce' | 'Data Vis' | 'Frontend Engineering';
  tags: string[];
  role: string;
  timeline: string;
  techStack: string[];
  problem: string;
  approach: string;
  quote: string;
  solution: string;
  outcomes: { label: string; value: string }[];
  galleryImages: string[];
  nextProjectId: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
  projects?: string[];
  focus?: string[];
  offerLetter?: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  icon: string;
  skills: string[];
}
