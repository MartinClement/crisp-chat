<script lang="ts" setup>
import { socketState } from "../../socket";
</script>

<template>
  <div>
    <div
      v-if="socketState.connected"
      class="h-[31px] w-[31px] rounded-full bg-green-600"
    ></div>
    <div
      v-else="socketState"
      class="h-[31px] w-[31px] rounded-full bg-red-600"
    ></div>
  </div>
</template>
