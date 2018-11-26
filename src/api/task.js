import {fetchWithAccessToken, fetchWithAccessTokenV2} from './fetchKF'

export const getAllTaskList = function (page, limit) {
  return fetchWithAccessToken(`/allTasks?page=${page}&limit=${limit}`, 'GET')
    .then(res => res.data.data)
    .catch(console.log)
}

export const getTask = function (taskId) {
  return fetchWithAccessToken(`/tasks/${taskId}`, 'GET')
    .then(res => res.data.data)
    .catch(console.log)
}

export const getTaskOrders = function (taskId) {
  return fetchWithAccessToken(`/tasks/${taskId}/orders`, 'GET')
    .then(res => res.data.data)
    .catch(console.log)
}

export const getTaskList = state => {
  return fetchWithAccessToken(`/tasks?filter=${state}`, 'GET')
    .then(res => {
      return {
        tasks: res.data.data.tasks,
        taskQuantity: res.data.data.totalCount
      }
    })
    .catch(console.log)
}

export const getTaskDoneQuantity = () => {
  return fetchWithAccessToken('/records/doneCount', 'GET')
    .then(res => {
      return {
        taskDoneQuantity: res.data.data.doneCount
      }
    })
  .catch(console.log)
}

export const getTaskComments = taskId => {
  return fetchWithAccessToken(`/tasks/${taskId}/commits?limit=30`, 'GET')
    .then(res => res.data.data)
    .catch(console.log)
}

export const leaveComment = (content, taskId) => {
  return fetchWithAccessToken(`/tasks/${taskId}/commits`, 'POST')
    .then(res => res.data.data)
    .catch(console.log)
}

export const getDoneTasksCount = () =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2
      .get('/doneTasksCount') // 'GET /api/v2/userTaskInfo'
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })

export const bindUserInfo = data =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2('/bindCourse', 'post', data) // 'POST /bindCourse'
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })

export const getCourses = () =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2('/courses', 'get') // 'GET /api/v2/courses'
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })
