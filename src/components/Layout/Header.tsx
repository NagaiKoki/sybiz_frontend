import React from 'react'
import styled from 'styled-components'
// import styles
import { COLOR } from '../../../styles'

const Header: React.FC = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Title</Title>
      </TitleWrapper>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  height: 60px;
  box-shadow: ${COLOR.BOX_SHADOW_UNDER};
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 50%;
`

const Title = styled.h1`
`