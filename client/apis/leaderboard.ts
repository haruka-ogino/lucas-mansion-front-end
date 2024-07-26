import request from 'superagent'
import { ScoreDraft } from '../../models/scores'

const rootUrl = 'https://lucas-mansion-server.vercel.app'
export function getLeaderboard() {
  try {
    return request.get(rootUrl + '/leaderboard').then((res) => {
      return res.body
    })
  } catch (e) {
    console.error(e)
  }
}

// post reqeust send player and time

export async function addScores(score: ScoreDraft) {
  try {
    const res = await request.post(rootUrl + '/leaderboard/add').send(score)
    return res.body
  } catch (e) {
    console.error(e)
    // 'you are encountering an error'
  }
}
