import styled from '@emotion/styled';

type ColorTheme = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'small' | 'medium' | 'large';

export interface ButtonProps {
  variant: ColorTheme;
  size: Size;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Container = styled.button<ButtonProps>`
  display: flex;
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
          padding: 7px 14px;
          font-size: ${theme.typography.button.button3.fontSize};
          line-height: ${theme.typography.button.button3.lineHeight};
          letter-spacing: ${theme.typography.button.button3.letterSpacing};
          font-weight: ${theme.typography.button.button3.fontWeight};
        `;
      case 'medium':
        return `
          height: 44px;
          padding: 11px 18px;
          font-size: ${theme.typography.button.button2.fontSize};
          line-height: ${theme.typography.button.button2.lineHeight};
          letter-spacing: ${theme.typography.button.button2.letterSpacing};
          font-weight: ${theme.typography.button.button2.fontWeight};
        `;
      case 'large':
        return `
          height: 48px;
          padding: 13px 20px;
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

const Icon = styled.span<Pick<ButtonProps, 'size'> & { hasChildren: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ size, hasChildren }) => {
    if (!hasChildren) return null;

    switch (size) {
      case 'small':
        return `
          width: 16px;
          height: 16px;
          margin-right: 6px;
        `;
      case 'medium':
        return `
          width: 20px;
          height: 20px;
          margin-right: 8px;
        `;
      case 'large':
        return `
          width: 24px;
          height: 24px;
          margin-right: 8px;
        `;
    }
  }}
`;

export default {
  Container,
  Icon,
};
