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

export const signUp = function ({providerData, school, phone, slogan, displayName, profileImageURL}) {
  let userInfo = {
    option: {
      goldToken: 0,
      exp: 0,
      courses: [],
      phone,
      school,
      slogan
    },
    roleType: 'student',
    displayName,
    providerData,
    profileImageURL,
    provider: 'wechat'
  }
  console.log(userInfo)
  return fetch('/auth/signup', 'POST', userInfo)
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
    const unionid = res.data.unionid
    const openid = res.data.openid
    if (res.data && res.data.code === 'success') {
      return {...res.data.data, unionid, openid}
    } else {
      console.log('bad code of response data:', res)
      return { unionid, openid }
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
