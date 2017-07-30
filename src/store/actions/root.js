import { SET_LOGIN } from '../types/root'
import { getStore } from 'wepy-redux'

export const setLogin = function (data) {
  return {
    type: SET_LOGIN,
    payload: data
  }
}

export const authLocal = function ({user_id, access_token}) {
  return {
    type: 'AUTH_CLIENT',
    payload: {
      userId: user_id,
      accessToken: access_token
    }
  }
}
