import { compareByPublishedAtDesc, getBlogPosts } from '@/lib/mdx';
import { DOMAIN } from '../sitemap';
import { siteConfig } from '@/config/site';

const baseUrl = DOMAIN;
export const dynamic = 'force-static';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const allBlogs = await getBlogPosts();

  const itemsXml = allBlogs
    .sort(compareByPublishedAtDesc)
    .map((post) => {
      const link = `${baseUrl}/blog/${post.slug}`;
      return `<item>
          <title>${escapeXml(post.metadata.title)}</title>
          <link>${link}</link>
          <guid isPermaLink="true">${link}</guid>
          <description>${escapeXml(post.metadata.summary || '')}</description>
          <pubDate>${new Date(
            post.metadata.publishedAt
          ).toUTCString()}</pubDate>
        </item>`;
    })
    .join('\n');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>${escapeXml(siteConfig.name)} RSS feed</title>
        <link>${baseUrl}</link>
        <atom:link href="${baseUrl}/rss" rel="self" type="application/rss+xml" />
        <description>${escapeXml(siteConfig.description.substring(0, 70))}</description>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
