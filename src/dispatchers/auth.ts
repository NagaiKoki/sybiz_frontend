import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
// import slices
import { requestSignIn } from '../slices/auth'
// import types
import { RequestSignInType } from '../types/auth'

export const useAuthDispatchers = () => {
  const dispatch = useDispatch()
  const _requestSignIn = useCallback((arg: RequestSignInType) => dispatch(requestSignIn(arg)), [dispatch])

  return {
    requestSignIn: _requestSignIn
  }
}