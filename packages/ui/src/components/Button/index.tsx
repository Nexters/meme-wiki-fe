import { ButtonHTMLAttributes } from 'react';
import Styled, { ButtonProps } from './Button.styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;

const Button = ({ children, variant = 'primary', size = 'medium', icon, ...rest }: Props) => {
  const hasChildren = !!children;

  return (
    <Styled.Container variant={variant} size={size} {...rest}>
      {icon && (
        <Styled.Icon size={size} hasChildren={hasChildren}>
          {icon}
        </Styled.Icon>
      )}
      {children}
    </Styled.Container>
  );
};

export default Button;
