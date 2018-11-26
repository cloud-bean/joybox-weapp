import { SET_TASKS, SET_ACTIVE_TASK, SET_ACTIVE_TASK_COMMENTS, SET_ACTIVE_TASK_ORDERS, SHOW_TASK_DONE, SHOW_TASK_UNDONE } from '../types/task'
import { createAction } from 'redux-actions'
import * as api from '../../api'
import task from '../reducers/task'

const defaultPage = 1
const defaultLimit = 15

export const fetchTasksAction = createAction(SET_TASKS, async () => {
  const tasks = await api.getAllTaskList(defaultPage, defaultLimit)
  return tasks
})
export const showTaskDone = createAction(SHOW_TASK_DONE)
export const showTaskUnDone = createAction(SHOW_TASK_UNDONE)
export const setActiveTasksAction = createAction(SET_ACTIVE_TASK, (activeTask) => {
  // const tasks = await getAllTaskList()
  return activeTask
})

export const getTaskComments = createAction(SET_ACTIVE_TASK_COMMENTS, async (taskId) => {
  const comments = await api.getTaskComments(taskId)
  return comments
})

export const getTaskOrdersAction = createAction(SET_ACTIVE_TASK_ORDERS, async (taskId) => {
  return await api.getTaskOrders(taskId)
})
