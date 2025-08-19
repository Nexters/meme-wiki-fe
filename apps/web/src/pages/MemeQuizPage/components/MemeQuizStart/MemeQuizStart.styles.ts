import styled from '@emotion/styled';
import { motion } from 'motion/react';

const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.palette.main.pink[50]},
    ${({ theme }) => theme.palette.main['red-orange'][90]}
  );
`;

const TextSection = styled(motion.div)`
  margin-top: 158px;
  text-align: center;
  width: 100%;
  padding: 0 24px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.title.display5};
  color: ${({ theme }) => theme.palette.common.white};
  white-space: pre-line;
  margin-bottom: 14px;
`;

const Subtitle = styled.p`
  ${({ theme }) => theme.typography.title.headline2};
  color: ${({ theme }) => theme.palette.common.white};
`;

const IconSection = styled(motion.div)`
  margin-top: 61px;
  width: 100%;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 20px 40px;
  max-width: ${({ theme }) => theme.breakpoints.mobile};
  margin: 0 auto;
`;

const StartButton = styled.button`
  width: 100%;
  height: 52px;
  background-color: ${({ theme }) => theme.palette.gray['gray-10']};
  border: 1px solid ${({ theme }) => theme.palette.gray['gray-8']};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ theme }) => theme.typography.title.subhead1};
  color: ${({ theme }) => theme.palette.common.white};

  &:hover {
    background-color: ${({ theme }) => theme.palette.gray['gray-8']};
  }

  &:active {
    background-color: ${({ theme }) => theme.palette.gray['gray-8']};
  }
`;

export {
  Container,
  TextSection,
  Title,
  Subtitle,
  IconSection,
  ButtonWrapper,
  StartButton,
};
