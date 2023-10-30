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
  <div class="xl:max-w-app h-full w-full xl:mx-auto">
    <div
      class="flex h-full items-center justify-center rounded-md bg-white p-4 shadow-lg shadow-blue-900"
    >
      <div v-if="isAuthenticated" class="py-4">
        <div class="m-auto max-w-form">
          <ChatRoomForm :onSubmit="handleSubmit"></ChatRoomForm>
        </div>
      </div>
      <div v-else class="flex flex-col gap-4">
        <h2 class="text-center text-3xl">Welcome on CrispChat</h2>
        <h3 class="text-center text-2xl">
          Log in and start chatting with your friends!
        </h3>
        <LoginButton />
      </div>
    </div>
  </div>
</template>
