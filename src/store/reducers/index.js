import { combineReducers } from 'redux'
import user from './user'
import root from './root'
import task from './task'

export default combineReducers({
  user,
  root,
  task
})
