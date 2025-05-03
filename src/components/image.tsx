'use client';

import { CldImage } from 'next-cloudinary';
import { type ComponentProps } from 'react';

export default function OptimizedImage(props: ComponentProps<typeof CldImage>) {
  return <CldImage {...props} />;
}
