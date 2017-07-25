/**
 *
 * Created by hygkui on 2017/7/24
 */
import { ASYNC_FETCH_USER } from '../types/user'
import { createAction } from 'redux-actions'

export const asyncFetchUser = createAction(ASYNC_FETCH_USER, () => {
  return new Promise(resolve => {
    let mockUserObj = {
      displayName: 'guokui',
      profileImageURL: 'https://baidu.png',
      option: {
        slogan: 'Learning with joy, achieving with will.',
        exp: 100,
        goldToken: 20,
        level: 1
      }
    }
    resolve(mockUserObj)
  })
})
