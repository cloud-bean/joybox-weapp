import { SET_USER_INFO } from '../types/user'

export const setUserInfo = function (userInfo) {
  return {
    type: SET_USER_INFO, payload: userInfo
  }
}
