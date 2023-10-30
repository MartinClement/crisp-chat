<script setup lang="ts">
import ApplicationHeader from "./components/header/ApplicationHeader.vue";
</script>

<template>
  <ApplicationHeader />
  <div class="p-4"><router-view></router-view></div>
</template>
