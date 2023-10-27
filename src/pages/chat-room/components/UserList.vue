<script lang="ts" setup>
import { User } from '@auth0/auth0-vue';

interface UserListProps {
  users: User[],
}

const props = withDefaults(defineProps<UserListProps>(), { users: Array });
console.log(props.users);
</script>

<template>
  <div class="h-full border-r-2 border-r-blue-400 overflow-y-auto flex flex-col gap-2 items-start min-h-[0]">
    <div class="flex flex-row gap-2 items-center p-2 hover:bg-slate-200" v-for="user in users" :key="user.email">
      <img alt="user_avatar" :src="user.picture" class="h-[31px] w-[31px] rounded-full">
      <div>{{ user.name }}</div>
    </div>
  </div>
</template>