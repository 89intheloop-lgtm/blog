import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update this to your real domain after you connect a custom domain on Netlify
const SITE_URL = 'https://your-blog.netlify.app';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [sitemap()],
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
