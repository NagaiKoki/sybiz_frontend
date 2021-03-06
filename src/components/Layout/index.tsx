import React, { useEffect } from 'react'
import styled from 'styled-components'
// import components
import Header from './Header'
import Footer from './Footer'
import Modal from '../Auth/SignInModal'
// import utils
import { useSessionCheck } from '../../utils/hooks/session'
// import dispatchers
import { useAuthDispatchers } from '../../dispatchers/auth'
import { COLOR } from '../../../styles'

const Layout: React.FC = props => {
  const { children } = props
  const [isLoggedIn, isSessionChecked] = useSessionCheck()
  const { setLoginStatus } = useAuthDispatchers()

  useEffect(() => {
    setLoginStatus(isLoggedIn)
  }, [])

  if (!isSessionChecked) return <></>

  return (
    <Container>
      <Header />
      <Wrapper>
        <ContentWrapper>
          {children}
        </ContentWrapper>
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
  max-width: 600px;
  margin: 0 auto;
`

const ContentWrapper = styled.div`
  padding: 60px 0 30px;
  box-shadow: ${COLOR.BOX_SHADOW_SIDE};
`