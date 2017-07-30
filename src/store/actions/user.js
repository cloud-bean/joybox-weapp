import { ASYNC_FETCH_USER, SET_USER_INFO } from '../types/user'
import { createAction } from 'redux-actions'
import { signIn } from '../../api'
import { getStore } from 'wepy-redux'

export const asyncFetchUser = createAction(ASYNC_FETCH_USER, () => {
  let store = getStore()
  const state = store.getState()
  let email = state.root.email
  let password = state.root.password
  return signIn(email, password)
})

export const setUserInfo = function (userInfo) {
  getStore().dispatch({
    type: SET_USER_INFO, payload: userInfo
  })
}
