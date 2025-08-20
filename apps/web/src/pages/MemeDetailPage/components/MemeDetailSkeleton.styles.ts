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

const SkeletonBase = styled.div`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.palette.gray['gray-9']} 25%,
    ${({ theme }) => theme.palette.gray['gray-8']} 37%,
    ${({ theme }) => theme.palette.gray['gray-9']} 63%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
`;

export const ImageContainer = styled(SkeletonBase)`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TitleSkeleton = styled(SkeletonBase)`
  width: 60%;
  height: 32px;
  border-radius: 4px;
`;

export const HashTagsSkeleton = styled(SkeletonBase)`
  width: 80%;
  height: 24px;
  border-radius: 4px;
`;

export const SectionTitleSkeleton = styled(SkeletonBase)`
  width: 40%;
  height: 24px;
  border-radius: 4px;
  margin-top: 8px;
`;

export const SectionTextSkeleton = styled(SkeletonBase)`
  width: 100%;
  height: 80px;
  border-radius: 4px;
`;

export const ButtonContainer = styled.div`
  position: fixed;
  max-width: ${({ theme }) => theme.breakpoints.mobile};
  margin: 0 auto;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  display: flex;
  gap: 12px;
  background-color: ${({ theme }) => theme.palette.gray['gray-10']};
`;

export const ButtonSkeleton = styled(SkeletonBase)`
  flex: 1;
  height: 48px;
  border-radius: 8px;
`;
