export interface Package {
  id: string;
  name: string;
  price: string;
  priceMonthly: string;
  features: string[];
  highlighted?: boolean;
  channels: {
    german: number;
    international: number;
  };
  devices: number;
  quality: string;
  support: string;
  catchupDays?: number;
  vodLibrary?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  category?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
