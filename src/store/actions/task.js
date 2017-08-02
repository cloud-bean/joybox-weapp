import { SET_TASKS, SET_ACTIVE_TASK, SET_ACTIVE_TASK_COMMENTS } from '../types/task'
import { createAction } from 'redux-actions'
import * as api from '../../api'

export const fetchTasksAction = createAction(SET_TASKS, async () => {
  const tasks = await api.getAllTaskList()
  return tasks
})
export const setActiveTasksAction = createAction(SET_ACTIVE_TASK, (activeTask) => {
  // const tasks = await getAllTaskList()
  return activeTask
})

export const getTaskComments = createAction(SET_ACTIVE_TASK_COMMENTS, async (taskId) => {
  const comments = await api.getTaskComments(taskId)
  return comments
})
