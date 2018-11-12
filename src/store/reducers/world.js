import { handleActions } from 'redux-actions'
import { GET_DOCUMENTS, GET_TIMELINES } from '../types'

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
  }
}, initCardState)
