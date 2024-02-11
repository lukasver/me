'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { cn } from '@/lib/utils';
import React, { ComponentProps, ReactNode, memo } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';

export enum INPUTS_TYPES {
  Text = 'text',
  TextArea = 'textarea',
  Number = 'number',
  Date = 'date',
  Checkbox = 'checkbox',
  File = 'file',
  Country = 'country',
  Switch = 'switch',
  Email = 'email',
}

export type InputProps = (
  | ComponentProps<typeof Textarea>
  | ComponentProps<typeof Input>
  | ComponentProps<typeof Checkbox>
) & {
  name: string;
  label: string;
  type: INPUTS_TYPES;
  helperText?: string | ReactNode;
};

function InputsWrapper({ name, ...props }: InputProps) {
  const { control } = useFormContext();

  if (props.type === null) {
    return null;
  }

  return (
    <FormField
      control={control}
      name={name || 'ERROR_MISSING_INPUT_NAME'}
      disabled={props.disabled}
      render={({ field }) => (
        <FormItem className={cn(props.className)}>
          {props.label && props.type !== INPUTS_TYPES.Checkbox && (
            <FormLabel className={'font-bold'}>{props.label}</FormLabel>
          )}
          <FormControl>
            <GenericInput type={props.type} {...field} />
          </FormControl>
          {props.helperText && props.type !== INPUTS_TYPES.Checkbox && (
            <FormDescription>{props.helperText}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function GenericInput({ type, ...props }: Partial<InputProps>) {
  if (!type) return null;

  if (type === INPUTS_TYPES.Checkbox) {
    return (
      <>
        {props.helperText && <FormLabel>{props.label}</FormLabel>}
        <div className='flex h-10 w-full flex-1 items-center justify-around rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'>
          {props.helperText ? (
            <FormDescription>{props.helperText}</FormDescription>
          ) : (
            <FormLabel className='flex-1'>{props.label}</FormLabel>
          )}
          {/* @ts-expect-error TODO fix: narrow types */}
          <Checkbox {...props} />
        </div>
      </>
    );
  }

  if (type === INPUTS_TYPES.TextArea) {
    // @ts-expect-error TODO fix: narrow types
    return <Textarea {...props} />;
  }

  if (type === INPUTS_TYPES.Number) {
    return (
      // @ts-expect-error TODO fix: narrow types
      <Input
        {...props}
        type='number'
        min={0}
        // @ts-expect-error motion
        onWheel={() => document?.activeElement?.blur()}
      />
    );
  }
  // @ts-expect-error TODO fix: narrow types
  return <Input {...props} />;
}

memo(InputsWrapper);
export default InputsWrapper;
