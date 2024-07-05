import { ScoreDraft } from '../../models/scores.ts'
import { turso } from './connection.ts'

export async function getAllScores() {
  const scores = await turso.execute('SELECT * FROM leaderboard')

  // const newScores = scores.rows.sort(Number(a.time) - Number(b.time))

  return scores
}

export async function addScores(score: ScoreDraft) {
  const query = `
    INSERT INTO leaderboard (name, time)
    VALUES (?, ?);`

  const args = [score.name, score.time] // Array of values to substitute placeholders

  try {
    const result = await turso.execute({ sql: query, args })
    return result // Depending on your needs, you may want to return result.lastInsertRowid or another value
  } catch (error) {
    console.error('Error executing query')
    throw error
  }
}
// import express, { Request, Response } from 'express'
// import { turso } from './connection' // Import the Turso client

// const router = express.Router()

// // GET /users route to fetch all users
// router.get('/', async (req: Request, res: Response) => {
//   try {
//     const result = await turso.execute('SELECT * FROM users')
//     console.log(result)

//     res.json(result) // Assuming result is an array of user objects
//   } catch (error) {
//     console.error('Error fetching users:', error)
//     res.status(500).json({ error: 'Error fetching users' })
//   }
// })
