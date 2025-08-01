import styled from '@emotion/styled';
import { breakpoints } from '@meme_wiki/ui';

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  max-width: ${breakpoints.mobile};
  margin: 0 auto;
`;

export { Layout };
