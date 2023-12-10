import React, { FC } from 'react';
import cn from 'clsx';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string | null;
  size?: string;
  type?: 'button' | 'submit' | 'reset';
  label: string;
  onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */

export const Button: FC<ButtonProps> = ({ primary, size, label, type, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button type={type} className={cn('storybook-button', `storybook-button--${size}`, mode)} {...props}>
      {label}
    </button>
  );
};
