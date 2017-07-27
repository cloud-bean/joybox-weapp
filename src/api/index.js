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
}

export const fetchTasks = function (page, limit, accessToken) {
  return wepy.request({
    url: `${config.server.bigServer}/tasks?page=${page}&limit=${limit}`,
    header: {
      'Authorization': `Bearer ${accessToken}`
    },
    method: 'GET'
  }).then(res => {
    console.log('result of fetch tasks', res)
    return res.data.data;
  })
}
