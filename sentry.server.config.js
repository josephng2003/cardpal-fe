import * as Sentry from '@sentry/astro'

Sentry.init({
  dsn: 'https://e73cf900080853b41525e764e103a33a@o4510443366449152.ingest.us.sentry.io/4511661077299200',
  dataCollection: {
    // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#dataCollection
    // userInfo: false,
    // httpBodies: [],
  },
  // Enable logs to be sent to Sentry
  enableLogs: true,
  // Define how likely traces are sampled. Adjust this value in production,
  // or use tracesSampler for greater control.
  tracesSampleRate: 1.0,
})
