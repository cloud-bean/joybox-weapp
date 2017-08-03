import { SET_LOGIN, AUTH_CLIENT, SET_WX_AUTH_IDS } from '../types/root'

export const setLogin = function (data) {
  return {
    type: SET_LOGIN,
    payload: data
  }
}

export const authClient = function ({user_id, access_token}) {
  return {
    type: AUTH_CLIENT,
    payload: {
      userId: user_id,
      accessToken: access_token
    }
  }
}

export const setWxAuthIds = function ({unionid, openid}) {
  return {
    type: SET_WX_AUTH_IDS,
    payload: {
      unionid,
      openid
    }
  }
}
