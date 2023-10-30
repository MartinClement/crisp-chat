<script lang="ts" setup>
import { ref } from "vue";

interface IBaseTextareaProps {
  name: string;
  modelValue: string;
  valid?: boolean;
  invalid?: boolean;
}

const nativeTextarea = ref<HTMLElement>();
const isFocus = ref<boolean>(false);
const forwardClick = () => {
  nativeTextarea.value && nativeTextarea.value.focus();
};
const handleFocus = (event: FocusEvent) => {
  isFocus.value = event.type === "focusin";
};

const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();
const handleInput = (event: Event): void => {
  const value = (event.target as HTMLInputElement).value;
  emit("update:modelValue", value);
};

withDefaults(defineProps<IBaseTextareaProps>(), {
  type: "text",
  modelValue: "",
  valid: false,
  invalid: false,
  disabled: false,
  placeholder: "Hey there !",
});
</script>

<template>
  <div
    class="align-center flex w-full flex-row gap-2 rounded-md border-2 border-solid border-blue-400 px-4 py-1"
    @click="forwardClick"
  >
    <slot name="before-textarea"></slot>
    <textarea
      class="borer-none focus:borer-none m-0 grow resize-none p-0 focus:outline-none"
      :id="name"
      :name="name"
      :value="modelValue"
      resi
      ref="nativeTextarea"
      @focusin="handleFocus"
      @focusout="handleFocus"
      @input="handleInput"
    />
    <slot name="after-textarea"></slot>
  </div>
</template>
