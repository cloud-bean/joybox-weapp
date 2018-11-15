import { GET_TIMELINES, GET_DOCUMENTS, ADD_UPVOTE, ADD_MSG_TO_TIMELINE } from '../types'
import { createAction } from 'redux-actions'
import * as api from '../../api'

export const getTimelines = createAction(GET_TIMELINES, async (page, limit) => {
  return await api.getAllTimelines(page, limit)
})

export const getDocuments = createAction(GET_DOCUMENTS, async (page, limit) => {
  return await api.getAllDocuments(page, limit)
})

export const upVote = createAction(ADD_UPVOTE, async (id) => {
  return await api.upvoteActivity(id)
})

export const addMsg2Timeline = createAction(ADD_MSG_TO_TIMELINE, async (id, msg) => {
  return await api.addMsgToActivity(id, msg)
})
