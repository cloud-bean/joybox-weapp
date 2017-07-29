import wepy from 'wepy'
import config from '../config'

// const signIn = function (email, password) {
//   return wepy.request({
//     url: config.server.authServer,
//     data: {
//       email,
//       password
//     },
//     method: 'POST'
//   }).then(res => res.data.data)
// }

const signUp = function (user) {
  return wepy.request({
    url: config.server.bigServer+'/users',
    data: {
      ...user
    },
    method: 'POST'
  }).then(res => res.data.data)
}

export default {
  signUp
}
