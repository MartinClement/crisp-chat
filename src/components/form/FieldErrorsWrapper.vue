<script setup lang="ts">
import { computed } from "vue";
import translations from "../../translations";

interface IFieldErrorsWrapper {
  errors?: string[];
  singleMode?: boolean;
}

const props = withDefaults(defineProps<IFieldErrorsWrapper>(), {
  errors: () => [],
  singleMode: true,
});

const displayedErrors = computed(() => {
  return props.errors.length > 0 && props.singleMode
    ? [props.errors[0]]
    : props.errors;
});

const errorMessages = computed(() => {
  return displayedErrors.value.map(
    (error) => translations.form.errors[error] ?? error,
  );
});
</script>

<template>
  <div class="flex flex-col gap-1">
    <div
      class="text-sm text-red-400"
      v-for="(errMsg, i) in errorMessages"
      :key="i"
    >
      {{ errMsg }}
    </div>
  </div>
</template>
