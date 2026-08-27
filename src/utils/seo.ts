import { siteConfig } from '../data/site';

export function absoluteUrl(path = '/') {
  const base = siteConfig.url.replace(/\/$/, '');
  if (!path || path === '/') return `${base}/`;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function isRasterImage(src?: string) {
  return Boolean(src && /\.(png|jpe?g|webp|gif|avif)$/i.test(src));
}

export function socialImage(src?: string) {
  return isRasterImage(src) ? src! : siteConfig.defaultOgImage;
}

export function readingTimeIso(readingTime?: string) {
  const minutes = Number.parseInt(readingTime ?? '', 10);
  return Number.isFinite(minutes) && minutes > 0 ? `PT${minutes}M` : undefined;
}

export function stripContext(schema: Record<string, unknown>) {
  const { ['@context']: _context, ...rest } = schema;
  return rest;
}

export function personJsonLd() {
  return {
    '@type': 'Person',
    '@id': `${siteConfig.url}/#person`,
    name: siteConfig.author,
    url: absoluteUrl('/about/'),
    email: siteConfig.email,
    jobTitle: 'Developer and writer',
    description:
      'Builder documenting AI tools, automation workflows, and practical software projects.',
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function organizationJsonLd() {
  return {
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl(siteConfig.defaultOgImage),
      width: 1200,
      height: 630,
    },
    founder: { '@id': `${siteConfig.url}/#person` },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function websiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { '@id': `${siteConfig.url}/#organization` },
    author: { '@id': `${siteConfig.url}/#person` },
  };
}

export function webPageJsonLd(options: {
  type?: string;
  path: string;
  name: string;
  description: string;
}) {
  return {
    '@type': options.type ?? 'WebPage',
    '@id': `${absoluteUrl(options.path)}#webpage`,
    url: absoluteUrl(options.path),
    name: options.name,
    description: options.description,
    inLanguage: siteConfig.language,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: { '@id': `${siteConfig.url}/#organization` },
    author: { '@id': `${siteConfig.url}/#person` },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
