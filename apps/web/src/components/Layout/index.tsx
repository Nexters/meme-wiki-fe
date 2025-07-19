import * as S from './Layout.styles';

interface LayoutProps {
  children: React.ReactNode;
  layoutStyle?: React.CSSProperties;
}

const Layout = ({ children, layoutStyle }: LayoutProps) => {
  return <S.Layout style={layoutStyle}>{children}</S.Layout>;
};

export default Layout;
