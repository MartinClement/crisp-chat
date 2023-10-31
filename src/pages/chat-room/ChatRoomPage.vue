<script lang="ts" setup>
import { toValue, ref, computed, onBeforeUnmount } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { useRoomState } from "./composable/roomState";
import UserList from "./components/UserList.vue";
import MessageList from "./components/MessageList.vue";
import BaseButton from "../../components/button/BaseButton.vue";
import BaseTextarea from "../../components/form/BaseTextarea.vue";
import { socket } from "../../socket";
import { useRoute, useRouter } from "vue-router";

import type { AppUser } from "../../types/global";

const { user } = useAuth0();

const {
  params: { roomId },
} = useRoute();
const router = useRouter();
const handleKick = () => {
  router.push({ name: "home" });
};

const {
  users,
  messages,
  joinRoom,
  leaveRoom,
  sendMessage,
  owner,
  isRoomReady,
  clear,
  kickUser,
} = useRoomState(socket, handleKick);

const isUserRoomOwner = computed(() => {
  return user.value?.email === owner.value;
});

const newMessage = ref("");

const handleMessage = () => {
  if (newMessage.value === "") {
    return;
  }

  sendMessage({
    user: toValue(user) as AppUser,
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
const handleExitRoom = () => {
  leaveRoom();
  router.push({ name: "home" });
};

joinRoom(roomId as string);

onBeforeUnmount(clear);
</script>

<template>
  <div
    class="h-full max-h-full w-full rounded-md border-2 border-cyan-500 bg-white p-4 shadow-lg shadow-blue-900 xl:mx-auto xl:max-w-app"
  >
    <div class="grid h-full grid-cols-[auto_1fr] overflow-y-hidden">
      <UserList
        :users="users"
        :current-user="user"
        :kick-user="kickUser"
        :is-user-owner="isUserRoomOwner"
      >
        <BaseButton kind="red" @click="handleExitRoom">Leave Room</BaseButton>
      </UserList>
      <div class="flex flex-col gap-2 overflow-y-hidden">
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
