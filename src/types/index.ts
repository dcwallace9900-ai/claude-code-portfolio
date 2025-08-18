export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Skill {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  icon: string;
  date?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  details?: string;
  icon: string;
  tags?: string[];
  link?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SectionRef {
  home: HTMLElement | null;
  about: HTMLElement | null;
  background: HTMLElement | null;
  projects: HTMLElement | null;
  contact: HTMLElement | null;
}