import { handleActions } from 'redux-actions'
import { SUBMIT_ORDER, GET_ORDERS, SET_ACTIVE_ORDER } from '../types'

const initOrderState = {
  status: '',
  orders: [],
  activeOrder: {}
}
export default handleActions({
  [SUBMIT_ORDER] (state, action) {
    console.log('SUBMIT_ORDER', action)
    if (action) {
      state.status = action.code
    }
    return state
  },
  [GET_ORDERS] (state, action) {
    console.log('GET_ORDERS', action)
    if (action.payload) {
      state.orders = action.payload.data
    }
    return state
  },
  [SET_ACTIVE_ORDER] (state, action) {
    console.log('SET_ACTIVE_ORDER', action)
    return {
      ...state,
      activeOrder: action.payload
    }
  }
}, initOrderState)
