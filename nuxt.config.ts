// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "@vite-pwa/nuxt",
    "@nuxtjs/turnstile",
    "@pinia/nuxt",
    "motion-v/nuxt"
  ],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Nuxt Starter", // default fallback title
      htmlAttrs: {
        lang: "en"
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/logo.svg" }]
    },
    pageTransition: { name: "page", mode: "out-in" }
  },

  runtimeConfig: {
    turnstile: {
      // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
      // environment variable.
      secretKey: ""
    }
  }
});
