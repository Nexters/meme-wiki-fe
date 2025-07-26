import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  width: 100%;
  position: relative;
`;

const NavigationContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const BackButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.palette.gray['gray-3']};
  background-color: ${({ theme }) => theme.palette.common.white};
  color: ${({ theme }) => theme.palette.common.black};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.gray['gray-1']};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const QuizImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.title['subhead-long1']};
  color: ${({ theme }) => theme.palette.gray['gray-9']};
  text-align: center;
`;

const Summary = styled.p`
  ${({ theme }) => theme.typography.body['body-long1']};
  color: ${({ theme }) => theme.palette.gray['gray-7']};
  text-align: center;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 500px;
`;

const Button = styled.button<{ isSelected?: boolean }>`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.palette.gray['gray-3']};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.palette.main.blue[50] : theme.palette.common.white};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.palette.common.white : theme.palette.common.black};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme, isSelected }) =>
      isSelected ? theme.palette.main.blue[40] : theme.palette.gray['gray-1']};
  }
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
`;

export {
  Container,
  NavigationContainer,
  BackButton,
  QuizImage,
  Title,
  Summary,
  QuestionContainer,
  Button,
  ResultContainer,
};
