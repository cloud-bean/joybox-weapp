/**
 *
 * Created by hygkui on 2017/7/24
 */

import { handleActions } from 'redux-actions'
import { ASYNC_FETCH_USER } from '../types/user'

function level (exp) {
  return Math.round(exp / 200)
}

const baseOption = {
  slogan: 'Learning with joy, achieving with will.',
  exp: 0,
  goldToken: 0,
  level: 0,
  isLogged: false
}

const baseUserState = {
  displayName: 'unknown',
  profileImageURL: 'https://avatars3.githubusercontent.com/u/12526?v=4&s=460',
  option: baseOption
}
export default handleActions({
  [ASYNC_FETCH_USER] (state, action) {
    console.log('enter ASYNC_FETCH_USER', action)
    if (!action.payload) {
      return state
    } else {
      let updatedOption = baseOption
      if (action.payload && action.payload.option) {
        updatedOption.exp = action.payload.option.exp
        updatedOption.slogan = action.payload.option.slogan
        updatedOption.goldToken = action.payload.option.goldToken
        updatedOption.level = level(action.payload.option.exp)
      }
      return {
        ...state,
        displayName: action.payload.displayName || baseUserState.displayName,
        profileImageURL: action.payload.profileImageURL || baseUserState.profileImageURL,
        option: updatedOption,
        isLogged: true
      }
    }
  }
}, baseUserState)
