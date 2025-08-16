import { QuizCorrectIcon, QuizWrongIcon } from '@/assets/icons';
import {
  Overlay,
  ModalContainer,
  IconWrapper,
  ResultText,
  SubText,
  CorrectAnswerText,
  NextButton,
} from './QuizResultModal.styles';

interface QuizResultModalProps {
  isCorrect: boolean;
  correctAnswer: string;
  onNext: () => void;
}

const QuizResultModal = ({
  isCorrect,
  correctAnswer,
  onNext,
}: QuizResultModalProps) => {
  return (
    <Overlay>
      <ModalContainer>
        <IconWrapper>
          {isCorrect ? <QuizCorrectIcon /> : <QuizWrongIcon />}
        </IconWrapper>
        <ResultText>{isCorrect ? '정답이에요!' : '아쉽네요!'}</ResultText>
        <SubText>
          {isCorrect ? '역시 밈잘알이시군요!' : '다음에는 꼭 맞춰보아요!'}
        </SubText>
        {!isCorrect && (
          <CorrectAnswerText>
            정답은 &quot;{correctAnswer}&quot; 입니다
          </CorrectAnswerText>
        )}
        <NextButton onClick={onNext}>다음 퀴즈 풀기</NextButton>
      </ModalContainer>
    </Overlay>
  );
};

export default QuizResultModal;
