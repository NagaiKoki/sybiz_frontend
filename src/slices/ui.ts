import { createSlice } from '@reduxjs/toolkit'
// import types
import { UiState } from '../types/ui'
// import constants
import { UI } from '../constants/sliceName'

const initialState: UiState = {
  authModalOpen: false
}

const uiSlice = createSlice({
  name: UI,
  initialState: initialState,
  reducers: {
    toggleAuthModalOpen: (state) => {
      return {
        ...state,
        authModalOpen: !state.authModalOpen
      }
    }
  }
})

export default uiSlice

export const {
  toggleAuthModalOpen
} = uiSlice.actions