import { ScoreDraft } from '../../models/scores.ts'
import { turso } from './connection.ts'

export async function getAllScores() {
  const scores = await turso.execute('SELECT * FROM leaderboard')

  return scores
}

export async function addScores(score: ScoreDraft) {
  const query = `
    INSERT INTO leaderboard (name, time)
    VALUES (?, ?);`

  const args = [score.name, score.time]

  try {
    const result = await turso.execute({ sql: query, args })
    return result
  } catch (error) {
    console.error('Error executing query')
    throw error
  }
}
