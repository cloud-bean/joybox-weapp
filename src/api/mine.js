import {fetchWithAccessToken, fetchWithAccessTokenV2} from './fetchKF'

// update avatar
export const setMemberAvatar = (id, data) => fetchWithAccessToken.put(`/users/${id}/change/avatar`, data)

// update user info
export const updateUserInfo = (userid, userInfo) =>
  new Promise((resolve, reject) => {
    fetchWithAccessToken
    .put(`/users/${userid}`, userInfo)
    .then(result => {
      resolve(result)
    })
    .catch(err => {
      reject(err)
    })
  })

// mine, my bag
export const getAllMyCards = () =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2
      .get('/myBag') // knapsack page --- 'GET /api/v2/myBag'
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })

export const sellCard = data =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2
      .post('/sellCard', data) // sell card --- '/api/v2/saleCard'
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })

// keep data
export const getKeepData = () =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2
      .get('/keep') // knapsack page --- 'GET /api/v2/keep'
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })

// timeline data
export const getActivities = (page, limit) =>
  new Promise((resolve, reject) => {
    fetchWithAccessToken
      .get(`/timelines?page=${page}&limit=${limit}&sort=-created`)
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

export const upvoteActivity = id =>
  new Promise((resolve, reject) => {
    fetchWithAccessToken
      .post(`/timelines/${id}/addUpVote`)
      .then(result => {
        // if (result.data.code == 'success') {
        //   const activity = result.data.data;
        //   resolve(activity)
        // }
        resolve(result)
      })
      .catch(err => {
        reject(err)
      })
  })

export const addMsgToActivity = (id, content) =>
  new Promise((resolve, reject) => {
    fetchWithAccessToken
      .post(`/timelines/${id}/addMessage`, {
        content
      })
      .then(result => {
        // if (result.data.code === 'success') {
        //   const activity = result.data.data
        //   resolve(activity)
        // }
        resolve(result)
      })
      .catch(err => {
        reject(err)
      })
  })
