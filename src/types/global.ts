import type { User } from "@auth0/auth0-vue";

export interface IUserMessage {
  user: User;
  message: string;
  timestamp: Number;
}

export interface IRoomCreatedCallbackPayload {
  roomId: string;
}

export interface IClientToServerEvents {
  "room:create": (
    { user, roomName }: { user: User; roomName: string },
    callback: Function,
  ) => void;
  "room:message": ({
    roomId,
    messageData,
  }: {
    roomId: string;
    messageData: IUserMessage;
  }) => void;
  "room:join": ({ user, roomId }: { user: User; roomId: string }) => void;
}

export interface IServerToClientEvents {
  "room:message": (userMessage: IUserMessage) => void;
}
