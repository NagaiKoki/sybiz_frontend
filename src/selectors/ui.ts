import { useSelector } from 'react-redux'
// import types
import { AppState } from '../slices/store'

export const useAuthModalOpen = () => {
  return useSelector<AppState, boolean>(state => state.ui.authModalOpen)
}
