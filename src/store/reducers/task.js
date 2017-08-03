import { handleActions } from 'redux-actions'
import { SET_TASKS, RESET_TASKS, SET_TASK_DONE_COUNT, SET_ACTIVE_TASK, SET_ACTIVE_TASK_COMMENTS, SHOW_TASK_DONE, SHOW_TASK_UNDONE} from '../types/task'

const initTaskState = {
  tasks: [],
  showTasks: [],
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
      const undoneTask = action.payload.tasks.filter((item) => {
        if (!item.isDone) return item
      })
      return {
        ...state,
        tasks: action.payload.tasks,
        showTasks: undoneTask,
        totalCount: action.payload.tasks.length,
        fetching: false
      }
    } else {
      return state
    }
  },
  [SET_ACTIVE_TASK] (state, action) {
    console.log('SET_ACTIVE_TASK', action.payload)
    return {
      ...state,
      activeTask: action.payload
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
  },
  [SET_ACTIVE_TASK_COMMENTS] (state, action) {
    return {
      ...state,
      activeTaskComments: action.payload
    }
  },
  [SHOW_TASK_DONE] (state) {
    state.showTasks = state.tasks.filter((item) => {
      if (item.isDone) return item
    })
    return state
  },
  [SHOW_TASK_UNDONE] (state) {
    state.showTasks = state.tasks.filter((item) => {
      if (!item.isDone) return item
    })
    return state
  }
}, initTaskState)
