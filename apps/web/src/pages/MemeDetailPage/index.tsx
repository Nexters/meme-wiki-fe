import Layout from '@/components/Layout';
import { ShareIcon, SymbolThreeIcon, SymbolTwoIcon } from '@/assets/icons';
import { nativeBridge } from '@/utils/bridge';
import * as S from './MemeDetailPage.styles';
import { useTheme } from '@emotion/react';
import { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, useSpring } from 'motion/react';
import { useParams } from 'react-router-dom';
import { useMemeDetailQuery } from '@meme_wiki/apis';

const MemeDetailPage = () => {
  const { memeId } = useParams();
  const { data: memeDetail } = useMemeDetailQuery(memeId!);

  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: containerRef });

  const height = useTransform(scrollY, [0, 60], [400, 175]);
  const smoothHeight = useSpring(height, {
    stiffness: 300,
    damping: 50,
  });

  const [isTextVisible, setIsTextVisible] = useState(true);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsTextVisible(latest < 1);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <Layout
      layoutStyle={{
        backgroundColor: theme.palette.gray['gray-10'],
      }}
    >
      <S.Container ref={containerRef}>
        <S.ImageContainer style={{ height: smoothHeight }}>
          <S.Image
            src={memeDetail?.success.imgUrl}
            alt={memeDetail?.success.title}
          />
          <S.ShareButton
            onClick={() => {
              nativeBridge.shareMeme({
                title: memeDetail?.success.title ?? '',
                image: memeDetail?.success.imgUrl ?? '',
              });
            }}
          >
            <ShareIcon width={24} height={24} />
            {isTextVisible && <S.ShareButtonText>공유하기</S.ShareButtonText>}
          </S.ShareButton>
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
    </Layout>
  );
};

export default MemeDetailPage;
