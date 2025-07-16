import ThemeProvider from '../ThemeProvider';

interface MemeWikiUIProviderProps {
  children: React.ReactNode;
}

const MemeWikiUIProvider = ({ children }: MemeWikiUIProviderProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default MemeWikiUIProvider;
