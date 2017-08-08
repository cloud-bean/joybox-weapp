import { handleActions } from 'redux-actions'
import { SUBMIT_ORDER } from '../types'

const initOrderState = {
  status: ''
}
export default handleActions({
  [SUBMIT_ORDER] (state, payload) {
    console.log('SUBMIT_ORDER', payload)
    if (payload) {
      state.status = payload.code
    }
    return state
  }
}, initOrderState)
