export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('leaderboard').del()

  // Inserts seed entries
  await knex('leaderboard').insert([
    { id: 1, name: 'LUCAS', time: 1323 },
    { id: 2, name: 'SONIA', time: 1265 },
    { id: 3, name: 'PRASH', time: 1276 },
    { id: 4, name: 'HARUKA', time: 1372 },
    { id: 5, name: 'DARRAGH', time: 1382 },
    { id: 6, name: 'MOA', time: 1320 },
  ])
}
