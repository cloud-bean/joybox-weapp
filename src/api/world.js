import {fetchWithAccessToken} from './fetchKF'

<<<<<<< HEAD
// get the news.
export const getNews = (page, limit) =>
  new Promise((resolve, reject) => {
    fetchWithAccessToken(`/documents?page=${page}&limit=${limit}`, 'get')
      .then((result) => {
        resolve({
          data: result.data.data,
          totalCount: result.header['x-total-items-count']
        })
=======
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
>>>>>>> fd759a8a153087a9d1a4b9402d4378405b1fe2d5
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
