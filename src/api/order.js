import {fetchWithAccessToken} from './fetchKF'

export const submitOrder = (taskId, serverId, type) => {
  let data = {
    task: taskId,
    file: {
      filename: serverId,
      URL: serverId,
      type, // 0: image; 1: audio; 2: video
      created: Date.now()
    }
  }
  return fetchWithAccessToken('/orders', 'POST', data)
    .then(res => res.data)
    .catch(console.log)
}

export const getOrders = () =>
fetchWithAccessToken('/orders?limit=200', 'GET') // 默认20，不够用
.then(res => res.data)
.catch(console.log)

export const setScore = (score, comments, orderId) => {
  const data = {
    score,
    comments
  }
  return fetchWithAccessToken(`/orders/${orderId}/record`, 'POST', data)
  .then(res => res.data)
  .catch(console.log)
}
