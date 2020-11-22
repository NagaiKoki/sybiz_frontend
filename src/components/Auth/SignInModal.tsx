import React from 'react'
import styled from 'styled-components'
// import commponents
import Modal from '../common/Modal'
// import selectors
import { useAuthModalOpen } from '../../selectors/ui'
// / import dispatchers
import { useUiDispatchers } from '../../dispatchers/ui'

const SignInModal: React.FC = props => {
  const authModalOpen = useAuthModalOpen()
  const { toggleAuthModalOpen } = useUiDispatchers()

  return (
    authModalOpen &&
    <Modal onClose={toggleAuthModalOpen}>
      <Wrapper>
        Twitterでログインする
      </Wrapper>
    </Modal>
  )
}

export default SignInModal

const Wrapper = styled.div``