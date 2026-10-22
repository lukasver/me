import type { MetadataRoute } from 'next';
import { DOMAIN } from './sitemap';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/api/'],
      },
    ],
    sitemap: `${DOMAIN}/sitemap.xml`,
  };
}
