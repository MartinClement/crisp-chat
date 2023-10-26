import { io } from "socket.io-client";
import { reactive } from "vue";

export const socketState = reactive({
  connected: false,
});

const SOCKET_URL = "ws://localhost:1337";

export const socket = io(SOCKET_URL, {
  autoConnect: false,
});

socket.on("connect", () => {
  socketState.connected = true;
});

socket.on("disconnect", () => {
  socketState.connected = false;
});
