import { createClient } from '@libsql/client'
import dotenv from 'dotenv'
dotenv.config()

// Initialise the Turso client
const tursoDatabaseUrl = process.env.TURSO_DATABASE_URL as string
const tursoAuthToken = process.env.TURSO_AUTH_TOKEN as string

// Initialise the Turso client
export const turso = createClient({
  url: tursoDatabaseUrl,
  authToken: tursoAuthToken,
  // url: 'libsql://lucas-mansion-harukaogn.turso.io',
  // authToken:
  //   'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MjEzNTAyNzAsImlkIjoiMTJmZWE0YTEtYzM1MS00MDIwLWE1OGItNjM1NjQ2MGJmMDc4In0.LZ-v5jCYsaHJNXp60BGN8WqozGBDKIrxMtj4e6Ejl9HmecPvEnysLgAikRQgPIeOwkDHPJ0gVGYOZNCFtjiiDw',
})
