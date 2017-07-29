import {fetch, fetchWithAccessToken} from './fetchKF'

export const fetchUserInfo = function (userId) {
  return fetchWithAccessToken(`/users/${userId}`, 'GET')
    .then(res => res.data.data)
    .catch(console.log)
}

export const updateUserInfo = function (userId, userInfo) {
  return fetchWithAccessToken(`/users/${userId}`, 'PUT', userInfo)
    .then(res => res.data.data)
    .catch(console.log)
}

export const signUp = function (providerData, phone, displayName) {
  let userInfo = {
    option: {
      goldToken: 0,
      exp: 0,
      slogan: '',
      courses: [],
      phone
    },
    displayName,
    providerData
  }
  return fetch('/users', 'POST', userInfo)
    .then(res => res.data.data)
    .catch(console.log)
}

export const getUserRecords = () => {
  return fetchWithAccessToken('/records/me', 'GET')
    .then(res => res.data.data)
    .catch(console.log)
}
