import React from 'react';
import {
  Carousel as CarouselUi,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Source extends React.ComponentProps<typeof Image> {}

const getRandomPicture = () => {
  return (
    'https://picsum.photos/420/420' +
    `?random=${parseInt(String(Math.random() * 1000))}`
  );
};

function Carousel(props: { sources: Source[]; className?: string }) {
  const sources =
    props.sources ??
    Array.from({ length: 5 }).fill({
      src: getRandomPicture(),
    });
  return (
    <CarouselUi className={cn(props.className, 'w-full max-w-full')}>
      <CarouselContent>
        {sources.map((el) => (
          <CarouselItem key={String(el.src)}>
            <div>
              <Card className='p-1'>
                <CardContent className='flex !p-0 aspect-square h-full w-full'>
                  <Image
                    width={420}
                    height={420}
                    {...el}
                    className='rounded-lg'
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='relative'>
        <CarouselPrevious className='left-6 -top-10 bg-vulcan-950 text-vulcan-100' />
        <CarouselNext className='right-6 -top-10 bg-vulcan-950 text-vulcan-100' />
      </div>
    </CarouselUi>
  );
}

Carousel.displayName = 'Carousel';

export default Carousel;
