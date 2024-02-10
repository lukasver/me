import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import localFont from 'next/font/local';
import { Handlee } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { ExternalToast, toast } from 'sonner';

export const head = localFont({
  src: '../../public/assets/CalSans-SemiBold.woff2',
  variable: '--font-cal',
});

export const hand = Handlee({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-hand',
});

export const sans = GeistSans;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getPseudoRandomNumber = (() => {
  let available = {} as Record<number, boolean>;
  return (length: number = 5): number | undefined => {
    if (Object.keys(available).length === 0) {
      for (let i = 1; i <= length; i++) {
        available[i] = true;
      }
    }
    const keys = Object.keys(available).map(Number);
    if (keys.length === 0) return undefined; // No more numbers available
    const randomIndex = Math.floor(Math.random() * keys.length);
    const selected = keys[randomIndex];

    delete available[selected];
    return selected;
  };
})();

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
