'use client';

import type { FieldValues, RegisterOptions } from 'react-hook-form';
import React from 'react';

import type { InputProps } from './interface';

export const Input = <T extends FieldValues>({
  id,
  label,
  type = 'text',
  disabled,
  formatPrice,
  register,
  required,
  validation,
  errors,
  ...props
}: InputProps<T>) => {
  const hasError = !!errors[id];
  const errorMessage = errors[id]?.message as string;

  const registerOptions: RegisterOptions<T> = validation || {
    required: required ? 'This field is required' : false,
  };

  const registerProps = register?.(id, registerOptions);

  return (
    <>
      <input
        id={id}
        disabled={disabled}
        type={type}
        className={`
          peer
          w-full
          p-4
          pt-6
          font-light
          bg-white
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? 'pl-9' : 'pl-4'}
          ${hasError ? 'border-rose-500' : 'border-neutral-300'}
          ${hasError ? 'focus:border-rose-500' : 'focus:border-black'}
          text-neutral-800
        `}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...registerProps}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />

      {label && (
        <label
          htmlFor={id}
          className={`
            absolute
            text-md
            duration-150
            transform
            -translate-y-3
            top-5
            z-10
            origin-[0]
            ${formatPrice ? 'left-9' : 'left-4'}
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-4
            ${hasError ? 'text-rose-500' : 'text-zinc-400'}
          `}
        >
          {label}
          {(required || validation?.required) && (
            <span className="text-rose-500 ml-1">*</span>
          )}
        </label>
      )}

      {hasError && <p className="text-rose-500 text-sm mt-1">{errorMessage}</p>}
    </>
  );
};
