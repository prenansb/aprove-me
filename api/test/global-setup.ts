import { execSync } from 'node:child_process'
import { config } from 'dotenv'

config({ path: '.env.test' })

execSync('pnpm prisma migrate deploy')
