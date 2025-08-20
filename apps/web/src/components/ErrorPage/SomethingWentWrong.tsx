import Layout from '@/components/Layout';
import { useTheme } from '@emotion/react';
import SomethingWentWrongIcon from '@/assets/images/SomethingWentWrong.png';
import * as S from './SomethingWentWrong.styles';
import { useNavigate } from 'react-router-dom';

interface SomethingWentWrongProps {
  onRetry?: () => void;
  status?: string;
  errorMessage?: string;
}

const SomethingWentWrong = ({
  onRetry,
  status,
  errorMessage,
}: SomethingWentWrongProps) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Layout
      layoutStyle={{
        backgroundColor: theme.palette.gray['gray-10'],
      }}
    >
      <S.Container>
        <S.IconWrapper>
          <S.ErrorImage
            src={SomethingWentWrongIcon}
            alt="오류가 발생했습니다"
          />
        </S.IconWrapper>
        <S.ContentWrapper>
          <S.Title>오류가 발생하였습니다.</S.Title>
          <S.Description>
            문제를 해결하기 위해 열심히 노력하고 있어요.
            {'\n'}잠시 후 다시 시도해 주세요!
          </S.Description>
          {status && <S.ErrorText>{status}</S.ErrorText>}
          {errorMessage && <S.ErrorText>{errorMessage}</S.ErrorText>}
        </S.ContentWrapper>
        <S.ButtonWrapper>
          {onRetry && (
            <S.StyledButton onClick={onRetry}>다시 시도하기</S.StyledButton>
          )}
          <S.StyledButton onClick={() => navigate('/')}>
            홈으로 이동
          </S.StyledButton>
        </S.ButtonWrapper>
      </S.Container>
    </Layout>
  );
};

export default SomethingWentWrong;
