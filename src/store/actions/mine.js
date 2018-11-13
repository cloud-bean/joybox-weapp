import { GET_KEEP_INFO, GET_RANK } from '../types'
import { createAction } from 'redux-actions'
import * as api from '../../api'

export const getKeepInfo = createAction(GET_KEEP_INFO, async () => {
  return await api.getKeepData()
})

export const getRank = createAction(GET_RANK, async () => {
  return await api.getCurrentUserRank()
})
