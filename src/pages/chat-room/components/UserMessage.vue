<script lang="ts" setup>
import { IMessage } from "../../../types/global";

interface IUserMessageProps {
  message: IMessage;
  selfMessage: boolean;
}

defineProps<IUserMessageProps>();
</script>
<template>
  <div
    class="max-w-message rounded-md px-4 py-2"
    :class="selfMessage ? 'place-self-end bg-green-500' : 'bg-blue-400'"
  >
    {{ message.message }}
  </div>
</template>
