import { addScores, getAllScores } from '../db/leaderboard'

import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const result = await getAllScores()
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

// backend call for post request takes in player and time
router.post('/add', async (req, res) => {
  try {
    const input = req.body
    const scores = await addScores(input)
    res.json(scores)
  } catch (error) {
    res.status(500).json({ message: 'Error adding scores' })
  }
})

export default router
