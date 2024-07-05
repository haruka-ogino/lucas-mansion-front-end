// import * as Path from 'node:path'
// import * as URL from 'node:url'

// const __filename = URL.fileURLToPath(import.meta.url)
// const __dirname = Path.dirname(__filename)

// export default {
//   development: {
//     client: 'sqlite3',
//     useNullAsDefault: true,
//     connection: {
//       filename:
//         'cakmirewsk.sqlite.cloud:8860?apikey=9EBCh20AqQr8VTEe9OWXXgfdSbR3wP2SrGvJuWMNe0U',
//     },
//     pool: {
//       afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
//     },
//     migrations: {
//       directory: Path.join(__dirname, 'migrations'),
//     },
//     seeds: {
//       directory: Path.join(__dirname, 'seeds'),
//     },
//   },

//   test: {
//     client: 'sqlite3',
//     useNullAsDefault: true,
//     connection: {
//       filename: ':memory:',
//     },
//     migrations: {
//       directory: Path.join(__dirname, 'migrations'),
//     },
//     seeds: {
//       directory: Path.join(__dirname, 'seeds'),
//     },
//     pool: {
//       afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
//     },
//   },

//   production: {
//     client: 'sqlite3',
//     useNullAsDefault: true,
//     connection: {
//       filename: '/app/storage/prod.sqlite3',
//     },
//     pool: {
//       afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
//     },
//   },
// }
