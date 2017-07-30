import { SET_TASKS } from '../types/task'
import { createAction } from 'redux-actions'
import { getAllTaskList } from '../../api'

export const fetchTasksAction = createAction(SET_TASKS, () => {
  console.log('fetchTasksAction start.')
  return getAllTaskList()
})
