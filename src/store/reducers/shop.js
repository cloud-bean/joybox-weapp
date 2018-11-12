import { handleActions } from 'redux-actions'
import { GET_MY_BAG_CARDS, GET_ALL_GOODS } from '../types'

const initCardState = {
  myBagCards: [],
  totalCardsCount: 0,
  goods: [],
  totalGoodsCount: 0
}
export default handleActions({
  [GET_MY_BAG_CARDS] (state, action) {
    console.log('GET_MY_BAG_CARDS', action.payload)
    if (action.payload) {
      state.myBagCards = action.payload.cards
      state.totalCardsCount = action.payload.totalCount
    }
    return state
  },
  [GET_ALL_GOODS] (state, action) {
    console.log('GET_ALL_GOODS', action.payload)
    if (action.payload) {
      state.goods = action.payload.goods
      state.totalGoodsCount = action.payload.totalCount
    }
    return state
  }
}, initCardState)
