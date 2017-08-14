import {fetchWithAccessToken} from './fetchKF'

export const getAllTaskList = function (page, limit) {
  return fetchWithAccessToken(`/tasks?page=${page}&limit=${limit}`, 'GET')
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
