import React from 'react'
import styled from 'styled-components'
// import commponents
import Modal from '../common/Modal'
import TwitterButton from '../common/Button/TwitterButton'
// import selectors
import { useAuthModalOpen } from '../../selectors/ui'
// / import dispatchers
import { useUiDispatchers } from '../../dispatchers/ui'
import { useAuthDispatchers } from '../../dispatchers/auth'

const SignInModal: React.FC = props => {
  const authModalOpen = useAuthModalOpen()
  const { toggleAuthModalOpen } = useUiDispatchers()
  const { requestSignIn }  = useAuthDispatchers()

  const handleRequestTwitterSignIn = () => {
    requestSignIn({ type: 'twitter' })
  }

  return (
    authModalOpen &&
    <Modal onClose={toggleAuthModalOpen}>
      <Wrapper>
        <TwitterButton text="Twitterでログインする" onClick={handleRequestTwitterSignIn} />
      </Wrapper>
    </Modal>
  )
}

export default SignInModal

const Wrapper = styled.div``