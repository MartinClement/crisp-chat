import type { User } from "@auth0/auth0-vue";
import { Socket } from "socket.io-client";

export interface IMessage {
  user: User;
  message: string;
  timestamp: Number;
}

export interface IRoomCreatedCallbackPayload {
  roomId: string;
}

export interface IRoomMessagePayload {
  status: "error" | "ok";
}

export interface IRoom {
  id: string;
  users: User[];
  owner: string;
  messages: IMessage[];
}

export interface IClientToServerEvents {
  "room:create": (
    { user, roomId }: { user: User; roomId: string },
    callback: Function,
  ) => void;
  "room:message": (
    data: { roomId: string; message: IMessage },
    callback: (payload: IRoomMessagePayload) => any,
  ) => void;
  "room:join": (
    data: { user: User; roomId: string },
    callback: ({ room }: { room: IRoom }) => any,
  ) => void;
}

export interface IServerToClientEvents {
  "room:message": (userMessage: IMessage) => void;
  "room:user_joined": ({ user }: { user: User }) => void;
  "error:message": ({ message }: { message: string }) => void;
}

export type AppSocket = Socket<IServerToClientEvents, IClientToServerEvents>;
