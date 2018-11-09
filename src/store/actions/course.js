import { SET_COURSES } from '../types/course'
import { createAction } from 'redux-actions'
import * as api from '../../api'

const defaultPage = 1
const defaultLimit = 15

export const fetchCoursesAction = createAction(SET_COURSES, async (lockType) => {
  var option = {
    page: defaultPage,
    limit: defaultLimit,
    lockType: lockType || 'story'
  }
  const courses = await api.getAllCourseList(option)
  return courses
})
