import LazyCal from '@/components/lazy-cal';
import { siteConfig } from '@/config/site';
import { pageAlternates } from '@/lib/seo';
import { Metadata } from 'next';

const description = `Get in touch with ${siteConfig.name}. Book a 15 minute call or email ${siteConfig.email}.`;

export const metadata: Metadata = {
  title: 'Contact',
  description,
  alternates: pageAlternates('/contact'),
  openGraph: {
    title: 'Contact',
    description,
    url: '/contact',
    images: '/og-image.png',
  },
};

export default function ContactPage() {
  return (
    <div className='p-6 container grid place-items-center mt-8'>
      <LazyCal />
    </div>
  );
}
