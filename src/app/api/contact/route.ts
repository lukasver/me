import { EmailTemplate } from '@/components/templates/contact-form';
import { NextResponse } from 'next/server';
import { ReactElement } from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const res = await resend.emails.send({
      from: 'Lucas Verdiell <me@lucasverdiell.xyz>',
      to: ['l.verdiell@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'Tatu' }) as ReactElement,
    });

    return NextResponse.json({ message: 'OK', data: res.data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
