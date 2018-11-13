import { fetchWithAccessToken, fetchWithAccessTokenV2 } from './fetchKF'

// update avatar
export const setMemberAvatar = (id, data) => fetchWithAccessToken(`/users/${id}/change/avatar`, 'put', data)

// keep data
export const getKeepData = () =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2('/keep', 'get') // knapsack page --- 'GET /api/v2/keep'
      .then((result) => {
        if (result.data && (result.data.code === 'success')) {
          resolve(result.data.data)
        } else {
          resolve({})
        }
      })
      .catch((err) => {
        reject(err)
      })
  })

// rank
export const getCurrentUserRank = () =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2('/currentUserRank', 'get') // 'GET /api/v2/userRank'
      .then((result) => {
        if (result.data && (result.data.code === 'success')) {
          resolve({
            rank: result.data.data
          })
        } else {
          resolve({})
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
