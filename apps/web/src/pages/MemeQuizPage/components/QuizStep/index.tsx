import { useState } from 'react';
import { LinkCopiedIcon } from '@/assets/icons';
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
  isFirstQuiz: boolean;
  onBefore: () => void;
  onAnswer: (currentStep: string, isRight: boolean) => void;
  currentAnswer?: boolean;
}

const QuizStep = ({
  quiz,
  currentStep,

  onAnswer,
}: QuizStepProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      onAnswer(currentStep, quiz.questions[selectedAnswer].isRight);
    }
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
    </Container>
  );
};

export default QuizStep;
