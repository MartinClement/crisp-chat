<script lang="ts" setup>
import { ref } from "vue";
import BaseInput from "../../../components/form/BaseInput.vue";
import BaseLabel from "../../../components/form/BaseLabel.vue";
import FormGroup from "../../../components/form/FormGroup.vue";

interface LoginFormProps {
  onSubmit: (value: string) => any;
}

const props = withDefaults(defineProps<LoginFormProps>(), {
  onSubmit: () => ({}),
});

const roomName = ref("");
const handleSubmit = () => {
  alert(roomName.value);
  props.onSubmit(roomName.value);
};
</script>

<template>
  <form class="flex flex-col gap-2">
    <FormGroup>
      <BaseLabel target="room_input">Room Name</BaseLabel>
      <BaseInput name="room_input" v-model="roomName"></BaseInput>
    </FormGroup>
    <div>
      <button
        type="button"
        class="w-full rounded-md bg-green-300 p-2"
        @click="handleSubmit"
      >
        Go !
      </button>
    </div>
  </form>
</template>
