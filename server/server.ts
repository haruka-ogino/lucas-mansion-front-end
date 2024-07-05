import express from 'express'
import * as Path from 'path'

import leaderboardRoutes from './routes/leaderboard'

const server = express()

// Middleware to parse JSON request bodies
server.use(express.json())

// Use leaderboard routes
server.use('/api/v1/leaderboard', leaderboardRoutes)

// Serve static assets and index.html in production
if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
