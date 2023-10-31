<script setup lang="ts">
import { reactive } from "vue";
import { socket } from "../../socket";
import { useRouter } from "vue-router";
import ErrorMessage from "./ErrorMessage.vue";

const errors = reactive<{ id: number; message: string }[]>([]);
const router = useRouter();

const removeError = (errId: number) => {
  const errIndex = errors.findIndex((err) => err.id === errId);
  if (errIndex === -1) {
    return;
  }

  errors.splice(errIndex, 1);
};

socket.on("error:message", ({ message }) => {
  const err = { id: new Date().getTime(), message };
  errors.push(err);
  router.push({ name: "home" });
  setTimeout(() => {
    removeError(err.id);
  }, 10000);
});
</script>

<template>
  <div class="flex flex-col gap-1">
    <ErrorMessage v-for="err in errors" :message="err.message"></ErrorMessage>
  </div>
</template>
