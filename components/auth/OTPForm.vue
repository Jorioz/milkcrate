<script setup>
import { ref } from "vue";
import { useAuthStore } from "stores/auth";

const authStore = useAuthStore();
const email = ref(authStore.email);

if (email) {
  console.log("Email:", email);
} else {
  console.error("No email provided");
}

// supabase & auth
const supabase = useSupabaseClient();
const hasCheckedOTP = ref(false);
const isValidOTP = ref(false);

const handleOtp = (error) => {
  if (error) {
    console.error("Error verifying OTP:", error.message);
    hasCheckedOTP.value = true;
    isValidOTP.value = false;
  } else {
    console.log("OTP verified");
    hasCheckedOTP.value = true;
    isValidOTP.value = true;
    setTimeout(() => {
      // change to handleLogin to create new session and user
      navigateTo("/");
    }, 1500);
  }
};

const verifyOtp = async () => {
  const { error } = await supabase.auth.verifyOtp({
    email: email.value,
    token: otp.value.join(""),
    type: "email",
  });
  if (error) {
    handleOtp(error);
  } else {
    handleOtp(null);
  }
};

const resendOtp = async () => {
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
      console.log("OTP resent");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

// Form input
const otp = ref(["", "", "", "", "", ""]);
const currentFocus = ref(0);
const currentFormIndex = ref(0);

const handleClick = (index) => {
  currentFormIndex.value = index;
};

const handleInput = (event, index) => {
  const value = event.target.value.slice(0, 1);
  otp.value[index] = value;

  if (value && index < otp.value.length - 1) {
    currentFocus.value = index + 1;
    document.querySelectorAll("input")[currentFocus.value].focus();
  }
  if (otp.value.join("").length === 6) {
    verifyOtp();
  }
};

const handleBackspace = (event, index) => {
  if (event.key === "Backspace" && !otp.value[index] && index > 0) {
    currentFocus.value = index - 1;
    document.querySelectorAll("input")[currentFocus.value].focus();
  }
};
</script>

<template>
  <div
    class="min-h-svh bg-background-900 flex flex-col items-center justify-center px-2 md:px-0 pt-20 md:pb-20"
  >
    <div
      class="flex flex-col items-center py-10 gap-2 md:w-96 w-full bg-background-800 rounded-lg drop"
    >
      <h1 class="font-rubik text-text-200">milkcrate</h1>
      <h2
        class="text-accent-200 font-quicksand text-2xl md:text-4xl text-center tracking-tighter w-full"
      >
        confirmation
      </h2>
      <p class="font-quicksand text-background-500 text-center">
        Enter the code that was sent to
        <br />
        <span class="text-text-200">{{ email }}</span>
      </p>
      <form class="w-full flex flex-wrap gap-3 p-5">
        <input
          v-for="(value, index) in otp"
          :key="index"
          :class="[
            'rounded-lg bg-background-600 p-3 placeholder-text-200 text-text-50 font-quicksand flex-1 min-w-0 max-w-12 text-center text-xl cursor-pointer ',
            {
              'outline outline-red-500 outline-2': hasCheckedOTP && !isValidOTP,
            },
            {
              'outline outline-green-500 outline-2':
                hasCheckedOTP && isValidOTP,
            },
          ]"
          type="text"
          :value="otp[index]"
          @click="handleClick(index)"
          @input="handleInput($event, index)"
          @keydown="handleBackspace($event, index)"
          maxlength="1"
        />
      </form>
      <LandingButton
        text="resend code"
        class="bg-primary-200 hover:bg-accent-400 transition duration-200 px-20"
        to="javascript:void(0)"
        @click="resendOtp"
      />
      <NuxtLink to="/login" class="text-secondary-300 hover:text-white">
        wrong email? click here to go back.
      </NuxtLink>
    </div>
  </div>
</template>
