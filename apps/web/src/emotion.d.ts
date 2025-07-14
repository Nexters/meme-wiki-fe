import '@emotion/react';
import { ThemeType } from '@meme-wiki/ui';

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
