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
  level: 0
}

const baseUserState = {
  displayName: '',
  profileImageURL: '',
  option: baseOption
}
export default handleActions({
  [ASYNC_FETCH_USER] (state, action) {
    let updatedOption = baseOption
    if (action.payload.option) {
      updatedOption.exp = action.payload.option.exp
      updatedOption.slogan = action.payload.option.slogan
      updatedOption.goldToken = action.payload.option.goldToken
      updatedOption.level = level(action.payload.option.exp)
    }
    return {
      ...state,
      displayName: action.payload.displayName || 'unknown',
      profileImageURL: action.payload.profileImageURL,
      option: updatedOption
    }
  }
}, baseUserState)
