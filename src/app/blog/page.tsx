import Container from '@/components/container';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Blog',
};

function BlogPage() {
  return (
    <div className='min-h-screen dark:bg-gradient grid place-content-center'>
      <Container>
        <h3 className='animate-fade-in h-[1.15em] font-head sm:text-6xl text-3xl text-primary dark:text-gradient -mt-28 drop-shadow-4xl'>
          Coming soon!
        </h3>
      </Container>
    </div>
  );
}

export default BlogPage;
