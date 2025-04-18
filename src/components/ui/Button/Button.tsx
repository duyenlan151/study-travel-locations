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
 * A customizable button component that can be used for various types of actions like submitting forms, triggering events, etc.
 * This component supports different variants (e.g., primary, secondary) and sizes (e.g., small, medium, large).
 * It also supports custom styling via the `className` prop and can handle different states such as loading or disabled.
 *
 * The button text, color, size, and behavior can be controlled using the available props.
 * The `loading` prop allows showing a loading spinner inside the button while it's in a loading state, preventing further clicks.
 *
 * @component
 * @example
 * // Use the default primary button with the medium size
 * <Button onClick={handleClick}>Click Me</Button>
 *
 * // Use a secondary button with a small size
 * <Button onClick={handleClick} variant="secondary" size="small">Submit</Button>
 *
 * // Use a button with a loading spinner
 * <Button onClick={handleClick} loading={true}>Processing</Button>
 *
 * @param {Object} props - The props for the component.
 * @param {string} [props.variant="primary"] - The variant of the button (e.g., primary, secondary). Default is 'primary'.
 * @param {string} [props.size="medium"] - The size of the button (e.g., small, medium, large). Default is 'medium'.
 * @param {boolean} [props.loading=false] - Whether the button is in a loading state (disables the button and shows a spinner).
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {React.MouseEventHandler<HTMLButtonElement>} props.onClick - The click handler function for the button.
 * @param {string} [props.className] - Optional custom class name for styling.
 * @returns {JSX.Element} - The Button component.
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
