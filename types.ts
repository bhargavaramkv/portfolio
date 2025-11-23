export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  issueNumber: number;
}

export interface Skill {
  subject: string;
  A: number; // Current Level (0-100)
  fullMark: number;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'jarvis';
  timestamp: Date;
}

export enum SuperpowerCategory {
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  DESIGN = 'Design',
  LEADERSHIP = 'Leadership',
}
