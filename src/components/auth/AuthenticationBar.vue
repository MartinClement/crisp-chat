<script lang="ts" setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { logout, loginWithRedirect, user, isAuthenticated } = useAuth0();
const handleLogin = () => {
  loginWithRedirect();
};

const handleLogout = () => {
  logout({ logoutParams: { returnTo: window.location.origin } });
};
</script>

<template>
  <div class="bg-white py-4">
    <div class="m-auto flex max-w-[960px] flex-row justify-end gap-4">
      <div v-if="isAuthenticated" class="flex flex-row items-center gap-2">
        <img
          alt="user avatar"
          :src="user?.picture"
          class="h-[41px] w-[41px] rounded-full"
        />
        <div>{{ user?.name }}</div>
      </div>
      <button
        v-if="isAuthenticated"
        class="flex flex-row gap-2 rounded-md bg-red-600 p-2 font-bold text-white"
        type="button"
        @click="handleLogout"
      >
        <span>Logout</span>
      </button>
      <button
        v-else
        class="flex flex-row justify-between gap-2 rounded-md bg-green-500 px-4 py-2 font-bold text-white"
        type="button"
        @click="handleLogin"
      >
        <span>Login</span>
      </button>
    </div>
  </div>
</template>
