<script setup>
import LandingButton from "components/LandingButton.vue";
import { onMounted } from "vue";
const supabase = useSupabaseClient();
definePageMeta({
  path: "/verified",
});

// Redirect to login if no access token
onMounted(async () => {
  const route = useRoute();
  const { access_token } = route.query;

  try {
    const response = await fetch("/api/auth/verifyTokenHash", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tokenHash: access_token }),
    });
    const result = await response.json();

    if (!result) {
      navigateTo("/login");
    }
  } catch (error) {
    console.error("Error:", error);
    navigateTo("/login");
  }
});
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
        account verified!
      </h2>
      <p class="font-quicksand text-center p-3 text-text-100">
        thanks for verifying your account, click the button below to access your
        profile.
      </p>

      <LandingButton
        text="Access Profile"
        class="bg-primary-200 hover:bg-accent-400 transition duration-200 px-20"
        to="javascript:void(0)"
      />
    </div>
  </div>
</template>
