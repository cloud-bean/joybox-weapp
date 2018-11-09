'use strict'
import {fetchWithAccessToken} from './fetchKF'

export const getAllCourseList = function ({page, limit, lockType}) {
  console.log(page, limit, lockType)
  return fetchWithAccessToken(`/myCourses?page=${page}&limit=${limit}&lockType=${lockType}`, 'GET')
    .then(res => res.data.data)
    .catch(console.log)
}
