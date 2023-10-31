<script lang="ts" setup>
import type { IMessage } from "../../../types/global";
import UserMessage from "./UserMessage.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { user } = useAuth0();

interface IMessageListProps {
  messages: IMessage[];
}
withDefaults(defineProps<IMessageListProps>(), {
  messages: Array,
});

const isSelfMessage = (message: IMessage) => {
  return user.value?.name === message.user.name;
};
</script>
<template>
  <div
    class="flex flex-1 flex-col gap-2 overflow-y-auto rounded-br-md rounded-tr-md bg-slate-200 p-4"
  >
    <UserMessage
      v-for="msg in messages"
      :message="msg"
      :selfMessage="isSelfMessage(msg)"
    ></UserMessage>
  </div>
</template>
