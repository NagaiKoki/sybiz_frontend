import React from 'react'
import styled from 'styled-components'
// import styles
import { COLOR } from '../../../../styles'

type Props = {
  text: string
  onClick: () => void
}

const Button: React.FC<Props> = props => {
  const { text, onClick } = props

  return (
    <Wrapper>
      {text}
    </Wrapper>
  )
}

export default Button

const Wrapper = styled.button`
  border-radius: 4px;
  color: ${COLOR.WHITE_COLOR};
  background: ${COLOR.MAIN_COLOR};
  padding: 5px 13px;
  font-weight: bold;
  text-align: center;
  &:hover {
    opacity: 0.5;
  }
`