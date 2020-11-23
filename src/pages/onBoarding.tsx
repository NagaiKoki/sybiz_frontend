import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { COLOR, FONT_SIZE } from '../../styles'

const OnBoardingPage: React.FC = props => {

  return (
    <Wrapper>
      <Title>フクギョウへようこそ！</Title>
      <ImageWrapper>
        <Image src="/onBoarding.png" width={200} height={180} />
      </ImageWrapper>
    </Wrapper>
  )
}

export default OnBoardingPage

const Wrapper = styled.div``

const Title = styled.h2`
  color: ${COLOR.BASE_TEXT};
  font-size: ${FONT_SIZE.FS_20};
  text-align: center;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`