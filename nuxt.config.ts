// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  modules: ['@nuxt/ui', '@nuxt/eslint'],

  eslint: {
    config: {
      stylistic: true,
      standalone: false,
    },
  },
})
