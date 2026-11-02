import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const PERSON_ID = `${siteConfig.url}/#person`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;

export const RSS_PATH = '/rss';

/**
 * Per-route canonical plus the RSS discovery link. Child segments replace
 * the parent `alternates` object, so every page sets both together.
 */
export function pageAlternates(path: string): Metadata['alternates'] {
  return {
    canonical: path,
    types: {
      'application/rss+xml': [
        { url: RSS_PATH, title: `${siteConfig.name} RSS feed` },
      ],
    },
  };
}

export function absoluteUrl(path: string): string {
  return path.startsWith('http') ? path : `${siteConfig.url}${path}`;
}

/** JSON for a `<script type="application/ld+json">`, safe to inline. */
export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
