import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
  state: () => ({
    isHamburgerOpen: false,
    isProfileOpen: false,
  }),
  actions: {
    // Hamburger Menu
    toggleHamburger() {
      this.isHamburgerOpen = !this.isHamburgerOpen;
    },
    closeHamburger() {
      this.isHamburgerOpen = false;
    },

    // Profile Widget
    toggleProfile() {
      this.isProfileOpen = !this.isProfileOpen;
    },
    closeProfile() {
      this.isProfileOpen = false;
    },
  },
});
