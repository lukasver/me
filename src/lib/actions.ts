'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

import { ContactForm } from './types';
import { ContactEmailTemplate } from '@/components/templates/contact-form';

const SENDER =
  process.env.NODE_ENV === 'production'
    ? 'Lucas Verdiell <hello@lucasverdiell.xyz>'
    : 'onboarding@resend.dev';

const RECEIVER =
  process.env.NODE_ENV === 'production'
    ? 'hello@lucasverdiell.xyz'
    : 'delivered@resend.dev';

export const postContactForm = async (formData: ContactForm) => {
  try {
    await resend.emails.send({
      from: SENDER,
      to: RECEIVER,
      reply_to: formData.email,
      subject: 'Contact form received 🎉',
      react: ContactEmailTemplate(formData),
    });
    return true;
  } catch (e) {
    console.log(
      `Error sending email: ${
        e instanceof Error ? e.message : JSON.stringify(e)
      }`
    );
    return false;
  }
};
