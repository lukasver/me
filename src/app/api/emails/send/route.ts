import ContactEmailTemplate from '@/emails/index';
import { ContactForm } from '@/lib/types';
import { renderAsync } from '@react-email/components';
import { NextRequest, NextResponse } from 'next/server';
import React from 'react';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const formData: ContactForm = await req.json();

  try {
    const html = await renderAsync(
      React.createElement(ContactEmailTemplate, formData)
    );
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND}`,
      },
      body: JSON.stringify({
        from: process.env.FROM,
        to: [process.env.TO],
        reply_to: formData.email,
        subject: 'Contact form received 🎉',
        html,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      return NextResponse.json({ ...data, success: true });
    }

    const response = await res.json();
    return NextResponse.json({ success: false, ...response });
  } catch (e) {
    return NextResponse.json({
      error: e instanceof Error ? e?.message : 'Error sending email',
      success: false,
    });
  }
}
