<script setup>
import { ref } from "vue";
import { useAuthStore } from "stores/auth";
import LandingButton from "components/LandingButton.vue";
const authStore = useAuthStore();
const props = defineProps({
  updateStage: {
    type: Function,
    required: true,
  },
});

const email = ref(authStore.email);

const hasEnteredEmail = ref(false);
const isEmail = ref(false);

const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  isEmail.value = emailPattern.test(email.value);
};

const signInWithOtp = async () => {
  hasEnteredEmail.value = true;
  validateEmail();
  if (!isEmail.value) {
    console.error("Empty or invalid email");
    return;
  }
  try {
    const response = await fetch("/api/auth/loginWithOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email.value }),
    });
    const result = await response.json();
    if (result.error) {
      console.error("Error:", result.error);
    } else {
      authStore.setEmail(email.value);
      props.updateStage(2);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
</script>

<template>
  <div
    class="flex flex-col items-center py-10 gap-2 md:w-96 w-full bg-background-800 rounded-lg"
  >
    <h1 class="font-rubik text-text-200">milkcrate</h1>
    <h2
      class="text-accent-200 font-quicksand text-2xl md:text-4xl text-center tracking-tighter w-full"
    >
      login
    </h2>
    <form class="w-full flex flex-col gap-2 p-5">
      <input
        :class="[
          'rounded-full bg-background-600 p-3 placeholder-text-200 text-text-50 font-quicksand',
          { 'outline outline-red-500': !isEmail && hasEnteredEmail },
        ]"
        v-model="email"
        type="email"
        placeholder="email address"
      />
      <p class="text-xs font-quicksand text-background-500 text-center">
        a one-time password (OTP) code will be emailed to you.
      </p>
    </form>
    <LandingButton
      text="login"
      class="bg-primary-200 hover:bg-accent-400 transition duration-200 px-20"
      @click="signInWithOtp"
      to="javascript:void(0);"
      :loading="isEmail"
    >
    </LandingButton>

    <NuxtLink to="/register" class="text-secondary-300 hover:text-white">
      don't have an account? register here.
    </NuxtLink>
  </div>
</template>
