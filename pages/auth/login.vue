<script setup>
import { ref } from "vue";
import { useAuthStore } from "stores/auth";
import LoginForm from "components/auth/LoginForm.vue";
import OTPForm from "components/auth/OTPForm.vue";
definePageMeta({
  path: "/login",
});
// 1 for email input, 2 for OTP input
const stage = ref(1);
const authStore = useAuthStore();
const email = ref(authStore.email);

const updateStage = (newStage) => {
  stage.value = newStage;
};
</script>

<template>
  <div
    class="min-h-svh bg-background-900 flex flex-col items-center justify-center px-2 md:px-0 pt-20 md:pb-20"
  >
    <slot :stage="stage" :email="email" :updateStage="updateStage">
      <LoginForm v-if="stage === 1" :email="email" :updateStage="updateStage" />
      <OTPForm v-else-if="stage === 2" :email="email" />
    </slot>
  </div>
</template>
