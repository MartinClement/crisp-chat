<script lang="ts" setup>
import BaseInput from "../../../components/form/BaseInput.vue";
import BaseLabel from "../../../components/form/BaseLabel.vue";
import FormGroup from "../../../components/form/FormGroup.vue";
import BaseButton from "../../../components/button/BaseButton.vue";
import FieldErrorsWrapper from "../../../components/form/FieldErrorsWrapper.vue";

import { useFormState } from "../../../composable/formState";

interface LoginFormProps {
  onSubmit: (value: string) => any;
  canSubmit: boolean;
}

const props = withDefaults(defineProps<LoginFormProps>(), {
  onSubmit: () => ({}),
  canSubmit: true,
});

const { roomName, set } = useFormState(
  { roomName: "" },
  {
    roomName: {
      alphaCharOnly: (value) => /^[a-zA-Z0-9]*$/.test(value),
      minLength: (value) => value.length > 5,
      maxLength: (value) => value.length < 25,
    },
  },
);
const updateRoomName = set("roomName");

const handleSubmit = () => {
  props.onSubmit(roomName.value.value);
};
</script>

<template>
  <form
    class="py-xl flex flex-col gap-2 rounded-md border-2 border-blue-400 bg-white px-10 py-20"
    @submit.prevent="handleSubmit"
  >
    <h2 class="text-2xl font-bold text-blue-400">Let's chat!</h2>
    <FormGroup>
      <BaseLabel target="room_input">Room Name</BaseLabel>
      <BaseInput
        name="room_input"
        :valid="roomName.valid"
        :invalid="roomName.invalid"
        :model-value="roomName.value"
        @update:model-value="updateRoomName"
      ></BaseInput>
      <FieldErrorsWrapper :errors="roomName.errors" />
    </FormGroup>
    <div>
      <BaseButton @click="handleSubmit" :disabled="!canSubmit">Go !</BaseButton>
    </div>
  </form>
</template>
