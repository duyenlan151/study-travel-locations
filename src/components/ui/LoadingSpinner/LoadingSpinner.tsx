'use client';

import React from 'react';

import type { SpinnerColor, SpinnerSize } from './interface';

const sizeClassesMap: Record<SpinnerSize, string> = {
  small: 'w-4 h-4',
  medium: 'w-6 h-6',
  large: 'w-12 h-12',
};

const colorClassesMap: Record<SpinnerColor, string> = {
  primary: 'border-primary',
  secondary: 'border-white-500',
  accent: 'border-teal-500',
  danger: 'border-red-500',
};

/**
 * A loading spinner component that displays a spinning circle to indicate loading state.
 * This component can be customized with different sizes and colors.
 *
 * The spinner's size is controlled by the `size` prop, which adjusts the diameter of the spinner.
 * Available size options:
 * - `small`: A small spinner with a diameter of 16px.
 * - `medium`: A medium spinner with a diameter of 24px (default).
 * - `large`: A large spinner with a diameter of 48px.
 *
 * The color of the spinner is controlled by the `color` prop, which accepts the following predefined values:
 * - `primary`: The primary color (default blue).
 * - `secondary`: The secondary color (usually secondary).
 * - `accent`: A color for accentuating elements.
 * - `danger`: A color for indicating error or danger (usually red).
 *
 * @component
 * @example
 * // Use the default size (medium) with the primary color
 * <LoadingSpinner />
 *
 * // Use a small spinner with the secondary color
 * <LoadingSpinner size="small" color="secondary" />
 *
 * // Use a large spinner with an accent color
 * <LoadingSpinner size="large" color="accent" />
 *
 * @param {Object} props - The props for the component.
 * @param {SpinnerSize} [props.size='medium'] - The size of the spinner. Default is 'medium'.
 * @param {SpinnerColor} [props.color='secondary'] - The color of the spinner. Default is 'secondary'.
 * @returns {JSX.Element} - The LoadingSpinner component.
 */

export const LoadingSpinner: React.FC<{
  size?: SpinnerSize;
  color?: SpinnerColor;
}> = ({ size = 'medium', color = 'secondary' }) => {
  return (
    <div
      className={`animate-spin mx-auto rounded-full border-t-2 border-b-2 ${colorClassesMap[color]} ${sizeClassesMap[size]}`}
    />
  );
};
