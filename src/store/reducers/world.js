import { handleActions } from 'redux-actions'
import { GET_NEWS, SET_NEWS_PAGE_LIMIT } from '../types'

const initNewsState = {
  news: [],
  totalPage: 1,
  page: 1,
  limit: 2
}
export default handleActions({
  [GET_NEWS] (state, action) {
    console.log('GET_NEWS', action)
    if (action.payload) {
      state.news = action.payload.data
      state.totalPage = Math.ceil(action.payload.totalCount / state.limit) || 1
    }
    console.log('set world state', state)
    return state
  },
  [SET_NEWS_PAGE_LIMIT] (state, action) {
    console.log('enter into SET_NEWS_PAGE_LIMIT')
    state.page = action.payload.page
    state.limit = action.payload.limit
    return state
  }
}, initNewsState)
