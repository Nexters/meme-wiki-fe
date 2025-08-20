import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.breakpoints.mobile};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const IconWrapper = styled.div`
  margin-top: 220px;
  width: 128px;
  height: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ContentWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.title.display1};
  color: ${({ theme }) => theme.palette.common.white};
  margin-bottom: 8px;
`;

const Description = styled.p`
  ${({ theme }) => theme.typography.body.body1};
  color: ${({ theme }) => theme.palette.gray['gray-5']};
  white-space: pre-line;
  text-align: center;
`;

const ErrorText = styled.p`
  ${({ theme }) => theme.typography.body.caption};
  color: ${({ theme }) => theme.palette.gray['gray-5']};
  margin-top: 8px;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 40px;
  left: 20px;
  right: 20px;
  padding: 0px 20px;
  max-width: ${({ theme }) => theme.breakpoints.mobile};
  margin: 0 auto;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 52px;
  background-color: ${({ theme }) => theme.palette.main.pink[50]};
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.palette.common.white};
  ${({ theme }) => theme.typography.title.subhead1};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.main.pink[40]};
  }

  &:active {
    background-color: ${({ theme }) => theme.palette.main.pink[40]};
  }
`;

export {
  Container,
  IconWrapper,
  ErrorImage,
  ContentWrapper,
  Title,
  Description,
  ErrorText,
  ButtonWrapper,
  StyledButton,
};
