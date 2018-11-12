import { handleActions } from 'redux-actions'
import { GET_KEEP_INFO } from '../types'

const initCardState = {
  keepInfo: {},
  myBagCards: [],
  totalCardsCount: 0
}
export default handleActions({
  [GET_KEEP_INFO] (state, action) {
    console.log('GET_KEEP_INFO', action)
    if (action.payload) {
      state.keepInfo = action.payload
    }
    return state
  }
}, initCardState)
