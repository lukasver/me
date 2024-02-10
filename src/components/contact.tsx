'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Form } from './ui/form';
import InputsWrapper, { INPUTS_TYPES } from './generic-input';
import { cn, fireToast } from '@/lib/utils';
import { Button } from './ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { ContactForm } from '@/lib/types';
import { postContactForm } from '@/lib/actions';

function Contact() {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(ContactForm),
    defaultValues: {
      email: '',
      name: '',
      content: '',
    },
  });

  const onSubmit: SubmitHandler<ContactForm> = async (formData) => {
    try {
      setLoading(true);
      const submited = await postContactForm(formData);
      if (submited) {
        form.reset();
        fireToast(
          'Contact sent 🎉',
          "Thank you for getting in touch. I'll get back ASAP! ",
          'success'
        );
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full h-full min-h-[330px] flex flex-col gap-2 justify-between'
      >
        {INPUTS.map((input, index) => (
          <InputsWrapper
            className={cn(
              'w-full',
              index === INPUTS.length - 1 && 'flex flex-col gap-1 flex-1'
            )}
            key={input.name}
            {...input}
          />
        ))}
        <Button
          type={'submit'}
          disabled={loading || !form.formState.isValid}
          loading={loading}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}

const INPUTS = [
  { name: 'email', label: 'Email', type: INPUTS_TYPES.Email },
  { name: 'name', label: 'Name', type: INPUTS_TYPES.Text },
  {
    name: 'content',
    label: "What's on your mind?",
    type: INPUTS_TYPES.TextArea,
  },
];

export default Contact;
