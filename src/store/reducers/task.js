import { handleActions } from 'redux-actions'
import { SET_TASKS, RESET_TASKS, SET_TASK_DONE_COUNT } from '../types/task'

const initTaskState = {
  tasks: [],
  totalCount: 0,
  totalDoneCount: 0,
  activeTask: {},
  activeTaskComments: [],
  fetching: false
}

export default handleActions({
  [SET_TASKS] (state, action) {
    console.log('SET_TASK', action.payload)
    if (action.payload) {
      return {
        ...state,
        tasks: action.payload.tasks,
        totalCount: action.payload.tasks.length,
        fetching: false
      }
    } else {
      return state
    }
  },
  [RESET_TASKS] (state) {
    return {
      ...state,
      tasks: [],
      fetching: false
    }
  },
  [SET_TASK_DONE_COUNT] (state, action) {
    if (action.payload) {
      return {
        ...state,
        totalDoneCount: action.payload.totalDoneCount
      }
    } else {
      return state
    }
  }
}, initTaskState)
