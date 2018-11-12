import { GET_KEEP_INFO, GET_MY_BAG_CARDS } from '../types'
import { createAction } from 'redux-actions'
import * as api from '../../api'

export const getKeepInfo = createAction(GET_KEEP_INFO, async () => {
  return await api.getKeepData()
})

export const getMyBagCards = createAction(GET_MY_BAG_CARDS, async (page, limit) => {
  return await api.getAllMyCards(page, limit)
})
