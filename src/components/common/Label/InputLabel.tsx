import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../../../styles'

type Props = {
  text: string
  fontSize?: number
}

const InputLabel: React.FC<Props> = props => {
  const { text, fontSize } = props

  return (
    <Label fontSize={fontSize || 16}>
      {text}
    </Label>
  )
}

export default InputLabel

const Label = styled.label<{ fontSize: number }>`
  color: ${COLOR.BASE_TEXT};
  font-size: ${props => `$${props.fontSize}px`};
  font-weight: bold;
`