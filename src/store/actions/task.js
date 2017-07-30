import { SET_TASKS, SET_ACTIVE_TASK } from '../types/task'
import { createAction } from 'redux-actions'
import { getAllTaskList } from '../../api'

export const fetchTasksAction = createAction(SET_TASKS, () => {
  // const tasks = await getAllTaskList()
  return getAllTaskList()
})
export const setActiveTasksAction = createAction(SET_ACTIVE_TASK, (activeTask) => {
  // const tasks = await getAllTaskList()
  return activeTask
})
