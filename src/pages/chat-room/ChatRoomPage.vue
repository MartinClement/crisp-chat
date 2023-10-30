<script lang="ts" setup>
import { toValue, ref } from "vue";
import { User, useAuth0 } from "@auth0/auth0-vue";
import { useRoomState } from "./composable/roomState";
import UserList from "./components/UserList.vue";
import MessageList from "./components/MessageList.vue";
import BaseButton from "../../components/button/BaseButton.vue";
import BaseTextarea from "../../components/form/BaseTextarea.vue";
import { socket } from "../../socket";
import { useRoute } from "vue-router";

const {
  params: { roomId },
} = useRoute();
const { user } = useAuth0();
const { users, messages, joinRoom, sendMessage, isRoomReady } =
  useRoomState(socket);

joinRoom(roomId as string);
const newMessage = ref("");
const handleMessage = () => {
  console.log(newMessage.value, newMessage.value === "");
  if (newMessage.value === "") {
    console.log("UESSH");
    return;
  }

  console.log("coucou");
  sendMessage({
    user: toValue(user) as User,
    message: newMessage.value,
    timestamp: new Date().getTime(),
  });

  newMessage.value = "";
};
const handleKeyDown = (ev: KeyboardEvent) => {
  if (ev.code === "Enter" && ev.shiftKey) {
    ev.preventDefault();
    handleMessage();
  }
};
</script>

<template>
  <div
    class="xl:max-w-app h-full max-h-full w-full rounded-md bg-white p-4 shadow-lg shadow-blue-900 xl:mx-auto"
  >
    <div class="grid h-full grid-cols-[250px_1fr]">
      <UserList :users="users"></UserList>
      <div class="grid grid-rows-[1fr_120px] gap-2">
        <MessageList :messages="messages"></MessageList>
        <div class="grid grid-rows-[1fr_auto] gap-2 pl-2 pt-2">
          <BaseTextarea
            v-model="newMessage"
            name="message_textarea"
            @keydown="handleKeyDown"
          ></BaseTextarea>
          <BaseButton @click="handleMessage" :disabled="!isRoomReady">
            Send
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
