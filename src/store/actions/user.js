import { SET_USER_INFO, GET_USER_INFO } from '../types/user'
import { createAction } from 'redux-actions'
import * as api from '../../api'

export const setUserInfo = function (userInfo) {
  return {
    type: SET_USER_INFO, payload: userInfo
  }
}

export const getUserInfoAction = createAction(GET_USER_INFO, async (userId) => {
  return await api.fetchUserInfo(userId)
})
