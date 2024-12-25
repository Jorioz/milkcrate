<script setup>
import { useHomeStore } from "stores/home";
const homeStore = useHomeStore();
</script>

<template>
  <button
    @click="homeStore.toggleHamburger"
    aria-label="Toggle Hamburger Menu"
    :class="[
      {
        'relative h-auto aspect-square w-9 flex items-center justify-center rounded-full z-30 transition ease-in-out duration-100 touch-manipulation': true,
        'bg-accent-300': !homeStore.isHamburgerOpen,
        'bg-background-900': homeStore.isHamburgerOpen,
      },
    ]"
  >
    <div class="space-y-1">
      <span
        :class="[
          'block h-0.5 w-5 transform ease-in-out duration-100 rounded-full ',
          {
            'rotate-45 translate-y-1.5 bg-accent-300':
              homeStore.isHamburgerOpen,
          },
          { 'bg-background-900': !homeStore.isHamburgerOpen },
        ]"
      ></span>
      <span
        :class="[
          'block h-0.5 w-5 bg-background-900 transform ease-in-out duration-100 rounded-full',
          { 'opacity-0': homeStore.isHamburgerOpen },
        ]"
      ></span>
      <span
        :class="[
          'block h-0.5 w-5  transform ease-in-out duration-100 rounded-full',
          {
            '-rotate-45 -translate-y-1.5 bg-accent-300':
              homeStore.isHamburgerOpen,
          },
          { 'bg-background-900': !homeStore.isHamburgerOpen },
        ]"
      ></span>
    </div>
  </button>
</template>
