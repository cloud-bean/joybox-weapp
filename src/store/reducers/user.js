/**
 *
 * Created by hygkui on 2017/7/24
 */

import { handleActions } from 'redux-actions'
import { SET_USER_INFO, GET_USER_INFO, UPDATE_EXP_GOLD_AFTER_SUBMIT_ORDER } from '../types/user'

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
  profileImageURL: '../../assets/images/avatar.png',
  option: baseOption,
  provider: '',
  providerData: {}
}
export default handleActions({
  [SET_USER_INFO] (state, action) {
    console.log('enter SET_USER_INFO', action)
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
        isLogged: true,
        provider: action.payload.provider,
        providerData: action.payload.providerData,
        created: action.payload.created
      }
    }
  },
  [GET_USER_INFO] (state, action) {
    console.log('GET_USER_INFO', action.payload)
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
        isLogged: true,
        provider: action.payload.provider,
        providerData: action.payload.providerData,
        created: action.payload.created
      }
    }
  },
  [UPDATE_EXP_GOLD_AFTER_SUBMIT_ORDER] (state, action) {
    console.log('enter UPDATE_EXP_GOLD_AFTER_SUBMIT_ORDER', action)
    if (action.payload) {
      state.option.exp += parseInt(action.payload.exp, 10)
      state.option.goldToken += parseInt(action.payload.goldToken, 10)
    }
    return state
  }
}, baseUserState)
