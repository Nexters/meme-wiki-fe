import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { KakaoIcon, MoreInfo, LinkCopyIcon } from '@/assets/icons';
import * as S from './MemeShareSheet.styles';
import { nativeBridge } from '@/utils/bridge';

interface MemeShareSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageUrl: string;
  isWebview: boolean;
  onShareNative: () => void;
}

const MemeShareSheet = ({
  isOpen,
  onClose,
  title,
  imageUrl,
  isWebview,
  onShareNative,
}: MemeShareSheetProps) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Kakao SDK 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      const kakaoKey = '05ba74b5a769929cd086247c874b60e4';
      window.Kakao.init(kakaoKey);
    }
  }, [isWebview]);

  const handleKakaoShare = () => {
    if (isWebview) {
      nativeBridge.shareKakao({
        title,
        image: imageUrl,
      });
      return;
    }

    if (!window.Kakao?.isInitialized()) {
      const kakaoKey = '05ba74b5a769929cd086247c874b60e4';
      window.Kakao?.init(kakaoKey);
    }

    if (window.Kakao?.Share) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title,
          description: '미미키에서 더 많은 밈을 확인해보세요!',
          imageUrl,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '자세히 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowToast(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <S.Dimmed
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <S.Container
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <S.Content>
              <S.Title>공유하기</S.Title>
              <S.ThumbnailContainer>
                <S.Thumbnail src={imageUrl} alt={title} />
              </S.ThumbnailContainer>
              <S.IconContainer>
                <S.IconButton onClick={handleKakaoShare}>
                  <S.IconCircle isKakao>
                    <KakaoIcon />
                  </S.IconCircle>
                  <S.IconText>카카오톡</S.IconText>
                </S.IconButton>
                <S.IconButton onClick={handleCopyLink}>
                  <S.IconCircle>
                    <LinkCopyIcon />
                  </S.IconCircle>
                  <S.IconText>링크 복사</S.IconText>
                </S.IconButton>
                {isWebview && (
                  <S.IconButton onClick={onShareNative}>
                    <S.IconCircle>
                      <MoreInfo />
                    </S.IconCircle>
                    <S.IconText>더보기</S.IconText>
                  </S.IconButton>
                )}
              </S.IconContainer>
              <AnimatePresence>
                {showToast && (
                  <S.Toast
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onAnimationComplete={() => {
                      setTimeout(() => setShowToast(false), 2000);
                    }}
                  >
                    클립보드에 복사되었습니다
                  </S.Toast>
                )}
              </AnimatePresence>
            </S.Content>
          </S.Container>
        </>
      )}
    </AnimatePresence>
  );
};

export default MemeShareSheet;

interface KakaoShare {
  sendDefault: (options: {
    objectType: string;
    content: {
      title: string;
      description: string;
      imageUrl: string;
      link: {
        mobileWebUrl: string;
        webUrl: string;
      };
    };
    buttons: Array<{
      title: string;
      link: {
        mobileWebUrl: string;
        webUrl: string;
      };
    }>;
  }) => void;
}

interface KakaoSDK {
  init: (key: string) => void;
  isInitialized: () => boolean;
  Share: KakaoShare;
}

declare global {
  interface Window {
    Kakao: KakaoSDK;
  }
}
