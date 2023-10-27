import { Socket, io } from "socket.io-client";
import { reactive } from "vue";

import type {
  IClientToServerEvents,
  IServerToClientEvents,
} from "./types/global";

export const socketState = reactive({
  connected: false,
});

const SOCKET_URL = "ws://localhost:1337";

export const socket: Socket<IServerToClientEvents, IClientToServerEvents> = io(
  SOCKET_URL,
  {
    autoConnect: false,
  },
);

socket.on("connect", () => {
  socketState.connected = true;
});

socket.on("disconnect", () => {
  socketState.connected = false;
});
