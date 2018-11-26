import { SET_STORIES, SET_ACTIVE_STORY } from '../types/story'
import { createAction } from 'redux-actions'
import * as api from '../../api'

export const fetchStoriesAction = createAction(SET_STORIES, async (page, limit) => {
  const stories = await api.getStories(page, limit)
  return stories
})

export const setActiveStoryAction = createAction(SET_ACTIVE_STORY, (activeStory) => {
  return activeStory
})
