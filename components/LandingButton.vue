<script setup>
import Spinner from "components/Spinner.vue";
const props = defineProps({
  class: String,
  text: String,
  to: String,
  loading: Boolean,
});
</script>

<template>
  <nuxt-link v-if="props.to" :to="props.to" class="z-10">
    <button :class="props.class" class="p-2 px-7 rounded-full">
      <p class="text-background-900 font-quicksand text-base md:text-md">
        <Spinner v-if="props.loading" />
        <span v-else>{{ props.text }}</span>
      </p>
    </button>
  </nuxt-link>
</template>
