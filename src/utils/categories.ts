import { categories } from '../data/site';

export function getCategoryName(slug: string) {
  return categories.find((category) => category.slug === slug)?.name ?? slug;
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}
