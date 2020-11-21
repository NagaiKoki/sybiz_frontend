import React from 'react'
import styled from 'styled-components'

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Title>Title</Title>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  height: 60px;
  background: red;
`

const Title = styled.h1``