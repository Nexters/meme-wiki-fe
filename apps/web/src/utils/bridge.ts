import {
  BridgeCommand,
  COMMAND_TYPE,
  CommandDataMap,
  CommandType,
  CustomMemeData,
  ShareKakaoData,
  ShareMemeData,
} from '../types/bridge';

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
    type: T,
    data?: CommandDataMap[T],
  ): void {
    try {
      const bridgeCommand: BridgeCommand<T> = {
        type,
        data,
      };

      const message = JSON.stringify(bridgeCommand, null, 2);

      if (this.isAndroid()) {
        window.wiki?.postMessage(message);
      } else if (this.isIOS()) {
        window.webkit?.messageHandlers?.wikiHandler?.postMessage(message);
      } else {
        console.warn('Native bridge is not available');
      }
    } catch (error) {
      console.error('Error sending command:', error);
    }
  }

  // 밈 공유하기
  shareMeme(data: ShareMemeData) {
    this.sendCommand(COMMAND_TYPE.SHARE_MEME, data);
  }

  // 밈 꾸미기
  customMeme(data: CustomMemeData) {
    this.sendCommand(COMMAND_TYPE.CUSTOM_MEME, data);
  }

  // 웹 페이지 진입
  webEntered() {
    this.sendCommand(COMMAND_TYPE.WEB_ENTERED);
  }

  // 더 많은 밈 보기
  showMoreMemes() {
    this.sendCommand(COMMAND_TYPE.SHOW_MORE_MEMES);
  }

  // 카카오 공유
  shareKakao(data: ShareKakaoData) {
    this.sendCommand(COMMAND_TYPE.SHARE_KAKAO, data);
  }
}

export const nativeBridge = NativeBridge.getInstance();
