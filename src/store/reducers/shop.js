import { handleActions } from 'redux-actions'
import { GET_MY_BAG_CARDS, GET_ALL_GOODS, GET_MY_LOTTERYS, GET_CARD_POOLS } from '../types'

const initCardState = {
  myBagCards: [],
  totalCardsCount: 0,
  goods: [],
  totalGoodsCount: 0,
  myLotterys: [],
  cardPools: []
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
  },
  [GET_MY_LOTTERYS] (state, action) {
    console.log('GET_MY_LOTTERYS:', action)
    if (action.payload) {
      state.myLotterys = action.payload.lotterys
    }
    return state
  },
  [GET_CARD_POOLS] (state, action) {
    console.log('GET_CARD_POOLS:', action)
    if (action.payload) {
      state.cardPools = action.payload.cardPools
    }
    return state
  }
}, initCardState)
