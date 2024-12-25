import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
  state: () => ({
    isHamburgerOpen: false,
  }),
  actions: {
    toggleHamburger() {
      this.isHamburgerOpen = !this.isHamburgerOpen;
    },
    closeHamburger() {
      this.isHamburgerOpen = false;
    },
  },
});
