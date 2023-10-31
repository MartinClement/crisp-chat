import type { User } from "@auth0/auth0-vue";
import { Socket } from "socket.io-client";

export type AppUser = User & {
  socketId?: string;
};

export interface IMessage {
  user: AppUser;
  message: string;
  timestamp: number;
}

export interface IRoomCreatedCallbackPayload {
  roomId: string;
}

export interface IRoomMessagePayload {
  status: "error" | "ok";
}

export interface IRoom {
  id: string;
  users: AppUser[];
  owner: string;
  messages: IMessage[];
}

export interface IClientToServerEvents {
  "room:create": (
    data: { user: AppUser; roomId: string },
    callback: (payload: { roomId: string }) => any,
  ) => void;
  "room:message": (
    data: { roomId: string; message: IMessage },
    callback: (payload: IRoomMessagePayload) => any,
  ) => void;
  "room:join": (
    data: { user: AppUser; roomId: string },
    callback: ({ room }: { room: IRoom }) => any,
  ) => void;
  "room:leave": (data: { user: AppUser; roomId: string }) => void;
  "room:user_kick": (data: { user: AppUser; roomId: string }) => void;
}

export interface IServerToClientEvents {
  "room:message": (userMessage: IMessage) => void;
  "room:users": ({ users }: { users: AppUser[] }) => void;
  "room:kick": () => void;
  "error:message": ({ message }: { message: string }) => void;
}

export type AppSocket = Socket<IServerToClientEvents, IClientToServerEvents>;
