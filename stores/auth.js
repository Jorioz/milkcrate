// Stores basic auth data for a user for access across components
import { defineStore } from "pinia";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    email: "",
  }),
  actions: {
    setEmail(newEmail) {
      this.email = newEmail;
    },
  },
});
