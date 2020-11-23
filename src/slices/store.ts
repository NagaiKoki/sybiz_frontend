import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import slices
import uiSlice from './ui'
import authSlice from './auth'
import publicUserSlice from './public/user'
// import types
import { UiState } from '../types/ui'
import { AuthState } from '../types/auth'
import { PublicUserState } from '../types/public/user'
// import sagas
import rootSaga from '../sagas'

export interface AppState {
  ui: UiState
  auth: AuthState
  publicUser: PublicUserState
}

const rootReducer = combineReducers({
  ui: uiSlice.reducer,
  auth: authSlice.reducer,
  publicUser: publicUserSlice.reducer
})
const sagaMiddleware = createSagaMiddleware()

const middlewareList = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewareList,
  devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(rootSaga);

export default store