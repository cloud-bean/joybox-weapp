import { handleActions } from 'redux-actions'
import { SET_LOGIN } from '../types/root'

const initState = {
  email: '',
  password: '',
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
  }
}, initState)
