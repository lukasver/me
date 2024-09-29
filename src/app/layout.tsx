import '@/styles/globals.css';
import { Metadata } from 'next';
import type { Viewport } from 'next';

import { siteConfig } from '@/config/site';
import { head, hand, sans, cn } from '@/lib/utils';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';
import { ViewTransitions } from 'next-view-transitions';

import { Layout } from '@/components/layout';

import { Toaster } from '@/components/ui/sonner';
import Analytics from '@/components/analytics';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://lucasverdiell.xyz'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en-GB': '/en-GB',
    },
  },
  openGraph: {
    images: '/og-image.png',
    title: siteConfig.name,
    description: siteConfig.description,
    url: 'https://lucasverdiell.xyz',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <ViewTransitions>
      <html lang='en' suppressHydrationWarning>
        <head>
          <Analytics />
          <noscript>
            <meta
              httpEquiv='refresh'
              content="0; URL='https://www.youtube.com/watch?v=dQw4w9WgXcQ'"
            />
          </noscript>
        </head>
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            head.variable,
            hand.variable,
            sans.variable
          )}
        >
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <div className='relative flex min-h-screen flex-col'>
              <Layout>{children}</Layout>
            </div>
            {modal}
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
