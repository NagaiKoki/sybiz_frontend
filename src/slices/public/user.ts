import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import types
import { PublicUserState, PublicUserType } from '../../types/public/user'
// import constants
import { PUBLIC_USER } from '../../constants/sliceName'

const initialState: PublicUserState = {
  loginUser: null
}

const publicUserSlice = createSlice({
  name: PUBLIC_USER,
  initialState,
  reducers: {
    setLoginUser: (state, action: PayloadAction<PublicUserType>) => {
      return {
        ...state,
        loginUser: action.payload
      }
    }
  }
})

export default publicUserSlice

export const {
  setLoginUser
} = publicUserSlice.actions