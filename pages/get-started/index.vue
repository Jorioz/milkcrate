<script setup>
import ServiceWidget from "components/ServiceWidget.vue";
import LandingButton from "components/LandingButton.vue";
</script>
<template>
  <!--Body-->

  <div
    class="min-h-svh bg-background-900 flex flex-col items-center px-2 md:px-0 pt-16"
  >
    <!--Title-->
    <div class="w-full flex flex-col items-center py-10 gap-2">
      <h1
        class="text-accent-200 font-rubik text-3xl md:text-5xl text-center tracking-tighter"
      >
        Take your pick.
      </h1>
      <p class="text-center text-text-200 text-base md:text-lg font-quicksand">
        Connect with your favorite music services, or create a new milkcrate
        account.
      </p>
    </div>
    <!--Services-->
    <div
      class="max-w-screen-sm w-full flex flex-wrap md:flex-nowrap md:gap-5 md:justify-evenly p-2 gap-2"
    >
      <ServiceWidget
        service="spotify"
        description="Spotify"
        to="/login?provider=spotify"
      />

      <ServiceWidget service="applemusic" description="Apple Music" />

      <ServiceWidget
        service="discogs"
        description="Discogs"
        to="/login?provider=discogs"
      />
    </div>
    <div class="w-full flex items-center justify-center p-10">
      <LandingButton
        text="Create An Account"
        class="bg-primary-200 hover:bg-accent-400 transition duration-200"
        to="/#"
      />
    </div>
    <a
      href="#"
      class="text-accent-300 hover:text-text-100 duration-200 font-quicksand text-sm"
      >learn more about auth & how we use your data »</a
    >
  </div>
</template>
