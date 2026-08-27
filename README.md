# Build Log — Personal Technology Blog

A modern, SEO-friendly personal blog about **AI tools**, **automation**, **coding**, and **developer productivity**. Built with Astro as a static site and ready to host for free on Netlify.

## Features

- Home, Blog, Article, About, Projects, Contact, Categories, and 404 pages
- Markdown-based blog posts (easy to add new articles)
- Light / dark mode
- Client-side article search
- Table of contents, code copy buttons, share links, related posts
- Netlify Forms for contact + newsletter
- Sitemap, robots.txt, Open Graph, Twitter cards, and JSON-LD schema

## Tech stack

- [Astro](https://astro.build/) (static site generator)
- HTML + CSS + a small amount of JavaScript
- Markdown for articles (`src/content/blog/`)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- Hosting: [Netlify](https://www.netlify.com/) (free tier)

No paid APIs. No database. No authentication.

## Folder structure

```text
blog/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       ├── og-default.svg
│       └── posts/                  # Article cover images
├── src/
│   ├── components/                # Reusable UI pieces
│   ├── content/
│   │   ├── config.ts              # Blog post schema
│   │   └── blog/                  # ← YOUR ARTICLES GO HERE (.md files)
│   ├── data/
│   │   ├── site.ts                # Site name, social links, categories
│   │   └── projects.ts            # Projects page data
│   ├── layouts/
│   │   └── BaseLayout.astro       # SEO + shared page shell
│   ├── pages/                     # Routes (files become URLs)
│   ├── scripts/
│   │   └── site.ts                # Theme, search, copy-code
│   ├── styles/
│   │   └── global.css
│   └── utils/
├── astro.config.mjs
├── netlify.toml
├── package.json
└── README.md
```

## Local setup

### 1. Prerequisites

Install [Node.js](https://nodejs.org/) (LTS recommended, v20+).

### 2. Install dependencies

```bash
cd blog
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:4321`).

### 4. Build for production

```bash
npm run build
npm run preview
```

- Build output folder: `dist/`
- That `dist/` folder is what Netlify publishes

## How to add a new blog post

### 1. Create a Markdown file

Create a new file inside:

```text
src/content/blog/
```

Name the file using the URL slug you want.

Example file:

```text
src/content/blog/my-new-ai-tutorial.md
```

This publishes at:

```text
/blog/my-new-ai-tutorial/
```

### 2. Add frontmatter (title, date, category, tags, image)

Put this at the **top** of the Markdown file:

```md
---
title: "My New AI Tutorial"
description: "A short summary used for SEO and article cards."
pubDate: 2026-08-11
author: "Saakshi das"
category: "ai-tools"
tags: ["ai", "tutorial", "beginners"]
heroImage: "/images/posts/my-cover.svg"
readingTime: "6 min read"
featured: false
draft: false
---

## Your first heading

Write your article in Markdown here.
```

### 3. Allowed category values
Use one of these **slugs** (from `src/data/site.ts`):

- `ai-tools`
- `ai-automation`
- `web-development`
- `beginner-guides`
- `devtools`
- `learning-journey`

### 4. Add images

1. Put an image in `public/images/posts/`
2. Reference it from frontmatter as `/images/posts/your-file.svg` (or `.jpg` / `.png` / `.webp`)
3. Inside the article body you can also write:

```md
![Alt text describing the image](/images/posts/your-file.svg)
```

Use your own images or free sources (for example SVG placeholders, as included here). Do not use copyrighted images.

### 5. Publish the article

- Set `draft: false` (or omit `draft`)
- Save the file
- Commit and push to GitHub
- Netlify rebuilds automatically

To keep a post unpublished while writing, set:

```md
draft: true
```

## Customize your site identity

Edit `src/data/site.ts`:

- Site name
- Author name
- Email
- Social links
- Canonical site URL

Also update:

- `astro.config.mjs` → `SITE_URL`
- `public/robots.txt` → sitemap URL

## Netlify settings

This repo includes `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | 20+ recommended |

Contact and newsletter forms use **Netlify Forms** (`data-netlify="true"`). After the first deploy, submit each form once, then check **Netlify → Forms**.

## Deploy to Netlify (overview)

1. Push this project to GitHub
2. In Netlify: **Add new site → Import an existing project**
3. Choose the GitHub repo
4. Confirm build command `npm run build` and publish directory `dist`
5. Deploy

## Connecting a custom domain later

1. In Netlify, open your site → **Domain management**
2. Click **Add a domain**
3. Follow Netlify’s DNS instructions for your domain provider
4. Update `SITE_URL` in `astro.config.mjs` and the URL in `src/data/site.ts` + `public/robots.txt`
5. Redeploy

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build locally |

## License

You can use this project as a starter for your own personal blog.
