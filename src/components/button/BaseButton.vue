<script lang="ts" setup>
interface IBaseButtonProps {
  kind?: "red" | "blue";
  type?: "button" | "submit" | "reset";
}

withDefaults(defineProps<IBaseButtonProps>(), { kind: "blue", type: "button" });
</script>

<template>
  <button
    :type="type"
    class="w-full rounded-md px-4 py-2 font-bold text-white disabled:cursor-not-allowed disabled:text-gray-300"
    :class="kind === 'red' ? 'bg-red-400' : 'bg-blue-400'"
  >
    <slot></slot>
  </button>
</template>
