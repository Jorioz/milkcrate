<script setup>
import LandingButton from "components/LandingButton.vue";
definePageMeta({
  path: "/register",
});

const email = ref("");
const username = ref("");
const emailError = ref(false);
const usernameError = ref(false);

const isUsernameEmpty = ref(false);
const isEmailEmpty = ref(false);

// Check for any empty fields. If not run checkUser
const submitAndVerify = () => {
  if (username.value === "") {
    isUsernameEmpty.value = true;
  } else {
    isUsernameEmpty.value = false;
  }
  if (email.value === "") {
    isEmailEmpty.value = true;
  } else {
    isEmailEmpty.value = false;
  }

  if (!isUsernameEmpty.value && !isEmailEmpty.value) {
    checkUser();
  }
};

// Make request to api to check db for username and email existence
const checkUser = async () => {
  try {
    const response = await fetch("/api/auth/isUserAlreadyExist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email.value, username: username.value }),
    });
    const result = await response.json();
    emailError.value = result.isEmailExist;
    usernameError.value = result.isUsernameExist;
    //Debug
    console.log(result);

    // Register if there are no issues
    if (!emailError.value && !usernameError.value) {
      registerUser();
    }
  } catch (error) {
    console.error("Error Checking for users:", error);
  }
};

const registerUser = async () => {
  try {
    response = await fetch("/api/auth/createNewUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email.value, username: username.value }),
    });
    const result = await response.json();
    if (result.success) {
      console.log("Request sent");
    } else {
      console.error("Error Creating new User:", result.error);
    }
  } catch (error) {
    console.error("Error Creating new User:", error);
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
        sign up
      </h2>
      <form
        @submit.prevent="submitAndVerify"
        class="w-full flex flex-col gap-5 p-5"
      >
        <div class="relative w-full">
          <p
            v-if="isUsernameEmpty"
            class="absolute -top-5 left-3 text-red-500 text-sm"
          >
            field cannot be empty
          </p>
          <p
            v-if="usernameError"
            class="absolute -top-5 left-3 text-red-500 text-sm"
          >
            username already exists
          </p>
          <input
            :class="[
              'rounded-full w-full bg-background-600 p-3 outline-2 placeholder-text-200 text-text-50 font-quicksand',
              { 'outline outline-red-500': usernameError },
            ]"
            type="text"
            v-model="username"
            placeholder="username"
          />
        </div>
        <div class="relative w-full">
          <p
            v-if="isEmailEmpty"
            class="absolute -top-5 left-3 text-red-500 text-sm"
          >
            field cannot be empty
          </p>
          <p
            v-if="emailError"
            class="absolute -top-5 left-3 text-red-500 text-sm"
          >
            email already in use. try signing in.
          </p>
          <input
            :class="[
              'rounded-full w-full bg-background-600 p-3 outline-2 placeholder-text-200 text-text-50 font-quicksand',
              { 'outline outline-red-500': emailError },
            ]"
            type="text"
            v-model="email"
            placeholder="email address"
          />
        </div>
        <p class="text-xs font-quicksand text-background-500 text-center">
          A confirmation email will be sent to your email after signing up.
        </p>
      </form>
      <LandingButton
        text="sign up"
        class="bg-primary-200 hover:bg-accent-400 transition duration-200 px-20"
        to="javascript:void(0)"
        @click="submitAndVerify"
      />
      <NuxtLink to="/login" class="text-secondary-300 hover:text-white">
        already have an account? sign in here.
      </NuxtLink>
    </div>
  </div>
</template>
