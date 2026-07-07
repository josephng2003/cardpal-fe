// @ts-check
import { defineConfig } from 'astro/config'
import sentry from '@sentry/astro'
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sentry({
      project: 'cardpal',
      org: 'decoteam',
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
    react(),
  ],
})
