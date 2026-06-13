export type BusinessCategory = 'catering' | 'laundry' | 'service-ac';

export interface BusinessLogo {
  src: string;
  alt: string;
}

export interface BusinessTheme {
  name: string;
  mood: string[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    muted: string;
  };
}

export interface Cta {
  label: string;
  type: 'whatsapp' | 'anchor' | 'link';
  href?: string;
  targetId?: string;
  messageTopic?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SimpleItem {
  title: string;
  description: string;
  icon?: string;
  note?: string;
}

export interface ServiceItem extends SimpleItem {
  price?: string;
  badge?: string;
  includes?: string[];
}

export interface PricingItem {
  name: string;
  price: string;
  unit?: string;
  description: string;
  features: string[];
  ctaLabel?: string;
  highlighted?: boolean;
}

export interface GalleryItem {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface TestimonialItem {
  name: string;
  role?: string;
  quote: string;
  rating?: number;
}

export interface OrderStep {
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LocationData {
  address: string;
  areaServed: string[];
  mapQuery: string;
  hours: string;
  notes?: string;
}

export interface SeoData {
  title: string;
  description: string;
  keywords: string[];
}

export interface HeroData {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  highlights: string[];
}

export interface BusinessProfile {
  headline: string;
  description: string;
  businessTypes: string[];
}

export interface FinalCtaData {
  title: string;
  description: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
}

export interface Business {
  slug: string;
  name: string;
  category: BusinessCategory;
  categoryLabel: string;
  tagline: string;
  shortDescription: string;
  phone: string;
  whatsappNumber: string;
  logoText: string;
  logo?: BusinessLogo;
  theme: BusinessTheme;
  navItems: NavItem[];
  profile: BusinessProfile;
  hero: HeroData;
  problems: SimpleItem[];
  solutions: SimpleItem[];
  services: ServiceItem[];
  pricing: PricingItem[];
  features: SimpleItem[];
  gallery: GalleryItem[];
  testimonials: TestimonialItem[];
  orderSteps: OrderStep[];
  faqs: FaqItem[];
  location: LocationData;
  finalCta: FinalCtaData;
  seo: SeoData;
}
