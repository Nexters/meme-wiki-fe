import { breakpoints, palette, typography } from './index';

export const theme = {
  palette,
  typography,
  breakpoints,
} as const;

export type ThemeType = typeof theme;
