<script lang="ts" setup>
import { User } from "@auth0/auth0-vue";

interface IUserMessageProps {
  message: {
    user: User;
    message: string;
    timestamp: number;
  };
  selfMessage: boolean;
}

const props = defineProps<IUserMessageProps>();
console.log(props.selfMessage);
console;
</script>
<template>
  <div
    class="max-w-[360px] rounded-md p-2"
    :class="selfMessage ? 'place-self-end bg-green-500' : 'bg-blue-400'"
  >
    {{ message.message }}
  </div>
</template>
