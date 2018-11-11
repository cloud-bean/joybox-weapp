import { handleActions } from 'redux-actions'
import { GET_KEEP_INFO, GET_MY_BAG_CARDS } from '../types'

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
  },
  [GET_MY_BAG_CARDS] (state, action) {
    console.log('GET_MY_BAG_CARDS', action, action.payload)
    if (action.payload) {
      state.myBagCards = action.payload.cards
    }
    return state
  }
}, initCardState)
