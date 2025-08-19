import { useEffect, useRef, useState } from 'react';
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
import useInAppBrowserDetect from '@/hooks/useInAppBrowserDetect';
import { useMemeQuizMutation } from '@meme_wiki/apis';
import { nativeBridge } from '@/utils/bridge';
import { BridgeCommand, COMMAND_TYPE, CommandType } from '@/types/bridge';

interface MemeQuizResultPageProps {
  rightCount: number;
}

// 전역에서 함수 정의
if (typeof window !== 'undefined') {
  window.onNativeEntered = (command: BridgeCommand<CommandType>) => {
    // MemeDetailPage 컴포넌트의 setIsWebview를 호출하기 위한 커스텀 이벤트
    window.dispatchEvent(
      new CustomEvent('webviewStateChange', {
        detail: command.type === COMMAND_TYPE.APP_ENTERED,
      }),
    );
  };
}

const MemeQuizResult = ({ rightCount }: MemeQuizResultPageProps) => {
  const { moveToStore } = useInAppBrowserDetect();
  const [showToast, setShowToast] = useState(false);
  const { mutate: quizResult } = useMemeQuizMutation();
  const isFirstRender = useRef(true);
  const [isWebview, setIsWebview] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect((): (() => void) | void => {
    if (isFirstRender.current) {
      quizResult({ rightCount });
      isFirstRender.current = false;

      // 결과 화면 애니메이션 시작
      const timer = setTimeout(() => {
        setShowResult(true);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [rightCount, quizResult]);

  useEffect(() => {
    // 웹뷰 상태 변경 이벤트 리스너
    const handleWebviewState = (event: CustomEvent<boolean>): void => {
      setIsWebview(event.detail);
    };

    // 이벤트 리스너 등록
    window.addEventListener(
      'webviewStateChange',
      handleWebviewState as EventListener,
    );

    // 웹뷰 진입 알림
    nativeBridge.webEntered();

    return () => {
      window.removeEventListener(
        'webviewStateChange',
        handleWebviewState as EventListener,
      );
    };
  }, []);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ResultCard
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{
          scale: showResult ? 1 : 0.9,
          opacity: showResult ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          duration: 0.8,
          bounce: 0.4,
        }}
      >
        <BackgroundImage
          src={MemeQuizResultBackground}
          alt="밈 퀴즈 결과 배경"
        />
        <ContentWrapper>
          <Badge
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: showResult ? 0 : -20,
              opacity: showResult ? 1 : 0,
            }}
            transition={{
              type: 'spring',
              duration: 0.6,
              delay: 0.4,
            }}
          >
            <BadgeText>밈퀴즈 종료!</BadgeText>
          </Badge>
          <ResultTextContainer>
            <ResultTitle
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: showResult ? 1 : 0.8,
                opacity: showResult ? 1 : 0,
              }}
              transition={{
                type: 'spring',
                duration: 0.6,
                delay: 0.6,
              }}
            >
              총 {rightCount}
              개를 맞췄어요!
            </ResultTitle>
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
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: showResult ? 0 : 20,
              opacity: showResult ? 1 : 0,
            }}
            transition={{
              duration: 0.4,
              delay: 1,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            링크 복사하고 공유하기
          </ShareButton>
        </ToastContainer>
        <MoreButton
          onClick={() => {
            if (isWebview) {
              nativeBridge.showMoreMemes();
            } else {
              moveToStore();
            }
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: showResult ? 0 : 20,
            opacity: showResult ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            delay: 1.2,
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          더 많은 밈 보러가기
        </MoreButton>
      </ButtonContainer>
    </Container>
  );
};

export default MemeQuizResult;
