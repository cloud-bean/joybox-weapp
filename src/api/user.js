import {fetch, fetchWithAccessToken} from './fetchKF'
import wepy from 'wepy'
import config from '../config'

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

export const signUp = function ({providerData, phone, displayName}) {
  let userInfo = {
    option: {
      goldToken: 0,
      exp: 0,
      slogan: '',
      courses: [],
      phone
    },
    roleType: 'student',
    displayName,
    providerData
  }
  console.log(userInfo)
  return fetch('/users', 'POST', userInfo)
    .then(res => res.data.data)
    .catch(console.log)
}

export const login = async function() {
  try {
    const codeInfo = await wepy.login()
    const res = await wepy.request({
      url: config.server.midServer + '/weapp/getUserInfo',
      data: {
        code: codeInfo.code
      },
      method: 'POST'
    })
    if (res.data && res.data.code === 'success') {
      return res.data.data
    } else {
      console.log('bad code of response data:', res)
      return null
    }
  } catch (e) {
    console.log(e)
  }
}

export const getUserRecords = () => {
  return fetchWithAccessToken('/records/me', 'GET')
    .then(res => res.data.data)
    .catch(console.log)
}
