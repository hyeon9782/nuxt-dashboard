// https://nuxt.com/docs/api/configuration/nuxt-config ;
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@vueuse/nuxt", "@nuxt/content", "@pinia/nuxt"],
  // routeRules: {
  //   "/": { prerender: true },
  //   "/my-profile": { static: true },
  //   "/login": { swr: 3600 },
  //   "/events": { ssr: true },
  //   "/api/**": { cors: true },
  //   "/old-page": { redirect: "/new-page" },
  // },
  ssr: false,
});
