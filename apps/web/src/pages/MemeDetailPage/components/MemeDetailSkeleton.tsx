import * as S from './MemeDetailSkeleton.styles';

const MemeDetailSkeleton = () => {
  return (
    <S.Container>
      <S.ImageContainer />
      <S.ContentContainer>
        <S.TitleSkeleton />
        <S.HashTagsSkeleton />
        <S.SectionTitleSkeleton />
        <S.SectionTextSkeleton />
        <S.SectionTitleSkeleton />
        <S.SectionTextSkeleton />
      </S.ContentContainer>
      <S.ButtonContainer>
        <S.ButtonSkeleton />
        <S.ButtonSkeleton />
      </S.ButtonContainer>
    </S.Container>
  );
};

export default MemeDetailSkeleton;
