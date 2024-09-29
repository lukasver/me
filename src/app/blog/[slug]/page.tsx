import { DOMAIN } from '@/app/sitemap';
import { CustomMDX } from '@/components/mdx';
import { DocsPageHeader } from '@/components/page-header';
import { DashboardTableOfContents } from '@/components/table-of-contents';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { getBlogPosts } from '@/lib/mdx';
import { getTableOfContents } from '@/lib/toc';
import { cn } from '@/lib/utils';
import { PageProps } from '@/types';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import readingTime from 'reading-time';

const baseUrl = DOMAIN;

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return {};
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
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
  if (!params.slug) {
    notFound();
  }

  let post = await getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const toc = await getTableOfContents(post.content);

  return (
    <div className='mx-auto max-w-5xl'>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: siteConfig.name,
            },
          }),
        }}
      />
      <main className='max-w-3xl relative py-6 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 lg:py-10 xl:gap-20'>
        <div className='space-y-4 px-6'>
          <DocsPageHeader
            metadata={post.metadata}
            readingTime={readingTime(post.content)?.minutes}
          />
          <article className='prose dark:prose-invert'>
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
      </main>
    </div>
  );
}
