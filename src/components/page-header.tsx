import { Metadata } from '@/lib/mdx';
import { cn } from '@/lib/utils';
import { DateTime } from 'luxon';
interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  metadata: Metadata;
  readingTime: number;
}

export function DocsPageHeader({
  metadata,
  readingTime,
  className,
  ...props
}: DocsPageHeaderProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <div className={'space-y-4'} {...props}>
        <h1 className='inline-block font-heading text-4xl lg:text-5xl'>
          {metadata.title}
        </h1>
        {metadata.summary && (
          <p className='text-lg text-muted-foreground '>{metadata.summary}</p>
        )}
      </div>
      <div className='flex gap-2 justify-between'>
        <time dateTime={metadata.publishedAt} className='text-sm flex-shrink-0'>
          Posted {DateTime.fromISO(metadata.publishedAt).toRelative()}
        </time>
        <span className='truncate text-sm'>{readingTime} min read</span>
      </div>
      <hr className='my-4' />
    </div>
  );
}
