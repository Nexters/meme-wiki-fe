import styled from '@emotion/styled';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  disabled?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  transition:
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({ size, theme }) => {
    switch (size) {
      case 'small':
        return `
          height: 36px;
          padding: 8px 16px;
          font-size: ${theme.typography.button.button3.fontSize};
          line-height: ${theme.typography.button.button3.lineHeight};
          letter-spacing: ${theme.typography.button.button3.letterSpacing};
          font-weight: ${theme.typography.button.button3.fontWeight};
        `;
      case 'medium':
        return `
          height: 44px;
          padding: 10px 20px;
          font-size: ${theme.typography.button.button2.fontSize};
          line-height: ${theme.typography.button.button2.lineHeight};
          letter-spacing: ${theme.typography.button.button2.letterSpacing};
          font-weight: ${theme.typography.button.button2.fontWeight};
        `;
      case 'large':
        return `
          height: 52px;
          padding: 12px 24px;
          font-size: ${theme.typography.button.button1.fontSize};
          line-height: ${theme.typography.button.button1.lineHeight};
          letter-spacing: ${theme.typography.button.button1.letterSpacing};
          font-weight: ${theme.typography.button.button1.fontWeight};
        `;
    }
  }}

  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return `
          color: ${theme.palette.white};
          border-color: ${theme.palette.primary};
          background-color: ${theme.palette.primary};

          &:hover:not(:disabled) {
            border-color: ${theme.palette.primaryDark};
            background-color: ${theme.palette.primaryDark};
          }

          &:active:not(:disabled) {
            border-color: ${theme.palette.primaryDark};
            background-color: ${theme.palette.primaryDark};
          }
        `;
      case 'secondary':
        return `
          color: ${theme.palette.gray[900]};
          border: none;
          background-color: ${theme.palette.gray[100]};

          &:hover:not(:disabled) {
            background-color: ${theme.palette.gray[200]};
          }

          &:active:not(:disabled) {
            background-color: ${theme.palette.gray[300]};
          }
        `;
      case 'ghost':
        return `
          color: ${theme.palette.gray[900]};
          border-color: ${theme.palette.gray[900]};
          background-color: ${theme.palette.white};

          &:hover:not(:disabled) {
            border-color: ${theme.palette.gray[700]};
            color: ${theme.palette.gray[700]};
          }

          &:active:not(:disabled) {
            color: ${theme.palette.gray[600]};
            border-color: ${theme.palette.gray[600]};
          }
        `;
      case 'danger':
        return `
          color: ${theme.palette.white};
          border: none;
          background-color: ${theme.palette.danger};

          &:hover:not(:disabled) {
            background-color: ${theme.palette.dangerDark};
          }

          &:active:not(:disabled) {
            background-color: ${theme.palette.dangerDark};
          }
        `;
    }
  }}
`;
