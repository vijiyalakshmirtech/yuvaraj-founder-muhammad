export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;

  client?: string;
  year?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];

  location?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialUrl?: string;
  date: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface Skill {
  name: string;
  category:
    | 'frontend'
    | 'backend'
    | 'ai'
    | 'marketing'
    | 'creative'
    | 'tools'
    | 'personal'
    | 'database'
    | 'languages';
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;

  id?: string;
}
