<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useLocalStorage } from "../../composable/localStorage";

import LoginForm from "./components/LoginForm.vue";

const { push } = useRouter();
const { setIdToken } = useLocalStorage();

const handleLogin = ({
  login,
  password,
}: {
  login: string;
  password: string;
}) => {
  console.log(`${login} / ${password}`);
  const safeLogin = `${login}-${new Date().getTime()}`;

  setIdToken(safeLogin);
  push({ name: "lobby" });
};
</script>

<template>
  <div class="flex flex-col justify-center">
    <div class="rounded-md bg-white px-4 py-8 shadow-lg shadow-blue-950">
      <h1 class="text-center text-3xl">Crisp Chat</h1>
      <LoginForm :on-submit="handleLogin"></LoginForm>
    </div>
  </div>
</template>
