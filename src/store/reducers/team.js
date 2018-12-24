import { handleActions } from 'redux-actions'
import { GET_MY_TEAMS } from '../types/team'

const initTeamState = {
  myTeams: []
}

export default handleActions({
  [GET_MY_TEAMS] (state, action) {
    console.log('GET_MY_TEAMS:', action)
    if (action.payload) {
      state.myTeams = action.payload.myTeams
    }
    return state
  }
}, initTeamState)
