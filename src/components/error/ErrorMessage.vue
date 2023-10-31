<script lang="ts" setup>
interface IErrorMessageProps {
  message?: string;
}

withDefaults(defineProps<IErrorMessageProps>(), { message: "" });
</script>

<template>
  <div
    class="w-full rounded-md bg-red-400 p-4 font-bold text-white xl:mx-auto xl:max-w-app"
  >
    Error: {{ message }}
  </div>
</template>
