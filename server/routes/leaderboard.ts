// import { Router } from 'express'
// import { addScores, getAllScores } from '../db/leaderboard'

// // backend call for get request

// const router = Router()

// router.get('/', async (req, res) => {
//   try {
//     const scores = await getAllScores()

//     const newScores = scores.map((score) => {
//       const time = score.time
//       const newMin = Math.floor(time / 60)
//       const newSec = time % 60
//       const newTime = `${newMin}min ${newSec}sec`
//       return { ...score, time: newTime }
//     })

//     res.json(newScores)
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching scores' })
//   }
// })

// // backend call for post request takes in player and time
// router.post('/add', async (req, res) => {
//   try {
//     const input = req.body
//     const scores = await addScores(input)
//     res.json(scores)
//   } catch (error) {
//     res.status(500).json({ message: 'Error adding scores' })
//   }
// })

// export default router

import express, { Request, Response } from 'express'
import { turso } from '../db/connection'
import { ScoreNumber } from '../../models/scores'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const result = await turso.execute('SELECT * FROM leaderboard')
    const scores = result.rows.sort((a, b) => Number(a.time) - Number(b.time))

    const newScores = scores.map((score) => {
      const time = Number(score.time)
      const newMin = Math.floor(time / 60)
      const newSec = time % 60
      const newTime = `${newMin}min ${newSec}sec`
      return { ...score, time: newTime }
    })

    res.json(newScores)
  } catch (error) {
    console.error('Error fetching leaderboard:', error)
    res.status(500).json({ error: 'Error fetching leaderboard' })
  }
})

export default router
