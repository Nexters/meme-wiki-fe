import { useCallback } from 'react';

interface InAppBrowserInfo {
  isInAppBrowser: boolean;
  browserName: string | null;
}

interface BrowserPattern {
  name: string;
  patterns: string[];
}

const BROWSER_PATTERNS: BrowserPattern[] = [
  {
    name: 'kakaotalk',
    patterns: ['kakaotalk'],
  },
  {
    name: 'naver',
    patterns: ['naver', 'naver.*inapp', 'naver.*whale'],
  },
  {
    name: 'facebook',
    patterns: ['fban', 'fbios', 'fb_iab'],
  },
  {
    name: 'instagram',
    patterns: ['instagram', 'instagram.*inapp'],
  },
  {
    name: 'line',
    patterns: ['line', 'line.*inapp'],
  },
];

// 테스트 용 (실제로는 우리의 앱 정보를 사용해야 함)
const NAVER_APP_INFO = {
  androidPackage: 'com.nhn.android.search',
  iosAppId: '393499958',
};

const useInAppBrowserDetect = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isAndroid = userAgent.includes('android');
  const isIOS = /iphone|ipad|ipod/.test(userAgent);

  const detectInAppBrowser = (): InAppBrowserInfo => {
    for (const browser of BROWSER_PATTERNS) {
      if (
        browser.patterns.some((pattern) =>
          pattern.includes('.*')
            ? new RegExp(pattern).test(userAgent)
            : userAgent.includes(pattern),
        )
      ) {
        return { isInAppBrowser: true, browserName: browser.name };
      }
    }

    return { isInAppBrowser: false, browserName: null };
  };

  const { isInAppBrowser, browserName } = detectInAppBrowser();

  const moveToStore = useCallback(() => {
    if (isAndroid) {
      window.location.href = `market://details?id=${NAVER_APP_INFO.androidPackage}`;
    } else if (isIOS) {
      window.location.href = `itms-apps://itunes.apple.com/app/id${NAVER_APP_INFO.iosAppId}`;
    } else {
      // 폴백 URL (웹 버전)
      window.location.href = isAndroid
        ? `https://play.google.com/store/apps/details?id=${NAVER_APP_INFO.androidPackage}`
        : `https://apps.apple.com/app/id${NAVER_APP_INFO.iosAppId}`;
    }
  }, [isAndroid, isIOS]);

  const getExternalBrowserUrl = useCallback(
    (currentUrl: string, browser: string): string => {
      const isAndroid = userAgent.includes('android');

      if (browser === 'kakaotalk') {
        return `kakaotalk://web/openExternal?url=${encodeURIComponent(currentUrl)}`;
      }

      if (isAndroid) {
        return `intent://${currentUrl.replace(/https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end`;
      }

      return currentUrl;
    },
    [userAgent],
  );

  const moveToExternalBrowser = useCallback(() => {
    const currentUrl = window.location.href;

    if (!isInAppBrowser) return;

    if (browserName) {
      window.location.href = getExternalBrowserUrl(currentUrl, browserName);
      return;
    }

    const newWindow = window.open(currentUrl, '_blank');

    if (!newWindow) {
      window.location.href = currentUrl;
    }
  }, [isInAppBrowser, browserName, getExternalBrowserUrl]);

  return {
    isInAppBrowser,
    browserName,
    moveToExternalBrowser,
    moveToStore,
    isAndroid,
    isIOS,
  };
};

export default useInAppBrowserDetect;
