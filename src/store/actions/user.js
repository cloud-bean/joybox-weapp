import { SET_USER_INFO, GET_USER_INFO, UPDATE_EXP_GOLD_AFTER_SUBMIT_ORDER } from '../types/user'
import { createAction } from 'redux-actions'
import * as api from '../../api'

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

export const getUserInfoAction = createAction(GET_USER_INFO, async (userId) => {
  return await api.fetchUserInfo(userId)
})
