import React from 'react'
import styled from 'styled-components'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import styles
import { COLOR } from '../../../../styles'

type Props = {
  text: string
  onClick: () => void
}

const TwitterButton: React.FC<Props> = props => {
  const { text, onClick } = props

  return (
    <Button onClick={onClick}>
      <Text>{text}</Text>
      <FontAwesomeIcon icon={faTwitter} size={'lg'} style={{ color: COLOR.WHITE_COLOR }} />
    </Button>
  )
}

export default TwitterButton

const Button = styled.button`
  border-radius: 4px;
  padding: 7px 15px;
  background: ${COLOR.TWITTER_COLOR};
`

const Text = styled.span`
  margin-right: 5px;
  color: ${COLOR.WHITE_COLOR};
  font-size: 16px;
  font-weight: bold;
`