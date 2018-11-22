import { SET_USER_INFO, UPDATE_EXP_GOLD_AFTER_SUBMIT_ORDER } from '../types/user'

export const setUserInfo = function (userInfo) {
  return {
    type: SET_USER_INFO, payload: userInfo
  }
}

export const setExpGoldAfterSubmitOrder = function(payload) {
  return {
    type: UPDATE_EXP_GOLD_AFTER_SUBMIT_ORDER,
    payload
  }
}
