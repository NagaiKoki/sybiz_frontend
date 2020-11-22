import React from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'
import { COLOR } from '../../../../styles'
// import components
import CloseButton from './CloseButton'

type Props = {
  onClose: () => void
}

const modalElement = document.getElementById('create-modal-element') as Element;

const Modal: React.FC<Props> = props => {
  const { onClose, children } = props

  return (
    ReactDOM.createPortal(
      <Container>
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

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1501;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  border-radius: 8px;
  padding: 30px;
  background: ${COLOR.WHITE_COLOR};
`