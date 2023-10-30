<script lang="ts" setup>
import SocketConnectionStatus from "../socket/SocketConnectionStatus.vue";
import LogoutButton from "../button/LogoutButton.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { user, isAuthenticated } = useAuth0();
</script>

<template>
  <div class="bg-white">
    <div
      class="flex flex-row items-center justify-between gap-4 p-4 xl:m-auto xl:max-w-app"
    >
      <div class="flex items-center gap-4">
        <h1 class="text-3xl font-bold text-blue-400">CrispChat</h1>
        <SocketConnectionStatus></SocketConnectionStatus>
      </div>
      <div>
        <div v-if="isAuthenticated" class="flex flex-row items-center gap-2">
          <img
            alt="user avatar"
            :src="user?.picture"
            class="h-[41px] w-[41px] rounded-full"
          />
          <div class="hidden whitespace-nowrap md:block">{{ user?.name }}</div>
          <LogoutButton />
        </div>
      </div>
    </div>
  </div>
</template>
