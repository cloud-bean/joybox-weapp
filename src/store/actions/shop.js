import { GET_ALL_GOODS, GET_MY_BAG_CARDS, GET_MY_LOTTERYS, GET_CARD_POOLS } from '../types'
import { createAction } from 'redux-actions'
import * as api from '../../api'

export const getMyBagCards = createAction(GET_MY_BAG_CARDS, async (page, limit) => {
  return await api.getMyBagCards(page, limit)
})

export const getAllGoods = createAction(GET_ALL_GOODS, async (page, limit, option) => {
  return await api.getAllGoods(page, limit, option)
})

export const getMyLotterys = createAction(GET_MY_LOTTERYS, async () => {
  return await api.getMyLotterys()
})

export const getCardPools = createAction(GET_CARD_POOLS, async () => {
  return await api.getCardPools()
})
