import path from 'path'
import url from 'node:url'
import dotenv from 'dotenv'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '../.env') })
const tursoDatabaseUrl = process.env.TURSO_DATABASE_URL as string
const tursoAuthToken = process.env.TURSO_AUTH_TOKEN as string

console.log(tursoDatabaseUrl, tursoAuthToken)

import server from './server.ts'

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', PORT)
})
