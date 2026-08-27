import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = (
  process.env.PUBLIC_SITE_URL ||
  process.env.URL ||
  'https://your-blog.netlify.app'
).replace(/\/$/, '');

const ALL_CATEGORY_SLUGS = [
  'ai-tools',
  'ai-automation',
  'web-development',
  'beginner-guides',
  'devtools',
  'learning-journey',
];

function publishedCategorySlugs() {
  const dir = path.join(__dirname, 'src/content/blog');
  const used = new Set();
  if (!fs.existsSync(dir)) return used;

  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.md')) continue;
    const src = fs.readFileSync(path.join(dir, file), 'utf8');
    if (/^draft:\s*true/m.test(src)) continue;
    const match = src.match(/^category:\s*["']?([a-z0-9-]+)/m);
    if (match) used.add(match[1]);
  }
  return used;
}

const indexedCategorySlugs = publishedCategorySlugs();
const emptyCategoryPaths = new Set(
  ALL_CATEGORY_SLUGS.filter((slug) => !indexedCategorySlugs.has(slug)).map(
    (slug) => `${SITE_URL}/categories/${slug}/`
  )
);

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  legacy: {
    collections: true,
  },
  integrations: [
    sitemap({
      filter: (page) => {
        if (page.includes('/404')) return false;
        if (emptyCategoryPaths.has(page)) return false;
        return true;
      },
      serialize(item) {
        const url = item.url;
        if (url === `${SITE_URL}/`) {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (url.includes('/blog/') && url !== `${SITE_URL}/blog/`) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (url === `${SITE_URL}/blog/` || url.includes('/categories/')) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        } else if (url.includes('/about/') || url.includes('/projects/')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.4;
          item.changefreq = 'monthly';
        }
        item.lastmod = new Date();
        return item;
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
    },
  },
});
