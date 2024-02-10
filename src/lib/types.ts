import { z } from 'zod';

export const ContactForm = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(3, 'Name must be at least 3 characters'),
  content: z.string().min(10, 'Content must be at least 10 characters'),
});

export type ContactForm = z.infer<typeof ContactForm>;
