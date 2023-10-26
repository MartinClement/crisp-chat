import { User } from "@auth0/auth0-vue";

declare interface IRoomCreatedCallbackPayload {
  roomId: string;
}

declare interface IClientToServerEvents {
  "room:create": ({
    user,
    roomName,
    callback,
  }: {
    user: User;
    roomName: string;
    callback: ({ roomId }: IRoomCreatedCallbackPayload) => any;
  }) => void;
  "room:message": ({
    roomId,
    messageData,
  }: {
    roomId: string;
    messageData: MessageData;
  }) => void;
  "room:join": ({ user, roomId }: { user: GithubUser; roomId: string }) => void;
}

declare interface IServerToClientEvents {
  "room:message": ({ message }: { message: MessageData }) => void;
}
