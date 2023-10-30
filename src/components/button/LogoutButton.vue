<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { logout } = useAuth0();
</script>
<template>
  <BaseButton @click="logout" kind="red">Logout</BaseButton>
</template>
