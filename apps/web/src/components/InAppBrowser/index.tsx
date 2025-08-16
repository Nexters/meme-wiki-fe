import useInAppBrowserDetect from '@/hooks/useInAppBrowserDetect';
import { ReactNode, useEffect } from 'react';
import * as S from './InAppBrowser.styles';

interface InAppBrowserDetectProps {
  children: ReactNode;
}

const InAppBrowserDetect = ({ children }: InAppBrowserDetectProps) => {
  const {
    isInAppBrowser,
    browserName,
    moveToExternalBrowser,
    moveToStore,
    isAndroid,
    isIOS,
  } = useInAppBrowserDetect();

  useEffect(() => {
    // 카카오톡 인앱브라우저가 아닌 경우에만 외부 브라우저로 이동
    if (isInAppBrowser && browserName !== 'kakaotalk') {
      moveToExternalBrowser();
    }
  }, [isInAppBrowser, browserName, moveToExternalBrowser]);

  if (isInAppBrowser && browserName !== 'kakaotalk') {
    const userBrowserName = (() => {
      switch (browserName) {
        case 'kakaotalk':
          return '카카오톡';
        case 'naver':
          return '네이버';
        case 'facebook':
          return '페이스북';
        case 'instagram':
          return '인스타그램';
        case 'line':
          return '라인';
        default:
          return '현재 사용중인';
      }
    })();

    const storeName = (() => {
      if (isAndroid) return '구글 플레이';
      if (isIOS) return '앱 스토어';
      return '스토어';
    })();

    return (
      <S.Container>
        <S.Content>
          <S.Title>{userBrowserName} 인앱브라우저에서는</S.Title>
          <S.Description>일부 기능 이용이 제한됩니다.</S.Description>
          <S.Description>외부 브라우저로 이동중입니다...</S.Description>
          <S.StoreButton
            onClick={(e) => {
              e.preventDefault();
              moveToStore();
            }}
          >
            {storeName}에서 설치하기
          </S.StoreButton>
        </S.Content>
      </S.Container>
    );
  }

  return <>{children}</>;
};

export default InAppBrowserDetect;
