import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import memoji from '../../public/assets/memoji.png';

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className='flex gap-6 md:gap-10'>
      <Image
        priority={true}
        src={memoji}
        alt={'Lucas Memoji'}
        height={50}
        width={50}
        className='md:hidden'
      />
      <Link href='/#hero' className='hidden items-center space-x-2 md:flex'>
        <Image
          priority={true}
          src={memoji}
          alt={'Lucas Memoji'}
          height={50}
          width={50}
        />
        <span className='hidden font-bold sm:inline-block'>
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className='hidden gap-6 md:flex'>
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'flex items-center text-lg font-semibold text-muted-foreground sm:text-sm',
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
}
