<script setup lang="ts">
import { onUnmounted } from "vue";
import { socket } from "./socket";

onUnmounted(() => {
  socket.disconnect();
});
</script>

<template>
  <router-view></router-view>
</template>
