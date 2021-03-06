import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
// import components
import { Overlay, Container } from '../Modal/Styles'

type Props = {
  width?: number
  height?: number
}

const OverlayLoading: React.FC<Props> = props => {
  const { width, height } = props

  return (
    <Container>
      <Overlay />
      <Image src="/loading.svg" width={width || 30} height={height || 30} />
    </Container>
  )
}

export default OverlayLoading