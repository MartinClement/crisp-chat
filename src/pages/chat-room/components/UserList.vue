<script lang="ts" setup>
import { User } from "@auth0/auth0-vue";

interface UserListProps {
  users: User[];
}

const props = withDefaults(defineProps<UserListProps>(), { users: Array });
console.log(props.users);
</script>

<template>
  <div
    class="flex h-full min-h-[0] flex-col items-start gap-2 overflow-y-auto rounded-bl-md rounded-tl-md border-2 border-gray-200 p-2"
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
      <div>{{ user.name }}</div>
    </div>
  </div>
</template>
