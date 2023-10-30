import { ref, toRefs, reactive, toValue } from "vue";
import { IMessage, IRoom, AppSocket } from "../../../types/global";
import { useAuth0 } from "@auth0/auth0-vue";
import type { AppUser } from "../../../types/global";

export const useRoomState = (
  socket: AppSocket,
  onKick: () => void = () => ({}),
) => {
  const { user } = useAuth0();

  const isRoomReady = ref(false);
  const roomState = reactive<IRoom>({
    id: "",
    users: [],
    owner: "",
    messages: [],
  });

  const joinRoom = (roomId: string) => {
    socket.emit(
      "room:join",
      { user: toValue(user) as AppUser, roomId },
      ({ room }) => {
        roomState.id = room.id;
        roomState.users = room.users;
        roomState.owner = room.owner;
        roomState.messages = room.messages;
        isRoomReady.value = true;
      },
    );
  };

  const addMessage = (message: IMessage) => {
    roomState.messages = [...roomState.messages, message];
  };

  const updateUser = (users: AppUser[]) => {
    roomState.users = [...users];
  };

  const sendMessage = (message: IMessage) => {
    socket.emit(
      "room:message",
      { roomId: roomState.id, message },
      ({ status }) => {
        if (status === "ok") {
          addMessage(message);
        }
      },
    );
  };

  const kickUser = (user: AppUser) => {
    socket.emit("room:user_kick", { user, roomId: roomState.id });
  };

  const clear = () => {
    socket.off("room:message");
    socket.off("room:users");
    socket.off("room:kick");
  };

  socket.on("room:message", (message) => {
    addMessage(message);
  });

  socket.on("room:users", ({ users }) => {
    updateUser(users);
  });

  socket.on("room:kick", onKick);

  return {
    joinRoom,
    sendMessage,
    isRoomReady,
    clear,
    kickUser,
    ...toRefs(roomState),
  };
};
