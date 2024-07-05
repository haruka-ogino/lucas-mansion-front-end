// import { ScoreDraft } from '../../models/scores.ts'
// import db from './connection.ts'

// export async function getAllScores() {
//   const scores = await db('leaderboard').select()

//   const newScores = scores.sort((a, b) => a.time - b.time)

//   return newScores
// }

// export async function addScores(score: ScoreDraft) {
//   return await db('leaderboard').insert(score)
// }
import express, { Request, Response } from 'express'
import { turso } from './connection' // Import the Turso client

const router = express.Router()

// GET /users route to fetch all users
router.get('/', async (req: Request, res: Response) => {
  try {
    const result = await turso.execute('SELECT * FROM users')
    console.log(result)

    res.json(result) // Assuming result is an array of user objects
  } catch (error) {
    console.error('Error fetching users:', error)
    res.status(500).json({ error: 'Error fetching users' })
  }
})
