import {fetchWithAccessTokenV2} from './fetchKF'

// shop
export const getAllGoods = () =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2
      .get('/goods')
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })

export const buyGood = data =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2
      .post('/buyGood', data)
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })
