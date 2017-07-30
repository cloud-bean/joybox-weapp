import { ASYNC_FETCH_USER, SET_USER_INFO } from '../types/user'
import { createAction } from 'redux-actions'
import { signIn } from '../../api'
import { getStore } from 'wepy-redux'

export const setUserInfo = function (userInfo) {
  return {
    type: SET_USER_INFO, payload: userInfo
  }
}
