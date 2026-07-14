export interface ProjectLink {
  preview?: string;
  github?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: ProjectLink;
}

export interface ProjectSection {
  title: string;
  list: Project[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ContentData {
  heroSection: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    name: string;
    role: string;
    description: string[];
    social: {
      github: string;
      linkedin: string;
      email: string;
    };
    cv: string;
  };
  contact: {
    title: string;
    description: string;
    email: string;
    social: {
      linkedin: string;
      github: string;
    };
    footer: string;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: SkillCategory[];
  };
  projects: {
    title: string;
    subtitle: string;
    professionalWork: ProjectSection;
    personalProjects: ProjectSection;
  };
}
