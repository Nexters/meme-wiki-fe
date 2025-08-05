import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.gray['gray-9']};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px;
  text-align: center;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.palette.common.white};
  ${({ theme }) => theme.typography.title.display1};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.palette.gray['gray-2']};
  ${({ theme }) => theme.typography.title['subhead2']};
`;

const StoreButton = styled.button`
  margin-top: 16px;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.common.white};
  color: ${({ theme }) => theme.palette.gray['gray-9']};
  ${({ theme }) => theme.typography.title.subhead1};
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.gray['gray-2']};
  }
`;

export { Container, Content, Title, Description, StoreButton };
