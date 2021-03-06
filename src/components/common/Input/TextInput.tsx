import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT_SIZE } from '../../../../styles'

type Props = {
  value: string
  placeholder?: string
  defaultValue?: string
  onChange: (value: string) => void
}

const TextInput: React.FC<Props> = props => {
  const { value, placeholder, defaultValue, onChange } = props

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <Input
      value={value}
      placeholder={placeholder || ""}
      onChange={handleOnChange}
    />
  )
}

export default TextInput

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${COLOR.BASE_BORDER_COLOR};
  width: 100%;
  padding: 10px;
  color: ${COLOR.BASE_TEXT};
  font-size: ${FONT_SIZE.BASE_TEXT_SIZE};

  &:hover {
   background: ${COLOR.MAIN_HOVER_COLOR};
  }

  &:focus {
    border-bottom: 1px solid ${COLOR.MAIN_COLOR};
  }
`