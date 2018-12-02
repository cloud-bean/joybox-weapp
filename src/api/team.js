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
        resolve(result.data.data)
      })
      .catch((err) => {
        reject(err)
      })
  })

// todo: get the teams which the user is in.
export const getMyTeams = () =>
  new Promise((resolve, reject) => {
    fetchWithAccessToken('/myTeams', 'get')
      .then((result) => {
        if (result.data && (result.data.code === 'success')) {
          resolve({
            myTeams: result.data.data
          })
        } else {
          resolve({
            myTeams: []
          })
        }
      })
      .catch((err) => {
        reject(err)
      })
  })

// todo: get the battle results of the team
