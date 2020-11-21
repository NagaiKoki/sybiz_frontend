import React from 'react'
import styled from 'styled-components'
// import styles
import { COLOR, FONT_SIZE } from '../../../../styles'

type Props = {
  text: string
  size?: 'small' | 'medium' | 'large'
  icon?: string
  onClick: () => void
}

type ButtonStyles = {
  fontSize: string
  padding: string
}

const Button: React.FC<Props> = props => {
  const { text, size, onClick } = props

  const buttonStyles = (): ButtonStyles => {
    switch(size) {
      case 'small': {
        return {
          fontSize: FONT_SIZE.BASE_TEXT_SIZE,
          padding: '7px 15px'
        }
      }
      case 'medium': {
        return {
          fontSize: FONT_SIZE.FS_18,
          padding: '7px 25px'
        }
      }
      case 'large': {
        return {
          fontSize: FONT_SIZE.FS_20,
          padding: '7px 30px'
        }
      }
      default:
        return {
          fontSize: FONT_SIZE.BASE_TEXT_SIZE,
          padding: '7px 15px'
        }
    }
  }

  return (
    <Wrapper onClick={onClick} styles={buttonStyles()}>
      {text}
    </Wrapper>
  )
}

export default Button

const Wrapper = styled.button<{ styles: ButtonStyles }>`
  border-radius: 4px;
  color: ${COLOR.WHITE_COLOR};
  background: ${COLOR.MAIN_COLOR};
  font-size: ${props => props.styles.fontSize};
  font-weight: bold;
  text-align: center;
  padding: ${props => props.styles.padding};
  &:hover {
    opacity: 0.5;
  }
`

const Icon = styled.i``