import { useSelector } from 'react-redux'
// import types
import { AppState } from '../slices/store'

export const useSelectIsLoggedIn = () => {
  return useSelector<AppState, boolean>(state => state.auth.isLoggedIn)
}

export const useSelectAuthLoading = () => {
  return useSelector<AppState, boolean>(state => state.auth.isLoading)
}