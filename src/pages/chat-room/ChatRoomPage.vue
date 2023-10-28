<script lang="ts" setup>
import { toValue, ref } from "vue";
import { User, useAuth0 } from "@auth0/auth0-vue";
import { useRoomState } from "./composable/roomState";
import UserList from "./components/UserList.vue";
import MessageList from "./components/MessageList.vue";
import BaseButton from "../../components/button/BaseButton.vue";
import { socket } from "../../socket";

import { useRoute } from "vue-router";
const { params: { roomId } } = useRoute();

const { user } = useAuth0();

const { init, addMessage, addUser, users, messages } = useRoomState();

socket.emit('room:join', { roomId: roomId as string, user: toValue(user) as User}, ({ room }) => {
  init(room);
});

const newMessage = ref('');
const sendMessage = () => {
  const message = { user: toValue(user) as User, message: newMessage.value, timestamp: new Date().getTime() };
  socket.emit('room:message', { roomId: roomId as string, message }, ({ status }) => {
    if (status === 'ok') {
      addMessage(message);
    }
  });
}

socket.on('room:message', (message) => {
  addMessage(message);
})

socket.on('room:user_joined', ({ user }) => addUser(user));
</script>

<template>
  <div
    class="h-full max-h-full rounded-md bg-white p-4 shadow-lg shadow-blue-900"
  >
    <div class="grid h-full grid-cols-[250px_1fr]">
      <UserList :users="users"></UserList>
      <div class="grid grid-rows-[1fr_120px] gap-2">
        <MessageList :messages="messages"></MessageList>
        <input type="textarea" v-model="newMessage"/>
        <BaseButton @click="sendMessage">Send</BaseButton>
      </div>
    </div>
  </div>
</template>
