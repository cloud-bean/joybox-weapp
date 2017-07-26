/**
 *
 * Created by hygkui on 2017/7/24
 */
import { ASYNC_FETCH_USER } from '../types/user'
import { createAction } from 'redux-actions'
import { signIn } from '../../api/user'
import { getStore } from 'wepy-redux'

export const asyncFetchUser = createAction(ASYNC_FETCH_USER, () => {
  let store = getStore()
  const state = store.getState()
  let email = state.root.email
  let password = state.root.password
  return signIn(email, password)
})
