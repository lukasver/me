import Container from '@/components/container';

import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Blog',
};

function BlogPage() {
  return (
    <div className='min-h-screen dark:bg-gradient grid place-content-center'>
      <Container>
        <h1 className='inline-block font-head text-4xl tracking-tight lg:text-5xl'>
          Blog
        </h1>
        <p className='animate-fade-in h-[1.15em] font-head sm:text-6xl text-3xl text-primary dark:text-gradient mt-2 drop-shadow-4xl'>
          Coming soon!
        </p>

        <hr className='my-8' />
      </Container>
    </div>
  );
}

export default BlogPage;
