// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen, fireEvent } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { jest } from '@jest/globals';
import type { IconBaseProps } from 'react-icons/lib';

import { Button } from './Button';
import type { ButtonProps } from './interface';

jest.mock('../LoadingSpinner', () => ({
  LoadingSpinner: ({ size, color }: { size: string; color: string }) => (
    <div data-testid="loading-spinner" data-size={size} data-color={color} />
  ),
}));

// Mock the interface maps
jest.mock('./interface', () => ({
  variantClassesMap: {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-500 text-white',
    outline: 'border border-blue-500 text-blue-500',
  },
  sizeClassesMap: {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  },
}));

describe('Button Component', () => {
  const defaultProps: ButtonProps = {
    label: 'Click Me',
    onClick: jest.fn(),
  };

  it('should render button with default props', () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-blue-500 text-white'); // primary variant
    expect(button).toHaveClass('py-2 px-4 text-base'); // medium size
    expect(button).toHaveClass(
      'rounded-lg hover:opacity-80 transition w-full text-center'
    );
    expect(button).not.toBeDisabled();
  });

  it('should display loading spinner when isLoading is true', () => {
    render(<Button {...defaultProps} isLoading />);
    const spinner = screen.getByTestId('loading-spinner');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveAttribute('data-size', 'medium');
    expect(spinner).toHaveAttribute('data-color', 'secondary');
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should render icon when provided', () => {
    const MockIcon: React.FC<IconBaseProps> = ({ size, className, title }) => (
      <svg
        data-testid="mock-icon"
        width={typeof size === 'string' ? parseInt(size, 10) : size}
        className={className}
      >
        {title && <title>{title}</title>}
      </svg>
    );
    render(<Button {...defaultProps} icon={MockIcon} />);
    const icon = screen.getByTestId('mock-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('width', '20');
    expect(icon).toHaveClass(
      'absolute left-4 top-1/2 transform -translate-y-1/2'
    );
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('should disable button when disabled prop is true', () => {
    render(<Button {...defaultProps} disabled />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-80');
    expect(button).toHaveClass('disabled:cursor-not-allowed');
  });

  it('should call onClick handler when clicked', () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('should apply custom className', () => {
    render(<Button {...defaultProps} className="custom-class" />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('custom-class');
  });

  it('should set spinner size to large when button size is large', () => {
    render(<Button {...defaultProps} size="large" isLoading />);
    const spinner = screen.getByTestId('loading-spinner');
    expect(spinner).toHaveAttribute('data-size', 'large');
  });

  it('should set spinner color to primary when button variant is outline', () => {
    render(<Button {...defaultProps} variant="outline" isLoading />);
    const spinner = screen.getByTestId('loading-spinner');
    expect(spinner).toHaveAttribute('data-color', 'primary');
  });
});
