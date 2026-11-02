import { DOMAIN } from '@/app/sitemap';
import { CustomMDX } from '@/components/mdx';
import { DocsPageHeader } from '@/components/page-header';
import { DashboardTableOfContents } from '@/components/table-of-contents';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { getBlogPosts } from '@/lib/mdx';
import { getTableOfContents } from '@/lib/toc';
import {
  PERSON_ID,
  absoluteUrl,
  pageAlternates,
  serializeJsonLd,
} from '@/lib/seo';
import { cn } from '@/lib/utils';
import { PageProps } from '@/types';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import readingTime from 'reading-time';

const baseUrl = DOMAIN;

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function postImageUrl({ image, title }: { image?: string; title: string }) {
  return image
    ? absoluteUrl(image)
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    return {};
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    tags,
  } = post.metadata;
  const ogImage = postImageUrl(post.metadata);

  return {
    title,
    description,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    alternates: pageAlternates(`/blog/${post.slug}`),
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      authors: [siteConfig.url],
      tags,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: PageProps<{ slug: string }>) {
  const { slug } = await params;
  if (!slug) {
    notFound();
  }

  const post = await getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const toc = await getTableOfContents(post.content);
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  return (
    <div className='mx-auto max-w-5xl'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            description: post.metadata.summary,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            image: postImageUrl(post.metadata),
            url: postUrl,
            mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
            inLanguage: 'en',
            keywords: post.metadata.tags,
            author: {
              '@type': 'Person',
              '@id': PERSON_ID,
              name: siteConfig.name,
              url: siteConfig.url,
            },
            publisher: { '@id': PERSON_ID },
          }),
        }}
      />
      <div className='max-w-3xl relative py-6 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 lg:py-10 xl:gap-20'>
        <div className='space-y-4 px-6 '>
          <DocsPageHeader
            metadata={post.metadata}
            readingTime={Math.max(1, Math.round(readingTime(post.content).minutes))}
          />
          <article className='prose dark:prose-invert prose-code:before:content-none prose-code:after:content-none'>
            <CustomMDX source={post.content} />
          </article>
          <hr className='my-4' />
          <div className='flex justify-center py-6 lg:py-10'>
            <Link
              href='/blog'
              className={cn(buttonVariants({ variant: 'ghost' }))}
            >
              <ChevronLeft className='mr-2 h-4 w-4' />
              Checkout more posts
            </Link>
          </div>
        </div>
        <div className='hidden text-sm lg:block'>
          <div className='sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10'>
            <DashboardTableOfContents toc={toc} />
          </div>
        </div>
      </div>
    </div>
  );
}
