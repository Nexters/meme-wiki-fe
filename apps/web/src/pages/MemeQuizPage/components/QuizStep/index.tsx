import { useState } from 'react';
import { LinkCopiedIcon } from '@/assets/icons';
import QuizResultModal from './QuizResultModal';
import {
  Container,
  Content,
  QuestionContainer,
  QuestionHeader,
  QuestionNumber,
  QuestionText,
  ImageContainer,
  QuizImage,
  AnswerContainer,
  Button,
  ButtonIcon,
  ButtonText,
  BottomContainer,
  BottomButton,
} from './QuizStep.styles';

interface QuizStepProps {
  quiz: {
    question: string;
    image: string;
    questions: {
      message: string;
      isRight: boolean;
    }[];
  };
  currentStep: string;
  onAnswer: (currentStep: string, isRight: boolean) => void;
  currentAnswer?: boolean;
}

const QuizStep = ({ quiz, currentStep, onAnswer }: QuizStepProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResultModal, setShowResultModal] = useState(false);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      setShowResultModal(true);
    }
  };

  const handleNextQuiz = () => {
    if (selectedAnswer !== null) {
      onAnswer(currentStep, quiz.questions[selectedAnswer].isRight);
      setShowResultModal(false);
      setSelectedAnswer(null);
    }
  };

  const getCorrectAnswer = () => {
    return quiz.questions.find((q) => q.isRight)?.message || '';
  };

  const stepNumber = currentStep.replace('quiz', '');

  return (
    <Container>
      <Content>
        <QuestionContainer>
          <ImageContainer>
            <QuizImage src={quiz.image} alt={quiz.question} />
          </ImageContainer>

          <QuestionHeader>
            <QuestionNumber>{`Q${stepNumber}.`}</QuestionNumber>
            <QuestionText>{quiz.question}</QuestionText>
          </QuestionHeader>

          <AnswerContainer>
            {quiz.questions.map((question, index) => {
              const isSelected = selectedAnswer === index;
              return (
                <Button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  isSelected={isSelected}
                >
                  <ButtonIcon isSelected={isSelected}>
                    <LinkCopiedIcon width={20} height={20} />
                  </ButtonIcon>
                  <ButtonText isSelected={isSelected}>
                    {question.message}
                  </ButtonText>
                </Button>
              );
            })}
          </AnswerContainer>
        </QuestionContainer>
      </Content>

      <BottomContainer>
        <BottomButton onClick={handleNext} disabled={selectedAnswer === null}>
          다음
        </BottomButton>
      </BottomContainer>

      {showResultModal && selectedAnswer !== null && (
        <QuizResultModal
          isCorrect={quiz.questions[selectedAnswer].isRight}
          correctAnswer={getCorrectAnswer()}
          onNext={handleNextQuiz}
        />
      )}
    </Container>
  );
};

export default QuizStep;
