// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  css: ["~/assets/css/main.css"],
  build: {
    transpile: [/@syncfusion/],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // images that can start with https://ej2.syncfusion.com
  image: {
    domains: ["ej2.syncfusion.com"],
  },
});
