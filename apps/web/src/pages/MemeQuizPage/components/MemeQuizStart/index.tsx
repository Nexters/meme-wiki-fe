import { MemeQuizStartIcon } from '@/assets/icons';
import {
  Container,
  TextSection,
  Title,
  Subtitle,
  IconSection,
  ButtonWrapper,
  StartButton,
} from './MemeQuizStart.styles';

interface MemeQuizStartProps {
  onNext: () => void;
}

const MemeQuizStart = ({ onNext }: MemeQuizStartProps) => {
  return (
    <Container>
      <TextSection>
        <Title>{`나 어쩌면 \n밈잘알일지도?!`}</Title>
        <Subtitle>과연 나는 밈잘알일까? 밈퀴즈 풀고 알아보자!</Subtitle>
      </TextSection>

      <IconSection>
        <MemeQuizStartIcon />
      </IconSection>

      <ButtonWrapper>
        <StartButton onClick={onNext}>밈퀴즈 시작하기</StartButton>
      </ButtonWrapper>
    </Container>
  );
};

export default MemeQuizStart;
