import * as S from './QuizStep.styles';

interface Question {
  message: string;
  isRight: boolean;
}

interface QuizItem {
  title: string;
  summary: string;
  image: string;
  questions: Question[];
}

interface QuizStepProps {
  quiz: QuizItem;
  currentStep: string;
  isFirstQuiz: boolean;
  onBefore: () => void;
  onAnswer: (currentStep: string, isRight: boolean) => void;
  currentAnswer: boolean | undefined;
}

const QuizStep = ({
  quiz,
  currentStep,
  isFirstQuiz,
  onBefore,
  onAnswer,
  currentAnswer,
}: QuizStepProps) => {
  return (
    <S.Container>
      {!isFirstQuiz && (
        <S.NavigationContainer>
          <S.BackButton onClick={onBefore}>← 이전</S.BackButton>
        </S.NavigationContainer>
      )}
      <S.Title>{quiz.title}</S.Title>
      <S.Summary>{quiz.summary}</S.Summary>
      <S.QuizImage src={quiz.image} alt={quiz.title} />
      <S.QuestionContainer>
        {quiz.questions.map((question, index) => {
          return (
            <S.Button
              key={index}
              onClick={() => onAnswer(currentStep, question.isRight)}
              isSelected={currentAnswer === question.isRight}
            >
              {question.message}
            </S.Button>
          );
        })}
      </S.QuestionContainer>
    </S.Container>
  );
};

export default QuizStep;
