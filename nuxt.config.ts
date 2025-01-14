// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  googleFonts: {
    families: {
      "Rubik Mono One": true,
      Quicksand: [400, 500, 700],
    },
  },

  modules: [
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "@nuxt/icon",
    "@nuxtjs/supabase",
  ],

  alias: {
    components: "@/components",
    stores: "@/stores",
  },

  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      include: ["/verified"],
      exclude: ["/", "/register", "/login"],
      cookieRedirect: false,
    },
  },
});
