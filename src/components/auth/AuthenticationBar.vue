<script lang="ts" setup>
import SocketConnectionStatus from "../socket/SocketConnectionStatus.vue";
import BaseButton from "../button/BaseButton.vue";
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
    <div class="m-auto flex max-w-[960px] flex-row justify-between gap-4">
      <SocketConnectionStatus></SocketConnectionStatus>
      <div>
        <div v-if="isAuthenticated" class="flex flex-row items-center gap-2">
          <img
            alt="user avatar"
            :src="user?.picture"
            class="h-[41px] w-[41px] rounded-full"
          />
          <div>{{ user?.name }}</div>
          <BaseButton @click="handleLogout" kind="red">
            Logout
          </BaseButton>
        </div>
        <BaseButton v-else @click="handleLogin">
          Login
        </BaseButton>
      </div>
    </div>
  </div>
</template>
