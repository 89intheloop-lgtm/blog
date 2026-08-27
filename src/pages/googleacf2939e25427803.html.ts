import type { APIRoute } from 'astro';

const BODY = 'google-site-verification: googleacf2939e25427803.html\n';

export const GET: APIRoute = () =>
  new Response(BODY, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'X-Robots-Tag': 'noindex',
    },
  });
