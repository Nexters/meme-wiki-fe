import styled from '@emotion/styled';
import { mq } from '@meme_wiki/ui';

export const Container = styled.div`
  padding: 16px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.gray['gray-1']};

  ${mq.tablet} {
    padding: 24px;
  }

  ${mq.desktop} {
    padding: 32px;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 32px;

  ${mq.tablet} {
    margin-bottom: 48px;
  }

  ${mq.desktop} {
    margin-bottom: 64px;
  }
`;

export const Section = styled.section`
  margin-bottom: 24px;

  ${mq.tablet} {
    margin-bottom: 32px;
  }

  ${mq.desktop} {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.title['subhead-long1']};
  color: ${({ theme }) => theme.palette.gray['gray-9']};
  margin-bottom: 16px;

  ${mq.tablet} {
    ${({ theme }) => theme.typography.title['subhead-long1']};
    margin-bottom: 24px;
  }

  ${mq.desktop} {
    ${({ theme }) => theme.typography.title['subhead-long1']};
  }
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography.body['body-long1']};
  color: ${({ theme }) => theme.palette.gray['gray-6']};
  margin-bottom: 24px;

  ${mq.tablet} {
    ${({ theme }) => theme.typography.body['body-long1']};
    max-width: 80%;
    margin: 0 auto 32px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 auto;
  max-width: 280px;

  ${mq.tablet} {
    flex-direction: row;
    gap: 16px;
    max-width: none;
    justify-content: center;
  }
`;

export const Button = styled.a`
  ${({ theme }) => theme.typography.title['subhead-long1']};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.palette.main.blue[50]};
  color: ${({ theme }) => theme.palette.common.white};
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.palette.main.blue[40]};
  }

  ${mq.tablet} {
    ${({ theme }) => theme.typography.title['subhead-long1']};
    padding: 14px 28px;
  }

  &.secondary {
    background-color: ${({ theme }) => theme.palette.common.white};
    color: ${({ theme }) => theme.palette.common.black};

    &:hover {
      background-color: ${({ theme }) => theme.palette.gray['gray-2']};
    }
  }
`;
