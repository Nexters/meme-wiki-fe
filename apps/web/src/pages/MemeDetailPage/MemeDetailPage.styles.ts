import styled from '@emotion/styled';
import { motion } from 'motion/react';

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.palette.gray['gray-10']};
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  position: relative;
`;

const ImageContainer = styled(motion.div)`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.palette.gray['gray-10']};
  display: flex;
  flex-direction: column;
  padding: 14px;
  overflow: visible;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const ShareButton = styled(motion.button)`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  left: 50%;
  transform: translateX(-50%);
  bottom: 26px;
  border: 1px solid ${({ theme }) => theme.palette.common.white};
  border-radius: 10px;
  height: 44px;
  min-width: 44px;
  padding: 0 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.common.white};
  transition: all 0.2s ease;
  z-index: 20;
  white-space: nowrap;
`;

const ShareButtonText = styled(motion.span)`
  ${({ theme }) => theme.typography.body.body1};
  color: ${({ theme }) => theme.palette.common.white};
  display: block;
`;

const ContentContainer = styled.div`
  padding: 0 14px 20px;
  background-color: ${({ theme }) => theme.palette.gray['gray-10']};
  margin-top: -20px;
  position: relative;
  z-index: 20;
  border-radius: 20px 20px 0 0;
`;

const YearBadge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.palette.main['light-blue'][90]};
  border-radius: 45px;
  margin-bottom: 10px;
`;

const YearText = styled.span`
  ${({ theme }) => theme.typography.body.body1};
  color: ${({ theme }) => theme.palette.gray['gray-9']};
  font-family: Galmuri11;
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.title.display3};
  color: ${({ theme }) => theme.palette.common.white};
  margin-bottom: 4px;
`;

const HashTags = styled.div`
  ${({ theme }) => theme.typography.body.body2};
  color: ${({ theme }) => theme.palette.common.white};
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  ${({ theme }) => theme.typography.title.subhead2};
  background-color: ${({ theme }) => theme.palette.gray['gray-8']};
  color: ${({ theme }) => theme.palette.gray['gray-1']};
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  width: max-content;
  padding: 4px 10px;
  border-radius: 6px;
`;

const SectionText = styled.p`
  ${({ theme }) => theme.typography.body['body-long2']};
  color: ${({ theme }) => theme.palette.gray['gray-4']};
  margin-bottom: 30px;
`;

export {
  Container,
  ImageContainer,
  Image,
  ContentContainer,
  ShareButton,
  ShareButtonText,
  YearBadge,
  YearText,
  Title,
  HashTags,
  SectionTitle,
  SectionText,
};
