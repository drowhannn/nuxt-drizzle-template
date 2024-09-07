import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import { env } from 'std-env'
import * as schema from '../db/schema'

const sql = neon(env.DRIZZLE_DATABASE_URL!)

let _db: ReturnType<typeof drizzle<typeof schema>>
export function useDb() {
  if (!_db) {
    _db = drizzle(sql, {
      schema,
    })
  }
  return _db
}
