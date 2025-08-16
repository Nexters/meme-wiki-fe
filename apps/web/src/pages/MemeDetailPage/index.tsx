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
import { useMemeDetailQuery } from '@meme_wiki/apis';
import { useEffect, useState } from 'react';
import { BridgeCommand, COMMAND_TYPE, CommandType } from '@/types/bridge';

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
  const { data: memeDetail } = useMemeDetailQuery(memeId!);

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
      <S.Container>
        <S.ImageContainer>
          <S.Image
            src={memeDetail?.success.imgUrl}
            alt={memeDetail?.success.title}
          />
        </S.ImageContainer>
        <S.ContentContainer>
          <S.YearBadge>
            <S.YearText>{memeDetail?.success.trendPeriod}</S.YearText>
          </S.YearBadge>
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
            nativeBridge.customMeme({
              title: memeDetail?.success.title ?? '',
              image: memeDetail?.success.imgUrl ?? '',
            });
          }}
        >
          <MemeDesignPenIcon />
          <span>밈 꾸미기</span>
        </S.ActionButton>
        <S.ActionButton
          onClick={() => {
            if (isWebview) {
              nativeBridge.shareMeme({
                title: memeDetail?.success.title ?? '',
                image: memeDetail?.success.imgUrl ?? '',
              });
            } else {
              alert('밈 공유하기 클릭!');
            }
          }}
        >
          <ShareIcon />
          <span>공유하기</span>
        </S.ActionButton>
      </S.ButtonContainer>
    </Layout>
  );
};

export default MemeDetailPage;
