<script lang="ts" setup>
import { ref } from "vue";
import BaseInput from "../../../components/form/BaseInput.vue";
import BaseLabel from "../../../components/form/BaseLabel.vue";
import FormGroup from "../../../components/form/FormGroup.vue";
import BaseButton from "../../../components/button/BaseButton.vue";

interface LoginFormProps {
  onSubmit: (value: string) => any;
}

const props = withDefaults(defineProps<LoginFormProps>(), {
  onSubmit: () => ({}),
});

const roomName = ref("");
const handleSubmit = () => {
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
      <BaseButton @click="handleSubmit">
        Go !
      </BaseButton>
    </div>
  </form>
</template>
