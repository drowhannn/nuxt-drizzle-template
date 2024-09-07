import { pgTable, serial } from 'drizzle-orm/pg-core'

export const temp = pgTable('temp', {
  id: serial('id').primaryKey(),
})
