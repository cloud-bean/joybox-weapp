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

export const upvoteActivity = id =>
  new Promise((resolve, reject) => {
    fetchWithAccessToken(`/timelines/${id}/addUpVote`, 'post')
      .then(result => {
        if (result.data && (result.data.code === 'success')) {
          resolve(result.data.data)
        } else {
          resolve({})
        }
      })
      .catch(err => {
        reject(err)
      })
  })

export const addMsgToActivity = (id, content) =>
  new Promise((resolve, reject) => {
    fetchWithAccessToken(`/timelines/${id}/addMessage`, 'post', content)
      .then(result => {
        if (result.data && (result.data.code === 'success')) {
          resolve(result.data.data)
        } else {
          resolve({})
        }
        resolve(result)
      })
      .catch(err => {
        reject(err)
      })
  })
