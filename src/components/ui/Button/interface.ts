import type { ButtonHTMLAttributes } from 'react';
import type { IconType } from 'react-icons/lib';

// Define ButtonVariant type for button styling
export type ButtonVariant = 'primary' | 'outline' | 'danger';

// Define ButtonSize type for size variants
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconType;
  isLoading?: boolean;
}

// Map button variants to their corresponding classes
export const variantClassesMap: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white border-primary',
  outline: 'bg-white text-black border border-gray-300 hover:text-primary',
  danger: 'bg-red-500 text-white border-red-500',
};

// Map button sizes to their corresponding classes
export const sizeClassesMap: Record<ButtonSize, string> = {
  small: 'text-sm py-1 px-3',
  medium: 'text-md py-2 px-4',
  large: 'text-lg py-3 px-6',
};
