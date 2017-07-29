import {midServer} from '../config'
import wepy from 'wepy'

export const auth = (appid, code) => {
  return wepy.request({
    url: `${midServer}/admin/auth/`,
    data: {
      params: {
        appid,
        code
      }
    },
    method: 'GET'
  }).then(res => res.data)
    .catch(console.log)
}

export const authL = (appid, openid) => {
  return wepy.request({
    url: `${midServer}/admin/auth/authLocal/`,
    data: {
      params: {
        appid,
        openid
      }
    },
    method: 'GET'
  }).then(res => res.data)
    .catch(console.log)
}

export const getJsConfig = url => {
  return wepy.request({
    url: `${midServer}/admin/jssdk/`,
    data: {
      url
    },
    method: 'POST'
  }).then(res => res.data)
    .catch(console.log)
}
