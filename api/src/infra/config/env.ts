export const env = {
  stage: process.env.STAGE,
  port: Number(process.env.PORT) || 3002,
  http: {
    timeout: process.env.HTTP_TIMEOUT,
    maxAttempts: process.env.MAX_ATTEMPTS,
    baseDelayMs: process.env.DELAY_MS,
  },
  database: {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT) || 3306,
  },
}
