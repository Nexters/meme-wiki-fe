import Layout from '@/components/Layout';
import Share from '@/assets/icons/Share';
import { nativeBridge } from '@/utils/bridge';
import * as S from './MemeDetailPage.styles';

const DUMMY_DATA = {
  resultType: 'SUCCESS',
  success: {
    id: 1,
    title: '아니 이게 뭔 소리야?',
    summary: '혼란스러운 상황에서 사용되는 대표적인 밈',
    usage:
      '예상치 못한 상황이나 이해하기 어려운 일이 발생했을 때 사용됩니다. 특히 황당한 뉴스나 소식을 접했을 때 자주 사용되며, 때로는 유머러스한 반응을 표현하는 데에도 활용됩니다.',
    origin:
      '2020년 한 예능 프로그램에서 연예인이 황당한 상황에 직면했을 때 했던 말이 온라인상에서 유행하기 시작했습니다. 이후 다양한 상황에서 패러디되어 현재는 디지털 문화의 대표적인 밈으로 자리잡았습니다. SNS와 커뮤니티를 중심으로 빠르게 확산되어 현재까지도 활발하게 사용되고 있습니다.',
    image: 'https://picsum.photos/800/600',
    hashtags: ['황당', '혼란', '이해불가', '예능밈'],
  },
  error: null,
} as const;

const MemeDetailPage = () => {
  return (
    <Layout>
      <S.Container>
        <S.ImageContainer>
          <S.Image
            src={DUMMY_DATA.success.image}
            alt={DUMMY_DATA.success.title}
          />
          <S.ShareButton
            onClick={() => {
              nativeBridge.shareMeme({
                title: DUMMY_DATA.success.title,
                image: DUMMY_DATA.success.image,
              });
            }}
          >
            <Share />
            <S.ShareButtonText>공유하기</S.ShareButtonText>
          </S.ShareButton>
        </S.ImageContainer>
        <S.ContentContainer>
          <S.YearBadge>
            <S.YearText>{2020}</S.YearText>
          </S.YearBadge>
          <S.Title>{DUMMY_DATA.success.title}</S.Title>
          <S.HashTags>
            {DUMMY_DATA.success.hashtags.map((tag) => `#${tag} `)}
          </S.HashTags>
          <S.SectionTitle>용도를 표현하는 문구</S.SectionTitle>
          <S.SectionText>{DUMMY_DATA.success.usage}</S.SectionText>
          <S.SectionTitle>유래를 표현하는 문구</S.SectionTitle>
          <S.SectionText>{DUMMY_DATA.success.origin}</S.SectionText>
        </S.ContentContainer>
      </S.Container>
    </Layout>
  );
};

export default MemeDetailPage;
