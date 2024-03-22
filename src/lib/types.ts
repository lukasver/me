import { z } from 'zod';

export const ContactForm = z.object({
  email: z.string().email().trim().min(1, 'Please enter a valid email address'),
  name: z.string().trim().min(3, 'Name must be at least 3 characters'),
  content: z.string().trim().min(10, 'Content must be at least 10 characters'),
});

export type ContactForm = z.infer<typeof ContactForm>;
