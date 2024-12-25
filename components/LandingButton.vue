<script setup>
const props = defineProps({
  class: String,
  text: String,
  to: String,
});
</script>

<template>
  <nuxt-link v-if="props.to" :to="props.to" class="z-10">
    <button :class="props.class" class="p-2 px-7 rounded-full">
      <p class="text-background-900 font-quicksand text-base md:text-md">
        {{ props.text }}
      </p>
    </button>
  </nuxt-link>
</template>
