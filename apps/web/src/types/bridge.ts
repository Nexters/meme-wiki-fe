export const COMMAND_TYPE = {
  SHARE_MEME: 'SHARE_MEME',
  CUSTOM_MEME: 'CUSTOM_MEME',
  WEB_ENTERED: 'WEB_ENTERED',
  APP_ENTERED: 'APP_ENTERED',
  SHOW_MORE_MEMES: 'SHOW_MORE_MEMES',
  SHARE_KAKAO: 'SHARE_KAKAO',
} as const;

export type CommandType = (typeof COMMAND_TYPE)[keyof typeof COMMAND_TYPE];

export interface ShareMemeData {
  title: string;
  image: string;
}

export interface CustomMemeData {
  title: string;
  image: string;
}

export interface ShareKakaoData {
  title: string;
  image: string;
}

export type CommandDataMap = {
  [COMMAND_TYPE.SHARE_MEME]: ShareMemeData;
  [COMMAND_TYPE.CUSTOM_MEME]: CustomMemeData;
  [COMMAND_TYPE.WEB_ENTERED]: null;
  [COMMAND_TYPE.APP_ENTERED]: null;
  [COMMAND_TYPE.SHOW_MORE_MEMES]: null;
  [COMMAND_TYPE.SHARE_KAKAO]: ShareKakaoData;
};

export interface BridgeCommand<T extends CommandType> {
  type: T;
  data?: CommandDataMap[T];
}

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
    onNativeEntered?: (command: BridgeCommand<CommandType>) => void;
  }
}
