import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import slices
import uiSlice from './ui'
// import types
import { UiState } from '../types/ui'

export interface AppState {
  ui: UiState
}

const rootReducer = combineReducers({
  ui: uiSlice.reducer
})

const middlewareList = [...getDefaultMiddleware()];

export const createStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production'
  })
}