import { GET_NEWS } from '../types'
import { createAction } from 'redux-actions'
import * as api from '../../api'

export const getNews = createAction(GET_NEWS, async (page, limit) => {
  return await api.getNews(page, limit)
})
