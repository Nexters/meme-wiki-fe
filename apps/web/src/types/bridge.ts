export const COMMAND_TYPE = {
  SHARE_MEME: 'SHARE_MEME',
} as const;

export type CommandType = (typeof COMMAND_TYPE)[keyof typeof COMMAND_TYPE];

export interface ShareMemeData {
  title: string;
  image: string;
}

export type CommandDataMap = {
  [COMMAND_TYPE.SHARE_MEME]: ShareMemeData;
};

export interface BridgeCommand<T extends CommandType> {
  type: T;
  data: CommandDataMap[T];
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
  }
}
