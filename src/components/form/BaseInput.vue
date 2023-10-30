<script lang="ts" setup>
import { ref } from "vue";

interface BaseInputProps {
  name: string;
  modelValue: string;
  type?: "text" | "password";
  valid?: boolean;
  invalid?: boolean;
}

const nativeInput = ref<HTMLElement>();
const isFocus = ref<boolean>(false);
const forwardClick = () => {
  console.log("click");
  nativeInput.value && nativeInput.value.focus();
};
const handleFocus = (event: FocusEvent) => {
  isFocus.value = event.type === "focusin";
};

const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();
const handleInput = (event: Event): void => {
  const value = (event.target as HTMLInputElement).value;
  emit("update:modelValue", value);
};

withDefaults(defineProps<BaseInputProps>(), {
  type: "text",
  modelValue: "",
  valid: false,
  invalid: false,
  disabled: false,
  placeholder: "...",
});
</script>

<template>
  <div
    class="align-center flex w-full flex-row gap-2 rounded-md border-2 border-solid border-blue-400 px-4 py-1"
    @click="forwardClick"
  >
    <slot name="before-input"></slot>
    <input
      class="borer-none focus:borer-none m-0 grow p-0 focus:outline-none"
      :id="name"
      :name="name"
      :type="type"
      ref="nativeInput"
      @focusin="handleFocus"
      @focusout="handleFocus"
      @input="handleInput"
    />
    <slot name="after-input"></slot>
  </div>
</template>
