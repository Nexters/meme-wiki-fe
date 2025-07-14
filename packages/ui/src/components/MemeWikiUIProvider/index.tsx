import { ReactNode } from 'react';
import { ThemeProvider } from '../ThemeProvider';

interface MemeWikiUIProviderProps {
  children: ReactNode;
}

export const MemeWikiUIProvider = ({ children }: MemeWikiUIProviderProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
}; 