import React from 'react'
import styled from 'styled-components'
// import styles
import { COLOR, FONT_SIZE } from '../../../../styles'

type Props = {
  text: string
  onClick: () => void
}

const Button: React.FC<Props> = props => {
  const { text, onClick } = props

  return (
    <Wrapper onClick={onClick}>
      {text}
    </Wrapper>
  )
}

export default Button

const Wrapper = styled.button`
  border-radius: 4px;
  color: ${COLOR.WHITE_COLOR};
  background: ${COLOR.MAIN_COLOR};
  font-size: ${FONT_SIZE.BASE_TEXT_SIZE};
  font-weight: bold;
  text-align: center;
  padding: 7px 15px;
  &:hover {
    opacity: 0.5;
  }
`