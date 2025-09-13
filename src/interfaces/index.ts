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

export interface SkillIcon {
  name: string;
  level: string;
  experience: string;
  description: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: SkillIcon[];
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
    description: string;
    contact: {
      email: string;
      linkedin: string;
      resume: string;
    };
    backgroundWork: string;
    backgroundSchool: string;
    interests: string;
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
