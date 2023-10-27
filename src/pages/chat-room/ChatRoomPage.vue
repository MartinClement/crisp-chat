<script lang="ts" setup>
import { computed, toValue } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import UserList from "./components/UserList.vue";
import MessageList from "./components/MessageList.vue";

const { user } = useAuth0();
const users = computed(() => Array(10).fill(toValue(user)));
</script>

<template>
  <div class="h-full max-h-full p-4 bg-white rounded-md">
    <div class="grid grid-cols-[250px_1fr] h-full gap-2">
      <UserList :users="users"></UserList>
      <div class="grid grid-rows-[1fr_120px] gap-2">
        <MessageList></MessageList>
        <input type="textarea"/>
      </div>
    </div>
  </div>
</template>
