import {fetchWithAccessToken, fetchWithAccessTokenV2} from './fetchKF'

<<<<<<< HEAD
=======
// update avatar
export const setMemberAvatar = (id, data) => fetchWithAccessToken(`/users/${id}/change/avatar`, 'put', data)

>>>>>>> fd759a8a153087a9d1a4b9402d4378405b1fe2d5
// mine, my bag
export const getAllMyCards = (page, limit) =>
  new Promise((resolve, reject) => {
<<<<<<< HEAD
    fetchWithAccessTokenV2('/myBag', 'get') // knapsack page --- 'GET /api/v2/myBag'
=======
    fetchWithAccessToken(`/myBag?page=${page}&limit=${limit}`, 'get') // knapsack page --- 'GET /api/v2/myBag'
>>>>>>> fd759a8a153087a9d1a4b9402d4378405b1fe2d5
      .then((result) => {
        if (result.data && (result.data.code === 'success')) {
          resolve(result.data.data)
        } else {
          resolve([])
        }
      })
      .catch((err) => {
        reject(err)
      })
  })

export const sellCard = data =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2('/sellCard', 'post', data) // sell card --- '/api/v2/saleCard'
      .then((result) => {
        if (result.data && (result.data.code === 'success')) {
          resolve(result.data.data)
        } else {
          resolve({})
        }
      })
      .catch((err) => {
        reject(err)
      })
  })

// keep data
export const getKeepData = () =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2('/keep', 'get') // knapsack page --- 'GET /api/v2/keep'
      .then((result) => {
        if (result.data && (result.data.code === 'success')) {
          resolve(result.data.data)
        } else {
          resolve({})
        }
      })
      .catch((err) => {
        reject(err)
      })
  })

<<<<<<< HEAD
// timeline data
export const getActivities = (page, limit) =>
  new Promise((resolve, reject) => {
    fetchWithAccessToken(`/timelines?page=${page}&limit=${limit}&sort=-created`, 'get')
      .then(result => {
        // if (result.data.code == 'success') {
        //   const activities = result.data.data;
        //   resolve(activities);
        // }
        resolve(result)
      })
      .catch(err => {
        reject(err)
      })
  })
=======

>>>>>>> fd759a8a153087a9d1a4b9402d4378405b1fe2d5

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
<<<<<<< HEAD
    fetchWithAccessToken(`/timelines/${id}/addMessage`, 'post', content)
=======
    fetchWithAccessToken(`/timelines/${id}/addMessage`, 'post', {
      content
    })
>>>>>>> fd759a8a153087a9d1a4b9402d4378405b1fe2d5
      .then(result => {
        if (result.data && (result.data.code === 'success')) {
          resolve(result.data.data)
        } else {
          resolve({})
        }
        resolve(result)
      })
      .catch(err => {
        reject(err)
      })
  })
