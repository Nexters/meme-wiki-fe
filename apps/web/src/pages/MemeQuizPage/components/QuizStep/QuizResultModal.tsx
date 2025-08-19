import { QuizCorrectIcon, QuizWrongIcon } from '@/assets/icons';
import { motion } from 'motion/react';
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
    <Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ModalContainer
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          duration: 0.5,
          bounce: 0.4,
        }}
      >
        <IconWrapper
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            duration: 0.6,
            bounce: 0.5,
            delay: 0.2,
          }}
        >
          {isCorrect ? (
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                duration: 0.8,
                bounce: 0.5,
                delay: 0.3,
              }}
            >
              <QuizCorrectIcon />
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                duration: 0.6,
                bounce: 0.4,
                delay: 0.3,
              }}
            >
              <QuizWrongIcon />
            </motion.div>
          )}
        </IconWrapper>
        <ResultText
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          {isCorrect ? '정답이에요!' : '아쉽네요!'}
        </ResultText>
        <SubText
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          {isCorrect ? '역시 밈잘알이시군요!' : '다음에는 꼭 맞춰보아요!'}
        </SubText>
        {!isCorrect && (
          <CorrectAnswerText
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            정답은 &quot;{correctAnswer}&quot; 입니다
          </CorrectAnswerText>
        )}
        <NextButton
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
        >
          다음 퀴즈 풀기
        </NextButton>
      </ModalContainer>
    </Overlay>
  );
};

export default QuizResultModal;
