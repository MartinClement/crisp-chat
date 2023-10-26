<script setup lang="ts">
import AuthenticationBar from "./components/auth/AuthenticationBar.vue";
</script>

<template>
  <AuthenticationBar />
  <div class="p-4"><router-view></router-view></div>
</template>
