import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
// import slices
import { requestSignIn } from '../slices/auth'
// import types
import { RequestSignInType } from '../types/auth'

export const useRequestSignIn = () => {
  const dispatch = useDispatch()
  const _requestSignIn = useCallback((arg: RequestSignInType) => requestSignIn(arg), [dispatch])

  return {
    requestSignIn: _requestSignIn
  }
}