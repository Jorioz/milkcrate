<script setup>
import Hamburger from "components/Hamburger.vue";
import { useHomeStore } from "stores/home";

const homeStore = useHomeStore();
const isDesktop = ref(false);
const handleResize = () => {
  isDesktop.value = window.matchMedia("(min-width: 768px)").matches;
  if (isDesktop.value) {
    homeStore.closeHamburger();
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <div
    class="fixed w-full bg-background-900 z-20 transition duration-100 ease-in-out"
  >
    <nav
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <!--Desktop-->
      <div class="md:flex md:justify-start md:w-fit hidden">
        <nuxt-link to="/" class="z-10">
          <p class="font-rubik text-3xl text-primary-200">logo</p>
        </nuxt-link>
      </div>
      <div class="hidden md:flex absolute left-0 right-0 justify-center">
        <ul class="flex justify-around font-quicksand text-text-200 gap-5">
          <li>
            <a href="#" class="flex flex-grow px-5">features</a>
          </li>
          <li>
            <a href="#" class="flex flex-grow px-5">about</a>
          </li>
          <li><a href="#" class="flex flex-grow px-5">faq</a></li>
        </ul>
      </div>
      <div class="hidden md:flex justify-end">
        <LandingButton
          text="get started"
          class="bg-accent-300 hover:bg-accent-400 transition duratino-200 z-20"
          to="/get-started"
        />
      </div>

      <!--Mobile-->
      <div class="md:hidden flex w-full justify-start items-center z-30">
        <Hamburger />
        <div class="absolute left-0 right-0 h-full w-full">
          <div class="flex items-center justify-center h-full">
            <nuxt-link to="/" class="z-10" @click="homeStore.closeHamburger">
              <p class="font-rubik text-3xl text-primary-200">logo</p>
            </nuxt-link>
          </div>
        </div>
      </div>
      <!--Dropdown-->
      <div
        :class="[
          {
            'md:hidden absolute w-full bg-background-900 left-0 right-0 z-0 transition-all duration-150 ease-in-out p-4 rounded-b-xl drop-shadow-md': true,
            'top-16 opacity-100': homeStore.isHamburgerOpen,
            'top-0 opacity-0 pointer-events-none': !homeStore.isHamburgerOpen,
          },
        ]"
      >
        <div
          class="flex flex-col justify-center items-center text-text-200 font-quicksand text-center"
        >
          <ul>
            <li>
              <a href="#" class="flex justify-center p-3 border-b-[1px]"
                >features</a
              >
            </li>
            <li>
              <a href="#" class="flex justify-center p-3 border-b-[1px]"
                >about</a
              >
            </li>
            <li>
              <a href="#" class="flex justify-center p-3 border-b-[1px]">faq</a>
            </li>
            <li>
              <nuxt-link
                to="/get-started"
                class="flex justify-center p-3 text-accent-300"
                @click="homeStore.closeHamburger"
                >get started</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
