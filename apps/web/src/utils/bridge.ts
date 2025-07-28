export type CommandType = 'SHARE_MEME'; // 밈 공유하기

// 각 커맨드별 데이터 타입 정의
interface ShareMemeData {
  title: string;
  image: string;
}

// 커맨드별 데이터 타입 매핑
type CommandDataMap = {
  SHARE_MEME: ShareMemeData;
};

// 브릿지 커맨드 인터페이스
interface BridgeCommand<T extends CommandType> {
  command: T;
  data: CommandDataMap[T];
}

// 개발 환경용 모의 브릿지
const mockNativeBridge = {
  postMessage(data: string) {
    console.log('Mock Android Bridge called with:', JSON.parse(data));
  },
};

const mockWebKit = {
  messageHandlers: {
    wikiHandler: {
      postMessage(data: unknown) {
        console.log('Mock iOS Bridge called with:', data);
      },
    },
  },
};

// 개발 환경에서 모의 브릿지 주입
if (import.meta.env.DEV) {
  if (!window.wiki) {
    window.wiki = mockNativeBridge;
  }
  if (!window.webkit) {
    window.webkit = mockWebKit;
  }
}

class NativeBridge {
  private static instance: NativeBridge;

  private constructor() {}

  static getInstance(): NativeBridge {
    if (!NativeBridge.instance) {
      NativeBridge.instance = new NativeBridge();
    }
    return NativeBridge.instance;
  }

  private isAndroid(): boolean {
    return !!(
      typeof window !== 'undefined' &&
      window.wiki &&
      window.wiki.postMessage
    );
  }

  private isIOS(): boolean {
    return !!(
      typeof window !== 'undefined' &&
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.wikiHandler &&
      window.webkit.messageHandlers.wikiHandler.postMessage
    );
  }

  private sendCommand<T extends CommandType>(
    command: T,
    data: CommandDataMap[T],
  ): void {
    try {
      const bridgeCommand: BridgeCommand<T> = {
        command,
        data,
      };

      if (this.isAndroid() && window.wiki) {
        // Android 브릿지 호출
        window.wiki.postMessage(JSON.stringify(bridgeCommand, null, 2));
      } else if (this.isIOS() && window.webkit?.messageHandlers?.wikiHandler) {
        // iOS 브릿지 호출
        window.webkit.messageHandlers.wikiHandler.postMessage(
          JSON.stringify(bridgeCommand, null, 2),
        );
      } else {
        console.warn('Native bridge is not available');
      }
    } catch (error) {
      console.error('Error sending command:', error);
    }
  }

  // 밈 공유하기
  shareMeme(data: ShareMemeData): void {
    this.sendCommand('SHARE_MEME', data);
  }
}

export const nativeBridge = NativeBridge.getInstance();

declare global {
  interface Window {
    wiki?: {
      postMessage(data: string): void;
    };
    webkit?: {
      messageHandlers: {
        wikiHandler: {
          postMessage(data: string): void;
        };
      };
    };
  }
}
