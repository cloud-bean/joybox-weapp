import { handleActions } from 'redux-actions'
import { SET_COURSES, RESET_COURSES } from '../types/course'

const initCourseState = {
  courses: [],
  fetching: false
}

export default handleActions({
  [SET_COURSES] (state, action) {
    console.log('SET_COURSE', action.payload)
    if (action.payload) {
      return {
        ...state,
        courses: action.payload,
        fetching: false
      }
    } else {
      return state
    }
  },
  [RESET_COURSES] (state) {
    return {
      ...state,
      courses: [],
      fetching: false
    }
  }
}, initCourseState)
