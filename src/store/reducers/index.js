import { combineReducers } from 'redux'
import counter from './counter'
import user from './user'
import root from './root'

export default combineReducers({
  counter,
  user,
  root
})
