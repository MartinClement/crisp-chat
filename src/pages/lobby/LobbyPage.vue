<script lang="ts" setup>
import LobbyForm from "./components/LobbyForm.vue";
import SocketConnectionStatus from "../../components/connection/SocketConnectionStatus.vue";
import { useLocalStorage } from "../../composable/localStorage";
import { useRouter } from "vue-router";

const handleJoin = (roomName: string) => {
  console.log(roomName);
};

const { removeIdToken, getIdToken } = useLocalStorage();
const { push } = useRouter();
const username = getIdToken()?.split("-")[0];
const disconnect = () => {
  removeIdToken();
  push("/login");
};
</script>

<template>
  <div class="max-w-form flex flex-col justify-center">
    <div class="flex flex-row justify-between p-4">
      <SocketConnectionStatus></SocketConnectionStatus>
      <button type="button" @click="disconnect">Disconnect</button>
    </div>
    <div
      class="flex flex-col gap-4 rounded-md bg-white px-4 py-8 shadow-lg shadow-blue-950"
    >
      <div>
        <h1 class="text-center text-3xl">Join Chat</h1>
        <h2 class="text-center text-2xl">Welcome {{ username }}</h2>
      </div>
      <div class="text-center">
        Feel free to create or join a chat room by addresing it's name on the
        input bollow.
      </div>
      <LobbyForm :on-submit="handleJoin"></LobbyForm>
    </div>
  </div>
</template>
