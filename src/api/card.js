import {fetchWithAccessToken} from './fetchKF'

export const submitCard = (data) => {
  // let data = {
  //   task: taskId,
  //   file: {
  //     filename: serverId,
  //     URL: serverId,
  //     type, // 0: image; 1: audio; 2: video
  //     created: Date.now()
  //   }
  // }
  return fetchWithAccessToken('/cards', 'POST', data)
    .then(res => res.data)
    .catch(console.log)
}

export const getCards = (page, limit) => {
  return fetchWithAccessToken(`/cards?page=${page}&limit=${limit}`, 'GET') // 默认20，不够用
  .then(res => res.data)
  .catch(console.log)
}
