import { cn } from '@/lib/utils';

function ComingSoon({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={cn('contents', className)}>
      <h1 className='inline-block font-head text-4xl tracking-tight lg:text-5xl'>
        {title}
      </h1>
      <p className='animate-fade-in h-[1.15em] font-head sm:text-6xl text-3xl text-primary dark:text-gradient mt-2 drop-shadow-4xl'>
        Coming soon!
      </p>
      <hr className='my-8' />
    </div>
  );
}

ComingSoon.displayName = 'ComingSoon';

export default ComingSoon;
