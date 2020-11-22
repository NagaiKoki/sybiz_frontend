import React from 'react'
import styled from 'styled-components'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import styles
import { COLOR, FONT_SIZE } from '../../../../styles'

type Props = {
  onClick: () => void
}

const CloseButton: React.FC<Props> = props => {
  const { onClick } = props

  return (
    <Button onClick={onClick}>
      <Text>閉じる</Text>
      <FontAwesomeIcon icon={faWindowClose} style={{ color: COLOR.WHITE_COLOR }} />
    </Button>
  )
}

export default CloseButton

const Button = styled.button`
  position: absolute;
  top: -30px;
  right: 0px;
  color: ${COLOR.WHITE_COLOR};
`

const Text = styled.span`
  font-size: ${FONT_SIZE.BASE_TEXT_SIZE};
`