import Layout from '@/components/Layout';
import * as S from './MemeDetailPage.styles';

const DUMMY_DATA = {
  resultType: 'SUCCESS',
  success: {
    id: 1,
    title: '밈 제목',
    summary:
      '로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각 디자인 프로젝트 모형의 채움 글로도 이용된다. 이런 용도로 사용할 때 로렘 입숨을 그리킹(greeking)이라고도 부르며, 때로 로렘 입숨은 공간만 차지하는 무언가를 지칭하는 용어로도 사용된다.',
    source: '출처',
    background: '배경',
    image: 'https://picsum.photos/800/600',
    hashtags: ['밈', '유머', '재미있는', '트렌드'],
  },
  error: null,
} as const;

const MemeDetailPage = () => {
  const handleShare = () => {
    // 공유 기능 구현
    alert('공유하기 기능이 구현될 예정입니다.');
  };

  return (
    <Layout>
      <S.Container>
        <S.ImageContainer>
          <S.Image
            src={DUMMY_DATA.success.image}
            alt={DUMMY_DATA.success.title}
          />
          <S.ShareButton onClick={handleShare}>공유하기</S.ShareButton>
        </S.ImageContainer>
        <S.ContentContainer>
          <S.TagContainer>
            <S.Hashtag>최신순</S.Hashtag>
            <S.Hashtag>인기순</S.Hashtag>
          </S.TagContainer>
          <S.CategoryTitle>카테고리</S.CategoryTitle>
          <S.HashtagContainer>
            {DUMMY_DATA.success.hashtags.map((tag) => (
              <S.Hashtag key={tag}>#{tag}</S.Hashtag>
            ))}
          </S.HashtagContainer>
          <S.Description>{DUMMY_DATA.success.summary}</S.Description>
        </S.ContentContainer>
      </S.Container>
    </Layout>
  );
};

export default MemeDetailPage;
