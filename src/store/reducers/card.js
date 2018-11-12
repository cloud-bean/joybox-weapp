import { handleActions } from 'redux-actions'
import { GET_CARDS, SUBMIT_CARD } from '../types'

const initCardState = {
  status: '',
  cards: [],
  totalCount: 0
}
export default handleActions({
  [SUBMIT_CARD] (state, action) {
    console.log('SUBMIT_CARD', action)
    if (action) {
      state.status = action.code
    }
    return state
  },
  [GET_CARDS] (state, action) {
    console.log('GET_CARDS', action)
    if (action.payload) {
      state.cards = action.payload.data
      state.totalCount = action.payload.totalCount
    }
    return state
  }
}, initCardState)
