import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
// import slice
import { toggleAuthModalOpen } from '../slices/ui'

export const useUiDispatchers = () => {
  const dispatch = useDispatch()
  const _toggleAuthModalOpen = useCallback(() => dispatch(toggleAuthModalOpen()), [dispatch])

  return {
    toggleAuthModalOpen: _toggleAuthModalOpen
  }
}