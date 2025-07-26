import styled from '@emotion/styled';

const Title = styled.h1`
  ${({ theme }) => theme.typography.title['subhead-long1']};
  color: ${({ theme }) => theme.palette.gray['gray-9']};
`;

export { Title };
