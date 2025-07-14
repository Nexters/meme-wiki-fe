import { css } from '@emotion/react';
import { palette, typography } from '../../design-system';

export const buttonSize = {
  sm: css`
    padding: 0.3rem 0.8rem;
    border-radius: 0.625rem;
    ${typography.body}
  `,
  md: css`
    padding: 0.5rem 1rem;
    border-radius: 0.8rem;
    ${typography.body}
  `,
  lg: css`
    padding: 0.7rem 1.2rem;
    border-radius: 1rem;
    ${typography.body}
  `,
};

export const buttonVariants = {
  primary: css`
    color: ${palette.white};
    background-color: ${palette.primary[500]};
    outline: none;
    border: none;

    &:disabled {
      background-color: ${palette.gray[300]};
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${palette.primary[600]};
    }
  `,
  secondary: css`
    color: ${palette.gray[900]};
    background-color: ${palette.white};
    border: 1px solid ${palette.gray[300]};

    &:disabled {
      background-color: ${palette.white};
      color: ${palette.gray[300]};
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${palette.gray[100]};
    }
  `,
};
