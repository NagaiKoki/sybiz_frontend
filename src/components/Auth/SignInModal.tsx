import React from 'react'
import styled from 'styled-components'
// import commponents
import Modal from '../common/Modal'
import TwitterButton from '../common/Button/TwitterButton'
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
        <TwitterButton text="Twitterでログインする" onClick={() => {}} />
      </Wrapper>
    </Modal>
  )
}

export default SignInModal

const Wrapper = styled.div``