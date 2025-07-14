import { ThemeProvider as BaseThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';
import { theme } from '../../design-system';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>;
};
