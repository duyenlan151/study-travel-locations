'use client';

import { LoadingSpinner } from '../LoadingSpinner';

import type { ButtonProps } from './interface';
import { sizeClassesMap, variantClassesMap } from './interface';

/**
 * Helper function to determine spinner size based on button size
 */
const getSpinnerSize = (size: ButtonProps['size']) => {
  if (size === 'large') return 'large';
  if (size === 'small') return 'small';
  return 'medium';
};

/**
 * Helper function to determine spinner color based on button variant
 */
const getSpinnerColor = (variant: ButtonProps['variant']) => {
  if (variant === 'primary') return 'secondary';
  if (variant === 'outline') return 'primary';
  return 'accent';
};

/**
 * A versatile button component supporting different styles, sizes, and loading states.
 *
 * @param variant - Controls the button's style (primary, outline, danger)
 * @param size - Adjusts the button's size (small, medium, large)
 * @param isLoading - Displays a loading spinner when true
 * @param icon - Optionally includes an icon
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  icon: Icon,
  isLoading = false,
  ...props
}) => {
  const { className = '' } = props;
  return (
    <button
      type="button"
      disabled={disabled || isLoading}
      onClick={onClick}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className={`
        relative
        rounded-lg
        hover:opacity-80
        transition
        disabled:opacity-80
        disabled:cursor-not-allowed
        w-full
        text-center
        ${variantClassesMap[variant]}
        ${sizeClassesMap[size]}
        ${className}
      `}
    >
      {isLoading ? (
        <LoadingSpinner
          size={getSpinnerSize(size)}
          color={getSpinnerColor(variant)}
        />
      ) : (
        <>
          {Icon && (
            <Icon
              size={20}
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
            />
          )}
          {label}
        </>
      )}
    </button>
  );
};
