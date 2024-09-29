import { getBlogPosts } from '@/lib/mdx';
import { MetadataRoute } from 'next';

export const DOMAIN = 'https://lucasverdiell.xyz';

const routes = [
  {
    url: DOMAIN,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'yearly' as const,
    priority: 1,
  },
  {
    url: `${DOMAIN}/contact`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: `${DOMAIN}/blog`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  },
  {
    url: `${DOMAIN}/rss`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getBlogPosts().map((post) => ({
    url: `${DOMAIN}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    priority: 0.8,
    changeFrequency: 'yearly' as const,
  }));

  return [...routes, ...blogs];
}
