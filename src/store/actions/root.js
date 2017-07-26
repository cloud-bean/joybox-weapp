/**
 *
 * Created by hygkui on 2017/7/24
 */
import { SET_LOGIN } from '../types/root'

export const setLogin = function (data) {
  return {
    type: SET_LOGIN,
    payload: data
  }
}
