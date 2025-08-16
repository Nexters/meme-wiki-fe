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
} from './MemeQuizResult.styles';

interface MemeQuizResultPageProps {
  rightCount: number;
}

const MemeQuizResult = ({ rightCount }: MemeQuizResultPageProps) => {
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
        <ShareButton onClick={() => {}}>링크 복사하고 공유하기</ShareButton>
        <MoreButton onClick={() => {}}>더 많은 밈 보러가기</MoreButton>
      </ButtonContainer>
    </Container>
  );
};

export default MemeQuizResult;
