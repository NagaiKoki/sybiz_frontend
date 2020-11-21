import React from 'react'
import styled from 'styled-components'
// import components
import Header from './Header'

const Layout: React.FC = props => {
  const { children } = props
  return (
    <Container>
      <Header />
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  )
}

export default Layout

const Container = styled.div`
`

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
`