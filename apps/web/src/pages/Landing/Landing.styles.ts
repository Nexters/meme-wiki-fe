import styled from '@emotion/styled';

const Title = styled.h1`
  ${({ theme }) => theme.typography.heading.h3};
  color: ${({ theme }) => theme.palette.gray[900]};
`;

export { Title };
