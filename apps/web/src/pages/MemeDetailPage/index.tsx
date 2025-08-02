import Layout from '@/components/Layout';
import { ShareIcon, SymbolThreeIcon, SymbolTwoIcon } from '@/assets/icons';
import { nativeBridge } from '@/utils/bridge';
import * as S from './MemeDetailPage.styles';
import { useTheme } from '@emotion/react';
import { useRef } from 'react';
import { useScroll, useTransform, useSpring } from 'motion/react';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: containerRef });

  const height = useTransform(scrollY, [0, 200], [400, 250]);
  const smoothHeight = useSpring(height, {
    stiffness: 100,
    damping: 20,
  });

  // 공유하기 버튼 애니메이션
  const buttonWidth = useTransform(scrollY, [0, 50], [116, 44]);
  const textOpacity = useTransform(scrollY, [0, 30], [1, 0]);
  const textWidth = useTransform(scrollY, [0, 30], [68, 0]);

  const smoothButtonWidth = useSpring(buttonWidth, {
    stiffness: 400,
    damping: 40,
  });

  const smoothTextWidth = useSpring(textWidth, {
    stiffness: 400,
    damping: 40,
  });

  const smoothTextOpacity = useSpring(textOpacity, {
    stiffness: 400,
    damping: 40,
  });

  return (
    <Layout
      layoutStyle={{
        backgroundColor: theme.palette.gray['gray-10'],
      }}
    >
      <S.Container ref={containerRef}>
        <S.ImageContainer style={{ height: smoothHeight }}>
          <S.Image
            src={DUMMY_DATA.success.image}
            alt={DUMMY_DATA.success.title}
          />
          <S.ShareButton
            style={{
              width: smoothButtonWidth,
            }}
            onClick={() => {
              nativeBridge.shareMeme({
                title: DUMMY_DATA.success.title,
                image: DUMMY_DATA.success.image,
              });
            }}
          >
            <ShareIcon width={24} height={24} />
            <S.ShareButtonText
              style={{
                opacity: smoothTextOpacity,
                width: smoothTextWidth,
                overflow: 'hidden',
              }}
            >
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
            이럴 때 쓰세요
          </S.SectionTitle>
          <S.SectionText>{DUMMY_DATA.success.usage}</S.SectionText>
          <S.SectionTitle>
            <SymbolThreeIcon width={18} height={18} />
            이렇게 시작됐어요
          </S.SectionTitle>
          <S.SectionText>{DUMMY_DATA.success.origin}</S.SectionText>
        </S.ContentContainer>
      </S.Container>
    </Layout>
  );
};

export default MemeDetailPage;
