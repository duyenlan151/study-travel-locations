export type SpinnerSize = 'small' | 'medium' | 'large';
export type SpinnerColor = 'primary' | 'secondary' | 'accent' | 'danger';

export interface LoadingSpinnerProps {
  size?: SpinnerSize;
  color?: string;
}
