import { handleActions } from 'redux-actions'
import { SET_STORIES, RESET_STORIES, SET_STORY_DONE_COUNT, SET_ACTIVE_STORY, SET_ACTIVE_STORY_COMMENTS, SHOW_STORY_DONE, SHOW_STORY_UNDONE } from '../types/story'

const initStoryState = {
  stories: [],
  showStories: [],
  totalCount: 0,
  totalDoneCount: 0,
  activeStory: null,
  activeStoryComments: [],
  fetching: false
}

export default handleActions({
  [SET_STORIES] (state, action) {
    console.log('SET_STORY', action.payload)
    if (action.payload) {
      const undoneStory = action.payload.filter((item) => {
        if (!item.isDone) return item
      })
      return {
        ...state,
        stories: action.payload,
        showStories: undoneStory,
        totalCount: action.payload.length,
        fetching: false
      }
    } else {
      return state
    }
  },
  [SET_ACTIVE_STORY] (state, action) {
    console.log('SET_ACTIVE_STORY', action.payload)
    return {
      ...state,
      activeStory: action.payload
    }
  },
  [RESET_STORIES] (state) {
    return {
      ...state,
      stories: [],
      fetching: false
    }
  },
  [SET_STORY_DONE_COUNT] (state, action) {
    if (action.payload) {
      return {
        ...state,
        totalDoneCount: action.payload.totalDoneCount
      }
    } else {
      return state
    }
  },
  [SET_ACTIVE_STORY_COMMENTS] (state, action) {
    return {
      ...state,
      activeStoryComments: action.payload
    }
  },
  [SHOW_STORY_DONE] (state) {
    state.showStories = state.stories.filter((item) => {
      if (item.isDone) return item
    })
    return state
  },
  [SHOW_STORY_UNDONE] (state) {
    state.showStories = state.stories.filter((item) => {
      if (!item.isDone) return item
    })
    return state
  }
}, initStoryState)
