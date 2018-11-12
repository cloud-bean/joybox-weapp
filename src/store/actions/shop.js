import { GET_ALL_GOODS, GET_MY_BAG_CARDS } from '../types'
import { createAction } from 'redux-actions'
import * as api from '../../api'

export const getMyBagCards = createAction(GET_MY_BAG_CARDS, async (page, limit) => {
  return await api.getMyBagCards(page, limit)
})

export const getAllGoods = createAction(GET_ALL_GOODS, async (page, limit, option) => {
  return await api.getAllGoods(page, limit, option)
})
