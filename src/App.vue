<script setup lang="ts">
import ApplicationHeader from "./components/header/ApplicationHeader.vue";
import ErrorWrapper from "./components/error/ErrorWrapper.vue";
</script>

<template>
  <ApplicationHeader />
  <ErrorWrapper />
  <div class="flex-1 overflow-y-hidden p-4 pt-0">
    <router-view></router-view>
  </div>
</template>
