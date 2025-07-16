import '@emotion/react';
import { palette, typography, breakpoints } from './design-system';

declare module '@emotion/react' {
  export interface Theme {
    palette: typeof palette;
    typography: typeof typography;
    breakpoints: typeof breakpoints;
  }
}
