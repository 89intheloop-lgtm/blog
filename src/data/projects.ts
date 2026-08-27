export interface Project {
  name: string;
  slug: string;
  description: string;
  techStack: string[];
  github: string;
  demo: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'AI Resume Reviewer',
    slug: 'ai-resume-reviewer',
    description:
      'Upload a resume and get structured feedback on clarity, keywords, and ATS-friendly formatting using an LLM prompt pipeline.',
    techStack: ['JavaScript', 'OpenAI API', 'HTML/CSS', 'Netlify Functions'],
    github: 'https://github.com/89intheloop-lgtm',
    demo: '',
    featured: true,
  },
  {
    name: 'AI Chatbot',
    slug: 'ai-chatbot',
    description:
      'A lightweight chatbot UI with conversation memory, streaming responses, and prompt templates for common developer questions.',
    techStack: ['TypeScript', 'Astro', 'LLM API', 'CSS'],
    github: 'https://github.com/89intheloop-lgtm',
    demo: '',
    featured: true,
  },
  {
    name: 'AI PDF Chat',
    slug: 'ai-pdf-chat',
    description:
      'Chat with PDF documents by chunking text, retrieving relevant passages, and answering with source citations.',
    techStack: ['Python', 'JavaScript', 'Embeddings', 'Static Frontend'],
    github: 'https://github.com/89intheloop-lgtm',
    demo: '',
    featured: true,
  },
  {
    name: 'AI Automation Demo',
    slug: 'ai-automation-demo',
    description:
      'A demo workflow that watches a form submission, summarizes it with AI, and routes the result to email or a spreadsheet.',
    techStack: ['n8n / Make', 'Webhooks', 'JavaScript', 'Markdown'],
    github: 'https://github.com/89intheloop-lgtm',
    demo: '',
    featured: true,
  },
  {
    name: 'Developer Productivity Tools',
    slug: 'developer-productivity-tools',
    description:
      'A small toolkit of snippets, checklists, and browser utilities that speed up everyday coding and documentation tasks.',
    techStack: ['Vanilla JS', 'Browser APIs', 'CSS', 'Markdown'],
    github: 'https://github.com/89intheloop-lgtm',
    demo: '',
    featured: true,
  },
];
