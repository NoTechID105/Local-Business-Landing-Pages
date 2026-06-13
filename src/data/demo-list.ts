import { dapurBuRani } from './businesses/dapur-bu-rani';
import { freshklinLaundry } from './businesses/freshklin-laundry';
import { sejukTeknikAc } from './businesses/sejuk-teknik-ac';
import type { Business, BusinessCategory } from './businesses/types';

export const businesses = [
  dapurBuRani,
  freshklinLaundry,
  sejukTeknikAc,
] as const satisfies readonly Business[];

export type BusinessSlug = (typeof businesses)[number]['slug'];

const demoMeta = {
  'dapur-bu-rani': {
    businessFeatures: ['Menu Paket', 'Harga', 'Testimoni', 'Maps'],
    skills: ['Dynamic Route', 'Local SEO', 'WhatsApp CTA', 'Responsive UI'],
    projectType: 'Local UMKM Demo',
  },
  'freshklin-laundry': {
    businessFeatures: ['Pickup CTA', 'Pricelist', 'Area Layanan', 'FAQ'],
    skills: ['Service Flow', 'CTA Strategy', 'Reusable Components', 'Mobile First'],
    projectType: 'Local Service Demo',
  },
  'sejuk-teknik-ac': {
    businessFeatures: ['Booking Teknisi', 'Garansi', 'Layanan', 'Maps'],
    skills: ['Trust Section', 'Service Pricing', 'WhatsApp Booking', 'Static Build'],
    projectType: 'Local Service Demo',
  },
} as const;

const aureliaStudioDemo = {
  slug: 'aurelia-studio',
  name: 'Aurelia Studio',
  category: 'fashion',
  categoryLabel: 'Fashion Boutique',
  tagline: 'Premium English fashion landing page with hero carousel, collection page, product quick view, and WhatsApp order flow.',
  shortDescription: 'English premium fashion demo for international clients with editorial hero slider, product catalog, lookbook, reviews, and size guide.',
  href: '/demo/aurelia-studio',
  collectionHref: '/demo/aurelia-studio/collection',
  projectType: 'International Demo',
  businessFeatures: ['Hero Slider', 'Collection Page', 'Quick View', 'Size Guide'],
  skills: ['English Copy', 'Fashion UI', 'Product Modal', 'Carousel JS'],
  theme: {
    name: 'Aurelia Studio',
    mood: ['Premium', 'Editorial', 'English'],
    colors: {
      primary: '#111111',
      secondary: '#c9a45c',
      accent: '#d9b66f',
      background: '#f7f2ea',
      surface: '#ffffff',
      text: '#171717',
      muted: '#6f665d',
    },
  },
  logoText: 'AS',
  logo: undefined,
} as const;

export const demoList = [
  ...businesses.map((business) => {
    const meta = demoMeta[business.slug as keyof typeof demoMeta];

    return {
      slug: business.slug,
      name: business.name,
      category: business.category,
      categoryLabel: business.categoryLabel,
      tagline: business.tagline,
      shortDescription: business.shortDescription,
      href: `/demo/${business.slug}`,
      projectType: meta.projectType,
      businessFeatures: meta.businessFeatures,
      skills: meta.skills,
      theme: business.theme,
      logoText: business.logoText,
      logo: business.logo,
    };
  }),
  aureliaStudioDemo,
] as const;

export const demoCategories = [
  { value: 'all', label: 'Semua Demo' },
  { value: 'catering', label: 'Catering' },
  { value: 'laundry', label: 'Laundry' },
  { value: 'service-ac', label: 'Service AC' },
  { value: 'fashion', label: 'Fashion' },
] satisfies Array<{ value: 'all' | BusinessCategory | 'fashion'; label: string }>;
