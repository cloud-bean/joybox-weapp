import { SET_TASKS } from '../types/task'
import { createAction } from 'redux-actions'
import { fetchTasks } from '../../api'
import { getStore } from 'wepy-redux'
import config from '../../config'

export const fetchTasksAction = createAction(SET_TASKS, () => {
  console.log('fetchTasksAction start.')
  let state = getStore().getState()
  let accessToken = state.root.accessToken
  return fetchTasks(1, config.task.limit, accessToken)
})
