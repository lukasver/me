import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import localFont from 'next/font/local';
import { GeistSans } from 'geist/font/sans';
import { ExternalToast, toast } from 'sonner';

export const head = localFont({
  src: '../../public/assets/CalSans-SemiBold.woff2',
  variable: '--font-cal',
});

export const sans = GeistSans;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fireToast = (
  title: string,
  description: string,
  type: 'success' | 'error' | 'info' = 'success',
  options?: Partial<ExternalToast>
) => {
  toast[type](title, {
    description,
    ...options,
  });
};

export const shallowPush = ({
  pathname,
  params,
}: {
  pathname: string;
  params: URLSearchParams;
}): void => {
  window.history.pushState({}, '', `${pathname}?${params.toString()}`);
};
