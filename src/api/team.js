import {fetchWithAccessToken} from './fetchKF'

// teams, get all the teams.
export const getAllTeams = () =>
  new Promise((resolve, reject) => {
    fetchWithAccessToken('/teams', 'get')
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })

// get the team
export const getTeam = (teamId) =>
  new Promise((resolve, reject) => {
    fetchWithAccessToken(`/teams/${teamId}`, 'get')
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })

// todo: get the teams which the user is in.
// todo: get the battle results of the team
