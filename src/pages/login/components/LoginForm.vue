<script lang="ts" setup>
import { ref } from "vue";
import BaseInput from "../../../components/form/BaseInput.vue";
import BaseLabel from "../../../components/form/BaseLabel.vue";
import FormGroup from "../../../components/form/FormGroup.vue";

interface LoginFormProps {
  onSubmit: ({ login, password }: { login: string; password: string }) => any;
}

const props = withDefaults(defineProps<LoginFormProps>(), {
  onSubmit: () => ({}),
});

const login = ref("");
const password = ref("");

const handleSubmit = () => {
  props.onSubmit({ login: login.value, password: password.value });
};
</script>

<template>
  <form class="flex flex-col gap-2">
    <FormGroup>
      <BaseLabel target="login_input">Login</BaseLabel>
      <BaseInput name="login_input" v-model="login">
        <template #before-input>
          <span>O</span>
        </template>
      </BaseInput>
    </FormGroup>
    <FormGroup>
      <BaseLabel target="password_input">Password</BaseLabel>
      <BaseInput name="password_input" v-model="password" type="password">
        <template #before-input>
          <span>O</span>
        </template>
      </BaseInput>
    </FormGroup>
    <div class="text-right">
      <button
        type="button"
        class="w-full rounded-md bg-green-300 p-2"
        @click="handleSubmit"
      >
        Login
      </button>
    </div>
  </form>
</template>
