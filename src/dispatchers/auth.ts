import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
// import slices
import { setLoginStatus, requestSignIn } from '../slices/auth'
// import types
import { RequestSignInType } from '../types/auth'

export const useAuthDispatchers = () => {
  const dispatch = useDispatch()

  const _setLoginStatus = useCallback((isLoggedIn: boolean) => dispatch(setLoginStatus(isLoggedIn)), [dispatch])
  const _requestSignIn = useCallback((arg: RequestSignInType) => dispatch(requestSignIn(arg)), [dispatch])

  return {
    setLoginStatus: _setLoginStatus,
    requestSignIn: _requestSignIn
  }
}