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

export const demoList = businesses.map((business) => ({
  slug: business.slug,
  name: business.name,
  category: business.category,
  categoryLabel: business.categoryLabel,
  tagline: business.tagline,
  shortDescription: business.shortDescription,
  href: `/demo/${business.slug}`,
  theme: business.theme,
  logoText: business.logoText,
  logo: business.logo,
}));

export const demoCategories = [
  { value: 'all', label: 'Semua Demo' },
  { value: 'catering', label: 'Catering' },
  { value: 'laundry', label: 'Laundry' },
  { value: 'service-ac', label: 'Service AC' },
] satisfies Array<{ value: 'all' | BusinessCategory; label: string }>;
