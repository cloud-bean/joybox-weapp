import {fetchWithAccessToken} from './fetchKF'

// get the news.
export const getNews = (page, limit) =>
  new Promise((resolve, reject) => {
    fetchWithAccessToken(`/documents?page=${page}&limit=${limit}`, 'get')
      .then((result) => {
        resolve({
          data: result.data.data,
          totalCount: result.header['x-total-items-count']
        })
      })
      .catch((err) => {
        reject(err)
      })
  })
