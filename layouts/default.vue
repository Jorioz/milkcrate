<script setup>
import HomeNavbar from "components/HomeNavbar.vue";
import HomeFooter from "components/HomeFooter.vue";
</script>

<template>
  <div>
    <HomeNavbar />
    <div class="pt-0">
      <slot />
    </div>
    <HomeFooter />
  </div>
</template>
