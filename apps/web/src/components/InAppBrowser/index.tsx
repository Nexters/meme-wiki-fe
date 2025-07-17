import useInAppBrowserDetect from '@/hooks/useInAppBrowserDetect';
import { ReactNode, useEffect } from 'react';

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
    if (isInAppBrowser) moveToExternalBrowser();
  }, [isInAppBrowser, moveToExternalBrowser]);

  if (isInAppBrowser) {
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
      <div>
        <div>
          <p>{userBrowserName} 인앱브라우저에서는</p>
          <p>일부 기능 이용이 제한됩니다.</p>
          <p>외부 브라우저로 이동중입니다...</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              moveToStore();
            }}
          >
            {storeName}에서 설치하기
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default InAppBrowserDetect;
