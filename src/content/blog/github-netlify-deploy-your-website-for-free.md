---
title: "GitHub + Netlify: Deploy Your Website for Free"
description: "A beginner walkthrough for putting a static website online for free with GitHub and Netlify, including build settings and common mistakes."
pubDate: 2026-02-09
author: "Saakshi Das"
category: "web-development"
tags: ["netlify", "github", "deployment", "beginners"]
heroImage: "/images/posts/github-netlify.svg"
readingTime: "9 min read"
featured: false
---

If your website is static (HTML/CSS/JS or an Astro build), you can host it for free with GitHub + Netlify.

## What you need

- A GitHub account
- A Netlify account
- Your project in a folder on your computer

## 1. Put your project on GitHub

From your project folder:

```bash
git init
git add .
git commit -m "Initial commit: personal tech blog"
```

Create a new empty repository on GitHub, then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

## 2. Connect the repo to Netlify

1. Log in to [Netlify](https://www.netlify.com/)
2. Click **Add new site** → **Import an existing project**
3. Choose GitHub and select your repository
4. Set the build settings:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `dist` |

This project already includes a `netlify.toml` file, so Netlify can read those settings automatically.

## 3. Deploy

Click deploy and wait for the build to finish. Netlify will give you a URL like:

```text
https://random-name-123.netlify.app
```

## 4. Check forms and pages

After the first deploy:

- Open the homepage
- Test `/blog/`
- Submit the contact form once
- Confirm the form appears in Netlify → Forms

## 5. Update the site later

Whenever you change content:

```bash
git add .
git commit -m "Add new blog post"
git push
```

Netlify rebuilds automatically.

## Common beginner mistakes

- Publishing the project root instead of `dist`
- Forgetting to run `npm install` locally before debugging build errors
- Leaving `draft: true` on a post and wondering why it is missing
- Not updating `site` / canonical URL after adding a custom domain

## Next step

Once the free Netlify URL works, you can connect a custom domain from the Netlify domain settings. No backend required.

After the site is live, update your canonical URL and submit `sitemap-index.xml` to Google Search Console. If you are also building an app to deploy, see [how to build your first AI-powered web app](/blog/how-to-build-ai-web-app/).
