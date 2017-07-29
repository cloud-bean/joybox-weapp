import wepy from 'wepy'
import config from '../config'

export const signIn = function (email, password) {
  return wepy.request({
    url: config.server.authServer,
    data: {
      email,
      password
    },
    method: 'POST'
  }).then(res => res.data.data)
    .catch(console.log)
}

export * from './auth'
export * from './task'
export * from './user'
