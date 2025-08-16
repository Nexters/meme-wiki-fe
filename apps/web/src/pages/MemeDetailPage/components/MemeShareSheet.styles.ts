import styled from '@emotion/styled';
import { motion } from 'motion/react';

const Container = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.palette.common.white};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  z-index: 1000;
  max-width: ${({ theme }) => theme.breakpoints.mobile};
  margin: 0 auto;
`;

const Dimmed = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Content = styled.div`
  padding: 30px 0;
`;

const Title = styled.h2`
  ${({ theme }) => theme.typography.title.headline2};
  text-align: center;
  margin-bottom: 24px;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Thumbnail = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 8px;
  object-fit: cover;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 24px 0;
  border-top: 1px solid ${({ theme }) => theme.palette.gray['gray-2']};
`;

const IconButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

interface IconCircleProps {
  isKakao?: boolean;
}

const IconCircle = styled.div<IconCircleProps>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isKakao }) =>
    isKakao ? '#FFE812' : theme.palette.gray['gray-2']};
  border: ${({ theme, isKakao }) =>
    isKakao ? 'none' : `1px solid ${theme.palette.gray['gray-2']}`};
`;

const IconText = styled.span`
  ${({ theme }) => theme.typography.body.body1};
  color: ${({ theme }) => theme.palette.common.black};
`;

const Toast = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: ${({ theme }) => theme.palette.common.white};
  padding: 10px 20px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  z-index: 1002;
  white-space: nowrap;
  ${({ theme }) => theme.typography.body.body1};
  width: 182px;
  height: 40px;
`;

export {
  Container,
  Dimmed,
  Content,
  Title,
  ThumbnailContainer,
  Thumbnail,
  IconContainer,
  IconButton,
  IconCircle,
  IconText,
  Toast,
};
