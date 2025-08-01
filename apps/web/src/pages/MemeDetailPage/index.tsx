import Layout from '@/components/Layout';
import { ShareIcon, SymbolTwoIcon } from '@/assets/icons';
import { nativeBridge } from '@/utils/bridge';
import * as S from './MemeDetailPage.styles';
import { useTheme } from '@emotion/react';
import { useRef } from 'react';
import { useEffect, useState } from 'react';

const DUMMY_DATA = {
  resultType: 'SUCCESS',
  success: {
    id: 1,
    title: '죽겠어요',
    summary: '힘든 상황에서 사용되는 대표적인 밈',
    usage:
      '주로 매우 당황스럽거나 난처한 상황, 또는 감당하기 힘든 일이 생겼을 때, 또는 웃음이 터져 나올 것 같은 상황에서 짓는 김혜수 배우의 표정을 묘사한 움짤을 의미합니다. 주로 온라인 커뮤니티나 SNS에서 유행하며, 해당 상황에 공감하거나 재미를 표현하는 용도로 사용됩니다.',
    origin:
      "김혜수의 몇 안 되는 개그짤. 영화 《모던 보이》의 댄스신을 촬영하기 위해서 연습하던 도중, 지쳐 주저앉은 장면인데 '죽겠어요'란 대사와 묘한 눈빛의 싱크로율 때문에 패러디감이 되었다. 몇 안되는 다른 개그짤로 기를 죽이고 그래요도 있다.",
    image: 'https://picsum.photos/800/600',
    hashtags: ['직장인', '해탈짤'],
    year: 2022,
  },
  error: null,
} as const;

const MemeDetailPage = () => {
  const theme = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      setScrollProgress(Math.min(200, scrollPosition));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout
      layoutStyle={{
        backgroundColor: theme.palette.gray['gray-10'],
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <S.Container ref={containerRef}>
        <S.ImageContainer scrollProgress={scrollProgress}>
          <S.Image
            src={DUMMY_DATA.success.image}
            alt={DUMMY_DATA.success.title}
          />
          <S.ShareButton
            scrollProgress={scrollProgress}
            onClick={() => {
              nativeBridge.shareMeme({
                title: DUMMY_DATA.success.title,
                image: DUMMY_DATA.success.image,
              });
            }}
          >
            <ShareIcon width={24} height={24} />
            <S.ShareButtonText scrollProgress={scrollProgress}>
              공유하기
            </S.ShareButtonText>
          </S.ShareButton>
        </S.ImageContainer>
        <S.ContentContainer>
          <S.YearBadge>
            <S.YearText>{DUMMY_DATA.success.year}</S.YearText>
          </S.YearBadge>
          <S.Title>{DUMMY_DATA.success.title}</S.Title>
          <S.HashTags>
            {DUMMY_DATA.success.hashtags.map((tag) => `#${tag} `)}
          </S.HashTags>
          <S.SectionTitle>
            <SymbolTwoIcon width={18} height={18} />
            용도
          </S.SectionTitle>
          <S.SectionText>{DUMMY_DATA.success.usage}</S.SectionText>
          <S.SectionTitle>
            <SymbolTwoIcon width={18} height={18} />
            유래
          </S.SectionTitle>
          <S.SectionText>{DUMMY_DATA.success.origin}</S.SectionText>
        </S.ContentContainer>
      </S.Container>
    </Layout>
  );
};

export default MemeDetailPage;
