import { siteConfig } from '@/config/site';
import { getBlogPosts } from '@/lib/mdx';
import { MetadataRoute } from 'next';

export const DOMAIN = siteConfig.url;

// Static pages have no reliable modification date, so lastModified is omitted.
const routes: MetadataRoute.Sitemap = [
  {
    url: DOMAIN,
    changeFrequency: 'yearly',
    priority: 1,
  },
  {
    url: `${DOMAIN}/contact`,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${DOMAIN}/blog`,
    changeFrequency: 'monthly',
    priority: 0.9,
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
