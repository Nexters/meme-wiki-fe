import styled from '@emotion/styled';
import { motion } from 'motion/react';

const Container = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 100px;
`;

const ImageContainer = styled(motion.div)`
  /* position: sticky;
  top: 0; */
  padding: 14px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const ButtonContainer = styled.div`
  position: fixed;
  max-width: ${({ theme }) => theme.breakpoints.mobile};
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 100%;
  padding: 12px 14px;
  background-color: ${({ theme }) => theme.palette.gray['gray-10']};
  border-top: 1px solid ${({ theme }) => theme.palette.gray['gray-9']};
  display: flex;
  gap: 8px;
  z-index: 10;
`;

interface ActionButtonProps {
  isPrimary?: boolean;
}

const ActionButton = styled.button<ActionButtonProps>`
  flex: ${({ isPrimary }) => (isPrimary ? 1 : 2)};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.palette.gray['gray-9'] : theme.palette.main.pink[50]};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 12px;
  ${({ theme }) => theme.typography.title.subhead2};
  color: ${({ theme }) => theme.palette.common.white};

  &:hover {
    background-color: ${({ theme, isPrimary }) =>
      isPrimary ? theme.palette.gray['gray-8'] : theme.palette.main.pink[40]};
  }
`;

const ContentContainer = styled.div`
  padding: 20px 14px;
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
  padding: 6px 10px;
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
  ButtonContainer,
  ActionButton,
  Title,
  HashTags,
  SectionTitle,
  SectionText,
};
