import React from 'react'
import * as ReactDOM from 'react-dom'
// import styles
import { Container, Wrapper, Overlay } from './Styles'
// import components
import CloseButton from './CloseButton'

type Props = {
  onClose: () => void
}

const Modal: React.FC<Props> = props => {
  const modalElement = document.getElementById('create-modal-element') as Element;
  const { onClose, children } = props

  return (
    ReactDOM.createPortal(
      <Container>
        <Overlay onClick={onClose} />
        <Wrapper>
          <CloseButton onClick={onClose} />
          {children}
        </Wrapper>
      </Container>
      ,modalElement
    )
  )
}

export default Modal