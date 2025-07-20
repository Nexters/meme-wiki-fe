import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useFunnel } from '@/hooks/useFunnel';
import MemeQuizResult from './components/MemeQuizResult';
import { QuizStep } from './components';

const MemeQuizPage = () => {
  const [, setSearchParams] = useSearchParams();
  const quizData = useMemo(() => {
    const QUIZ_DATA = {
      resultType: 'SUCCESS',
      success: [
        {
          title: '밈 퀴즈 1',
          summary: '인터넷 밈 문화에 대한 퀴즈입니다.',
          image: 'https://i.imgur.com/81qyN1y.jpg',
          questions: [
            {
              message: '1번 정답',
              isRight: true,
            },
            {
              message: '2번 정답',
              isRight: false,
            },
          ],
        },
        {
          title: '밈 퀴즈 2',
          summary: '최근 유행하는 밈에 대한 퀴즈입니다.',
          image: 'https://i.imgur.com/KFEHWEE.jpg',
          questions: [
            {
              message: '1번 정답',
              isRight: true,
            },
            {
              message: '2번 정답',
              isRight: false,
            },
          ],
        },
        {
          title: '밈 퀴즈 3',
          summary: '고전 밈에 대한 퀴즈입니다.',
          image: 'https://i.imgur.com/RP5tKYX.jpg',
          questions: [
            {
              message: '1번 정답',
              isRight: true,
            },
            {
              message: '2번 정답',
              isRight: false,
            },
          ],
        },
        {
          title: '밈 퀴즈 4',
          summary: '최근 유행하는 밈에 대한 퀴즈입니다.',
          image: 'https://i.imgur.com/RP5tKYX.jpg',
          questions: [
            {
              message: '1번 정답',
              isRight: true,
            },
            {
              message: '2번 정답',
              isRight: false,
            },
          ],
        },
      ],
    };

    return QUIZ_DATA.success || [];
  }, []);

  const { quizSteps, stepsArray } = useMemo(() => {
    const stepsObj = quizData.reduce(
      (acc, _, index) => {
        acc[`quiz${index + 1}`] = `quiz${index + 1}`;
        return acc;
      },
      {} as Record<string, string>,
    );

    stepsObj.result = 'result';

    return {
      quizSteps: stepsObj as Record<string, string>,
      stepsArray: Object.values(stepsObj),
    };
  }, [quizData]);

  const { Funnel, step, setStep } = useFunnel<keyof typeof quizSteps>(
    quizSteps[stepsArray[0]],
  );
  const [stepAnswers, setStepAnswers] = useState<
    Record<keyof typeof quizSteps, boolean>
  >({});

  const onNext = (newStep: keyof typeof quizSteps) => {
    setStep(newStep);
    setSearchParams({ step: newStep });
  };

  return (
    <Layout>
      <Funnel>
        {[
          ...quizData.map((quiz, index) => (
            <Funnel.Step key={`quiz${index + 1}`} step={`quiz${index + 1}`}>
              <QuizStep
                quiz={quiz}
                currentStep={`quiz${index + 1}`}
                isFirstQuiz={stepsArray.indexOf(step) === 0}
                currentAnswer={stepAnswers[`quiz${index + 1}`]}
                onBefore={() => {
                  const currentStepIndex = stepsArray.indexOf(step);
                  if (currentStepIndex <= 0) return;

                  onNext(stepsArray[currentStepIndex - 1]);
                }}
                onAnswer={(currentStep, isRight) => {
                  setStepAnswers((prev) => ({
                    ...prev,
                    [currentStep]: isRight,
                  }));

                  const currentStepIndex = stepsArray.indexOf(currentStep);
                  onNext(stepsArray[currentStepIndex + 1]);
                }}
              />
            </Funnel.Step>
          )),
          <Funnel.Step key="result" step={quizSteps.result}>
            <MemeQuizResult
              rightCount={Object.values(stepAnswers).filter(Boolean).length}
              onReset={() => {
                setStepAnswers({});
                onNext(quizSteps[stepsArray[0]]);
              }}
            />
          </Funnel.Step>,
        ]}
      </Funnel>
    </Layout>
  );
};

export default MemeQuizPage;
