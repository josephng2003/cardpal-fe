// @ts-check
import { defineConfig } from 'astro/config'
import sentry from '@sentry/astro'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [
    sentry({
      project: 'cardpal',
      org: 'decoteam',
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
    react(),
  ],
})
