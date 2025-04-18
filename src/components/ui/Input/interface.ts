import type { InputHTMLAttributes } from 'react';
import type {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

export interface InputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  id: Path<T>;
  label?: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  register?: UseFormRegister<T>;
  required?: boolean;
  validation?: RegisterOptions<T>;
  errors: FieldErrors<T>;
}
