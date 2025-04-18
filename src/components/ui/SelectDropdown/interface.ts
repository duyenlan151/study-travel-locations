import type { HTMLAttributes, InputHTMLAttributes } from 'react';

export interface SelectDropdownProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label?: string;
  options: { label: string; value: string }[];
  value: string | null;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string | null) => void;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  classNameSelect?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  searchInputProps?: Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'placeholder'
  >;
}
