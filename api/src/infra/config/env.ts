export const env = {
  stage: process.env.STAGE,
  port: Number(process.env.PORT) || 3333,
  http: {
    timeout: process.env.HTTP_TIMEOUT,
    maxAttempts: process.env.MAX_ATTEMPTS,
    baseDelayMs: process.env.DELAY_MS,
  },
  database: {
    url: process.env.DATABASE_URL,
  },
}
