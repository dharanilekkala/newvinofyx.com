export interface NavItem {
  label: string;
  href: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  name: string;
  icon: string;
}

export interface AIStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  client: string;
  industry: string;
  title: string;
  description: string;
  results: string[];
  tags: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}
