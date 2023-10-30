import { ref, toRefs, reactive, toValue } from "vue";
import { IMessage, IRoom, AppSocket } from "../../../types/global";
import { User, useAuth0 } from "@auth0/auth0-vue";

export const useRoomState = (socket: AppSocket) => {
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
      { user: toValue(user) as User, roomId },
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
    console.log(message);
    roomState.messages = [...roomState.messages, message];
  };

  const addUser = (user: User) => {
    roomState.users = [...roomState.users, user];
  };

  const sendMessage = (message: IMessage) => {
    console.log(roomState.id);
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

  socket.on("room:message", (message) => {
    addMessage(message);
  });

  socket.on("room:user_joined", ({ user }) => {
    addUser(user);
  });

  return {
    joinRoom,
    sendMessage,
    isRoomReady,
    ...toRefs(roomState),
  };
};
