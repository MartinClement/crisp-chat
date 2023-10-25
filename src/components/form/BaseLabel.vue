<script lang="ts" setup>
export interface BaseLabelProps {
  target: string;
}
defineProps<BaseLabelProps>();
</script>

<template>
  <div class="m-0 p-0 text-base text-black">
    <label :for="target"><slot></slot></label>
  </div>
</template>
