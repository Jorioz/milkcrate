<script setup>
definePageMeta({
  path: "/confirm",
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
        confirmation
      </h2>
      <p class="font-quicksand text-background-500 text-center">
        Enter the code that was sent to
        <br />
        <span class="text-text-200">{{ email }}</span>
      </p>
      <form class="w-full flex flex-wrap gap-5 p-5">
        <input
          class="rounded-lg bg-background-600 p-3 placeholder-text-200 text-text-50 font-quicksand flex-1 min-w-0 text-center text-xl cursor-pointer"
          type="text"
        />
        <input
          class="rounded-lg bg-background-600 p-3 placeholder-text-200 text-text-50 font-quicksand flex-1 min-w-0 text-center text-xl cursor-pointer"
          type="text"
        />
        <input
          class="rounded-lg bg-background-600 p-3 placeholder-text-200 text-text-50 font-quicksand flex-1 min-w-0 text-center text-xl cursor-pointer"
          type="text"
        />
        <input
          class="rounded-lg bg-background-600 p-3 placeholder-text-200 text-text-50 font-quicksand flex-1 min-w-0 text-center text-xl cursor-pointer"
          type="text"
        />
        <input
          class="rounded-lg bg-background-600 p-3 placeholder-text-200 text-text-50 font-quicksand flex-1 min-w-0 text-center text-xl cursor-pointer"
          type="text"
        />
        <input
          class="rounded-lg bg-background-600 p-3 placeholder-text-200 text-text-50 font-quicksand flex-1 min-w-0 text-center text-xl cursor-pointer"
          type="text"
        />
      </form>
      <LandingButton
        text="resend code"
        class="bg-primary-200 hover:bg-accent-400 transition duration-200 px-20"
        to="/#"
      />
      <NuxtLink to="/login" class="text-secondary-300 hover:text-white">
        wrong email? click here to go back.
      </NuxtLink>
    </div>
  </div>
</template>
