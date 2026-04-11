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
  category?: string;
  serviceType?: 'Amazon PPC' | 'Amazon SEO' | 'Design' | 'Platform Management';
  shortSummary?: string;
  metrics: {
    label: string;
    value: string;
  }[];
  testimonial: string;
  image: string;
  chartImage?: string;
  insightTitle?: string;
  insightPoints?: string[];
  overview?: string[];
  challenges?: string[];
  approach?: {
    title: string;
    description: string;
  }[];
  outcomes?: string[];
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
  amazonCompany: string;
  phone: string;
  additionalDetails: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  ctaText: string;
  backgroundImage?: string;
  backgroundVideo?: string;
}
