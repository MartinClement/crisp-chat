<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { useLocalStorage } from "../../composable/localStorage";

const login = ref("");
const password = ref("");

const { push } = useRouter();
const { setIdToken } = useLocalStorage();

const handleLogin = () => {
  console.log(`${login.value} / ${password.value}`);
  const safeLogin = `${login}-${new Date().getTime()}`;

  setIdToken(safeLogin);
  push({ name: "lobby" });
};
</script>

<template>
  <div class="flex flex-col justify-center">
    <form
      class="flex flex-col gap-2 rounded-md bg-white p-4 shadow-md"
      @submit.prevent="handleLogin"
    >
      <h1 class="text-center text-3xl">Crisp Chat</h1>
      <div class="flex flex-col">
        <label for="login_input">Login</label>
        <input
          id="login_input"
          name="login_input"
          v-model="login"
          type="text"
          class="rounded-md border-2 border-solid border-black px-2"
        />
      </div>
      <div class="flex flex-col">
        <label for="password_input">Password</label>
        <input
          id="password_input"
          name="password_input"
          v-model="password"
          type="password"
          class="rounded-md border-2 border-solid border-black px-2"
        />
      </div>
      <div class="text-right">
        <button type="submit" class="w-full rounded-md bg-green-300 p-2">
          Login
        </button>
      </div>
    </form>
  </div>
</template>
