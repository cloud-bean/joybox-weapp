import { SUBMIT_ORDER } from '../types'
import { createAction } from 'redux-actions'
import * as api from '../../api'

export const submitOrder = createAction(SUBMIT_ORDER, async ({taskId, serverId, type}) => {
  return await api.submitOrder(taskId, serverId, type)
})
