import { siteConfig } from '@/config/site';
import { Metadata } from '@/lib/mdx';
import Link from 'next/link';
import { cn, postTitleTransitionName } from '@/lib/utils';
import { DateTime } from 'luxon';
interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  metadata: Metadata;
  readingTime: number;
  slug: string;
}

export function DocsPageHeader({
  metadata,
  readingTime,
  slug,
  className,
  ...props
}: DocsPageHeaderProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <div className={'space-y-4'} {...props}>
        <h1
          className='post-title-transition w-fit font-heading text-4xl lg:text-5xl'
          style={{ viewTransitionName: postTitleTransitionName(slug) }}
        >
          {metadata.title}
        </h1>
        {metadata.summary && (
          <p className='text-lg text-muted-foreground '>{metadata.summary}</p>
        )}
      </div>
      <div className='flex gap-2 justify-between'>
        <p className='text-sm flex-shrink-0'>
          By{' '}
          <Link href='/' rel='author' className='hover:text-primary'>
            {siteConfig.name}
          </Link>{' '}
          on{' '}
          <time dateTime={metadata.publishedAt}>
            {DateTime.fromISO(metadata.publishedAt, { zone: 'utc' })
              .setLocale('en-US')
              .toLocaleString(DateTime.DATE_FULL)}
          </time>
        </p>
        <span className='truncate text-sm'>{readingTime} min read</span>
      </div>
      <hr className='my-4' />
    </div>
  );
}
