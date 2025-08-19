import styled from '@emotion/styled';
import { motion } from 'motion/react';

const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.common.black};
`;

const ResultCard = styled(motion.div)`
  position: relative;
  width: calc(100% - 40px);
  max-width: ${({ theme }) => theme.breakpoints.mobile};
  height: 481px;
  margin-top: 70px;
  border-radius: 14px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.palette.main.pink[50]},
    ${({ theme }) => theme.palette.main['red-orange'][90]}
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Badge = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  background-color: ${({ theme }) => theme.palette.common.black};
  border-radius: 50px;
  margin-top: 150px;
`;

const BadgeText = styled.span`
  ${({ theme }) => theme.typography.title.subhead2};
  color: ${({ theme }) => theme.palette.main.pink[80]};
`;

const ResultTextContainer = styled.div`
  width: 100%;
  padding: 0 24px;
  margin-top: 14px;
  text-align: center;
`;

const ResultTitle = styled(motion.h1)`
  ${({ theme }) => theme.typography.title.display2};
  color: ${({ theme }) => theme.palette.common.black};
  margin-bottom: 6px;
`;

const ResultSubtitle = styled.p`
  ${({ theme }) => theme.typography.title.subhead1};
  color: ${({ theme }) => theme.palette.common.black};
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.mobile};
  padding: 0 20px 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ShareButton = styled(motion.button)`
  width: 100%;
  height: 52px;
  background-color: ${({ theme }) => theme.palette.gray['gray-10']};
  border: 1px solid ${({ theme }) => theme.palette.gray['gray-8']};
  border-radius: 10px;
  ${({ theme }) => theme.typography.title.subhead1};
  color: ${({ theme }) => theme.palette.common.white};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.gray['gray-8']};
  }
`;

const MoreButton = styled(motion.button)`
  width: 100%;
  height: 52px;
  background-color: ${({ theme }) => theme.palette.main.pink[50]};
  border: none;
  border-radius: 10px;
  ${({ theme }) => theme.typography.title.subhead1};
  color: ${({ theme }) => theme.palette.common.white};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.main.pink[40]};
  }
`;

const ToastContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Toast = styled(motion.div)`
  position: absolute;
  bottom: calc(100% + 14px);
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 10px 12px;
  background-color: ${({ theme }) => theme.palette.gray['gray-1']};
  border-radius: 50px;
  white-space: nowrap;
`;

const ToastText = styled.span`
  ${({ theme }) => theme.typography.title.subhead2};
  color: ${({ theme }) => theme.palette.gray['gray-8']};
`;

export {
  Container,
  ResultCard,
  BackgroundImage,
  ContentWrapper,
  Badge,
  BadgeText,
  ResultTextContainer,
  ResultTitle,
  ResultSubtitle,
  ButtonContainer,
  ShareButton,
  MoreButton,
  ToastContainer,
  Toast,
  ToastText,
};
