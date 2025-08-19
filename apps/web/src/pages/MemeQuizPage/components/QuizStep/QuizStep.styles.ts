import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.common.black};
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Content = styled.div`
  padding: 0 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 34px;
`;

const ImageContainer = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.gray['gray-9']};
  margin-bottom: 24px;
`;

const QuizImage = styled.img`
  width: 100%;
`;

const QuestionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;

const QuestionNumber = styled.span`
  ${({ theme }) => theme.typography.title.subhead1};
  color: ${({ theme }) => theme.palette.main.pink[60]};
`;

const QuestionText = styled.h1`
  ${({ theme }) => theme.typography.title.display3};
  color: ${({ theme }) => theme.palette.gray['gray-1']};
  white-space: pre-line;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  margin-bottom: 108px;
`;

const Button = styled.button<{ isSelected?: boolean }>`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 18px;
  border-radius: 8px;
  border: 1px solid
    ${({ theme, isSelected }) =>
      isSelected ? theme.palette.main.pink[60] : theme.palette.gray['gray-8']};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.palette.main.pink[95] : theme.palette.gray['gray-9']};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

const ButtonIcon = styled.div<{ isSelected?: boolean }>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.palette.main.pink[60] : theme.palette.gray['gray-6']};
`;

const ButtonText = styled.span<{ isSelected?: boolean }>`
  ${({ theme, isSelected }) =>
    isSelected ? theme.typography.title.subhead1 : theme.typography.body.body2};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.palette.gray['gray-10'] : theme.palette.gray['gray-2']};
`;

const BottomContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.palette.common.black};
  max-width: ${({ theme }) => theme.breakpoints.mobile};
  margin: 0 auto;
  padding: 0 20px 40px;
  display: flex;
  justify-content: center;
`;

const BottomButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 10px;
  ${({ theme }) => theme.typography.title.subhead1};
  cursor: pointer;

  ${({ theme, disabled }) =>
    disabled
      ? `
        background-color: ${theme.palette.gray['gray-8']};
        color: ${theme.palette.gray['gray-6']};
      `
      : `
        background: linear-gradient(180deg, ${theme.palette.main.pink[50]}, ${theme.palette.main.pink[80]});
        color: ${theme.palette.common.white};
      `}
`;

const ImageSkeleton = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.palette.gray['gray-8']} 25%,
    ${({ theme }) => theme.palette.gray['gray-7']} 37%,
    ${({ theme }) => theme.palette.gray['gray-8']} 63%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

const AnswerSkeleton = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.palette.gray['gray-8']} 25%,
    ${({ theme }) => theme.palette.gray['gray-7']} 37%,
    ${({ theme }) => theme.palette.gray['gray-8']} 63%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

export {
  Container,
  Content,
  QuestionContainer,
  QuestionHeader,
  QuestionNumber,
  QuestionText,
  ImageContainer,
  QuizImage,
  AnswerContainer,
  Button,
  ButtonIcon,
  ButtonText,
  BottomContainer,
  BottomButton,
  ImageSkeleton,
  AnswerSkeleton,
};
