import { handleActions } from 'redux-actions'
import { GET_KEEP_INFO, GET_RANK } from '../types'

const initCardState = {
  keepInfo: {},
  myBagCards: [],
  totalCardsCount: 0,
  rank: {}
}
export default handleActions({
  [GET_KEEP_INFO] (state, action) {
    console.log('GET_KEEP_INFO', action.payload)
    if (action.payload) {
      state.keepInfo = action.payload
    }
    return state
  },
  [GET_RANK] (state, action) {
    console.log('GET_RANK', action.payload)
    if (action.payload) {
      state.rank = action.payload.rank
    }
    return state
  }
}, initCardState)
