<script setup>
import { ref, onMounted } from "vue";
import { useHomeStore } from "stores/home";
const homeStore = useHomeStore();
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const isLoggedIn = ref(false);

if (!user.value) {
  isLoggedIn.value = false;
} else {
  isLoggedIn.value = true;
}

const logout = async () => {
  await supabase.auth.signOut();
  isLoggedIn.value = false;
};
</script>

<template>
  <div v-if="isLoggedIn" class="relative">
    <button
      class="bg-background-700 rounded-full flex z-10 hover:scale-110 transition-transform duration-200 items-center justify-center h-10 w-auto p-1 aspect-square"
      @click="homeStore.toggleProfile"
    >
      <div
        class="bg-secondary-300 rounded-full w-7 h-auto aspect-square flex justify-center items-center"
      >
        <Icon name="uil-user" />
      </div>
    </button>
    <div
      v-if="homeStore.isProfileOpen"
      class="absolute top-full mt-2 right-0 bg-background-100 rounded shadow-lg w-48"
    >
      <ul class="py-2 font-quicksand text-text-950">
        <li class="px-4 py-2 hover:bg-background-200 cursor-pointer">
          Profile »
        </li>
        <li
          class="px-4 py-2 hover:bg-background-200 cursor-pointer"
          @click="logout"
        >
          Logout »
        </li>
      </ul>
    </div>
  </div>
</template>
