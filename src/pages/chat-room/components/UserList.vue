<script lang="ts" setup>
import type { AppUser } from "../../../types/global";
import CrossIcon from "../../../components/icons/CrossIcon.vue";

interface IUserListProps {
  users: AppUser[];
  isUserOwner?: boolean;
  kickUser?: (user: AppUser) => any;
}

withDefaults(defineProps<IUserListProps>(), {
  users: Array,
  isUserOwner: false,
  kickUser: () => ({}),
});
</script>

<template>
  <div
    class="flex h-full w-fit flex-col items-start gap-2 overflow-y-auto rounded-bl-md rounded-tl-md border-2 border-gray-200 p-2"
  >
    <div
      class="flex flex-row items-center gap-2 p-2 hover:bg-slate-200"
      v-for="user in users"
      :key="user.email"
    >
      <img
        alt="user_avatar"
        :src="user.picture"
        class="h-[31px] w-[31px] rounded-full"
      />
      <div
        class="hidden max-w-[125px] overflow-x-hidden text-ellipsis md:block"
      >
        {{ user.name }}
      </div>
      <CrossIcon v-if="isUserOwner" @click="() => kickUser(user)" />
    </div>
    <slot></slot>
  </div>
</template>
