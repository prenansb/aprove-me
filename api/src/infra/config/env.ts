export const env = {
  port: Number(process.env.PORT) || 3333,
  database: {
    url: process.env.DATABASE_URL,
  },
  jwt_secret: process.env.JWT_SECRET,
}
