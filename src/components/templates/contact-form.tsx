'use server';
import { ContactForm } from '@/lib/types';
import { Button, Tailwind } from '@react-email/components';
import config from '../../../tailwind.config';

export const ContactEmailTemplate = (formData: ContactForm) => {
  return (
    <Tailwind config={config}>
      <div className='p-4'>
        <p className='font-sans'>
          A contact form has been submited from{' '}
          <a href='https://lucasverdiell.xyz' target={'_blank'}>
            lucasverdiell.xyz
          </a>{' '}
          site:
        </p>
        <ul>
          <li>
            <strong className='font-head'>Name:</strong> {formData.name}
          </li>
          <li>
            <strong className='font-head'>Email:</strong>{' '}
            <a href={`mailto:${formData.email}`}>{formData.email}</a>
          </li>
          <li>
            <strong className='font-head'>content:</strong> {formData.content}
          </li>
        </ul>
      </div>
      <a
        className='h-9 px-4 py-2 font-head inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow shadow-primary hover:bg-primary/90'
        href='https://lucasverdiell.xyz'
        target='_blank'
      >
        Go to site
      </a>
    </Tailwind>
  );
};
