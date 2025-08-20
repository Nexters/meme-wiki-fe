import Layout from '@/components/Layout';
import {
  MemeDesignPenIcon,
  ShareIcon,
  SymbolThreeIcon,
  SymbolTwoIcon,
} from '@/assets/icons';
import { nativeBridge } from '@/utils/bridge';
import * as S from './MemeDetailPage.styles';
import { useTheme } from '@emotion/react';
import { useParams } from 'react-router-dom';
import {
  useMemeCustomMutation,
  useMemeDetailQuery,
  useShareMemeMutation,
} from '@meme_wiki/apis';
import { useEffect, useState } from 'react';
import { BridgeCommand, COMMAND_TYPE, CommandType } from '@/types/bridge';
import useInAppBrowserDetect from '@/hooks/useInAppBrowserDetect';
import MemeShareSheet from './components/MemeShareSheet';
import MemeDetailSkeleton from './components/MemeDetailSkeleton';

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

const MemeDetailPage = () => {
  const [isWebview, setIsWebview] = useState(false);
  const { memeId } = useParams();
  const { moveToStore } = useInAppBrowserDetect();
  const { data: memeDetail, isLoading } = useMemeDetailQuery(memeId!);
  const { mutate: shareMeme } = useShareMemeMutation();
  const { mutate: customMeme } = useMemeCustomMutation();
  const [shareSheetOpen, setShareSheetOpen] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    // 웹뷰 상태 변경 이벤트 리스너
    const handleWebviewState = (event: CustomEvent<boolean>) => {
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
    <Layout
      layoutStyle={{
        backgroundColor: theme.palette.gray['gray-10'],
      }}
    >
      {isLoading ? (
        <MemeDetailSkeleton />
      ) : (
        <>
          <S.Container>
            <S.ImageContainer>
              <S.Image
                src={memeDetail?.success.imgUrl}
                alt={memeDetail?.success.title}
              />
            </S.ImageContainer>
            <S.ContentContainer>
              <S.Title>{memeDetail?.success.title}</S.Title>
              <S.HashTags>
                {memeDetail?.success.hashtags.map((tag) => `${tag} `)}
              </S.HashTags>
              <S.SectionTitle>
                <SymbolTwoIcon width={18} height={18} />
                이럴 때 쓰세요
              </S.SectionTitle>
              <S.SectionText>{memeDetail?.success.usageContext}</S.SectionText>
              <S.SectionTitle>
                <SymbolThreeIcon width={18} height={18} />
                이렇게 시작됐어요
              </S.SectionTitle>
              <S.SectionText>{memeDetail?.success.origin}</S.SectionText>
            </S.ContentContainer>
          </S.Container>
          <S.ButtonContainer>
            <S.ActionButton
              isPrimary
              onClick={() => {
                // 밈 꾸미기 mutation
                customMeme({ id: memeId! });

                if (isWebview) {
                  nativeBridge.customMeme({
                    title: memeDetail?.success.title ?? '',
                    image: memeDetail?.success.imgUrl ?? '',
                  });
                } else {
                  moveToStore();
                }
              }}
            >
              <MemeDesignPenIcon />
              <span>밈 꾸미기</span>
            </S.ActionButton>
            <S.ActionButton
              onClick={() => {
                // 밈 공유하기 mutation
                shareMeme({ id: memeId! });

                // 공유 시트 열기
                setShareSheetOpen(true);
              }}
            >
              <ShareIcon />
              <span>공유하기</span>
            </S.ActionButton>
          </S.ButtonContainer>
        </>
      )}
      <MemeShareSheet
        isOpen={shareSheetOpen}
        onClose={() => setShareSheetOpen(false)}
        title={memeDetail?.success.title ?? ''}
        imageUrl={memeDetail?.success.imgUrl ?? ''}
        isWebview={isWebview}
        onShareNative={() => {
          nativeBridge.shareMeme({
            title: memeDetail?.success.title ?? '',
            image: memeDetail?.success.imgUrl ?? '',
          });
        }}
      />
    </Layout>
  );
};

export default MemeDetailPage;
