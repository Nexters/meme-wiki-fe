import React from 'react';
import { css } from '@emotion/react';
import { buttonSize, buttonVariants } from './Button.styles';

type ButtonProps = {
  size?: keyof typeof buttonSize;
  variants?: keyof typeof buttonVariants;
  visible?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  variants = 'primary',
  visible = true,
  ...args
}) => {
  if (!visible) return null;
  return (
    <button
      css={[
        css`
          transition: all 0.15s ease-in-out;
          cursor: pointer;
        `,
        buttonSize[size],
        buttonVariants[variants],
      ]}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
