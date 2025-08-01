import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.palette.gray['gray-10']};
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImageContainer = styled.div<{ scrollProgress: number }>`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  height: ${({ scrollProgress }) => Math.max(200, 400 - scrollProgress)}px;
  padding: 14px;
  transition: height 0.1s linear;
  background-color: ${({ theme }) => theme.palette.gray['gray-10']};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const ShareButton = styled.button<{ scrollProgress: number }>`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  left: 50%;
  transform: translateX(-50%);
  bottom: 26px;
  border: 1px solid ${({ theme }) => theme.palette.common.white};
  padding: ${({ scrollProgress }) =>
    scrollProgress > 50 ? '10px' : '10px 16px'};
  border-radius: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.common.white};
  transition: all 0.1s linear;
`;

const ShareButtonText = styled.span<{ scrollProgress: number }>`
  ${({ theme }) => theme.typography.body.body1};
  color: ${({ theme }) => theme.palette.common.white};
  opacity: ${({ scrollProgress }) => Math.max(0, 1 - scrollProgress / 50)};
  max-width: ${({ scrollProgress }) => (scrollProgress > 50 ? '0' : '100px')};
  overflow: hidden;
  white-space: nowrap;
  transition: all 0.1s linear;
`;

const ContentContainer = styled.div`
  padding: 20px 14px;
  background-color: ${({ theme }) => theme.palette.gray['gray-10']};
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
