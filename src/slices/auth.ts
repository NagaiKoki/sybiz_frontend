import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import types
import { AuthState, RequestSignInType } from '../types/auth'
// import constants
import { AUTH } from '../constants/sliceName'

const initialState: AuthState = {
  isLoggedIn: false,
  error: ''
}

const authSlice = createSlice({
  name: AUTH,
  initialState,
  reducers: {
    setLoginStatus: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isLoggedIn: action.payload
      }
    },
    requestSignIn: (state, action: PayloadAction<RequestSignInType>) => {
      return state
    },
    successSignIn: (state) => {
      return {
        ...state,
        isLoggedIn: true
      }
    },
    failureSignIn: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        error: action.payload
      }
    }
  }
})

export default authSlice

export const {
  setLoginStatus,
  requestSignIn,
  successSignIn,
  failureSignIn
} = authSlice.actions
