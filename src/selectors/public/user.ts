import { shallowEqual, useSelector } from 'react-redux'
// import types
import { AppState } from '../../slices/store'
import { PublicUserType } from '../../types/public/user'

export const useSelectLoginUser = () => {
  return useSelector<AppState, PublicUserType>(state => state.publicUser.loginUser, shallowEqual)
}