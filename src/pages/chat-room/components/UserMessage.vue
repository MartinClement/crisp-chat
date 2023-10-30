<script lang="ts" setup>
import { IMessage } from "../../../types/global";
import * as dayjs from "dayjs";

interface IUserMessageProps {
  message: IMessage;
  selfMessage: boolean;
}

defineProps<IUserMessageProps>();

const formatDate = (timestamp: number) => {
  return dayjs(timestamp.toString()).format("DD/MM/YYYY HH:MM:ss");
};
</script>
<template>
  <div
    class="grid-[auto_auto] grid w-fit max-w-message gap-1"
    :class="selfMessage && 'place-self-end'"
  >
    <div class="flex gap-1 text-xs text-gray-400">
      <img
        :src="message.user.picture"
        alt="user_avatar"
        class="h-[15px] w-[15px] rounded-full"
      />
      <span>{{ formatDate(message.timestamp) }}</span>
    </div>
    <div
      class="w-full rounded-md px-4 py-2"
      :class="selfMessage ? 'place-self-end bg-green-500' : 'bg-blue-400'"
    >
      <div>{{ message.message }}</div>
    </div>
  </div>
</template>
