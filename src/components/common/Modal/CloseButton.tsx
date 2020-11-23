import React from 'react'
import styled from 'styled-components'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
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
      <FontAwesomeIcon icon={faTimes} style={{ color: COLOR.WHITE_COLOR }} />
    </Button>
  )
}

export default CloseButton

const Button = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  top: -30px;
  right: 0px;
  color: ${COLOR.WHITE_COLOR};
  cursor: pointer;
`

const Text = styled.span`
  margin-right: 5px;
  font-size: ${FONT_SIZE.BASE_TEXT_SIZE};
`