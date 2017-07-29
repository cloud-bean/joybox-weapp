import wepy from 'wepy'
import config from '../config'
import { getStore } from 'wepy-redux'

exports.fetchWithAccessToken = (url, method, data) => {
  let accessToken = getStore().getState().root.accessToken
  let fetchOption = {
    url: config.server.bigServerAPI + url,
    header: {
      'Authorization': `Bearer ${accessToken}`
    },
    method,
    data
  }
  console.log('fetchKF.fetchWithAccessToken with option:', fetchOption)
  return wepy.request(fetchOption)
}

exports.fetch = (url, method, data) => {
  let fetchOption = {
    url: config.server.bigServerAPI + url,
    method,
    data
  }
  console.log('fetchKF.fetch with option:', fetchOption)
  return wepy.request(fetchOption)
}
