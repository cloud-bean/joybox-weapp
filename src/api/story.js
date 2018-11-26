import {fetchWithAccessToken} from './fetchKF'

export const getStories = (page, limit) =>
  new Promise((resolve, reject) => {
    fetchWithAccessToken(`/instances?page=${page}&limit=${limit}`, 'GET')
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
