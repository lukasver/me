'use client';

import { CldImage } from 'next-cloudinary';

export default function OptimizedImage(props: ComponentProps<typeof CldImage>) {
  return <CldImage {...props} />;
}
