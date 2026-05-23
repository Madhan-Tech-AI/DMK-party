
export interface NavItem {
  label: string;
  href: string;
  labelTa?: string;
}

export interface Achievement {
  title: string;
  description: string;
  stats?: string;
  image?: string;
}

export interface Initiative {
  title: string;
  category: string;
  status: string;
  description: string;
  impact?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Pillar {
  title: string;
  description: string;
  target?: string;
}
