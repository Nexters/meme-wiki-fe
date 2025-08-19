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
import { AnimatePresence } from 'motion/react';

interface MemeQuizStartProps {
  onNext: () => void;
}

const MemeQuizStart = ({ onNext }: MemeQuizStartProps) => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <TextSection
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Title>{`나 어쩌면 \n밈잘알일지도?!`}</Title>
        <Subtitle>과연 나는 밈잘알일까? 밈퀴즈 풀고 알아보자!</Subtitle>
      </TextSection>

      <IconSection
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          type: 'spring',
          bounce: 0.4,
        }}
      >
        <MemeQuizStartIcon />
      </IconSection>

      <AnimatePresence>
        <ButtonWrapper
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <StartButton onClick={onNext} style={{ position: 'relative' }}>
            밈퀴즈 시작하기
          </StartButton>
        </ButtonWrapper>
      </AnimatePresence>
    </Container>
  );
};

export default MemeQuizStart;
