import { fetchWithAccessToken } from './fetchKF'

// timeline data
export const getAllTimelines = (page, limit) =>
  new Promise((resolve, reject) => {
    fetchWithAccessToken(`/timelines?page=${page}&limit=${limit}&sort=-created`, 'get')
      .then(result => {
        if (result.data && (result.data.code === 'success')) {
          resolve({
            timelines: result.data.data,
            totalCount: parseInt(result.header['x-total-items-count'], 10)
          })
        } else {
          resolve([])
        }
      })
      .catch(err => {
        reject(err)
      })
  })

// get the documents for news and tips.
export const getAllDocuments = (page, limit) =>
  new Promise((resolve, reject) => {
    fetchWithAccessToken(`/documents?page=${page}&limit=${limit}&sort=-created`, 'get')
      .then(result => {
        if (result.data && (result.data.code === 'success')) {
          resolve({
            documents: result.data.data,
            totalCount: parseInt(result.header['x-total-items-count'], 10)
          })
        } else {
          resolve([])
        }
      })
      .catch(err => {
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
    fetchWithAccessToken(`/timelines/${id}/addMessage`, 'post', {content})
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
