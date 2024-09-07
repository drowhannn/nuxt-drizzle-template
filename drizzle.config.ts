import { defineConfig } from 'drizzle-kit'
import { env } from 'std-env'

if (!env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set in the environment')
}

export default defineConfig({
  schema: './server/db/schema/index.ts',
  out: './server/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
})
