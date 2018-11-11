import { GET_TIMELINES, GET_DOCUMENTS }  from '../types'
import { createAction } from 'redux-actions'
import * as api from '../../api'

export const getTimelines = createAction(GET_TIMELINES, async (page, limit) => {
  return await api.getAllTimelines(page, limit)
})

export const getDocuments = createAction(GET_DOCUMENTS, async (page, limit) => {
  return await api.getAllDocuments(page, limit)
})
