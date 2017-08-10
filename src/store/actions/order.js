import { SUBMIT_ORDER, GET_ORDERS, SET_ACTIVE_ORDER } from '../types'
import { createAction } from 'redux-actions'
import * as api from '../../api'

export const submitOrder = createAction(SUBMIT_ORDER, async ({taskId, serverId, type}) => {
  return await api.submitOrder(taskId, serverId, type)
})

export const getOrders = createAction(GET_ORDERS, async () => {
  return await api.getOrders()
})
export const setActiveOrderAction = createAction(SET_ACTIVE_ORDER, (activeOrder) => {
  return activeOrder
})
