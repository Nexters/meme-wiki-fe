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

const MemeDetailPage = () => {
  const { memeId } = useParams();
  const { data: memeDetail } = useMemeDetailQuery(memeId!);

  const theme = useTheme();

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
          onClick={() => {
            nativeBridge.shareMeme({
              title: memeDetail?.success.title ?? '',
              image: memeDetail?.success.imgUrl ?? '',
            });
          }}
        >
          <ShareIcon />
          <span>공유하기</span>
        </S.ActionButton>
        <S.ActionButton
          onClick={() => {
            alert('밈 꾸미기');
          }}
        >
          <MemeDesignPenIcon />
          <span>밈 꾸미기</span>
        </S.ActionButton>
      </S.ButtonContainer>
    </Layout>
  );
};

export default MemeDetailPage;
