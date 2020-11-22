import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import slices
import uiSlice from './ui'
import authSlice from './auth'
// import types
import { UiState } from '../types/ui'
import { AuthState } from '../types/auth'

export interface AppState {
  ui: UiState
  auth: AuthState
}

const rootReducer = combineReducers({
  ui: uiSlice.reducer,
  auth: authSlice.reducer
})

const middlewareList = [...getDefaultMiddleware()];

const createStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production'
  })
}

export default createStore