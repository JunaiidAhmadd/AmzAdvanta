export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  clientName: string;
  clientLogo: string;
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  testimonial: string;
  image: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface AuditForm {
  name: string;
  email: string;
  company: string;
  phone?: string;
  currentSpend?: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  ctaText: string;
  backgroundImage?: string;
  backgroundVideo?: string;
}
