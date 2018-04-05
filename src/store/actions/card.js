import { SUBMIT_CARD, GET_CARDS } from '../types'
import { createAction } from 'redux-actions'
import * as api from '../../api'

export const submitCard = createAction(SUBMIT_CARD, async (cardObj) => {
  return await api.submitCard(cardObj)
})

export const getCards = createAction(GET_CARDS, async (page, limit) => {
  return await api.getCards(page, limit)
})
