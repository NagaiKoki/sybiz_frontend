import React from 'react'
import styled from 'styled-components'
// import components
import Header from './Header'
import Footer from './Footer'
import Modal from '../Auth/SignInModal'

const Layout: React.FC = props => {
  const { children } = props

  return (
    <Container>
      <Header />
      <Wrapper>
        {children}
        <Footer />
      </Wrapper>
      <Modal />
    </Container>
  )
}

export default Layout

const Container = styled.div`
`

const Wrapper = styled.div`
  width: 40%;
  margin: 0 auto;
`