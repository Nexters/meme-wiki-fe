import '@emotion/react';
import { ThemeType } from './design-system/theme';

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
