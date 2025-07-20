import * as S from './MemeQuizResult.styles';

interface MemeQuizResultPageProps {
  rightCount: number;
  onReset: () => void;
}

const MemeQuizResult = ({ rightCount, onReset }: MemeQuizResultPageProps) => {
  return (
    <S.Container>
      <S.NavigationContainer>
        <S.BackButton onClick={onReset}>← 다시 풀기</S.BackButton>
      </S.NavigationContainer>
      <S.ResultContainer>
        <S.Title>퀴즈 결과</S.Title>
        <S.Summary>총 {rightCount}개 맞추셨습니다!</S.Summary>
      </S.ResultContainer>
    </S.Container>
  );
};

export default MemeQuizResult;
