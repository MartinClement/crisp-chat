<script lang="ts" setup>
import { socketState } from "../../socket";
</script>

<template>
  <div>
    <div v-if="socketState.connected" class="relative">
      <span
        class="absolute inline-flex h-[25px] w-[25px] animate-ping rounded-full bg-green-600 opacity-75"
      ></span>
      <span
        class="relative inline-flex h-[25px] w-[25px] rounded-full bg-green-600"
      ></span>
    </div>
    <div v-else>
      <span
        class="absolute inline-flex h-[25px] w-[25px] animate-ping rounded-full bg-red-600 opacity-75"
      ></span>
      <span
        class="relative inline-flex h-[25px] w-[25px] rounded-full bg-red-600"
      ></span>
    </div>
  </div>
</template>
