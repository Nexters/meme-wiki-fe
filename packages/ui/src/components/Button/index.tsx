import { ButtonHTMLAttributes } from 'react';
import { StyledButton, ButtonProps } from './Button.styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  ...rest
}: Props) => {
  return (
    <StyledButton variant={variant} size={size} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
