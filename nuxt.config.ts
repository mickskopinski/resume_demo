import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/image", "@nuxt/fonts"],
  css: ["~/assets/css/main.css"],
  fonts: {
    families: [
      {
        name: "Inter",
        provider: "google",
        weights: [400, 500, 600, 700],
      },
    ],
  },
  image: {
    dir: "assets/images",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
