import { businesses, type BusinessSlug } from '../data/demo-list';

export function getBusinessBySlug(slug: string | undefined) {
  if (!slug) {
    return undefined;
  }

  return businesses.find((business) => business.slug === slug);
}

export function getAllBusinessSlugs(): BusinessSlug[] {
  return businesses.map((business) => business.slug);
}
