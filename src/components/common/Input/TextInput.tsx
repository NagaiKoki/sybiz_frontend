import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../../../styles'

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
      defaultValue={defaultValue}
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

  &:hover {
   background: ${COLOR.MAIN_HOVER_COLOR};
  }
`