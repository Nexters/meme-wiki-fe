import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
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
      }, 2500);

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
    <Container>
      {!showResult && (
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: '425px',
            height: '100%',
            background: 'black',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            zIndex: 100,
          }}
        >
          <motion.div
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
              position: 'absolute',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.p
            style={{
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            결과 집계중
          </motion.p>
          <motion.div
            style={{
              display: 'flex',
              gap: '8px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'white',
                }}
                animate={{
                  y: [-4, 4, -4],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
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
