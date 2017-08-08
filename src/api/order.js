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
