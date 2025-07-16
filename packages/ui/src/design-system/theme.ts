import { palette } from './palette';
import { typography } from './typography';
import { breakpoints } from './breakpoints';

export const theme = {
  palette,
  typography,
  breakpoints,
} as const;

export type ThemeType = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
