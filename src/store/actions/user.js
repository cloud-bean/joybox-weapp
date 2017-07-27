import { ASYNC_FETCH_USER } from '../types/user'
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

export const wechatSignIn = function () {

}
