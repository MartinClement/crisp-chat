<script setup lang="ts">
import ChatRoomForm from "./components/ChatRoomForm.vue";
import { useAuth0 } from "@auth0/auth0-vue";
const { isAuthenticated } = useAuth0();
</script>

<template>
  <div class="m-auto h-full w-full max-w-[960px]">
    <div class="h-full rounded-md bg-white p-4 shadow-lg shadow-blue-900">
      <h1 class="text-center text-4xl font-bold">CrispChat</h1>
      <h2 class="mb-4 text-center text-2xl text-gray-800">
        The easy to use chat application.
      </h2>
      <div class="m-auto h-[360px] w-[360px] bg-gray-200"></div>
      <div v-if="isAuthenticated" class="py-4">
        <h3 class="text-center font-bold">
          Enter a room name and start chating with your friend !
        </h3>
        <div class="m-auto max-w-[360px]">
          <ChatRoomForm></ChatRoomForm>
        </div>
      </div>
      <div v-else>
        <h3 class="text-center font-bold">
          Login and start chating with your friends!
        </h3>
      </div>
    </div>
  </div>
</template>
