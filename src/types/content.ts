export interface StatItem {
  value: string;
  label: string;
}

export interface ExpertiseCard {
  title: string;
  items: string[];
  highlight?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
}

export interface WorkItem {
  tag: string;
  title: string;
  problem: string;
  architecture: string;
  outcome: string;
  tech: string[];
}

export interface TechColumn {
  title: string;
  items: string[];
}

export interface MediumArticle {
  title: string;
  url: string;
  publishedAt: string;
  excerpt: string;
}
