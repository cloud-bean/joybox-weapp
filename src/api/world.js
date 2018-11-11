import {fetchWithAccessToken} from './fetchKF'

// get the news.
export const getNews = () =>
  new Promise((resolve, reject) => {
    fetchWithAccessToken
      .get('/documents')
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })
