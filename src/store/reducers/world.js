import { handleActions } from 'redux-actions'
import { GET_DOCUMENTS, GET_TIMELINES, ADD_UPVOTE, ADD_MSG_TO_TIMELINE } from '../types'

const initCardState = {
  documents: [],
  timelines: [],
  totalDocumentCount: 0,
  totalTimelineCount: 0
}
export default handleActions({
  [GET_TIMELINES] (state, action) {
    console.log('GET_TIMELINES', action.payload)
    if (action.payload) {
      state.timelines = action.payload.timelines
      state.totalTimelineCount = action.payload.totalCount
    }
    return state
  },
  [GET_DOCUMENTS] (state, action) {
    console.log('GET_DOCUMENTS', action.payload)
    if (action.payload) {
      state.documents = action.payload.documents
      state.totalDocumentCount = action.payload.totalCount
    }
    return state
  },
  [ADD_UPVOTE]  (state, action) {
    console.log('ADD_UPVOTE', action.payload)
    return state
  },
  [ADD_MSG_TO_TIMELINE]  (state, action) {
    console.log('ADD_MSG_TO_TIMELINE', action.payload)
    return state
  }
}, initCardState)
