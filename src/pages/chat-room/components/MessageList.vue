<script lang="ts" setup>
import { computed } from "vue";
import UserMessage from "./UserMessage.vue";

const messages = computed(() => {
  return Array(20).fill(() => ({
    message: "This is a message just to test the look of the message list",
    user: {
      nickname: "MartinClement",
      name: "Clément",
      picture: "https://robohash.org/clement",
    },
    timestamp: new Date().getTime(),
  }));
});
</script>
<template>
  <div
    class="flex h-full flex-col gap-2 rounded-br-md rounded-tr-md bg-slate-200 p-4"
  >
    <UserMessage
      v-for="msg in messages"
      :message="msg()"
      :selfMessage="Math.random() > 0.5"
    ></UserMessage>
  </div>
</template>
