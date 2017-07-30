import { SET_LOGIN } from '../types/root'
import { getStore } from 'wepy-redux'

export const setLogin = function (data) {
  return {
    type: SET_LOGIN,
    payload: data
  }
}

export const authLocal = function ({userId, accessToken}) {
  getStore().dispatch({
    type: 'AUTH_CLIENT',
    payload: {
      userId,
      accessToken
    }
  })
}
