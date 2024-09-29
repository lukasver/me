import { Badge } from '@/components/ui/badge';
import { Marquee } from '@/components/ui/marquee';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getBlogPosts, getTags } from '@/lib/mdx';
import { DateTime } from 'luxon';

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
};

async function BlogPage() {
  const posts = await getBlogPosts();
  const tags = await getTags(posts);

  return (
    <div className='min-h-screen dark:bg-gradient'>
      <div className='mx-auto max-w-3xl pt-8 sm:pt-20 px-6'>
        <div className='space-y-6'>
          <div>
            <h1 className='text-5xl font-bold mb-2 text-primary'>Blog</h1>
            <p className='text-2xl text-gray-400'>
              Thoughts, coding struggles, and experiences.
            </p>
          </div>
          <div>
            <Marquee pauseOnHover className='[--duration:60s]'>
              {tags.map((tag) => (
                <Badge key={tag} variant='default' className='capitalize'>
                  {tag}
                </Badge>
              ))}
            </Marquee>
          </div>
          <ScrollArea className='max-h-[500px] overflow-y-auto'>
            <ul className='space-y-4'>
              {posts.map((post) => (
                <li key={post.slug} className='border-b border-gray-800 pb-4'>
                  <Link
                    href={`/blog/${post.slug}`}
                    className='block hover:text-primary dark:hover:text-muted-foreground transition-colors duration-300'
                  >
                    <h2 className='text-xl'>{post.metadata.title}</h2>
                    <div className='flex justify-between items-center'>
                      <time
                        dateTime={post.metadata.publishedAt}
                        className='text-sm text-gray-400'
                      >
                        {DateTime.fromISO(
                          post.metadata.publishedAt
                        ).toLocaleString()}
                      </time>
                      <div className='text-xs truncate gap-2 flex'>
                        {post?.metadata?.tags?.map((tag) => (
                          <span
                            key={tag}
                            className='hover:text-primary text-muted-foreground capitalize'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
