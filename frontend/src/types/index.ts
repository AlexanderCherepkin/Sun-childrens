export type StrapiImage = {
  url: string;
  width?: number;
  height?: number;
  alternativeText?: string | null;
  formats?: Record<string, { url: string; width?: number; height?: number }>;
};

export type StrapiResponse<T> = {
  data: T[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type StrapiSingle<T> = {
  data: T;
};

export type SiteSettings = {
  phone: string;
  email: string;
  schedule?: string;
  legalName: string;
  inn: string;
  ogrn: string;
  legalAddress: string;
  privacyPolicyUrl: string;
  offerUrl: string;
  yandexMetrikaId: string;
  gtmId: string;
  vkPixelId?: string;
  myTargetPixelId?: string;
  socialLinks: {
    vk?: string;
    telegram?: string;
    youtube?: string;
    whatsapp?: string;
  };
};

export type HeroSection = {
  title: string;
  subtitle: string;
  offer: string;
  stats: { label: string; value: string }[];
  ctaText: string;
  ctaNote: string;
  backgroundImage?: StrapiImage;
  backgroundVideoUrl?: string;
};

export type AboutBrand = {
  text: string;
  cards: { label: string; value: string }[];
  ctaText: string;
};

export type City = {
  name: string;
  lat: number;
  lng: number;
  hasCenter: boolean;
};

export type FinancialMetric = {
  label: string;
  value: string;
  unit?: string;
  description?: string;
  order: number;
};

export type Direction = {
  title: string;
  description: string;
  icon: string;
};

export type Format = {
  name: string;
  description: string;
  area: string;
  investment: string;
  revenue: string;
  profit: string;
  order: number;
};

export type TimelineStep = {
  number: number;
  title: string;
  description: string;
};

export type FranchiseItem = {
  icon: string;
  title: string;
  description: string;
  order: number;
};

export type TeamRole = {
  name: string;
  description: string;
  order: number;
};

export type PartnerCase = {
  name: string;
  city: string;
  photo?: StrapiImage;
  branches: number;
  revenue: string;
  profit: string;
  quote?: string;
  order: number;
};

export type Testimonial = {
  author: string;
  role?: string;
  text: string;
  rating: number;
  source: "yandex" | "2gis" | "google" | "video" | "other";
  sourceUrl?: string;
  screenshot?: StrapiImage;
  type: "partner" | "parent";
  order: number;
};

export type Faq = {
  question: string;
  answer: string;
  order: number;
};

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover?: StrapiImage;
  type: "article" | "case";
  publishedAt: string;
};

export type ReviewPlatform = {
  name: string;
  rating: number;
  url: string;
  logo?: StrapiImage;
  order: number;
};

export type Award = {
  name: string;
  year?: string;
  logo?: StrapiImage;
  order: number;
};

export type LeadFormData = {
  name: string;
  phone: string;
  city: string;
  email?: string;
  messenger: "whatsapp" | "telegram" | "phone";
  consent?: boolean;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

export type LeadSubmissionResult = {
  ok: boolean;
  message: string;
  leadId?: string;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    ym?: (...args: unknown[]) => void;
  }
}

