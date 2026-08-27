export const siteConfig = {
  name: 'Build Log',
  title: 'Build Log — AI Tools, Automation & Coding Tutorials',
  description:
    'Practical tutorials on AI tools, automation workflows, and coding projects. Written by Saakshi Das for beginners, students, and developers who want to ship real software.',
  url: (import.meta.env.SITE || 'https://your-blog.netlify.app').replace(/\/$/, ''),
  author: 'Saakshi Das',
  email: 'saakshidas.atwork@gmail.com',
  locale: 'en_US',
  language: 'en',
  twitterHandle: '@saakshidas99',
  defaultOgImage: '/images/og-default.png',
  googleSiteVerification: '', 
  social: {
    github: 'https://github.com/89intheloop-lgtm',
    freelancer: 'https://www.freelancer.com/u/sakshismm',
    twitter: 'https://x.com/saakshidas99',
    linkedin: 'https://www.linkedin.com/in/saakshi-das-516b47407',
    youtube: 'https://www.youtube.com/@aura_social_99',
  },
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const categories = [
  {
    slug: 'ai-tools',
    name: 'AI Tools',
    title: 'AI Tools for Developers',
    description: 'Practical reviews and tutorials for AI tools developers actually use.',
    seoTitle: 'AI Tools for Developers — Practical Tutorials | Build Log',
    seoDescription:
      'Learn which AI tools help with coding, documentation, research, and shipping faster — with practical advice instead of hype.',
  },
  {
    slug: 'ai-automation',
    name: 'AI Automation',
    title: 'AI Automation Workflows',
    description: 'Workflows, agents, and no-code/low-code automation ideas.',
    seoTitle: 'Beginner AI Automation Workflows & Guides | Build Log',
    seoDescription:
      'Step-by-step AI automation guides for beginners: triggers, prompts, no-code tools, and workflows you can actually maintain.',
  },
  {
    slug: 'web-development',
    name: 'Web Development',
    title: 'Web Development Tutorials',
    description: 'Building websites, apps, and developer tools from scratch.',
    seoTitle: 'Web Development Tutorials: AI Apps & Free Hosting | Build Log',
    seoDescription:
      'Beginner-friendly web development tutorials, including how to build an AI web app and deploy a static site free with GitHub and Netlify.',
  },
  {
    slug: 'beginner-guides',
    name: 'Beginner Guides',
    title: 'Beginner Coding Guides',
    description: 'Friendly programming and AI guides for students and newcomers.',
    seoTitle: 'Beginner Coding & Portfolio Project Guides | Build Log',
    seoDescription:
      'Friendly programming and AI guides for students and newcomers, including coding project ideas that strengthen a developer portfolio.',
  },
  {
    slug: 'devtools',
    name: 'Developer Productivity',
    title: 'Developer Productivity',
    description: 'Tips, workflows, and tools that help you ship faster.',
    seoTitle: 'Developer Productivity Tips & Workflows | Build Log',
    seoDescription:
      'Tips, workflows, and developer tools that help you write, document, and ship software faster.',
  },
  {
    slug: 'learning-journey',
    name: 'Learning Journey',
    title: 'Learning AI in Public',
    description: 'Personal experiments, lessons, and build-in-public notes.',
    seoTitle: 'Learning AI Automation in Public | Build Log',
    seoDescription:
      'Honest notes from learning AI automation in public — what worked, what did not, and how to start with small workflows.',
  },
];
