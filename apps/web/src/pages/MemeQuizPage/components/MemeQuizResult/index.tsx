import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { LinkCopiedIcon } from '@/assets/icons';
import MemeQuizResultBackground from '@/assets/images/MemeQuizResultBackground.png';
import {
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
} from './MemeQuizResult.styles';

interface MemeQuizResultPageProps {
  rightCount: number;
}

const MemeQuizResult = ({ rightCount }: MemeQuizResultPageProps) => {
  const [showToast, setShowToast] = useState(false);

  return (
    <Container>
      <ResultCard>
        <BackgroundImage
          src={MemeQuizResultBackground}
          alt="밈 퀴즈 결과 배경"
        />
        <ContentWrapper>
          <Badge>
            <BadgeText>밈퀴즈 종료!</BadgeText>
          </Badge>
          <ResultTextContainer>
            <ResultTitle>총 {rightCount}개를 맞췄어요!</ResultTitle>
            <ResultSubtitle>미미키와 함께 밈잘알이 되어보아요.</ResultSubtitle>
          </ResultTextContainer>
        </ContentWrapper>
      </ResultCard>

      <ButtonContainer>
        <ToastContainer>
          <AnimatePresence>
            {showToast && (
              <Toast
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                onAnimationComplete={() => setShowToast(false)}
              >
                <LinkCopiedIcon width={20} height={20} />
                <ToastText>링크 복사가 완료되었어요</ToastText>
              </Toast>
            )}
          </AnimatePresence>
          <ShareButton
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setShowToast(true);
            }}
          >
            링크 복사하고 공유하기
          </ShareButton>
        </ToastContainer>
        <MoreButton
          onClick={() => {
            alert('더 많은 밈 보러가기');
          }}
        >
          더 많은 밈 보러가기
        </MoreButton>
      </ButtonContainer>
    </Container>
  );
};

export default MemeQuizResult;
