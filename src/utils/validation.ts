import type { FieldValues, Path, RegisterOptions } from 'react-hook-form';

export type EmailValidationOptions = {
  required?: boolean | string;
  pattern?: boolean;
  customMessage?: string;
};

export function emailValidation<T extends FieldValues>(options?: {
  required?: boolean;
}): RegisterOptions<T, Path<T>> {
  return {
    required: options?.required ? 'Email is required' : false,
    pattern: {
      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: 'Invalid email format',
    },
  };
}

export const passwordValidation = (
  options: {
    required?: boolean | string;
    minLength?: number;
    customMessage?: string;
  } = {}
): RegisterOptions => {
  const { required = false, minLength = 8, customMessage } = options;

  return {
    required: required === true ? 'Password is required' : required || false,
    minLength: {
      value: minLength,
      message:
        customMessage || `Password must be at least ${minLength} characters`,
    },
  };
};

export const textValidation = (
  options: {
    required?: boolean | string;
    minLength?: number;
    maxLength?: number;
  } = {}
): RegisterOptions => {
  const { required = false, minLength, maxLength } = options;

  return {
    required: required === true ? 'This field is required' : required || false,
    ...(minLength && {
      minLength: {
        value: minLength,
        message: `Minimum length is ${minLength} characters`,
      },
    }),
    ...(maxLength && {
      maxLength: {
        value: maxLength,
        message: `Maximum length is ${maxLength} characters`,
      },
    }),
  };
};

export const phoneValidation = (
  options: {
    required?: boolean | string;
    pattern?: boolean;
    customMessage?: string;
  } = {}
): RegisterOptions => {
  const { required = false, pattern = true, customMessage } = options;

  return {
    required:
      required === true ? 'Phone number is required' : required || false,
    ...(pattern && {
      pattern: {
        value: /^[0-9+\-\s()]*$/,
        message: customMessage || 'Please enter a valid phone number',
      },
    }),
  };
};
