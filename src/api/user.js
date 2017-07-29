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

const signUp = (user) => {
  return wepy.request({
    url: config.server.bigServer + '/users',
    data: {
      ...user
    },
    method: 'POST'
  }).then(res => res.data.data)
}
const getUnionId = async function() {
  try {
    const codeInfo = await wepy.login()
    const unionId = await wepy.request({
      url: config.server.midServer + '/weapp/getUserInfo',
      data: {
        code: codeInfo.code
      },
      method: 'POST'
    })
    return unionId
  } catch (e) {
    console.log(e)
  } 
}

export default {
  signUp,
  getUnionId
}
