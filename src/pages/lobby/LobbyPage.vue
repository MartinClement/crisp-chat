<script lang="ts" setup>
import LobbyForm from "./components/LobbyForm.vue";
import { useLocalStorage } from "../../composable/localStorage";
import { useRouter } from "vue-router";

const handleJoin = (roomName: string) => {
  console.log(roomName);
};

const { removeIdToken } = useLocalStorage();
const { push } = useRouter();
const disconnect = () => {
  removeIdToken();
  push("/login");
};
</script>

<template>
  <div class="flex flex-col justify-center">
    <button type="button" @click="disconnect">Disconnect</button>
    <div class="rounded-md bg-white px-4 py-8 shadow-lg shadow-blue-950">
      <h1 class="text-center text-3xl">Join Chat</h1>
      <LobbyForm :on-submit="handleJoin"></LobbyForm>
    </div>
  </div>
</template>
