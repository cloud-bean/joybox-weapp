import { fetchWithAccessTokenV2 } from './fetchKF'

export const getFriendRank = () =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2('/friendRank', 'get') // friend list page --- 'GET /api/v2/ranks'
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })

export const getTeamRank = () =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2('/teamRank', 'get') // friend list page --- 'GET /api/v2/teams/:teamId/rank'
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })

export const getTeamRankDetail = () =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2('/teamRankDetail', 'get') // team detail page --- 'GET /api/v2/teams/:teamId'
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })

export const getFriendRankDetail = () =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2('/friendRankDetail', 'get') // friend detail page
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })
