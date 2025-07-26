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
          font-size: ${theme.typography.title['subhead-long1'].fontSize};
          line-height: ${theme.typography.title['subhead-long1'].lineHeight};
          letter-spacing: ${theme.typography.title['subhead-long1'].letterSpacing};
          font-weight: ${theme.typography.title['subhead-long1'].fontWeight};
        `;
      case 'medium':
        return `
          height: 44px;
          padding: 10px 20px;
          font-size: ${theme.typography.title['subhead-long1'].fontSize};
          line-height: ${theme.typography.title['subhead-long1'].lineHeight};
          letter-spacing: ${theme.typography.title['subhead-long1'].letterSpacing};
          font-weight: ${theme.typography.title['subhead-long1'].fontWeight};
        `;
      case 'large':
        return `
          height: 52px;
          padding: 12px 24px;
          font-size: ${theme.typography.title['subhead-long1'].fontSize};
          line-height: ${theme.typography.title['subhead-long1'].lineHeight};
          letter-spacing: ${theme.typography.title['subhead-long1'].letterSpacing};
          font-weight: ${theme.typography.title['subhead-long1'].fontWeight};
        `;
    }
  }}

  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return `
          color: ${theme.palette.common.white};
          border-color: ${theme.palette.main.blue[50]};
          background-color: ${theme.palette.main.blue[50]};

          &:hover:not(:disabled) {
            border-color: ${theme.palette.main.blue[40]};
            background-color: ${theme.palette.main.blue[40]};
          }

          &:active:not(:disabled) {
            border-color: ${theme.palette.main.blue[30]};
            background-color: ${theme.palette.main.blue[30]};
          }
        `;
      case 'secondary':
        return `
          color: ${theme.palette.common.black};
          border: none;
          background-color: ${theme.palette.common.white};

          &:hover:not(:disabled) {
            background-color: ${theme.palette.gray['gray-2']};
          }

          &:active:not(:disabled) {
            background-color: ${theme.palette.gray['gray-3']};
          }
        `;
      case 'ghost':
        return `
          color: ${theme.palette.common.black};
          border-color: ${theme.palette.gray['gray-9']};
          background-color: ${theme.palette.common.white};

          &:hover:not(:disabled) {
            border-color: ${theme.palette.gray['gray-7']};
            color: ${theme.palette.gray['gray-7']};
          }

          &:active:not(:disabled) {
            color: ${theme.palette.gray['gray-6']};
            border-color: ${theme.palette.gray['gray-6']};
          }
        `;
      case 'danger':
        return `
          color: ${theme.palette.common.white};
          border: none;
          background-color: ${theme.palette.main.red[50]};

          &:hover:not(:disabled) {
            background-color: ${theme.palette.main.red[40]};
          }

          &:active:not(:disabled) {
            background-color: ${theme.palette.main.red[30]};
          }
        `;
    }
  }}
`;
