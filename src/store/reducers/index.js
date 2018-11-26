import { combineReducers } from 'redux'
import user from './user'
import root from './root'
import task from './task'
import order from './order'
import card from './card'
import course from './course'
import mine from './mine'
import world from './world'
import shop from './shop'
import story from './story'

export default combineReducers({
  user,
  root,
  task,
  order,
  card,
  course,
  mine,
  world,
  shop,
  story
})
