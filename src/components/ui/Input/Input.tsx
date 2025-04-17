'use client';

import type { FieldValues, RegisterOptions } from 'react-hook-form';
import React from 'react';

import type { InputProps } from './interface';

/**
 * A customizable input field component that supports validation, error handling, and styling.
 * This component integrates with `react-hook-form` for easy form validation and state management.
 * It allows for different input types (e.g., text, email) and displays validation error messages when applicable.
 *
 * The input field can be disabled, and its appearance can be customized through props such as `className` and `formatPrice`.
 * The `label` and `required` props allow for displaying a label and indicating whether the field is required.
 *
 * @component
 * @example
 * // Use the input field with the default text type, required validation, and error handling
 * <Input id="email" label="Email" type="email" required errors={errors} register={register} />
 *
 * // Use the input field with a custom placeholder and disabled state
 * <Input id="name" label="Full Name" disabled errors={errors} register={register} placeholder="Enter your full name" />
 *
 * // Use the input field with custom styling and price formatting
 * <Input id="price" label="Price" type="number" formatPrice errors={errors} register={register} />
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.id - The id of the input field, used for validation and form state.
 * @param {string} [props.type='text'] - The input type (e.g., text, email, number).
 * @param {string} [props.label] - The label to display next to the input field.
 * @param {boolean} [props.required] - Whether the input field is required (used for validation).
 * @param {boolean} [props.disabled] - Whether the input field is disabled.
 * @param {boolean} [props.formatPrice] - Whether to format the input for price-related fields.
 * @param {React.ComponentType} [props.register] - The `register` function from `react-hook-form` to register the input field for validation.
 * @param {Object} [props.errors] - The error messages object from `react-hook-form`.
 * @param {object} [props.validation] - Custom validation rules to be applied to the input field.
 * @param {string} [props.className] - Optional custom class name for styling.
 * @returns {JSX.Element} - The Input component.
 */

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
