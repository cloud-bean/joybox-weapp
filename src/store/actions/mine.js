import { GET_KEEP_INFO } from '../types'
import { createAction } from 'redux-actions'
import * as api from '../../api'

export const getKeepInfo = createAction(GET_KEEP_INFO, async () => {
  return await api.getKeepData()
})
