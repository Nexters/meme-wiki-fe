import styled from '@emotion/styled';
import { motion } from 'motion/react';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 0 20px;
`;

const ModalContainer = styled(motion.div)`
  width: calc(100% - 40px);
  max-width: calc(${({ theme }) => theme.breakpoints.mobile} - 40px);
  min-height: 280px;
  background: ${({ theme }) => theme.palette.common.white};
  border-radius: 14px;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled(motion.div)`
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResultText = styled(motion.p)`
  ${({ theme }) => theme.typography.title.display4};
  color: ${({ theme }) => theme.palette.common.black};
  text-align: center;
  margin-bottom: 8px;
`;

const SubText = styled(motion.p)`
  ${({ theme }) => theme.typography.body.body1};
  color: ${({ theme }) => theme.palette.gray['gray-6']};
  text-align: center;
  margin-bottom: 24px;
`;

const CorrectAnswerText = styled(motion.p)`
  ${({ theme }) => theme.typography.title.subhead1};
  color: ${({ theme }) => theme.palette.main.pink[60]};
  text-align: center;
  margin-bottom: 24px;
`;

const NextButton = styled(motion.button)`
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.palette.main.pink[50]},
    ${({ theme }) => theme.palette.main.pink[80]}
  );
  ${({ theme }) => theme.typography.title.subhead1};
  color: ${({ theme }) => theme.palette.common.white};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export {
  Overlay,
  ModalContainer,
  IconWrapper,
  ResultText,
  SubText,
  CorrectAnswerText,
  NextButton,
};
