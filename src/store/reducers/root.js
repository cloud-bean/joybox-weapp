import { handleActions } from 'redux-actions'
import { SET_LOGIN, AUTH_CLIENT, SET_WX_AUTH_IDS } from '../types/root'

const initState = {
  email: '',
  password: '',
  userId: '',
  accessToken: '',
  wxCredits: {
    unionid: '',
    openid: ''
  }
}

export default handleActions({
  [SET_LOGIN] (state, action) {
    console.log('enter SET_LOGIN', action)
    if (action.payload) {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password
      }
    } else {
      return state
    }
  },
  [AUTH_CLIENT] (state, action) {
    console.log('Auth Client', action.payload)
    if (action.payload) {
      return {
        ...state,
        userId: action.payload.userId,
        accessToken: action.payload.accessToken
      }
    } else {
      return state
    }
  },
  [SET_WX_AUTH_IDS] (state, action) {
    if (action.payload) {
      return {
        ...state,
        wxCredits: action.payload
      }
    } else {
      return state
    }
  }
}, initState)
