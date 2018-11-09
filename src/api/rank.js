import { fetchWithAccessTokenV2 } from './fetchKF'

// rank
export const getCurrentUserRank = () =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2
      .get('/currentUserRank') // 'GET /api/v2/userRank'
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })

export const getFriendRank = () =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2
      .get('/friendRank') // friend list page --- 'GET /api/v2/ranks'
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })

export const getTeamRank = () =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2
      .get('/teamRank') // friend list page --- 'GET /api/v2/teams/:teamId/rank'
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })

export const getTeamRankDetail = () =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2
      .get('/teamRankDetail') // team detail page --- 'GET /api/v2/teams/:teamId'
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })

export const getFriendRankDetail = () =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2
      .get('/friendRankDetail') // friend detail page
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })
