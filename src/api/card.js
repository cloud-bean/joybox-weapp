import {fetchWithAccessToken} from './fetchKF'

export const submitCard = (data) => {
  return fetchWithAccessToken('/cards', 'POST', data)
  .then(res => res.data)
  .catch(console.log)
}

export const getCards = (page, limit) => {
  return fetchWithAccessToken(`/cards?page=${page}&limit=${limit}`, 'GET') // 默认20，不够用
  .then(res => res.data)
  .catch(console.log)
}
