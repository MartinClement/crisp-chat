<script setup lang="ts">
import ChatRoomForm from "./components/ChatRoomForm.vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { useRouter } from "vue-router";
import { toValue } from "vue";
import { socket } from "../../socket";
import LoginButton from "../../components/button/LoginButton.vue";

import type { AppUser } from "../../types/global";

const { isAuthenticated, user } = useAuth0();

const router = useRouter();
const aknowledgeRoomCreate = ({ roomId }: { roomId: string }) => {
  router.push({ name: "chatroom", params: { roomId } });
};
const handleSubmit = (roomId: string) => {
  socket.emit(
    "room:create",
    { user: toValue(user) as AppUser, roomId },
    aknowledgeRoomCreate,
  );
};
</script>

<template>
  <div class="h-full w-full xl:mx-auto xl:max-w-app">
    <div
      class="flex h-full items-center justify-center rounded-md border-2 border-cyan-500 bg-gradient-to-r from-blue-500 to-cyan-500 p-4 shadow-lg shadow-blue-900"
    >
      <div v-if="isAuthenticated" class="py-4">
        <div class="m-auto max-w-form">
          <ChatRoomForm :onSubmit="handleSubmit"></ChatRoomForm>
        </div>
      </div>
      <div v-else class="flex flex-col gap-4 rounded-md bg-white px-4 py-8">
        <h2 class="text-center text-2xl font-bold text-blue-500">
          Welcome on CrispChat
        </h2>
        <h3 class="text-center text-xl">
          Log in and start chatting with your friends!
        </h3>
        <LoginButton />
      </div>
    </div>
  </div>
</template>
