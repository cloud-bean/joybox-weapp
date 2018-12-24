import { GET_MY_TEAMS } from '../types'
import { createAction } from 'redux-actions'
import * as api from '../../api'

export const getMyTeamsAction = createAction(GET_MY_TEAMS, async () => {
  return await api.getMyTeams()
})
